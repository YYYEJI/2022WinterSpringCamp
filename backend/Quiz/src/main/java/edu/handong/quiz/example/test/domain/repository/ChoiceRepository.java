package edu.handong.quiz.example.test.domain.repository;

import edu.handong.quiz.example.test.domain.choice.ChoiceExample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChoiceRepository extends JpaRepository<ChoiceExample, Long> {
    @Query("select c from ChoiceExample c " +
            "left join fetch c.questionExample " +
            "where c.questionExample.id = :questionId ")
    List<ChoiceExample> getAllChoiceByQuestId(@Param("questionId") Long questionId);
}
