function showMain() {
  document.getElementById('opening').style.opacity = 0;
  document.getElementById('opening').style.pointerEvents = 'none';
  document.getElementById('main').style.opacity = 1;
  document.getElementById('main').style.pointerEvents = 'auto';
}
// Create falling flowers
for (let i = 0; i < 30; i++) {
  let flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  flower.style.opacity = Math.random();
  flower.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(flower);
}