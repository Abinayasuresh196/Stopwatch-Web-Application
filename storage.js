function saveLap(time) {
  let history = JSON.parse(localStorage.getItem('lapHistory')) || [];
  history.push(time);
  localStorage.setItem('lapHistory', JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem('lapHistory')) || [];
  const list = document.getElementById('historyList');
  list.innerHTML = '';
  history.forEach((time, i) => {
    const li = document.createElement('li');
    li.textContent = `Lap ${i + 1}: ${time}`;
    list.appendChild(li);
  });
}

function clearHistory() {
  localStorage.removeItem('lapHistory');
  loadHistory();
}
