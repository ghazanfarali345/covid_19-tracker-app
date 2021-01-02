const url = 'https://covid19.mathdro.id/api'

export const fecthData = async (countries) => {
    let changeAbleUrl = url
    if(countries){
        changeAbleUrl = `${url}/countries/${countries}`
    }
    console.log(countries,'getCountry')
    try {
        return await (await fetch(changeAbleUrl)).json()
    }
    catch(error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const data = await (await fetch(`${url}/daily`)).json()
        const modifiedData = (data.slice(0, 50).map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate

        })))
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const countriesData = async () => {
    try {
        const { countries } = await (await fetch(`${url}/countries`)).json()
        return  countries.map((data)=>data.name)
    } catch (error) {
        console.log(error)
    }
}