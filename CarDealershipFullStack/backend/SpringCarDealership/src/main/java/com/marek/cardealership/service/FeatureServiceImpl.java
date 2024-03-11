package com.marek.cardealership.service;

import com.marek.cardealership.dto.FeatureDTO;
import com.marek.cardealership.dto.mapper.FeatureMapper;
import com.marek.cardealership.entity.FeatureEntity;
import com.marek.cardealership.entity.repository.FeatureRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FeatureServiceImpl implements FeatureService{

    @Autowired
    private FeatureRepository featureRepository;

    @Autowired
    private FeatureMapper featureMapper;


    @Override
    public FeatureDTO addFeature(FeatureDTO featureDTO) {
        FeatureEntity feature = featureMapper.toEntity(featureDTO);
        FeatureEntity savedFeature = featureRepository.save(feature);
        return featureMapper.toDTO(savedFeature);
    }

    @Override
    public List<FeatureDTO> getFeatures() {
        List<FeatureDTO> features = new ArrayList<>();
        for (FeatureEntity entity : featureRepository.findAll()) {
            features.add(featureMapper.toDTO(entity));
        }
        return features;

    }

    @Override
    public FeatureDTO getFeature(Long featureId) {
        FeatureEntity feature = featureRepository.getReferenceById(featureId);
        return featureMapper.toDTO(feature);
    }

    @Override
    public FeatureDTO editFeature(Long featureId, FeatureDTO featureDTO) {
        if(!featureRepository.existsById(featureId)) {
            throw new EntityNotFoundException();
        }
        FeatureEntity feature = featureMapper.toEntity(featureDTO);
        feature.setId(featureId);
        FeatureEntity save = featureRepository.save(feature);
        return featureMapper.toDTO(save);
    }

    @Override
    public FeatureDTO removeFeature(Long featureId) {
        FeatureEntity feature = featureRepository.findById(featureId).orElseThrow(EntityNotFoundException::new);
        FeatureDTO featureDTO = featureMapper.toDTO(feature);
        featureRepository.delete(feature);
        return featureDTO;
    }
}
