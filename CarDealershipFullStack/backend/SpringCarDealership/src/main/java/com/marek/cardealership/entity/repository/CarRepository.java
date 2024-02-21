package com.marek.cardealership.entity.repository;

import com.marek.cardealership.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;




public interface CarRepository extends JpaSpecificationExecutor<CarEntity>,JpaRepository<CarEntity, Long> {




}
