package edu.handong.quiz.example.test.application;

import edu.handong.quiz.example.test.application.dto.question.QuestionDto;
import edu.handong.quiz.example.test.domain.question.QuestionExample;
import edu.handong.quiz.example.test.domain.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    @Transactional
    public List<QuestionDto> getQuestions(Long testId) {
        List<QuestionExample> questions = questionRepository.getAllQuestionByTestId(testId);
        return questions.stream()
                .map(QuestionDto::new)
                .collect(Collectors.toList());
    }
}
