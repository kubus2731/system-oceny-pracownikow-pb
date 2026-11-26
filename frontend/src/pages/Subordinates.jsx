import "./Subordinates.css";

function Subordinates() {
  // Tymczasowe dane – później pobierzemy je z /api/me/subordinates
  const subordinates = [
    {
      id: 1,
      firstName: "Jan",
      lastName: "Nowak",
      position: "Asystent",
      unit: "Wydział Informatyki",
    },
    {
      id: 2,
      firstName: "Maria",
      lastName: "Wiśniewska",
      position: "Adiunkt",
      unit: "Wydział Informatyki",
    },
  ];

  return (
    <section className="subordinates">
      <header className="subordinates-header">
        <div>
          <h2>
            Moi podwładni
            <span className="subordinates-count">
              {subordinates.length}
            </span>
          </h2>

          <p>Pracownicy przypisani do Ciebie jako przełożonego.</p>
        </div>
      </header>

      {subordinates.length === 0 ? (
        <div className="subordinates-empty">
          <h3>Brak podwładnych</h3>
          <p>
            Lista pojawi się tutaj, gdy zostaną przypisani do Ciebie
            pracownicy.
          </p>
        </div>
      ) : (
        <div
          className="subordinates-table-wrapper"
          role="region"
          aria-label="Lista podwładnych — przewijana tabela"
          tabIndex={0}
        >
          <table className="subordinates-table">
            <caption className="subordinates-visually-hidden">
              Moi podwładni — dane pracowników
            </caption>

            <thead>
              <tr>
                <th scope="col">Imię</th>
                <th scope="col">Nazwisko</th>
                <th scope="col">Stanowisko</th>
                <th scope="col">Jednostka</th>
              </tr>
            </thead>

            <tbody>
              {subordinates.map((person) => (
                <tr key={person.id}>
                  <td>{person.firstName}</td>
                  <td className="subordinates-last-name">
                    {person.lastName}
                  </td>
                  <td>
                    <span className="subordinates-position">
                      {person.position}
                    </span>
                  </td>
                  <td>{person.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Subordinates;