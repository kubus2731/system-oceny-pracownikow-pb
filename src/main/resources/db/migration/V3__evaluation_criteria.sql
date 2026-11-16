CREATE TABLE evaluation_criteria (
                                     id BIGSERIAL PRIMARY KEY,
                                     name VARCHAR(255) NOT NULL,
                                     description TEXT,
                                     max_points INT NOT NULL,
                                     category VARCHAR(100) NOT NULL
);

INSERT INTO evaluation_criteria (name, description, max_points, category)
VALUES ('Ocena zajęć dydaktycznych', 'Wyniki ankiet studenckich oraz wizytacji zajęć', 40, 'DYDAKTYKA');

INSERT INTO evaluation_criteria (name, description, max_points, category)
VALUES ('Publikacje naukowe', 'Artykuły w czasopismach punktowanych i monografie', 40, 'NAUKA');

INSERT INTO evaluation_criteria (name, description, max_points, category)
VALUES ('Działalność organizacyjna', 'Praca w komisjach wydziałowych, organizacja konferencji', 20, 'ORGANIZACJA');