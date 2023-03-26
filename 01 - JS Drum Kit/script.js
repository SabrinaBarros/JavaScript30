window.addEventListener('keydown', (e) => {
  const key = document.getElementById(`${e.code}`);
  const audio = document.querySelector(`audio[data-key='${e.code}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('key--on');

  setTimeout(() => {
    key.classList.remove('key--on');
  }, 180);

});