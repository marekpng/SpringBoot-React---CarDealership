package com.marek.cardealership.service;

import com.marek.cardealership.dto.FeatureDTO;

import java.util.List;

public interface FeatureService {
    FeatureDTO addFeature(FeatureDTO featureDTO);

    List<FeatureDTO> getFeatures();

    FeatureDTO getFeature(Long featureId);

    FeatureDTO editFeature(Long featureId, FeatureDTO featureDTO);

    FeatureDTO removeFeature(Long featureId);
}
