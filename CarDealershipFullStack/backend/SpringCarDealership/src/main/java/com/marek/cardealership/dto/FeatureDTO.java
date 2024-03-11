package com.marek.cardealership.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeatureDTO {

    @NotNull
    private Long id;

    @NotNull
    private String featureName;


}
