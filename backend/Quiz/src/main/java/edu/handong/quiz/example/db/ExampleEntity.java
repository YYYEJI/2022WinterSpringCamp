package edu.handong.quiz.example.db;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
public class ExampleEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
