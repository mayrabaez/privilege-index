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
    <p>
  Responde estas preguntas para reflexionar sobre tu punto de partida en la vida.<br /><br />
  Esta herramienta te ayuda a conocerte mejor. En unos segundos podrás ver con más claridad qué ventajas has tenido y qué obstáculos podrías estar enfrentando. A veces no notamos todo lo que influye en nuestras oportunidades: el lugar donde nacimos, nuestro cuerpo, el acceso a estudios o el idioma que hablamos.
  <br /><br />
  <strong>No hay respuestas correctas, solo honestidad contigo mismx.</strong>
    </p> 
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "1rem" }}>
          <label>{q.label}</label>
          <br />
         <button
  onClick={() => handleAnswer(q.id, true)}
  style={{
    marginRight: "1rem",
    backgroundColor: answers[q.id] === true ? "#4CAF50" : "#f0f0f0",
    color: answers[q.id] === true ? "#fff" : "#000",
    padding: "0.5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Sí
</button>
<button
  onClick={() => handleAnswer(q.id, false)}
  style={{
    backgroundColor: answers[q.id] === false ? "#f44336" : "#f0f0f0",
    color: answers[q.id] === false ? "#fff" : "#000",
    padding: "0.5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  No
</button>

        </div>
      ))}
      <button onClick={calculateScore} style={{ marginTop: "1rem" }}>Calcular mi puntaje</button>
      {score !== null && (
        <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
  Tu puntaje de privilegio: {score} / 9
  <p style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
    Este número refleja qué tantas ventajas o barreras podrías haber tenido en tu camino. <br /><br />
    Si tu puntaje es alto, no es algo de lo que te debas sentir culpable. Significa que probablemente has tenido acceso a oportunidades, espacios seguros o apoyos que otras personas aún están luchando por alcanzar. <br /><br />
    Si tu puntaje es bajo, no define tu valor. Dice más sobre el sistema en el que has tenido que moverte que sobre tus capacidades. <br /><br />
    Este índice no es una etiqueta. Es una invitación a mirar tu historia con más conciencia y, ojalá, con más compasión hacia ti y hacia las demás personas.
  </p>
        </div>

      )}
    </div>
  );
}
