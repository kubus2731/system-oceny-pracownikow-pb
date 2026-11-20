# Jak pracujemy – instrukcja dla zespołu

Krótka ściąga: jak brać zadania, pisać kod i oddawać go do `main`.

## 1. Zadania (GitHub Projects)

Tablica: **Projects → System Oceny Pracowników PB → zakładka Board**

| Status | Znaczenie |
|--------|-----------|
| **Todo** | Zadanie czeka na rozpoczęcie |
| **In progress** | Ktoś nad nim pracuje |
| **In review** | Otwarty Pull Request, czeka na review |
| **Done** | Zmergowane do `main` |

- Każde zadanie to **issue** z przypisaną osobą, sprintem (Iteration) i kryteriami akceptacji.
- Na planowaniu każdy wpisuje do swoich zadań **Zakładany czas (h)**.
- Przy zamykaniu zadania uzupełniasz **Rzeczywisty czas (h)**, porównujemy je na retrospektywie.
- Nowe zadanie? Załóż issue w repo, samo trafi na tablicę.

## 2. Zaczynasz zadanie

1. Na tablicy w projekcie przeciągnij swoją kartę z **Todo** do **In progress**.
2. Wejdź w issue → po prawej **Development → Create a branch → Create branch**.
3. U siebie w terminalu (albo w IntelliJ):
   ```bash
   git fetch origin
   git checkout <nazwa-gałęzi>
   ```

## 3. Piszesz kod

- Commituj często, małymi kawałkami, z numerem issue w treści:
  ```bash
  git add .
  git commit -m "Dodanie formularza logowania (#6)"
  git push
  ```
- Nie pracujemy bezpośrednio na `main`, bo jest zablokowany.
- Zmiany w bazie robimy tylko **nową migracją** (`V5__...sql`, `V6__...sql`). Nigdy nie edytujemy migracji, które już są na `main`.

## 4. Kończysz zadanie

1. Pobierz najnowszy `main` i sprawdź, czy wszystko działa:
   ```bash
   git pull origin main
   ```
2. Zrób push i kliknij na GitHubie **Compare & pull request**.
3. W PR:
   - **tytuł:** co zrobiłeś
   - **opis:** krótko + **`Closes #numer-issue`** (np. `Closes #6`)
   - **Reviewers:** osoba z Twojej pary (niżej)
4. Karta sama przejdzie na **In review**.

## 5. Review

Każdy PR musi zatwierdzić **1 osoba** (nie autor).

| Autor | Reviewer |
|-------|----------|
| Jakub | Kinga |
| Kinga | Urszula / Jakub |
| Aleks | Kinga / Jakub |
| Yelizaveta | Adam |
| Adam | Yelizaveta |

- Reviewer odpowiada **w ciągu 1–2 dni**.
- Sprawdzasz: czy kod jest zrozumiały, czy spełnia kryteria z issue, czy nic oczywistego się nie psuje. Potem **Approve** albo komentarz z uwagami.
- Poprawki autor robi na tej samej gałęzi (commit + push), a PR aktualizuje się sam.

## 6. Merge

1. Po akceptacji: **Squash and merge** → **Delete branch**.
2. Issue zamknie się samo, a karta przejdzie na **Done**.
3. Uzupełnij w karcie **Rzeczywisty czas (h)**.
4. Lokalnie wróć na `main`:
   ```bash
   git checkout main
   git pull
   ```

## 7. Zasady w skrócie

- Jedno zadanie = jedno issue = jedna gałąź = jeden PR
- Zawsze `Closes #numer` w opisie PR
- Coś Cię blokuje? Napisz od razu na grupie, nie czekaj do końca sprintu
- Ustalenia zapisujemy w issue albo w `docs/`, nie tylko na czacie

## Uruchomienie projektu

**Backend + baza:**
```bash
docker compose up -d
./mvnw spring-boot:run        # Windows: mvnw.cmd spring-boot:run
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev                   # http://localhost:5173
```

Na Windowsie w PowerShellu błąd *„running scripts is disabled”* rozwiązuje jednorazowe:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
albo użycie `npm.cmd` zamiast `npm`.
