CREATE TABLE evaluation_sheets (
                                   id BIGSERIAL PRIMARY KEY,
                                   user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                                   academic_year VARCHAR(20) NOT NULL,
                                   status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
                                   total_score INT DEFAULT 0,
                                   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sheet_criteria_scores (
                                       id BIGSERIAL PRIMARY KEY,
                                       sheet_id BIGINT NOT NULL REFERENCES evaluation_sheets(id) ON DELETE CASCADE,
                                       criterion_id BIGINT NOT NULL REFERENCES evaluation_criteria(id) ON DELETE CASCADE,
                                       awarded_points INT DEFAULT 0,
                                       comment TEXT
);