function nextSlide(num) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  document.getElementById('slide' + num).classList.add('active');
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const slide4 = document.getElementById("slide4");

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 80);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    slide4.innerHTML = `
      <h1>❤️ I’m truly honoured ❤️</h1>
      <p>
        From the moment you entered my life, You changed my life for the better.
        Being your Valentine isn’t just a statement, it means
        choosing you, appreciating you, and celebrating the love we share.<br><br>

        I appreciate you being in my life baby 😔❤️‍🔥 and thank you for trusting me with your heart, for loving me the way you do,
        and for making my world brighter just by being in it. I promise to keep
        trying to be the best that I can for you, supporting you, and loving you deeply no matter what my sweetie babyy 🥹 I Love You SOOO MUCH Baby, forever and always ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥.<br><br>

        I’m so proud to be yours. ❤️
      </p>
    `;
    launchHearts();
  });
}

function launchHearts() {
  for (let i = 0; i < 80; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
