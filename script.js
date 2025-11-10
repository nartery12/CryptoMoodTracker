const moods = ['bullish', 'neutral', 'bearish'];

function loadData() {
  let data = JSON.parse(localStorage.getItem('cryptoMoods')) || { bullish: 0, neutral: 0, bearish: 0 };
  moods.forEach(m => document.getElementById(m).textContent = data[m]);
  return data;
}

function saveData(data) {
  localStorage.setItem('cryptoMoods', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  let data = loadData();

  document.querySelectorAll('.mood').forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      data[mood]++;
      saveData(data);
      loadData();
    });
  });
});
