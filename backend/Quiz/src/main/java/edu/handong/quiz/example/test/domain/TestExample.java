package edu.handong.quiz.example.test.domain;

import edu.handong.quiz.example.test.domain.question.QuestionExample;
import edu.handong.quiz.example.test.domain.result.ResultExample;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class TestExample {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @OneToMany(mappedBy = "testExample")
    private List<QuestionExample> questionsExample = new ArrayList<>();

    @OneToMany(mappedBy = "testExample")
    private List<ResultExample> resultsExample = new ArrayList<>();
}
