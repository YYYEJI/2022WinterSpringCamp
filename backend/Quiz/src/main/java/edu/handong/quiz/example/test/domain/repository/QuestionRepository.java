package edu.handong.quiz.example.test.domain.repository;

import edu.handong.quiz.example.test.domain.question.QuestionExample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<QuestionExample, Long> {
    @Query("select q from QuestionExample q " +
            "left join fetch q.testExample " +
            "where q.testExample.id = :testId ")
    List<QuestionExample> getAllQuestionByTestId(@Param("testId") Long testId);
}
