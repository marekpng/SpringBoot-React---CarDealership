package com.marek.cardealership.service;

import com.marek.cardealership.dto.ReviewDTO;

import java.util.List;

public interface ReviewService {

    ReviewDTO addReview(ReviewDTO reviewDTO);

    List<ReviewDTO> gettAllReviews();

    ReviewDTO getReview(Long id);

    List<ReviewDTO> getAllReviewsByCarId(Long carId);

    ReviewDTO removeReview(Long id);



}
