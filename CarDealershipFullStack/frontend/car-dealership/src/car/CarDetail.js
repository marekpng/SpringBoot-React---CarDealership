// CarDetail.js
import React from 'react';

const CarDetail = ({ car }) => {
  return (
    <div className="car-detail">
      <p>Price: {car.price}</p>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarDetail;
