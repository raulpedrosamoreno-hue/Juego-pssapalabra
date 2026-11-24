const TIME = 180;
const GOOD = ["¡GOLAZO!", "¡Canasta!", "¡Imparable!", "¡Crack!", "¡Ace!", "¡Récord!"];
const BAD = ["¡Fuera de juego!", "¡Al palo!", "¡Tarjeta amarilla!", "¡Ánimo, sigue!", "¡La próxima entra!"];
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const $ = (id) => document.getElementById(id);

let status = [], idx = 0, time = TIME, streak = 0, timer = null;
const board = $("board");

// Crear las letras en círculo
const letters = QUESTIONS.map((q, i) => {
  const a = (i / QUESTIONS.length) * Math.PI * 2 - Math.PI / 2;
  const el = document.createElement("div");
  el.className = "letter pending";
  el.textContent = q.letter;
  el.style.left = 50 + 42 * Math.cos(a) + "%";
  el.style.top = 50 + 42 * Math.sin(a) + "%";
  board.appendChild(el);
  return el;
});

function show(id) { ["intro", "play", "end"].forEach((s) => $(s).classList.toggle("hidden", s !== id)); }

function render() {
  letters.forEach((el, i) => { el.className = `letter ${status[i]}${i === idx && !$("play").classList.contains("hidden") ? " current" : ""}`; });
  $("nOk").textContent = status.filter((s) => s === "correct").length;
  $("nKo").textContent = status.filter((s) => s === "wrong").length;
  const q = QUESTIONS[idx];
  $("type").textContent = `${q.type} ${q.letter}`;
  $("clue").textContent = q.clue;
  $("timer").textContent = time;
  $("timer").classList.toggle("danger", time <= 10);
}

function flash(text, kind) {
  const f = document.createElement("div");
  f.className = `flash ${kind}`; f.textContent = text;
  board.appendChild(f); setTimeout(() => f.remove(), 1100);
}

function start() {
  status = QUESTIONS.map(() => "pending"); idx = 0; time = TIME; streak = 0;
  $("reveal").textContent = ""; $("score").classList.remove("hidden");
  show("play"); render(); $("answer").focus(); sfx.whistle();
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    if (time <= 10 && time > 0) sfx.tick();
    if (time <= 0) { time = 0; finish(false); }
    render();
  }, 1000);
}

function next() {
  for (let i = 1; i <= status.length; i++) {
    const j = (idx + i) % status.length;
    if (status[j] === "pending") { idx = j; render(); $("answer").focus(); return; }
  }
  finish(status.every((s) => s === "correct"));
}

function finish(win) {
  clearInterval(timer); show("end"); render();
  win ? sfx.win() : sfx.whistle();
  const c = status.filter((s) => s === "correct").length, n = QUESTIONS.length;
  $("medal").textContent = c === n ? "🏆" : c >= 18 ? "🥇" : c >= 10 ? "🥈" : "💪";
  $("final").textContent = `${c} / ${n}`;
  $("msg").textContent = c === n ? "¡ROSCO COMPLETO! ¡Eres un campeón!" : c >= 18 ? "¡Nivel profesional!" : c >= 10 ? "¡Buen partido! Sigue entrenando." : "¡Cada campeón empezó así! Otra vez.";
}

function pasapalabra() { sfx.pass(); flash("¡Pasapalabra!", "pass"); $("answer").value = ""; $("reveal").textContent = ""; next(); }

$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = $("answer").value;
  if (!val.trim()) return pasapalabra();
  const q = QUESTIONS[idx];
  const ok = normalize(val) === normalize(q.answer);
  status[idx] = ok ? "correct" : "wrong";
  if (ok) { sfx.correct(); streak++; flash(streak >= 3 ? `🔥 ¡Racha x${streak}!` : pick(GOOD), "good"); $("reveal").textContent = ""; }
  else { sfx.wrong(); streak = 0; flash(pick(BAD), "bad"); $("reveal").textContent = `Era: ${q.answer.toUpperCase()}`; }
  $("answer").value = ""; next();
});
$("passBtn").addEventListener("click", pasapalabra);
$("startBtn").addEventListener("click", start);
$("againBtn").addEventListener("click", start);
