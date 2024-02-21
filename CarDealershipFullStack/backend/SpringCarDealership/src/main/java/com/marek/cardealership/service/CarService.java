package com.marek.cardealership.service;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.filter.CarFilter;

import java.util.List;

public interface CarService {

    CarDTO addCar(CarDTO carDTO);

    List<CarDTO> getAllCars(CarFilter carFilter);


    CarDTO getCar(Long id);

    CarDTO editCar(CarDTO carDTO, Long id);

    CarDTO removeCar(Long id);




}
