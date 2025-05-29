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
  const [showMore, setShowMore] = useState(false);

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
      <h1>Explora tu punto de partida</h1>
      <p>
        Responde estas preguntas para reflexionar sobre tu punto de partida en la vida.<br /><br />
        Este índice es una herramienta para conocerte mejor. Te ayuda a ver con más claridad qué ventajas has tenido y qué obstáculos podrías estar enfrentando. A veces no notamos todo lo que influye en nuestras oportunidades: el lugar donde nacimos, nuestro cuerpo, el acceso a estudios o el idioma que hablamos.<br /><br />
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
          Tu puntaje: {score} / 9
          <p style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
            Este número es solo un punto de partida. No define quién eres ni lo que vales. <br /><br />
            Si tu puntaje es alto, piensa en cómo podrías usar lo que tienes para hacer que otras personas también accedan a lo que debería ser un derecho: educación, salud, seguridad, respeto, identidad. <br /><br />
            Si tu puntaje es bajo, no estás solx. Muchas personas viven barreras impuestas por el sistema, no por falta de esfuerzo. <br /><br />
            Todos tenemos historias distintas. ¿Qué parte de la tuya aún no habías visto como parte de este mapa? ¿Qué te gustaría transformar en tu entorno? ¿A quién podrías escuchar hoy con más empatía?
          </p>
          <button onClick={() => setShowMore(!showMore)} style={{ marginTop: "1rem" }}>
            {showMore ? "Ocultar" : "¿Y ahora qué?"}
          </button>
          {showMore && (
            <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
              <p>
                Aquí van algunas ideas para seguir reflexionando:
              </p>
              <ul>
                <li>¿Qué harías si una persona no puede acceder a salud porque su documento de identidad no refleja su identidad?</li>
                <li>¿Cómo imaginas que se sienten quienes no pudieron elegir qué estudiar, o no han podido estudiar aún?</li>
                <li>¿Cuáles de tus respuestas te sorprendieron más? ¿Qué historia hay detrás de ellas?</li>
              </ul>
              <p>
                La invitación es a que observes, converses y sigas aprendiendo. No estás solx en esta reflexión.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
