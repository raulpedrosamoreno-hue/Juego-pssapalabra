// Sonidos generados con Web Audio (sin archivos externos)
let ctx = null;
const ac = () => (ctx = ctx || new AudioContext());
function tone(freq, start, dur, type = "sine", vol = 0.2) {
  const c = ac(); const o = c.createOscillator(); const g = c.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, c.currentTime + start);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + start + dur);
  o.connect(g).connect(c.destination); o.start(c.currentTime + start); o.stop(c.currentTime + start + dur);
}
const sfx = {
  correct: () => { tone(660, 0, 0.12, "triangle"); tone(880, 0.1, 0.12, "triangle"); tone(1320, 0.2, 0.25, "triangle"); },
  wrong: () => { tone(220, 0, 0.25, "sawtooth", 0.15); tone(150, 0.2, 0.4, "sawtooth", 0.15); },
  pass: () => { tone(500, 0, 0.08, "square", 0.08); tone(400, 0.09, 0.1, "square", 0.08); },
  whistle: () => { tone(2200, 0, 0.15, "sine", 0.15); tone(2400, 0.18, 0.35, "sine", 0.15); },
  tick: () => tone(1000, 0, 0.04, "square", 0.05),
  win: () => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.25, "triangle")),
};
