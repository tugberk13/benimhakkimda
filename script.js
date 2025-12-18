const pages = {
  home: 0,
  learn: 1,
  about: 2,
  credits: 3
};

let audioUnlocked = false;

function goPage(page) {
  document.getElementById("pages").style.transform =
    `translateX(-${pages[page] * 100}vw)`;

  document.getElementById("clickSound").play();
}

// Hover sounds
document.querySelectorAll("button, .name").forEach(el => {
  el.addEventListener("mouseenter", () => {
    document.getElementById("hoverSound").play();
  });
});

// Kutiş pop
document.querySelector(".kutis").addEventListener("mouseenter", () => {
  document.getElementById("popSound").play();
});

// ENTER SCREEN LOGIC
document.getElementById("enterScreen").addEventListener("click", () => {
  document.getElementById("enterScreen").style.display = "none";

  document.querySelectorAll(".blurred").forEach(el => {
    el.classList.remove("blurred");
  });

  document.getElementById("cafeSound").play();
  document.getElementById("chillMusic").play();

  audioUnlocked = true;
});
