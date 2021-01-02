import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
import { fetchDailyData } from '../../API'
import Styles from './chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDailyData()
      setDailyData(data)
      
    }
    fetchData()
  }, [])

  // console.log(dailyData)

  const data = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        label: 'Total Confirmed',
        backgroundColor: 'rgba(0,0,255,0.2)',
        borderColor: 'rgba(255,0,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: dailyData.map(({confirmed})=>confirmed)
      },
      {
        label: 'Total Deaths',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: dailyData.map(({deaths})=>deaths)
      }
    ]
  };



  return (
    <div className={Styles.container}>
      {/* <Grid> */}
        {/* <Grid item xs={12} > */}
         
          <Line
            data={data}
            width={900}
            height={50}
            options={{
              maintainAspectRatio: false,
              responsive: true
            }}
          />
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}
export default Chart;