package com.marek.cardealership.entity.repository;

import com.marek.cardealership.entity.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Long> {

    List<ReviewEntity> findByCarEntityId(Long CarEntityId);

}
