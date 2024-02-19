import React, { useState } from 'react';
import Car from './Car';
import CarDetail from './CarDetail';
import './../styles/CarList.css'

const CarList = ({ cars }) => {
    const [selectedCar, setSelectedCar] = useState(null);
  
    const handleCarClick = (car) => {
      setSelectedCar(car === selectedCar ? null : car);
    };
  
    return (
      <div className="car-list">
        {cars.map((car, index) => (
          <div key={index} className="car-box" onClick={() => handleCarClick(car)}>
            <img src={car.image} alt={car.brand} className="car-image" />
            <div className="car-info">
              <h2>{car.brand} {car.model}</h2>
              <p>Price: {car.price}</p>
              <p>Year: {car.year}</p>
            </div>
            {selectedCar === car && (
              <div className="car-details">
                <p>{car.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default CarList;
