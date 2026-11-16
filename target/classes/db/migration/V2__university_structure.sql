CREATE TABLE faculties (
                           id BIGSERIAL PRIMARY KEY,
                           name VARCHAR(150) NOT NULL UNIQUE,
                           code VARCHAR(50) NOT NULL UNIQUE
);

ALTER TABLE users ADD COLUMN faculty_id BIGINT;
ALTER TABLE users ADD CONSTRAINT fk_user_faculty FOREIGN KEY (faculty_id) REFERENCES faculties(id) ON DELETE SET NULL;

INSERT INTO faculties (name, code) VALUES ('Wydział Informatyki', 'WI');