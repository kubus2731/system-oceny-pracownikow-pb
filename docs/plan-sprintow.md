# Plan sprintów( to jest bazówka i tak naprawdę można jutro wszystko pozmieniać)

Plan jest **orientacyjny**. Może się zmieniać w trakcie projektu, gdy lepiej poznamy zakres i czas pracy.

Całość: 11 sprintów, z czego 5 w semestrze zimowym i 6 w letnim.

## Zasady dla każdego sprintu( przykład można zawsze pozmieniać)

- Każdy sprint kończy się małym, działającym pokazem (demo).
- Testy i dokumentacja powstają razem z funkcją, a nie na końcu.
- Zadania mają szacowany i rzeczywisty czas, a na retrospektywie je porównujemy.
- Zostawiamy trochę rezerwy na poprawki.

---

## Semestr zimowy: fundament i wersja podstawowa dla pracownika

### Sprint 1: Start projektu i szkielet
- Repozytorium na GitHubie, branche, Pull Requesty, tablica w GitHub Projects
- Dokument inicjujący projekt (`DIP.md`) i spisane wymagania
- Docker Compose: PostgreSQL + backend (Spring Boot) + frontend (React)
- Migracje bazy (Flyway lub Liquibase), proste CI w GitHub Actions
- Wstępny model danych (diagram ERD)

### Sprint 2: Użytkownicy, role i struktura organizacyjna
- Logowanie i autoryzacja (Spring Security, JWT)
- Role: pracownik, przełożony, komisja, administrator/kadry
- Profil pracownika (dane, stanowisko, jednostka)
- Relacja przełożony → podwładny

### Sprint 3: Definiowanie systemów oceny
- Struktura hierarchiczna: obszar → kategoria → osiągnięcie
- 3 główne kategorie, w których zdobywa się punkty
- Okresy oceny i kilka systemów oceny działających równolegle
- Minima oceny zgodne z regulaminem
- Wersjonowanie definicji, żeby zmiana regulaminu nie psuła starych ocen

> To najtrudniejszy sprint, bo od modelu danych zależy cała reszta. Warto dać mu więcej czasu na projekt bazy.

### Sprint 4: Ewidencja osiągnięć (rola pracownika)
- Formularze generowane z definicji systemu oceny
- Dodawanie, edycja i usuwanie osiągnięć
- Załączniki (dowody)
- Automatyczne wypełnianie pól na podstawie profilu

### Sprint 5: Stan oceny i potwierdzenie kompletności
- Panel pracownika: punkty w kategoriach, postęp względem minimów, okres oceny
- Potwierdzenie kompletności zgłoszeń (po zatwierdzeniu blokada edycji)
- Stabilizacja, poprawki, demo wersji podstawowej

---

## Semestr letni: przełożony, weryfikacja, administracja

### Sprint 6: Rola przełożonego
- Ewidencja własnych osiągnięć
- Podgląd i korekta danych podwładnych
- Log zmian (kto, co i kiedy zmienił)

### Sprint 7: Automatyczne generowanie arkuszy oceny
- Generowanie arkusza z danych (PDF lub DOCX), zgodnego z załącznikami do regulaminu
- Podgląd arkusza przed zatwierdzeniem

### Sprint 8: Dwuetapowa weryfikacja i wyniki
- Przebieg: pracownik → przełożony (etap 1) → komisja (etap 2)
- Statusy, komentarze i uzasadnienia
- Wyliczenie wyniku końcowego
- Zapoznanie się z wynikami przez pracownika

### Sprint 9: Administrator / Dział Kadr i historia ocen
- Monitorowanie osiągnięć wszystkich pracowników
- Wprowadzanie wybranych osiągnięć przez administratora
- Historia poprzednich ocen z podglądem treści dawnych wniosków

### Sprint 10: Powiadomienia i przypomnienia
- Powiadomienia e-mail i w aplikacji (zmiana statusu, brak kompletności, zbliżający się termin)
- Zadania cykliczne (Spring Scheduler) do przypomnień

### Sprint 11: Raporty, wdrożenie i podsumowanie
- Raporty indywidualne i zbiorcze (per jednostka, per kategoria), eksport do PDF/XLSX
- Testy end-to-end, końcowe poprawki
- Finalny obraz Dockera i instrukcja uruchomienia
- Analiza możliwości wykorzystania i komercjalizacji projektu
- Demo końcowe

---

## Dokumentacja i testy w trakcie projektu

| Co | Gdzie | Kiedy |
|----|-------|-------|
| DIP i wymagania | `docs/DIP.md` | Sprint 1 |
| Diagram ERD i opis architektury | `docs/` | Sprint 1 i przy zmianach |
| Dokumentacja API | Swagger (springdoc-openapi) | na bieżąco |
| Decyzje techniczne ("dlaczego tak") | `docs/decyzje.md` | na bieżąco |
| Instrukcja użytkownika per rola | `docs/instrukcja-*.md` | po każdym sprincie |
| Testy jednostkowe i funkcjonalne | w kodzie | razem z funkcją |
| Raporty z daily scrum, retrospektywy | GitHub Wiki | na bieżąco |

## Właściciel produktu w sprintach

Każdy z zespołu pełni tę rolę w co najmniej jednym sprincie.

| Sprint | Właściciel produktu |
|--------|---------------------|
| 1 | TODO |
| 2 | TODO |
| 3 | TODO |
| 4 | TODO |
| 5 | TODO |
| 6 | TODO |
| 7 | TODO |
| 8 | TODO |
| 9 | TODO |
| 10 | TODO |
| 11 | TODO |
