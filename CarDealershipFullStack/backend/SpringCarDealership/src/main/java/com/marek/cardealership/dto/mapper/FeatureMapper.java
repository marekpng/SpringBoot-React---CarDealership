package com.marek.cardealership.dto.mapper;

import com.marek.cardealership.dto.FeatureDTO;
import com.marek.cardealership.entity.FeatureEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FeatureMapper {

    FeatureDTO toDTO(FeatureEntity featureEntity);

    FeatureEntity toEntity(FeatureDTO featureDTO);
}
