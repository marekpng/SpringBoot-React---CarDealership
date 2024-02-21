package com.marek.cardealership.dto.mapper;

import com.marek.cardealership.dto.ReviewDTO;
import com.marek.cardealership.entity.ReviewEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    ReviewEntity toEntity(ReviewDTO source);

    @Mapping(target = "car_entity_id", source = "carEntity.id")
    ReviewDTO toDTO(ReviewEntity source);
    ReviewEntity updateEntity(ReviewDTO source, @MappingTarget ReviewEntity target);

}
