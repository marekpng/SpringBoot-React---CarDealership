package com.marek.cardealership.service;

import com.marek.cardealership.dto.ReviewDTO;
import com.marek.cardealership.dto.mapper.ReviewMapper;
import com.marek.cardealership.entity.ReviewEntity;
import com.marek.cardealership.entity.repository.CarRepository;
import com.marek.cardealership.entity.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewMapper reviewMapper;

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private CarRepository carRepository;
    @Override
    public ReviewDTO addReview(ReviewDTO reviewDTO) {
        ReviewEntity review = reviewMapper.toEntity(reviewDTO);

        review.setCarEntity(carRepository.getReferenceById(reviewDTO.getCar_entity_id()));
        ReviewEntity saved = reviewRepository.save(review);
        return reviewMapper.toDTO(saved);

    }

    @Override
    public List<ReviewDTO> gettAllReviews() {
        List<ReviewDTO> result = new ArrayList<>();
        for(ReviewEntity review : reviewRepository.findAll()) {
            result.add(reviewMapper.toDTO(review));
        }
        return result;
    }



    @Override
    public ReviewDTO getReview(Long id) {
        ReviewEntity review = reviewRepository.getReferenceById(id);
        return reviewMapper.toDTO(review);
    }

    @Override
    public List<ReviewDTO> gettAllReviewsByCarId(Long carId) {
        List<ReviewDTO> result = new ArrayList<>();
        for(ReviewEntity review : reviewRepository.findAll()) {
            if(review.getCarEntity().getId() == carId) {
                result.add(reviewMapper.toDTO(review));
            }
        }
        return result;
    }

    @Override
    public ReviewDTO removeReview(Long id) {
        ReviewEntity review = reviewRepository.getReferenceById(id);
        ReviewDTO model = reviewMapper.toDTO(review);
        reviewRepository.delete(review);
        return model;
    }
}
