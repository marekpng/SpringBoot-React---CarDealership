package com.marek.cardealership.dto.mapper;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.FeatureEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CarMapper {

    //    @Mapping(target = "features", ignore = true)
    CarEntity toEntity(CarDTO source);


    @Mapping(target = "featureIDs", expression = "java(getFeatureIds(source))")
    CarDTO toDTO(CarEntity source);


    default List<Long> getFeatureIds(CarEntity source) {
        List<Long> result = new ArrayList<>();
        for (FeatureEntity feature : source.getFeatures()) {
            result.add(feature.getId());
        }
        return result;
    }
}
