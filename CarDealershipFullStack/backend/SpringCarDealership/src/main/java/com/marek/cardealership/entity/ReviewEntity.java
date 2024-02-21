package com.marek.cardealership.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Entity(name = "reviews")
@Getter
@Setter
public class ReviewEntity {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userEmail;


    @ManyToOne
    private CarEntity carEntity;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private Date date;


    public Long getId() {
        return id;
    }


}
