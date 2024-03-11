package com.marek.cardealership.service;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.dto.mapper.CarMapper;
import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.FeatureEntity;
import com.marek.cardealership.entity.ReviewEntity;
import com.marek.cardealership.entity.filter.CarFilter;
import com.marek.cardealership.entity.repository.CarRepository;
import com.marek.cardealership.entity.repository.FeatureRepository;
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
    private FeatureRepository featureRepository;

    @Autowired
    private CarRepository carRepository;

    @Override
    public CarDTO addCar(CarDTO carDTO) {

        CarEntity carEntity = carMapper.toEntity(carDTO);

        CarEntity savedCar = carRepository.save(carEntity);

        List<Long> featureIds = carDTO.getFeatureIDs();

        if (featureIds != null && !featureIds.isEmpty()) {
            for (Long featureId : featureIds) {
                FeatureEntity featureEntity = featureRepository.findById(featureId).orElse(null);
                if (featureEntity != null) {
                    savedCar.getFeatures().add(featureEntity);
                }
            }
        }

        savedCar = carRepository.save(savedCar);

        return carMapper.toDTO(savedCar);

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
        public CarDTO removeCar(Long carId) {

            CarEntity carEntity = carRepository.findById(carId)
                    .orElseThrow(EntityNotFoundException::new);


            List<ReviewEntity> reviews = reviewRepository.findByCarEntityId(carId);

            if (!reviews.isEmpty()) {
                reviewRepository.deleteAll(reviews);
            }

            List<FeatureEntity> features = carEntity.getFeatures();

            carEntity.getFeatures().clear();

            carRepository.save(carEntity);

            featureRepository.removeAllByFeatureInCars_Id(carId);

            carRepository.delete(carEntity);


            return carMapper.toDTO(carEntity);
        }

}
