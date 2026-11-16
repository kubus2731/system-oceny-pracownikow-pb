# Dokument inicjujący projekt (DIP)

**Projekt:** System oceny okresowej nauczycieli akademickich
**Zespół:** Jakub Matusiewicz, Kinga Kardasz, Adam Boryszewski, Yelizaveta Anoshyna, Urszula Łokić
**Data:** 27.10.2026r.

---

## 1. Cel projektu

Celem projektu jest stworzenie aplikacji internetowej, która przenosi okresową ocenę
nauczycieli akademickich z papierowych arkuszy do systemu online. Pracownik wpisuje swoje
osiągnięcia przez formularze, system sam liczy punkty i generuje arkusz oceny, a przełożony
i komisja weryfikują go w tym samym miejscu. Dzięki temu ocena jest szybsza, prostsza
i mniej podatna na błędy.

## 2. Problem, który rozwiązujemy

Obecnie ocena okresowa opiera się na papierowych arkuszach, co powoduje kilka problemów:

- **Ręczne liczenie punktów:** łatwo o pomyłkę, a jej wykrycie wymaga ponownego przeliczenia.
- **Uciążliwe wypełnianie:** pracownik musi zbierać osiągnięcia z kilku lat i przepisywać je do arkusza.
- **Obieg dokumentów:** arkusz przechodzi przez przełożonego i komisję, a każda poprawka
  oznacza wydruk i ponowne podpisy.
- **Brak bieżącego podglądu:** pracownik nie widzi na bieżąco, ile punktów już ma
  i czy spełnia minima.
- **Trudny dostęp do historii:** odnalezienie poprzednich ocen wymaga przeszukiwania archiwum.

System rozwiązuje to w ten sposób, że osiągnięcia są wpisywane przez formularze, punkty
liczone automatycznie, weryfikacja odbywa się online, a historia ocen jest zawsze dostępna.

## 3. Użytkownicy

| Rola | Co robi w systemie |
|------|--------------------|
| Pracownik | Wpisuje osiągnięcia, sprawdza swój stan i wyniki oceny |
| Przełożony | Wpisuje własne osiągnięcia, poprawia dane podwładnych, wykonuje 1. etap weryfikacji |
| Komisja | Wykonuje 2. etap weryfikacji |
| Administrator / Dział Kadr | Monitoruje osiągnięcia, wprowadza wybrane dane, wysyła przypomnienia, robi raporty |

**Użytkownik końcowy, z którym będziemy konsultować wymagania:** dr inż. Maciej Kopczyński

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

- **Integracja z systemami uczelnianymi** (np. system kadrowy, USOS, baza publikacji):
  dane wprowadzane są ręcznie lub przez administratora.
- **Aplikacja mobilna ani desktopowa:** system jest wyłącznie aplikacją internetową
  działającą w przeglądarce.
- **Ocena studentów i ankiety studenckie:** system obsługuje tylko ocenę pracowników,
  wyniki ankiet mogą być jedynie wpisywane jako osiągnięcie.
- **Podpis elektroniczny / kwalifikowany:** zatwierdzanie odbywa się przez akcje
  w systemie, nie przez prawnie wiążący e-podpis.
- **Obsługa płac, awansów i umów:** wynik oceny jest tylko informacją, system
  nie podejmuje decyzji kadrowych.

## 6. Technologie

- Backend: Java, Spring (Spring Boot, Spring Security)
- Baza danych: PostgreSQL
- Frontend: React
- Uruchamianie: Docker (Docker Compose)
- Kontrola wersji: GitHub
- Organizacja pracy: GitHub Projects
- Dokumentacja: folder `docs/` w repozytorium, GitHub Wiki

## 7. Zespół i podział pracy

Zespół dzieli się na część backendową i frontendową, a pracę koordynuje Jakub Matusiewicz

