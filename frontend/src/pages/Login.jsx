
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Wypełnij wszystkie pola.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Wpisz poprawny adres e-mail.");
      return;
    }

    setError("Logowanie nie zostało jeszcze podłączone do serwera.");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1>Logowanie</h1>
        <p>System Oceny Okresowej Pracowników</p>

        <label htmlFor="email">Adres e-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Wpisz adres e-mail"
        />

        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Wpisz hasło"
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;