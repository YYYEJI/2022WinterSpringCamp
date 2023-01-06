package edu.handong.quiz.example.test.application;

import edu.handong.quiz.example.test.application.dto.choice.ChoiceDto;
import edu.handong.quiz.example.test.application.dto.question.QuestionDto;
import edu.handong.quiz.example.test.domain.choice.ChoiceExample;
import edu.handong.quiz.example.test.domain.question.QuestionExample;
import edu.handong.quiz.example.test.domain.repository.ChoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChoiceService {

    private final ChoiceRepository choiceRepository;

    @Transactional
    public List<ChoiceDto> getChoices(Long questionId) {
        List<ChoiceExample> choices = choiceRepository.getAllChoiceByQuestId(questionId);
        return choices.stream().map(ChoiceDto::new).collect(Collectors.toList());
    }
}
