package com.marek.cardealership.entity.repository;

import com.marek.cardealership.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<CarEntity, Long> {
}
