package pl.studenci.systemocenypracownikowpb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "evaluation_sheets")
@Getter
@Setter
@NoArgsConstructor
public class EvaluationSheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "academic_year", nullable = false, length = 20)
    private String academicYear;

    @Column(nullable = false, length = 50)
    private String status = "PENDING";

    @Column(name = "total_score")
    private Integer totalScore = 0;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}