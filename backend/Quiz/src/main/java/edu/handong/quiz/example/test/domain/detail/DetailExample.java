package edu.handong.quiz.example.test.domain.detail;

import edu.handong.quiz.example.test.domain.result.ResultExample;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class DetailExample {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String detail;

    @ManyToOne(fetch = FetchType.LAZY)
    private ResultExample resultExample;
}
