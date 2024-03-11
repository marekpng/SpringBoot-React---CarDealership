package com.marek.cardealership.controller;

import com.marek.cardealership.dto.CarDTO;
import com.marek.cardealership.dto.FeatureDTO;
import com.marek.cardealership.entity.filter.CarFilter;
import com.marek.cardealership.service.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    //    @Secured("ROLE_ADMIN")
    @PostMapping({"/features", "/features/"})
    public FeatureDTO addFeature(@RequestBody FeatureDTO featureDTO) {
        return featureService.addFeature(featureDTO);

    }

    @GetMapping({"/features", "/features/"})
    public List<FeatureDTO> getAllFeatures() {
        return featureService.getFeatures();
    }

    @GetMapping({"/feature/{featureId}", "/feature/{featureId}/"})
    public FeatureDTO getFeature(@PathVariable Long featureId) {
        return featureService.getFeature(featureId);

    }

    //    @Secured("ROLE_ADMIN")
    @PutMapping({"/feature/{featureId}", "/feature/{featureId}/"})
    public FeatureDTO editFeature(@PathVariable Long featureId, @RequestBody FeatureDTO featureDTO) {
        return featureService.editFeature(featureId, featureDTO);
    }

    //    @Secured("ROLE_ADMIN")
    @DeleteMapping({"/feature/{featureId}", "/feature/{featureId}/"})
    public FeatureDTO deleteFeature(@PathVariable Long carId){
        return featureService.removeFeature(carId);
    }
}
