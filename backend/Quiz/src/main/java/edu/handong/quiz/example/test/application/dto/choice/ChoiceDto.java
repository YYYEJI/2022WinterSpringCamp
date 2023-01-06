package edu.handong.quiz.example.test.application.dto.choice;

import edu.handong.quiz.example.test.domain.choice.ChoiceExample;
import edu.handong.quiz.example.test.domain.repository.ChoiceRepository;
import edu.handong.quiz.example.test.presentation.response.choice.ChoiceResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChoiceDto {
    private Long choiceId;
    private String contents;
    private int score;

    public ChoiceDto(ChoiceExample choice) {
        this.choiceId = choice.getId();
        this.contents = choice.getContents();
        this.score = choice.getScore();
    }

    public ChoiceResponse choiceResponse() {
        return new ChoiceResponse(choiceId, contents, score);
    }
}
