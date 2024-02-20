package com.marek.cardealership.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

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

}
