
// import './App.css';
// import CarIndex from './car/CarIndex';
// import CarList from './car/CarList';
// import AddCarForm from './car/addCarForm';
// import carsData from './data/carsData';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //   {/* <div className="index-page">
//     //   <h1>Car Marketplace</h1> */}
      
//     //   <Router>
//     //         <Routes>
//     //             <Route path="/" element={<CarIndex />} />
//     //             <Route path="/add-car" element={<AddCarForm />} />
//     //         </Routes>
//     //     </Router>
//     //   {/* <CarList cars={carsData} /> */}
      
//     // {/* </div> */}
        
        
         
//     //   </header>
//     // </div>


    
//       <Router>
//             <Routes>
//                 <Route path="/" element={<CarList />} />
//                 <Route path="/add-car" element={<AddCarForm />} />
//             </Routes>
//         </Router>
    
//   );
// }

// export default App;



import './App.css';
import CarIndex from './car/CarIndex';
import CarList from './car/CarList';
import AddCarForm from './car/AddCarForm';
import carsData from './data/carsData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditCarForm from './car/EditCarForm';
import CarDetail from './car/CarDetail';
import Contact from './pages/Contact';
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CarDealership</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <div className="App">
        <header className="App-header">
        
          <Routes>
            <Route path="/" element={<CarList cars={carsData} />} />
            <Route path="/add-car" element={<AddCarForm />} />
            <Route path="/edit-car/:id" element={<EditCarForm />} />
            <Route path="/car/detail/:id" element={<CarDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
      <footer className="bg-dark text-white text-center p-4">
            <div className="container">
                <p>&copy; Všetky práva vyhradené, Marek, Car Dealership</p>
                <p>
                    <FaMobileAlt /> +421 123 456 789 | <FaEnvelope /> info@cardealership.com
                </p>
            </div>
        </footer>
    </Router>
  );
}

export default App;
