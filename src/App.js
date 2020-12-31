import './App.css';
import { Cards, Chart, Header } from './Components'
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Cards />
        <Chart />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
