import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarList from './car/CarList';
import AddCarForm from './car/AddCarForm';
import EditCarForm from './car/EditCarForm';
import CarDetail from './car/CarDetail';
import Contact from './pages/Contact';
import LoginPage from './components/LoginPage';
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import RegisterPage from './components/RegisterPage';
import { useState } from 'react';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  


  const handleLogout = () => {

   
    setIsLoggedIn(false);
    
    
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CarDealership</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              )}
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
            <Route path="/" element={<CarList />} />
            <Route path="/add-car" element={<AddCarForm />} />
            <Route path="/edit-car/:id" element={<EditCarForm />} />
            <Route path="/car/detail/:id" element={<CarDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterPage />} />
            

            
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










