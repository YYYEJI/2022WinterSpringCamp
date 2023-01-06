package edu.handong.quiz.example.test.domain.repository;

import edu.handong.quiz.example.test.domain.detail.DetailExample;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailRepository extends JpaRepository<DetailExample, Long> {
}
