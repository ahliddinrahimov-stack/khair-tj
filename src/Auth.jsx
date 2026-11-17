
import { useState } from "react";

export default function Auth({ onBack }) {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>♡ KHAIR TJ</h1>
        <p>Together for Humanity</p >

        <h2>{isRegister ? "Сабти ном" : "Воридшавӣ"}</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          {isRegister && (
            <input
              type="text"
              placeholder="Ному насаб"
              required
            />
          )}

          <input
            type="email"
            placeholder="Почтаи электронӣ"
            required
          />

          <input
            type="password"
            placeholder="Рамз"
            required
          />

          <button type="submit">
            {isRegister ? "Сабти ном кардан" : "Ворид шудан"}
          </button>
        </form>

        <p>
          {isRegister
            ? "Аллакай аккаунт доред?"
            : "Ҳоло аккаунт надоред?"}
        </p >

        <button
          type="button"
          className="switch-button"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Воридшавӣ" : "Сабти ном"}
        </button>

        <hr />

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Бозгашт ба саҳифаи асосӣ
        </button>
      </div>

      <style>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0f7f3;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .auth-card {
          background: white;
          width: 100%;
          max-width: 400px;
          padding: 35px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 5px 25px #00000012;
        }

        .auth-card h1 {
          color: #087443;
        }

        .auth-card input {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
        }

        .auth-card form button {
          width: 100%;
          padding: 14px;
          margin-top: 15px;
          background: #087443;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .switch-button, .back-button {
          color: #087443;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 15px;
          padding: 10px;
        }

        .back-button {
          color: #555;
        }
      `}</style>
    </div>
  );
}
