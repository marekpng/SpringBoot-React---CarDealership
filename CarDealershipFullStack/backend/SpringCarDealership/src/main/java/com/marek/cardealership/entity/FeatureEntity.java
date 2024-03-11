package com.marek.cardealership.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity(name = "feature")
@Getter
@Setter
public class FeatureEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String featureName;

    @ManyToMany(mappedBy = "features")
    private List<CarEntity> featureInCars;

}
