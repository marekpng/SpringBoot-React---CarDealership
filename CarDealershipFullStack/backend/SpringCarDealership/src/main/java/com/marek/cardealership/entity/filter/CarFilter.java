package com.marek.cardealership.entity.filter;

import lombok.Data;

@Data
public class CarFilter {


    private String brand = "";
    private Integer fromYear;
    private Integer toYear;
    private Integer limit = 10;

}
