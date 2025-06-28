let startTime = 0;
let elapsedTime = 0;
let timer = null;

function formatTime(ms) {
  const cs = Math.floor(ms / 10) % 100;
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(cs).padStart(2, '0')}`;
}

function updateDisplay() {
  const display = document.getElementById('time');
  if (display) display.textContent = formatTime(elapsedTime);
}

function start() {
  if (timer) return;
  startTime = Date.now() - elapsedTime;
  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  elapsedTime = 0;
  updateDisplay();
  const lapsList = document.getElementById('lapsList');
  if (lapsList) lapsList.innerHTML = '';
}

function lap() {
  if (!elapsedTime) return;
  const lapTime = formatTime(elapsedTime);
  const li = document.createElement('li');
  li.textContent = `Lap ${document.getElementById('lapsList').children.length + 1}: ${lapTime}`;
  document.getElementById('lapsList').appendChild(li);
  saveLap(lapTime);
}
