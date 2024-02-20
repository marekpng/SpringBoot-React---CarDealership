import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';
import Car from './Car';
import CarDetail from './CarDetail';
import './../styles/CarList.css'
import EditCarForm from './EditCarForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CarList = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const [cars, setCars] = useState([]);

    const handleCarClick = (car) => {
      setSelectedCar(car === selectedCar ? null : car);
    };

    const navigate = useNavigate()

    const handleAddCarClick = () => {
        navigate('/add-car'); // Presmerovanie na URL pre formulár na pridanie auta
    };

    const handleEditCar = async (carId, formData) => {
      try {
          await axios.put(`http://localhost:8080/api/car/${carId}`, formData);
          // Po úspešnom editovaní auta môžete aktualizovať zoznam automobilov alebo vykonať iné operácie
      } catch (error) {
          console.error('Error editing car:', error);
      }
    };

    const handleDeleteCar = async (carId) => {
      const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
      if (isConfirmed) {
          try {
              await axios.delete(`http://localhost:8080/api/car/${carId}`);
              // Vymazanie auta zobrazeného na stránke alebo aktualizácia zoznamu
              setCars(cars.filter(car => car.id !== carId));
              alert('Auto bolo úspešne odstránené.');
          } catch (error) {
              console.error('Chyba pri odstraňovaní auta:', error);
          }
      }
  };
  

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:8080/api/cars');
              setCars(response.data);
          } catch (error) {
              console.error('Error fetching cars:', error);
          }
      };

      fetchData();
  }, []); // Táto funkcia sa spustí iba raz pri načítaní komponentu



    return (
      // <>
      //   <div className="car-list">
      //     {cars.map((car, index) => (
      //       <div key={index} className="car-box" onClick={() => handleCarClick(car)}>
      //         <Link to={`/car/detail/${car.id}`}>
      //           <img src={car.image} alt={car.brand} className="car-image" />
      //           <div className="car-info">
      //             <h2>{car.brand} {car.model}</h2>
      //             <p>Price: {car.price}</p>
      //             <p>Year: {car.year}</p>
      //           </div>
      //         </Link>
      //             <button className='btn btn-primary custom-link'><Link className='custom-link-text' to={`/edit-car/${car.id}`}>Edit Car</Link></button>
      //             <button  className='btn btn-danger' onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
      //         {selectedCar === car && (
      //           <div className="car-details">
      //             <p>{car.description}</p>
      //           </div>
      //         )}
      //       </div>
      //     ))}
      //   </div>
      //     <button className='add-car-button' onClick={handleAddCarClick}>Pridať auto</button>
      // </>




      <div className="container">
            <div className="row">
                {cars.map((car, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <Link to={`/car/detail/${car.id}`}>
                                <img src={car.image} alt={car.brand} className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title">{car.brand} {car.model}</h2>
                                    <p className="card-text">Price: {car.price}</p>
                                    <p className="card-text">Year: {car.year}</p>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <button className="btn btn-primary"><Link to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
                                <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
        </div>


    );
  };
  
  export default CarList;
