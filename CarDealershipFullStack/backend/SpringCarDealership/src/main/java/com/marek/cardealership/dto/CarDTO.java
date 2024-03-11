package com.marek.cardealership.dto;

import com.marek.cardealership.entity.FeatureEntity;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {

    private Long id;
    private String brand;
    private String model;
    private BigDecimal price;
    private int year;
    private String description;
    private String image;

    @NotNull
    private List<@Positive Long> featureIDs;



}
