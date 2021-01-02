import {useEffect, useState} from 'react'
import './App.css';
import { Cards, Chart, Header, CountryPicker } from './Components'
import {fecthData} from './API'






function App() {
  const [state, setState] = useState({})

  useEffect(() => { 
    const data = async()=>{
      const fetchedData = await fecthData()
      // console.log(fetchedData)
      setState(fetchedData)
    }

    data()
  }, [])
  // console.log(state)
 



  return (
    <div>
      <div  >
      <Header />
        <CountryPicker/>
        <Cards data={state} />
      
        {/* <Footer /> */}
        <Chart />
      </div>
    </div>
  );
}

export default App;
