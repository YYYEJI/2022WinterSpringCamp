package edu.handong.quiz.example.test.domain.result;

import edu.handong.quiz.example.test.domain.TestExample;
import edu.handong.quiz.example.test.domain.detail.DetailExample;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class ResultExample {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String image;

    private int score;

    @ManyToOne(fetch = FetchType.LAZY)
    private TestExample testExample;

    @OneToMany(fetch = FetchType.LAZY)
    private List<DetailExample> detailsExample = new ArrayList<>();

}
