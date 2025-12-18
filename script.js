const enterOverlay = document.getElementById("enter-overlay");
const app = document.getElementById("app");

const cafeAudio = document.getElementById("cafe-audio");
const chillAudio = document.getElementById("chill-audio");
const kutisAudio = document.getElementById("kutis-audio");

const clickSound = document.getElementById("click-sound");
const hoverSound = document.getElementById("hover-sound");
const popSound = document.getElementById("pop-sound");

const pages = document.querySelectorAll(".page");

/* ENTER CLICK */
enterOverlay.addEventListener("click", () => {
  enterOverlay.classList.add("hidden");
  app.classList.add("visible");

  cafeAudio.play();
  chillAudio.play();
});

/* PAGE SWITCHING */
function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  clickSound.play();

  if (id === "kutis") {
    chillAudio.pause();
    kutisAudio.play();
  } else {
    kutisAudio.pause();
    kutisAudio.currentTime = 0;
    chillAudio.play();
  }
}

/* NAV + ITEMS */
document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", () => {
    showPage(el.dataset.page);
    popSound.play();
  });

  el.addEventListener("mouseenter", () => {
    hoverSound.play();
  });
});
