
import './App.css';
import CarIndex from './car/CarIndex';
import CarList from './car/CarList';
import carsData from './data/carsData';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      {/* <div className="index-page">
      <h1>Car Marketplace</h1> */}
      <CarIndex />
      {/* <CarList cars={carsData} /> */}
      
    {/* </div> */}
        
        
         
      </header>
    </div>
  );
}

export default App;
