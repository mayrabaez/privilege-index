import { useState } from "react";

const questions = [
  { id: "location", label: "¿Vives en una ciudad principal (por ejemplo, Bogotá, Medellín)?", weight: 1 },
  { id: "income", label: "¿Ganas más de 5 millones de COP al mes?", weight: 1 },
  { id: "education", label: "¿Has completado una carrera universitaria o estudios superiores?", weight: 1 },
  { id: "english", label: "¿Hablas inglés con fluidez?", weight: 1 },
  { id: "race", label: "¿Te identificas como afrocolombiano/a o indígena?", weight: -1 },
  { id: "gender", label: "¿Eres mujer o persona no binaria?", weight: -1 },
  { id: "digital", label: "¿Tienes acceso diario a internet y habilidades digitales avanzadas?", weight: 1 },
  { id: "networks", label: "¿Tienes redes profesionales o internacionales?", weight: 1 },
  { id: "health", label: "¿Vives con condiciones crónicas de salud o discapacidad?", weight: -1 },
  { id: "body", label: "¿Has experimentado discriminación por tu tamaño corporal?", weight: -1 },
  { id: "housing", label: "¿Vives en una vivienda segura y estable?", weight: 1 },
  { id: "lgbtq", label: "¿Te identificas como parte de la comunidad LGBTQ+?", weight: -1 },
  { id: "family_background", label: "¿Tus padres tienen educación universitaria o ingresos altos?", weight: 1 },
  { id: "violence", label: "¿Has vivido en una zona afectada por conflicto armado o violencia estructural?", weight: -1 }
];

export default function PrivilegeIndexApp() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach(({ id, weight }) => {
      if (answers[id]) {
        total += weight;
      }
    });
    setScore(total);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Índice de Privilegio en Colombia</h1>
      <p>Responde las preguntas para conocer tu posición frente a las estructuras de acceso en el país.</p>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "1rem" }}>
          <label>{q.label}</label>
          <br />
          <button onClick={() => handleAnswer(q.id, true)} style={{ marginRight: "1rem" }}>
            Sí
          </button>
          <button onClick={() => handleAnswer(q.id, false)}>No</button>
        </div>
      ))}
      <button onClick={calculateScore} style={{ marginTop: "1rem" }}>Calcular mi puntaje</button>
      {score !== null && (
        <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
          Tu puntaje de privilegio: {score} / 9
          <p style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
            (Rango: -6 a +9 — mientras más alto, más acceso sistémico tienes)
          </p>
        </div>
      )}
    </div>
  );
}
