package edu.handong.quiz.example.test.presentation.response.choice;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChoiceResponse {
    private Long choiceId;
    private String contents;
    private int score;
}
