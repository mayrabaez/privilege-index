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
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Explora tu punto de partida</h1>
      <p>
        Responde estas preguntas para reflexionar sobre tu punto de partida en la vida.<br /><br />
        Este índice es una herramienta para conocerte mejor. Te ayuda a ver con más claridad qué ventajas has tenido y qué obstáculos podrías estar enfrentando. A veces no notamos todo lo que influye en nuestras oportunidades: el lugar donde nacimos, nuestro cuerpo, el acceso a estudios o el idioma que hablamos.<br /><br />
        <strong>No hay respuestas correctas, solo honestidad contigo mismx.</strong>
      </p>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "1.5rem" }}>
          <label>{q.label}</label>
          <br />
          <button
            className={answers[q.id] === true ? "selected-yes" : ""}
            onClick={() => handleAnswer(q.id, true)}
          >
            Sí
          </button>
          <button
            className={answers[q.id] === false ? "selected-no" : ""}
            onClick={() => handleAnswer(q.id, false)}
          >
            No
          </button>
        </div>
      ))}
      <button onClick={calculateScore} style={{ marginTop: "1rem" }}>Calcular mi puntaje</button>
      {score !== null && (
        <div className="results">
          <strong>Tu puntaje: {score} / 9</strong>
          <p>
            Este número es solo un punto de partida. No define quién eres ni lo que vales.<br /><br />
            Si tu puntaje es alto, piensa en cómo podrías usar lo que tienes para hacer que otras personas también accedan a lo que debería ser un derecho: educación, salud, seguridad, respeto, identidad.<br /><br />
            Si tu puntaje es bajo, no estás solx. Muchas personas viven barreras impuestas por el sistema, no por falta de esfuerzo.<br /><br />
            Todos tenemos historias distintas. ¿Qué parte de la tuya aún no habías visto como parte de este mapa? ¿Qué te gustaría transformar en tu entorno? ¿A quién podrías escuchar hoy con más empatía?
          </p>
          <button
            className="accent-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ocultar" : "¿Y ahora qué?"}
          </button>
          {showMore && (
            <div className="reflection">
              <p><strong>Aquí van algunas ideas para seguir reflexionando:</strong></p>
              <ul>
                <li><strong>¿Qué haría una persona que no puede acceder al servicio de salud porque su documento de identidad no refleja su identidad?</strong></li>
                <li><strong>¿Cómo imaginas que se sienten quienes no pudieron elegir qué estudiar, o no han podido estudiar aún?</strong></li>
                <li><strong>¿Cuáles de tus respuestas te sorprendieron más? ¿Qué historia hay detrás de ellas?</strong></li>
              </ul>
              <p><strong>La invitación es a que observes, converses y sigas aprendiendo.<br />No estás solx en esta reflexión.</strong></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

  );
}
