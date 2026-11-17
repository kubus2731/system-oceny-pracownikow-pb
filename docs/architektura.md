# Architektura systemu

## 1. Ogólny opis

System jest aplikacją internetową w architekturze **klient–serwer** z podziałem na trzy warstwy:

1. **Frontend (React)**: interfejs użytkownika uruchamiany w przeglądarce. Komunikuje się z backendem wyłącznie przez REST API (JSON).
2. **Backend (Spring Boot)**: logika biznesowa, uwierzytelnianie i autoryzacja, liczenie punktów, generowanie arkuszy i raportów.
3. **Baza danych (PostgreSQL)**: przechowuje użytkowników, definicje systemów oceny, osiągnięcia i oceny. Schemat zarządzany jest migracjami Flyway.

Każda warstwa działa w osobnym kontenerze Dockera, a całość uruchamia Docker Compose.

```mermaid
flowchart LR
    U[Użytkownik<br/>przeglądarka]

    subgraph Docker Compose
        F[Frontend<br/>React]
        B[Backend<br/>Spring Boot<br/>REST API]
        D[(PostgreSQL)]
    end

    U -->|HTTP| F
    F -->|REST / JSON<br/>token JWT| B
    B -->|JPA / JDBC| D
```

## 2. Uwierzytelnianie

Logowanie odbywa się tokenem **JWT** (bez sesji po stronie serwera):

```mermaid
sequenceDiagram
    participant F as Frontend
    participant B as Backend
    participant D as Baza

    F->>B: POST /api/auth/login (email, hasło)
    B->>D: znajdź użytkownika po e-mailu
    D-->>B: użytkownik + hash hasła + role
    B->>B: sprawdź hasło (BCrypt), wygeneruj JWT
    B-->>F: token JWT
    F->>B: kolejne żądania z nagłówkiem Authorization: Bearer <token>
    B->>B: weryfikacja tokenu i roli
    B-->>F: dane
```

## 3. Struktura backendu

Backend ma klasyczny podział warstwowy:

| Pakiet | Odpowiedzialność |
|--------|------------------|
| `controller` | Endpointy REST: przyjmują żądania i zwracają DTO |
| `service` | Logika biznesowa (liczenie punktów, przebieg weryfikacji) |
| `repository` | Dostęp do bazy (Spring Data JPA) |
| `entity` | Encje JPA odpowiadające tabelom |
| `dto` | Obiekty przesyłane przez API (bez danych wrażliwych) |
| `security` | Konfiguracja Spring Security, obsługa JWT |

Przepływ żądania: **Controller → Service → Repository → Baza**.

## 4. Model danych (ERD)

Stan bazy na koniec sprintu 1 (migracje V1–V4):

```mermaid
erDiagram
    USERS {
        bigint id PK
        varchar email UK
        varchar password
        varchar first_name
        varchar last_name
        timestamp created_at
        bigint faculty_id FK
    }
    ROLES {
        bigint id PK
        varchar name UK
    }
    USER_ROLES {
        bigint user_id PK, FK
        bigint role_id PK, FK
    }
    FACULTIES {
        bigint id PK
        varchar name UK
        varchar code UK
    }
    EVALUATION_CRITERIA {
        bigint id PK
        varchar name
        text description
        int max_points
        varchar category
    }
    EVALUATION_SHEETS {
        bigint id PK
        bigint user_id FK
        varchar academic_year
        varchar status
        int total_score
        timestamp created_at
    }
    SHEET_CRITERIA_SCORES {
        bigint id PK
        bigint sheet_id FK
        bigint criterion_id FK
        int awarded_points
        text comment
    }

    USERS ||--o{ USER_ROLES : "ma"
    ROLES ||--o{ USER_ROLES : "przypisana"
    FACULTIES |o--o{ USERS : "zatrudnia"
    USERS ||--o{ EVALUATION_SHEETS : "posiada"
    EVALUATION_SHEETS ||--o{ SHEET_CRITERIA_SCORES : "zawiera"
    EVALUATION_CRITERIA ||--o{ SHEET_CRITERIA_SCORES : "oceniane w"
```

### Planowane zmiany modelu

- **Sprint 2:** relacja przełożony → podwładny (`users.supervisor_id`), stanowisko pracownika.
- **Sprint 3:** hierarchia obszar → kategoria → osiągnięcie zamiast płaskiej tabeli `evaluation_criteria`, okresy oceny i wersjonowanie systemów oceny.
- **Sprint 4:** tabela osiągnięć pracownika i załączników.

## 5. Kluczowe decyzje techniczne

| Decyzja | Uzasadnienie |
|---------|--------------|
| REST API + osobny frontend | Niezależny rozwój backendu i frontendu przez dwie części zespołu |
| JWT zamiast sesji | Prosta współpraca z frontendem React, backend nie przechowuje stanu |
| Flyway | Wersjonowane zmiany bazy, ten sam schemat u każdego członka zespołu |
| Docker Compose | Jednakowe środowisko u wszystkich, uruchomienie jednym poleceniem |
| PostgreSQL | Darmowa, stabilna relacyjna baza, dobrze wspierana przez Spring |
