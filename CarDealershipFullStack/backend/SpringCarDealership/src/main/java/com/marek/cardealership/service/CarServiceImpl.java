package com.marek.cardealership.service;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.dto.mapper.CarMapper;
import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.repository.CarRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarMapper carMapper;

    @Autowired
    private CarRepository carRepository;

    @Override
    public CarDTO addCar(CarDTO carDTO) {
        CarEntity carEntity = carMapper.toEntity(carDTO);
        CarEntity saved = carRepository.save(carEntity);

        return carMapper.toDTO(saved);

    }

    @Override
    public List<CarDTO> getAllCars() {
        return StreamSupport.stream(carRepository.findAll().spliterator(),false)
                .map(carMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CarDTO getCar(Long id) {
        CarEntity carEntity = carRepository.getReferenceById(id);
        return carMapper.toDTO(carEntity);
    }

    @Override
    public CarDTO editCar(CarDTO carDTO, Long id) {
        if(!carRepository.existsById(id)) {
            throw new EntityNotFoundException();
        }

        CarEntity carEntity = carMapper.toEntity(carDTO);
        carEntity.setId(id);
        CarEntity saved = carRepository.save(carEntity);
        return carMapper.toDTO(saved);

    }

    @Override
    public CarDTO removeCar(Long id) {
        CarEntity carEntity = carRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        CarDTO carDTO = carMapper.toDTO(carEntity);
        carRepository.delete(carEntity);
        return carDTO;
    }
}
