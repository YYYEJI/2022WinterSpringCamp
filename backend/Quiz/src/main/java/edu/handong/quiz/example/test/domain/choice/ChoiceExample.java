package edu.handong.quiz.example.test.domain.choice;

import edu.handong.quiz.example.test.domain.question.QuestionExample;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class ChoiceExample {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contents;

    private int score;

    @ManyToOne(fetch = FetchType.LAZY)
    private QuestionExample questionExample;
}
