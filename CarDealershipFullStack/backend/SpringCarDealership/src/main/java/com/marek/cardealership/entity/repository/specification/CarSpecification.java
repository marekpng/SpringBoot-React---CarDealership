package com.marek.cardealership.entity.repository.specification;

import com.marek.cardealership.entity.CarEntity;
import com.marek.cardealership.entity.CarEntity_;
import com.marek.cardealership.entity.filter.CarFilter;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class CarSpecification implements Specification<CarEntity> {

    private final CarFilter filter;

    @Override
    public Predicate toPredicate(Root<CarEntity> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();

        if (filter.getFromYear() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get(CarEntity_.YEAR), filter.getFromYear()));
        }
        if(filter.getToYear() != null) {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get(CarEntity_.YEAR), filter.getToYear()));
        }

        if (filter.getBrand() != null && !filter.getBrand().isEmpty()) {
            predicates.add(criteriaBuilder.equal(root.get(CarEntity_.BRAND), filter.getBrand()));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));

    }
}
