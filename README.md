# System oceny okresowej nauczycieli akademickich PB

Aplikacja internetowa do okresowej oceny nauczycieli akademickich Politechniki Białostockiej. Pracownicy wpisują swoje osiągnięcia, przełożeni i komisja je weryfikują, a Dział Kadr monitoruje cały proces i generuje raporty.

> Projekt zespołowy realizowany w ramach przedmiotu Projekt Zespołowy, rok akad. 2026/2027.

## Spis treści

- [Funkcjonalności](#funkcjonalności)
- [Technologie](#technologie)
- [Struktura repozytorium](#struktura-repozytorium)
- [Uruchomienie](#uruchomienie)
- [Sposób pracy](#sposób-pracy)
- [Dokumentacja](#dokumentacja)
- [Zespół](#zespół)

## Funkcjonalności

Role w systemie: **pracownik**, **przełożony**, **komisja**, **administrator / Dział Kadr**.

- Ewidencja osiągnięć pracownika (formularze: obszar → kategoria → osiągnięcie)
- Podgląd stanu oceny i postępu względem minimów
- Dwuetapowa weryfikacja: przełożony, potem komisja
- Automatyczne generowanie arkuszy oceny
- Historia poprzednich ocen
- Powiadomienia i przypomnienia o terminach
- Raporty indywidualne i zbiorcze

Pełny zakres opisuje [Dokument inicjujący projekt](docs/DIP.md).

## Technologie

| Warstwa | Technologia |
|---------|-------------|
| Backend | Java 21, Spring Boot 4, Spring Security, Spring Data JPA |
| Baza danych | PostgreSQL 15, migracje Flyway |
| Frontend | React *(w przygotowaniu)* |
| Uruchamianie | Docker, Docker Compose |
| CI | GitHub Actions *(w przygotowaniu)* |
| Organizacja pracy | GitHub Projects |

## Struktura repozytorium

```
├── docs/                    # dokumentacja projektu (DIP, plan sprintów, ERD, architektura)
├── src/main/java/...        # kod backendu (controller, entity, repository)
├── src/main/resources/
│   ├── application.yaml     # konfiguracja aplikacji
│   └── db/migration/        # migracje Flyway (V1__..., V2__...)
├── src/test/                # testy
├── docker-compose.yml       # kontenery (na razie PostgreSQL)
└── pom.xml                  # zależności Maven
```

## Uruchomienie

### Wymagania

- Java 21 (JDK)
- Docker Desktop (z Docker Compose)
- Git

### Krok po kroku

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/kubus2731/system-oceny-pracownikow-pb.git
   cd system-oceny-pracownikow-pb
   ```

2. Uruchom bazę danych:
   ```bash
   docker compose up -d
   ```

3. Uruchom backend (Flyway sam utworzy tabele przy starcie):
   ```bash
   ./mvnw spring-boot:run      # Linux / macOS
   mvnw.cmd spring-boot:run    # Windows
   ```

4. Backend działa pod adresem `http://localhost:8080`.

> Docelowo całość (baza + backend + frontend) będzie startować jednym poleceniem `docker compose up --build`.

### Dane do bazy (środowisko lokalne)

| Parametr | Wartość |
|----------|---------|
| Host | `localhost:5432` |
| Baza | `soopu_db` |
| Użytkownik | `postgres` |
| Hasło | `haslo` |

To dane tylko do lokalnego developmentu, nie używać ich na produkcji.

### Testy

```bash
./mvnw test
```

## Sposób pracy

- Pracujemy w **sprintach** (Scrum). Plan znajduje się w [`docs/plan-sprintow.md`](docs/plan-sprintow.md).
- Zadania są na tablicy w **GitHub Projects**.
- Każde zadanie robimy na osobnej gałęzi, np. `feature/logowanie-jwt` albo `fix/migracja-v5`.
- Zmiany trafiają na `main` tylko przez **Pull Request**, sprawdzony przez co najmniej jedną inną osobę.
- Zmiany w bazie robimy wyłącznie **nową migracją** (`V5__...sql`). Nigdy nie edytujemy migracji, które są już na `main`.

## Dokumentacja

| Dokument | Opis |
|----------|------|
| [`docs/DIP.md`](docs/DIP.md) | Dokument inicjujący projekt: cel, zakres, role, ryzyka |
| [`docs/plan-sprintow.md`](docs/plan-sprintow.md) | Plan 11 sprintów |
| `docs/architektura.md` | Opis architektury *(do dodania)* |
| `docs/erd.png` | Diagram ERD *(do dodania)* |

## Zespół

- Jakub Matusiewicz
- Kinga Kardasz
- Adam Boryszewski
- Yelizaveta Anoshyna
- Urszula Łokić
