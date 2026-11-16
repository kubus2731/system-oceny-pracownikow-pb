package pl.studenci.systemocenypracownikowpb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.studenci.systemocenypracownikowpb.entity.EvaluationSheet;

import java.util.List;

@Repository
public interface EvaluationSheetRepository extends JpaRepository<EvaluationSheet, Long> {
    List<EvaluationSheet> findByUserId(Long userId);
}