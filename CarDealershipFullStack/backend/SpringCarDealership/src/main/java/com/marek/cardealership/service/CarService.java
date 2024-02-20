package com.marek.cardealership.service;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.entity.CarEntity;

import java.util.List;

public interface CarService {

    CarDTO addCar(CarDTO carDTO);

    List<CarDTO> getAllCars();

    CarDTO getCar(Long id);

    CarDTO editCar(CarDTO carDTO, Long id);

    CarDTO removeCar(Long id);

//    List<CarDTO> getCars()


}
