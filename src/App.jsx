import { useState, useEffect } from "react";
import "./App.css";
import manuhFormatura from "./assets/manuh.formatura.jpg"; // imagem que você vai colocar depois

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsFinished(true);
        setTimeLeft({});
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">🎓 Manuela Soares Pacheco - INFO 6A</h1>

        {!isFinished ? (
          <>
            <h2>Contagem regressiva para a formatura!</h2>
            <div className="timer">
              <div className="box">
                <p>{timeLeft.days || 0}</p>
                <span>Dias</span>
              </div>
              <div className="box">
                <p>{timeLeft.hours || 0}</p>
                <span>Horas</span>
              </div>
              <div className="box">
                <p>{timeLeft.minutes || 0}</p>
                <span>Minutos</span>
              </div>
              <div className="box">
                <p>{timeLeft.seconds || 0}</p>
                <span>Segundos</span>
              </div>
            </div>
          </>
        ) : (
          <h2 className="final-message">
            Parabéns por chegar no dia mais esperado desses três anos, tudo de bomm! 💖
          </h2>
        )}

        <div className="text-section">
          <p>
            ✨ Depois da formatura, pretendo seguir meus sonhos, conquistar meus
            objetivos e aproveitar cada momento dessa nova fase da vida! Que o futuro
            traga muitas conquistas e sorrisos! 💫
          </p>
        </div>

        <img
          src={manuhFormatura}
          alt="Foto da Manuela - formatura"
          className="photo"
        />
      </div>
    </>
  );
}

export default App;
