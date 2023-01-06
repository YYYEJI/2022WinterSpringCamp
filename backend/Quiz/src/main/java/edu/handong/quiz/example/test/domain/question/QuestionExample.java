package edu.handong.quiz.example.test.domain.question;

import edu.handong.quiz.example.test.domain.TestExample;
import edu.handong.quiz.example.test.domain.choice.ChoiceExample;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class QuestionExample {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int number;

    private String description;

    @OneToMany(mappedBy = "questionExample")
    private List<ChoiceExample> choiceExample = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    private TestExample testExample;
}
