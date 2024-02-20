package com.marek.cardealership.dto.mapper;

import com.marek.cardealership.dto.ReviewDTO;
import com.marek.cardealership.entity.ReviewEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    ReviewEntity toEntity(ReviewDTO source);
    ReviewDTO toDTO(ReviewEntity source);
    ReviewEntity updateEntity(ReviewDTO source, @MappingTarget ReviewEntity target);

}
