import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
import { fetchDailyData } from '../../API'
import Styles from './chart.module.css'

const Chart = ({dataProp:{data, country}}) => {
  const [dailyData, setDailyData] = useState([])
  // const [gh, setGh] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchDailyData()
      setDailyData(fetchedData)
      
    }

    fetchData()
  }, [])

  

  const lineChart = {
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

  const barChart = {
    labels:['confirmed', 'recovered' , 'deaths'],
    datasets:[{
      label:'a',
      backgroundColor:'red',
      data: data ? [data.confirmed.value] : null
    },
    {
      label:'b',
      backgroundColor:'green',
      data: data ? [data.recovered.value] : null
    },
    {
      label:'c',
      backgroundColor:'blue',
      data: data ? [data.deaths.value] : null
    }]
  }



  return (
    <div className={Styles.container}>
         {!country ?  
          <Line
            data={lineChart}
            width={900}
            height={50}
            options={{
              maintainAspectRatio: false,
              // responsive: true
            }}
          />
        : <Bar
            data={barChart}
            // width={900}
            height={50}
            options={{
              maintainAspectRatio: false,
              fill :true
            }}
          />
        }
   
    </div>
  );
}
export default Chart;