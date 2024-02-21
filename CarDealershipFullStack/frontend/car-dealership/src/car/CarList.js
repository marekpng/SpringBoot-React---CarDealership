import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom';

import './../styles/CarList.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CarList = () => {
    // const [selectedCar, setSelectedCar] = useState(null);
    const [cars, setCars] = useState([]);

    // const handleCarClick = (car) => {
    //   setSelectedCar(car === selectedCar ? null : car);
    // };

    const navigate = useNavigate()

    const handleAddCarClick = () => {
        navigate('/add-car'); 
    };

    // const handleEditCar = async (carId, formData) => {
    //   try {
    //       await axios.put(`http://localhost:8080/api/car/${carId}`, formData);
          
    //   } catch (error) {
    //       console.error('Error editing car:', error);
    //   }
    // };

    const handleDeleteCar = async (carId) => {
      const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
      if (isConfirmed) {
          try {
              await axios.delete(`http://localhost:8080/api/car/${carId}`);
              
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
  }, []); 



    return (
   
      <div className="container">
            <div className="row">
                {cars.map((car, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <Link style={{ textDecoration: 'none', color:'black'}} to={`/car/detail/${car.id}`}>
                                <img src={car.image} alt={car.brand} className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title" >{car.brand} {car.model}</h2>
                                    <p className="card-text">Price: {car.price}</p>
                                    <p className="card-text" >Year: {car.year}</p>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color:'black'}} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
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
