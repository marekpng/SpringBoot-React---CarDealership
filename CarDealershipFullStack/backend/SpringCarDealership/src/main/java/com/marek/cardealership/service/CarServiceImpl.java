package com.marek.cardealership.service;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.dto.mapper.CarMapper;
import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.ReviewEntity;
import com.marek.cardealership.entity.filter.CarFilter;
import com.marek.cardealership.entity.repository.CarRepository;
import com.marek.cardealership.entity.repository.ReviewRepository;
import com.marek.cardealership.entity.repository.specification.CarSpecification;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private ReviewRepository reviewRepository;

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
    public List<CarDTO> getAllCars(CarFilter carFilter) {

        CarSpecification carSpecification = new CarSpecification(carFilter);

        return carRepository.findAll(carSpecification, PageRequest.of(0, carFilter.getLimit()))
                .stream()
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

        List<ReviewEntity> reviews = reviewRepository.findByCarEntityId(id);
        if(!reviews.isEmpty()) {
            reviewRepository.deleteAll(reviews);
        }

        carRepository.delete(carEntity);
        return carDTO;
    }
}
