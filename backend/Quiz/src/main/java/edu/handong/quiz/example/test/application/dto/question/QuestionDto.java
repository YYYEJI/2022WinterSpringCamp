package edu.handong.quiz.example.test.application.dto.question;

import edu.handong.quiz.example.test.domain.question.QuestionExample;
import edu.handong.quiz.example.test.presentation.response.question.QuestionResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionDto {
    private Long questionId;
    private int number;
    private String description;

    public QuestionDto(QuestionExample questionExample) {
        this.questionId = questionExample.getId();
        this.number = questionExample.getNumber();
        this.description = questionExample.getDescription();
    }

    public QuestionResponse questionResponse() {
        return new QuestionResponse(questionId, number, description);
    }
}
