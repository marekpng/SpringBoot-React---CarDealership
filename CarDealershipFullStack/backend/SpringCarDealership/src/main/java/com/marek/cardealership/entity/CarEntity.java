package com.marek.cardealership.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "car")
@Getter
@Setter
public class CarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private int year;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    @ManyToMany
    @JoinTable(name = "car_feature",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "feature_id")
    )
    private List<FeatureEntity> features = new ArrayList<>();



    @OneToMany(mappedBy = "carEntity")
    private List<ReviewEntity> reviews;



}
