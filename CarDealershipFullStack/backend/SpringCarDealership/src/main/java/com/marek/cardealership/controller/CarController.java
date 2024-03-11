package com.marek.cardealership.controller;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.entity.filter.CarFilter;
import com.marek.cardealership.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CarController {

    @Autowired
    private CarService carService;


    @GetMapping({"/brands", "/brands/"})
    public String[] getGenres() {
        return new String[] {"BMW", "Mercedes", "Audi", "Volvo", "Fiat", "Renault"};
    }


    //    @Secured("ROLE_ADMIN")
    @PostMapping({"/cars", "/cars/"})
    public CarDTO addCar(@RequestBody CarDTO carDTO) {
        return carService.addCar(carDTO);

    }

    @GetMapping({"/cars", "/cars/"})
    public List<CarDTO> getAllCars(CarFilter carFilter) {
        return carService.getAllCars(carFilter);
    }

    @GetMapping({"/car/{carId}", "/car/{carId}/"})
    public CarDTO getCar(@PathVariable Long carId) {
        return carService.getCar(carId);

    }

    //    @Secured("ROLE_ADMIN")
    @PutMapping({"/car/{carId}", "/car/{carId}/"})
    public CarDTO editCar(@PathVariable Long carId, @RequestBody CarDTO carDTO) {
        return carService.editCar(carDTO,carId);
    }

    //    @Secured("ROLE_ADMIN")
    @DeleteMapping({"/car/{carId}", "/car/{carId}/"})
    public CarDTO deleteCar(@PathVariable Long carId){
        return carService.removeCar(carId);
    }
}
