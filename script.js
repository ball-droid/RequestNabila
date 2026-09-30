const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");
const celebration = document.getElementById("celebration");

const particles = ["✦", "✧", "✿", "❀", "♡", "★", "·"];

function burst(type) {
  const count = type === "open" ? 55 : 42;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = `particle particle-${type}`;
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 130 + Math.random() * 260;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 30;

    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--y", `${y}px`);
    particle.style.setProperty("--size", `${12 + Math.random() * 20}px`);
    particle.style.setProperty("--delay", `${Math.random() * 0.16}s`);
    particle.style.setProperty("--rotation", `${-180 + Math.random() * 360}deg`);
    particle.style.left = `${48 + (Math.random() - 0.5) * 16}%`;
    particle.style.top = `${48 + (Math.random() - 0.5) * 12}%`;

    celebration.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

envelope.addEventListener("click", () => {
  const willOpen = !envelope.classList.contains("open");
  envelope.classList.toggle("open");
  hint.style.opacity = willOpen ? "0" : "1";
  burst(willOpen ? "open" : "close");
});
