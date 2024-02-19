import React from 'react';
import CarList from './CarList';
import carsData from '../data/carsData';

const CarIndex = () => {
    console.log(carsData);
  return (
    <div className="car-index">
      <h1>Car Marketplacee</h1>
      
      <CarList cars={carsData} />
    </div>
  );
};

export default CarIndex;
