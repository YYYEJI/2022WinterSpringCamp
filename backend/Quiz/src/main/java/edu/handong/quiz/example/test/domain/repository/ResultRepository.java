package edu.handong.quiz.example.test.domain.repository;

import edu.handong.quiz.example.test.domain.result.ResultExample;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<ResultExample, Long> {
    
}
