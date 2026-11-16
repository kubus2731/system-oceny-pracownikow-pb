package pl.studenci.systemocenypracownikowpb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.studenci.systemocenypracownikowpb.entity.EvaluationCriterion;

@Repository
public interface EvaluationCriterionRepository extends JpaRepository<EvaluationCriterion, Long> {
}
