import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import { apiRequest } from "../services/api";
import Subordinates from "./Subordinates";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "Anna",
    lastName: "Kowalska",
    position: "Adiunkt",
    unit: "Wydział Informatyki",
    role: "SUPERVISOR",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Później odkomentujemy pobieranie danych z backendu:
  /*
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const data = await apiRequest("/api/me");
        setUser(data);
      } catch (err) {
        setError("Nie udało się pobrać danych użytkownika.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);
  */

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
  <main className="profile-page">
    <header className="profile-page-header">
      <div>
        <span className="profile-eyebrow">MOJE KONTO</span>
        <h1>Profil użytkownika</h1>
        <p>Twoje dane w Systemie Oceny Okresowej Pracowników.</p>
      </div>
    </header>

    {loading && (
      <p className="profile-message" role="status">
        Ładowanie danych...
      </p>
    )}

    {error && (
      <p className="profile-message profile-message--error" role="alert">
        {error}
      </p>
    )}

    <section className="profile-card" aria-labelledby="profile-name">
      <div className="profile-cover" />

      <div className="profile-identity">
        <div className="profile-avatar" aria-hidden="true">
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </div>

        <div className="profile-identity-text">
          <h2 id="profile-name">
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.position}</p>
        </div>

        <span className="profile-role">
          {user.role === "SUPERVISOR" ? "Przełożony" : "Pracownik"}
        </span>
      </div>

      <div className="profile-details">
        <div className="profile-section-heading">
          <h3>Dane pracownika</h3>
          <p>Podstawowe informacje o Twoim zatrudnieniu.</p>
        </div>

        <dl className="profile-data">
          <div>
            <dt>Imię</dt>
            <dd>{user.firstName}</dd>
          </div>

          <div>
            <dt>Nazwisko</dt>
            <dd>{user.lastName}</dd>
          </div>

          <div>
            <dt>Stanowisko</dt>
            <dd>{user.position}</dd>
          </div>

          <div>
            <dt>Jednostka organizacyjna</dt>
            <dd>{user.unit}</dd>
          </div>
        </dl>
      </div>
    </section>

    {user.role === "SUPERVISOR" && (
      <section
        className="profile-subordinates"
        aria-label="Podlegli pracownicy"
      >
        <Subordinates />
      </section>
    )}

    <footer className="profile-session">
      <div>
        <h3>Sesja użytkownika</h3>
        <p>Kończysz pracę? Wyloguj się ze swojego konta.</p>
      </div>

      <button
        className="profile-logout"
        type="button"
        onClick={handleLogout}
      >
        Wyloguj się
      </button>
    </footer>
  </main>
);

}

export default Profile;