| Osoba | Rola w zespole | Obszar odpowiedzialności |
|-------|----------------|--------------------------|
| Jakub Matusiewicz | Team / Tech Lead | Architektura systemu, Spring Security (logowanie, JWT, role), przegląd Pull Requestów, koordynacja pracy |
| Kinga Kardasz | Backend | Rdzeń aplikacji, model i migracje bazy danych, przebieg oceny (statusy, dwuetapowa weryfikacja) |
| Urszula Łokić | Backend | Import danych, generowanie arkuszy oceny (PDF), raporty i analityka |
| Yelizaveta Anoshyna | Frontend | Główny interfejs, formularze osiągnięć, przebieg oceny po stronie użytkownika |
| Adam Boryszewski | Frontend / DevOps | Panel administratora / Działu Kadr, wykresy (Chart.js), Docker i Docker Compose |

> Każda osoba ma swoją grupę funkcjonalności (np. pracownik, przełożony, administrator, definiowanie systemów oceny), tutaj trzeba ustalić podział bo bez tego to nie ma sensu.

Rola właściciela produktu zmienia się między sprintami (patrz `plan-sprintow.md`).

## 8. Plan i harmonogram

11 sprintów: 5 w semestrze zimowym, 6 w letnim. Szczegóły w `plan-sprintow.md`. Plan jest orientacyjny i może się zmieniać.

## 9. Ryzyka

| Ryzyko | Co zrobimy, jeśli wystąpi |
|--------|---------------------------|
| Mało czasu przez inne przedmioty i kolokwia | Dzielimy pracę na małe zadania (max kilka godzin), w każdym sprincie zostawiamy rezerwę, a w okresie sesji planujemy mniej zadań |
| Nieznajomość Reacta przez część zespołu | Na start prosty szkielet frontendu przygotowany przez osobę, która zna React; pozostali uczą się na małych zadaniach; każdy PR przegląda ktoś bardziej doświadczony |
| Niejasny regulamin oceny | Wcześnie konsultujemy wątpliwości z użytkownikiem końcowym; niejasne zasady spisujemy w `docs/decyzje.md` razem z przyjętym założeniem |
| Zmiana regulaminu oceny w trakcie projektu | Definicje systemów oceny są wersjonowane, więc nowe zasady nie psują starych ocen (Sprint 3) |
| Model systemów oceny okaże się zbyt skomplikowany | Na początek obsługujemy jeden system oceny, kolejne dodajemy później |

## 10. Sposób pracy

- Metodyka: Scrum, sprinty, daily scrum, sprint planning / review / retrospective
- Zadania szacujemy w godzinach i porównujemy z czasem rzeczywistym na retrospektywie
- Każde zadanie to osobna gałąź i Pull Request przeglądany przez drugą osobę
- Dokumentację i testy robimy w trakcie sprintów

## 11. Kryteria sukcesu

Projekt uznajemy za udany, jeśli:

1. **Pełny proces oceny działa w systemie:** pracownik wpisuje osiągnięcia, potwierdza
   kompletność, przełożony i komisja zatwierdzają ocenę, a pracownik widzi wynik.
2. **Punkty liczą się automatycznie i poprawnie:** wynik zgadza się z ręcznym przeliczeniem
   według regulaminu dla przykładowych danych testowych.
3. **System generuje arkusz oceny** (PDF) zgodny z wzorem z regulaminu.
4. **Każda rola widzi tylko to, co powinna:** pracownik nie ma dostępu do cudzych danych,
   a przełożony widzi tylko swoich podwładnych.
5. **Aplikację da się łatwo uruchomić:** cały system startuje poleceniem
   `docker compose up`, według instrukcji z README.
6. **Kod jest sprawdzony:** kluczowe funkcje (liczenie punktów, weryfikacja, uprawnienia)
   są pokryte testami, a CI przechodzi na zielono.
7. **Użytkownik końcowy potwierdza,** że system jest wygodniejszy od papierowych arkuszy
   (krótka prezentacja lub test z udziałem tej osoby).
