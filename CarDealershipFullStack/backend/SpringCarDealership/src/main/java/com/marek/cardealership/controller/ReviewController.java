package com.marek.cardealership.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {

    @GetMapping({"/brands", "/brands/"})
    public String[] getGenres() {
        return new String[] {"bmw", "mercedes", "audi", "volvo", "fiat", "renault"};
    }

}
