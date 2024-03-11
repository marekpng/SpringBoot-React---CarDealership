package com.marek.cardealership.entity.repository;

import com.marek.cardealership.entity.FeatureEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface FeatureRepository extends JpaRepository<FeatureEntity, Long> {


    @Transactional
    void removeAllByFeatureInCars_Id(Long id);
}
