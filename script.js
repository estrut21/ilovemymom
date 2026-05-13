/* Open envelope when clicked */
function openEnvelope() {
  const env = document.getElementById("envelope");
  if (env.classList.contains("open")) return;
  env.classList.add("open");

  // after letter slides up hide envelope and show card
  setTimeout(() => {
    document.getElementById('stage-envelope').classList.add('hidden-stage');
    document.getElementById('stage-envelope').classList.remove('flex');
    const card = document.getElementById('stage-card');
    card.classList.remove('hidden-stage');
    card.classList.add('flex', 'fade-in-up');
  }, 1600);
}

/* Flip card when clicked */
function flipCard() {
  document.getElementById("flipCard").classList.toggle("flipped");
}

/* Floating hearts in background */
const heartsContainer = document.getElementById('hearts');
const heartChars = ['♥', '♡', '✿', '❀'];

function spawnHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = (16 + Math.random() * 24) + 'px';
  h.style.animationDuration = (8 + Math.random() * 8) + 's';
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 16000);
}

setInterval(spawnHeart, 800);

// Seed a few right at the start so the page isn't empty
for (let i = 0; i < 6; i++) {
  setTimeout(spawnHeart, i * 200);
}

// Make the envelope stage a flex container on first load
document.getElementById('stage-envelope').classList.add('flex');