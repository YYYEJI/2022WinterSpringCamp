package edu.handong.quiz.example.test.presentation;

import edu.handong.quiz.example.test.application.ChoiceService;
import edu.handong.quiz.example.test.application.QuestionService;
import edu.handong.quiz.example.test.application.TestService;
import edu.handong.quiz.example.test.application.dto.choice.ChoiceDto;
import edu.handong.quiz.example.test.application.dto.question.QuestionDto;
import edu.handong.quiz.example.test.presentation.response.choice.ChoiceResponse;
import edu.handong.quiz.example.test.presentation.response.question.QuestionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/example")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TestController {
    private final QuestionService questionService;
    private final ChoiceService choiceService;

    @GetMapping("/question")
    public ResponseEntity<List<QuestionResponse>> getQuestions(@RequestParam Long testId) {
        List<QuestionDto> questions = questionService.getQuestions(testId);
        List<QuestionResponse> response = questions.stream()
                .map(QuestionDto::questionResponse)
                .collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/choice")
    public ResponseEntity<List<ChoiceResponse>> getChoices(@RequestParam Long questionId) {
        List<ChoiceDto> choices = choiceService.getChoices(questionId);
        List<ChoiceResponse> response = choices.stream().map(ChoiceDto::choiceResponse).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }
}
