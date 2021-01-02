import { useEffect, useState } from 'react'
import './App.css';
import { Cards, Chart, Header, CountryPicker } from './Components'
import { fecthData, countriesData } from './API'






function App() {
  
  // STATE FOR ALL DATA
  const [state, setState] = useState({})
  
  //STATE FOR ALL COUNTRIES
  const [countries, setCountries] = useState([])

  
  useEffect(() => {
    // SET STATES VALUE GETTING FROM API
    const data = async () => {
      const fetchedData = await fecthData()
      setState(fetchedData)
    }

    //FETCH ALL COUNTRIES
    const fetchCountries = async () => {     
      setCountries(await countriesData())
    }

    //INVOKING FUNCTIONS
    fetchCountries();
    data()

  }, [])

  // GETTING DATA OF SPECIFIC COUNTRY
  const countryChangeHandler = async (country) =>{
    const fetchedData = await fecthData(country)
    setState(fetchedData)
  }

  return (
    <div>
      <div  >
        <Header />
        <CountryPicker countries={countries} onchange={countryChangeHandler} />
        <Cards data={state} />

        {/* <Footer /> */}
        <Chart />
      </div>
    </div>
  );
}

export default App;
