import React from 'react';
import {Bar} from 'react-chartjs-2';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:'85%',
      minWidth:'50%',
      margin:'0 auto'
    },
  }));
 const Chart = () => {
     const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid>
          <Grid item xs={12} >
          <h2>Bar Example (custom size)</h2>
          <Bar
            data={data}
            width={900}
            height={50}
            options={{
              maintainAspectRatio: false,
              responsive:'responsive'

            }}
          />
          </Grid>
          </Grid>
        </div>
      );
}
export default Chart;