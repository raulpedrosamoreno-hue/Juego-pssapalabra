// Preguntas del rosco. type: 'Empieza por' o 'Contiene'
const QUESTIONS = [] = [
  { letter: "A", type: "Empieza por", clue: "Persona que dirige un partido y hace cumplir el reglamento", answer: "arbitro" },
  { letter: "B", type: "Empieza por", clue: "Deporte que se juega con canasta y balón naranja", answer: "baloncesto" },
  { letter: "C", type: "Empieza por", clue: "Saque desde la esquina del campo en fútbol", answer: "corner" },
  { letter: "D", type: "Empieza por", clue: "Jugador cuya misión principal es evitar los ataques rivales", answer: "defensa" },
  { letter: "E", type: "Empieza por", clue: "Deporte de combate que se practica con florete, espada o sable", answer: "esgrima" },
  { letter: "F", type: "Empieza por", clue: "Infracción que sanciona el árbitro", answer: "falta" },
  { letter: "G", type: "Empieza por", clue: "Lo que se celebra cuando el balón entra en la portería", answer: "gol" },
  { letter: "H", type: "Empieza por", clue: "Deporte con stick que se juega sobre hielo o hierba", answer: "hockey" },
  { letter: "I", type: "Contiene", clue: "Deporte que se practica sobre la nieve con dos tablas largas", answer: "esqui" },
  { letter: "J", type: "Empieza por", clue: "Arte marcial japonés cuyo nombre significa 'camino de la flexibilidad'", answer: "judo" },
  { letter: "K", type: "Empieza por", clue: "Arte marcial de golpes con manos y pies, de origen japonés", answer: "karate" },
  { letter: "L", type: "Contiene", clue: "Lanza que se arroja en una prueba de atletismo", answer: "jabalina" },
  { letter: "M", type: "Empieza por", clue: "Carrera de 42,195 kilómetros", answer: "maraton" },
  { letter: "N", type: "Empieza por", clue: "Deporte que se practica en piscina", answer: "natacion" },
  { letter: "Ñ", type: "Contiene", clue: "Deporte que consiste en ascender a las cumbres", answer: "montañismo" },
  { letter: "O", type: "Empieza por", clue: "Juegos internacionales que se celebran cada cuatro años", answer: "olimpiadas" },
  { letter: "P", type: "Empieza por", clue: "Jugador que defiende la portería y puede usar las manos", answer: "portero" },
  { letter: "Q", type: "Contiene", clue: "Deporte de raqueta y pelota que se juega contra una pared en un recinto cerrado", answer: "squash" },
  { letter: "R", type: "Empieza por", clue: "Deporte que se juega con balón ovalado", answer: "rugby" },
  { letter: "S", type: "Empieza por", clue: "Deporte de olas que se practica sobre una tabla", answer: "surf" },
  { letter: "T", type: "Empieza por", clue: "Deporte de raqueta con red, se juega en tierra batida o hierba", answer: "tenis" },
  { letter: "U", type: "Empieza por", clue: "Ropa que identifica a los jugadores de un equipo", answer: "uniforme" },
  { letter: "V", type: "Empieza por", clue: "Deporte con red alta donde se golpea el balón con las manos", answer: "voleibol" },
  { letter: "X", type: "Contiene", clue: "Deporte de combate con guantes en un ring", answer: "boxeo" },
  { letter: "Y", type: "Contiene", clue: "Embarcación ligera que se impulsa con una pala de doble hoja", answer: "kayak" },
  { letter: "Z", type: "Contiene", clue: "Juego de estrategia con rey, reina, torres y alfiles", answer: "ajedrez" },
];

function normalize(s) {
  return s.toLowerCase().trim().replace(/ñ/g, '@').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/@/g, 'ñ');
}
