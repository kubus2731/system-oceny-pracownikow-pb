# Dokument inicjujący projekt (DIP)

**Projekt:** System oceny okresowej nauczycieli akademickich
**Zespół:** Jakub Matusiewicz, Kinga Kardasz, Adam Boryszewski, Yelizaveta Anoshyna, Urszula Łokić
**Data:** 27.10.2026r.

---

## 1. Cel projektu

Aplikacja internetowa, w której nauczyciele akademiccy wpisują swoje osiągnięcia, a przełożeni i komisja je weryfikują i oceniają.

> Dopisać 1–2 zdania własnymi słowami, po co ten system powstaje.

## 2. Problem, który rozwiązujemy

TODO

> Jak wygląda ocena teraz? Co jest w niej uciążliwe lub ryzykowne (np. papierowe arkusze, ręczne liczenie punktów, pilnowanie terminów)?

## 3. Użytkownicy

| Rola | Co robi w systemie |
|------|--------------------|
| Pracownik | Wpisuje osiągnięcia, sprawdza swój stan i wyniki oceny |
| Przełożony | Wpisuje własne osiągnięcia, poprawia dane podwładnych, wykonuje 1. etap weryfikacji |
| Komisja | Wykonuje 2. etap weryfikacji |
| Administrator / Dział Kadr | Monitoruje osiągnięcia, wprowadza wybrane dane, wysyła przypomnienia, robi raporty |

**Użytkownik końcowy, z którym będziemy konsultować wymagania:** TODO

> Kto to będzie? Najlepiej realna osoba, np. ktoś z kadr lub dziekanatu albo nauczyciel akademicki.

## 4. Zakres: co system będzie robił

- Ewidencja osiągnięć pracownika
- Podgląd aktualnego stanu oceny i okresu oceny
- Potwierdzenie kompletności zgłoszeń
- Definiowanie systemów oceny (kilka równolegle), minima oceny
- Hierarchiczne formularze: obszar → kategoria → osiągnięcia, 3 główne kategorie punktowane
- Automatyczne generowanie arkuszy oceny
- Dwuetapowa weryfikacja: przełożony, potem komisja
- Historia poprzednich ocen
- Powiadomienia i przypomnienia
- Raporty indywidualne i zbiorcze

## 5. Poza zakresem: czego system nie będzie robił

TODO

> Wypisać rzeczy, których świadomie nie robicie, żeby projekt się nie rozrósł (np. aplikacja mobilna, integracja z systemem kadrowym uczelni).

## 6. Technologie

- Backend: Java, Spring (Spring Boot, Spring Security)
- Baza danych: PostgreSQL
- Frontend: React
- Uruchamianie: Docker (Docker Compose)
- Kontrola wersji: GitHub
- Organizacja pracy: GitHub Projects
- Dokumentacja: folder `docs/` w repozytorium, GitHub Wiki

## 7. Zespół i podział pracy

| Osoba | Obszar (grupa funkcjonalności) |
|-------|--------------------------------|
| TODO | TODO |
| TODO | TODO |
| TODO | TODO |

> Każda osoba ma swoją grupę funkcjonalności (np. pracownik, przełożony, administrator, definiowanie systemów oceny), tutaj trzeba ustalić podział bo bez tego to nie ma sensu.

Rola właściciela produktu zmienia się między sprintami (patrz `plan-sprintow.md`).

## 8. Plan i harmonogram

11 sprintów: 5 w semestrze zimowym, 6 w letnim. Szczegóły w `plan-sprintow.md`. Plan jest orientacyjny i może się zmieniać.

## 9. Ryzyka

| Ryzyko | Co zrobimy, jeśli wystąpi |
|--------|---------------------------|
| Model systemów oceny okaże się zbyt skomplikowany | TODO (np. uproszczenie na początek) |
| TODO | TODO |
| TODO | TODO |

## 10. Sposób pracy( do przemyślenia)

- Metodyka: Scrum, sprinty, daily scrum, sprint planning / review / retrospective
- Zadania szacujemy w godzinach i porównujemy z czasem rzeczywistym na retrospektywie
- Każde zadanie to osobna gałąź i Pull Request przeglądany przez drugą osobę
- Dokumentację i testy robimy w trakcie sprintów

## 11. Kryteria sukcesu( troche czat pomagał, ale to tylko taki wstęp)

TODO

> Po czym poznacie, że projekt się udał? (np. pracownik może wpisać osiągnięcia, przejść dwa etapy weryfikacji i dostać wygenerowany arkusz oceny)
