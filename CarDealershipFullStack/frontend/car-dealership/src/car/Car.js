import React from 'react';

const Car = ({ car, onCarClick }) => {
  return (
    <div className="car" onClick={() => onCarClick(car)}>
      <img src={car.image} alt={car.brand} />
      <div>
        <p>Price: {car.price}</p>
        <p>Brand: {car.brand}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
      </div>
    </div>
  );
};

export default Car;
