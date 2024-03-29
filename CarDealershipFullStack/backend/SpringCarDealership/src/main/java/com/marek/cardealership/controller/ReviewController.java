package com.marek.cardealership.controller;

import com.marek.cardealership.dto.ReviewDTO;
import com.marek.cardealership.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;



    @PostMapping({"/review", "/review/"})
    public ReviewDTO addReview(@RequestBody ReviewDTO reviewDTO) {

        return reviewService.addReview(reviewDTO);

    }

    @GetMapping({"/review", "/review/"})
    public List<ReviewDTO> getAllReviews() {
        return reviewService.gettAllReviews();

    }

    @GetMapping({"/review/{carId}", "/review/{carId}/"})
    public List<ReviewDTO> getAllReviewsByCarId(@PathVariable Long carId) {
        return reviewService.getAllReviewsByCarId(carId);

    }

    @DeleteMapping({"/review/{reviewId}", "/review/{reviewId}/"})
    public ReviewDTO removeReview(@PathVariable Long reviewId){
        return reviewService.removeReview(reviewId);
    }




}
