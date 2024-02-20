package com.marek.cardealership.dto.mapper;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.entity.CarEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CarMapper {

    CarEntity toEntity(CarDTO source);

    CarDTO toDTO(CarEntity source);



}
