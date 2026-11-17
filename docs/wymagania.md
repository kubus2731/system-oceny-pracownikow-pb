# Wymagania systemu

Dokument opisuje wymagania funkcjonalne (co system robi) i niefunkcjonalne (jak ma działać).
Numeracja pozwala odwoływać się do wymagań w zadaniach na GitHubie, np. „realizuje WF-07”.

Priorytety: **M** – musi być (Must), **S** – powinno być (Should), **C** – może być (Could).

---

## 1. Wymagania funkcjonalne

### 1.1. Wspólne dla wszystkich ról

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-01 | Użytkownik loguje się do systemu adresem e-mail i hasłem | M | 2 |
| WF-02 | Użytkownik może się wylogować | M | 2 |
| WF-03 | System pokazuje użytkownikowi tylko funkcje dostępne dla jego roli | M | 2 |
| WF-04 | Użytkownik może podejrzeć swój profil (imię, nazwisko, stanowisko, jednostka) | M | 2 |
| WF-05 | Użytkownik może zmienić swoje hasło | S | 2 |
| WF-06 | Użytkownik otrzymuje powiadomienia w aplikacji o zmianie statusu oceny | S | 10 |

### 1.2. Pracownik

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-10 | Pracownik dodaje osiągnięcie przez formularz zgodny z definicją systemu oceny (obszar → kategoria → osiągnięcie) | M | 4 |
| WF-11 | Pracownik edytuje i usuwa swoje osiągnięcia, dopóki nie potwierdzi kompletności | M | 4 |
| WF-12 | Pracownik może dołączyć załącznik (dowód) do osiągnięcia | S | 4 |
| WF-13 | System automatycznie liczy punkty w każdej kategorii | M | 5 |
| WF-14 | Pracownik widzi swój stan oceny: punkty, postęp względem minimów, okres oceny | M | 5 |
| WF-15 | Pracownik potwierdza kompletność zgłoszeń, po czym edycja zostaje zablokowana | M | 5 |
| WF-16 | Pracownik widzi wynik końcowy oceny i komentarze weryfikujących | M | 8 |
| WF-17 | Pracownik przegląda historię swoich poprzednich ocen | S | 9 |

### 1.3. Przełożony

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-20 | Przełożony ma wszystkie funkcje pracownika (wpisuje własne osiągnięcia) | M | 6 |
| WF-21 | Przełożony widzi listę swoich podwładnych i stan ich ocen | M | 6 |
| WF-22 | Przełożony może poprawić dane osiągnięć podwładnego; zmiana jest zapisywana w logu (kto, co, kiedy) | M | 6 |
| WF-23 | Przełożony wykonuje 1. etap weryfikacji: zatwierdza lub odrzuca ocenę z uzasadnieniem | M | 8 |

### 1.4. Komisja

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-30 | Komisja widzi oceny zatwierdzone w 1. etapie | M | 8 |
| WF-31 | Komisja wykonuje 2. etap weryfikacji i zatwierdza wynik końcowy | M | 8 |
| WF-32 | Komisja może dodać komentarz lub uzasadnienie do oceny | M | 8 |

### 1.5. Administrator / Dział Kadr

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-40 | Administrator zarządza kontami użytkowników i przypisuje im role | M | 2 |
| WF-41 | Administrator przypisuje pracownikom przełożonych i jednostki | M | 2 |
| WF-42 | Administrator definiuje systemy oceny: obszary, kategorie, osiągnięcia, punktację i minima | M | 3 |
| WF-43 | Administrator definiuje okresy oceny; kilka systemów oceny może działać równolegle | M | 3 |
| WF-44 | Zmiana definicji systemu oceny tworzy nową wersję i nie zmienia ocen już rozpoczętych | S | 3 |
| WF-45 | Administrator monitoruje stan osiągnięć wszystkich pracowników | M | 9 |
| WF-46 | Administrator może wprowadzić wybrane osiągnięcia w imieniu pracownika | S | 9 |
| WF-47 | Administrator importuje dane z plików (np. lista pracowników w CSV/XLSX) | C | 9 |
| WF-48 | Administrator wysyła przypomnienia o terminach; system wysyła je też automatycznie | S | 10 |
| WF-49 | Administrator generuje raporty indywidualne i zbiorcze (per jednostka, per kategoria) z eksportem do PDF/XLSX | M | 11 |

### 1.6. Arkusze oceny

| ID | Wymaganie | Priorytet | Sprint |
|----|-----------|-----------|--------|
| WF-50 | System generuje arkusz oceny w PDF zgodny ze wzorem z regulaminu | M | 7 |
| WF-51 | Użytkownik może podejrzeć arkusz przed zatwierdzeniem | S | 7 |

---

## 2. Wymagania niefunkcjonalne

### 2.1. Bezpieczeństwo

| ID | Wymaganie |
|----|-----------|
| WNF-01 | Hasła są przechowywane wyłącznie jako hash (BCrypt), nigdy jawnym tekstem |
| WNF-02 | Uwierzytelnianie odbywa się tokenem JWT z ograniczonym czasem ważności |
| WNF-03 | Każdy endpoint API sprawdza uprawnienia roli; pracownik nie ma dostępu do cudzych danych, a przełożony widzi tylko swoich podwładnych |
| WNF-04 | API nigdy nie zwraca haseł ani innych danych wrażliwych (odpowiedzi przez DTO) |
| WNF-05 | Dane wejściowe są walidowane po stronie backendu |
| WNF-06 | Zmiany danych ocen są zapisywane w logu zmian (kto, co, kiedy) |

### 2.2. Użyteczność

| ID | Wymaganie |
|----|-----------|
| WNF-10 | Interfejs jest w języku polskim |
| WNF-11 | Aplikacja działa w aktualnych wersjach przeglądarek Chrome, Firefox i Edge |
| WNF-12 | Interfejs jest czytelny na ekranach od 1280 px szerokości; nie jest wymagana wersja mobilna |
| WNF-13 | Formularze pokazują czytelne komunikaty błędów walidacji |

### 2.3. Wydajność

| ID | Wymaganie |
|----|-----------|
| WNF-20 | Typowe operacje (wyświetlenie listy, zapis formularza) trwają poniżej 2 sekund |
| WNF-21 | System obsługuje co najmniej kilkuset użytkowników (skala jednego wydziału / uczelni) |
| WNF-22 | Generowanie arkusza PDF trwa poniżej 5 sekund |

### 2.4. Niezawodność i dane

| ID | Wymaganie |
|----|-----------|
| WNF-30 | Zmiany schematu bazy wprowadzane są wyłącznie migracjami Flyway |
| WNF-31 | Zatwierdzone oceny i ich historia nie mogą zostać nadpisane ani usunięte |
| WNF-32 | Dane bazy są przechowywane w wolumenie Dockera i nie giną po restarcie kontenera |

### 2.5. Utrzymanie i wdrożenie

| ID | Wymaganie |
|----|-----------|
| WNF-40 | Cały system (baza, backend, frontend) uruchamia się poleceniem `docker compose up` |
| WNF-41 | Każdy Pull Request przechodzi automatyczny build i testy w GitHub Actions |
| WNF-42 | Kluczowa logika (liczenie punktów, weryfikacja, uprawnienia) jest pokryta testami |
| WNF-43 | API jest udokumentowane w Swaggerze (springdoc-openapi) |
| WNF-44 | Konfiguracja (adres bazy, hasła, sekret JWT) jest podawana przez zmienne środowiskowe, nie wpisana na sztywno w kod |
