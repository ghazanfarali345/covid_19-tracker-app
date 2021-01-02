// import React from 'react'
// import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fecthData = async () => {
    try{
         return await (await fetch(url)).json()
    }
    catch{
        console.log('Something went wrong in fectdata function')
    }
}

export const fetchDailyData =async () =>{
    // const data = await  axios.get(`${url}/daily`)
    try {
        const data = await (await fetch(`${url}/daily`)).json()
    const modifiedData = (data.slice(0,50).map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate

    })))
    return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const  countriesData = async() => {
try {
    const data = await(await fetch(`${url}/countries`).json())
    console.log(data)
} catch (error) {
    console.log(error)
}
}