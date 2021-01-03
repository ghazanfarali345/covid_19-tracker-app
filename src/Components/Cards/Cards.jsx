import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000, 
    margin: '10px auto'
    
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards({ data:{data,country} }) {
  // console.log(data,country,'data')
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {data ? <Grid container spacing={3}>
        {Object.keys(data).slice(0,3).map((keys, i) => {          
          return (
          <Grid key={i}  item xs={12} sm={4}>
            <Paper elevation={3} className={classes.paper}>
                <h3>{keys.toLocaleUpperCase()}</h3>
                <h3><CountUp
                statr={0}
                end={data[keys]['value']}
                duration={2.5}
                separator=','
                /></h3> 
              </Paper>
          </Grid>
          )
        })}
      </Grid> : null}
      
    </div>
  );
}
