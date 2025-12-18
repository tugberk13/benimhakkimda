document.addEventListener("DOMContentLoaded", () => {

  // ===== SELECT ELEMENTS =====
  const enterOverlay = document.getElementById('enter-overlay');
  const chillAudio = document.getElementById('chill-audio');
  const cafeAudio = document.getElementById('cafe-audio');
  const kutisAudio = document.getElementById('kutis-audio');

  const clickSound = document.getElementById('click-sound');
  const hoverSound = document.getElementById('hover-sound');
  const popSound = document.getElementById('pop-sound');

  const pages = document.querySelectorAll('.page');
  const navButtons = document.querySelectorAll('nav button');
  const notebookItems = document.querySelectorAll('.notebook-item');
  const bigBtns = document.querySelectorAll('.big-btn');
  const backBtns = document.querySelectorAll('.back-btn');

  // ===== ENTER OVERLAY CLICK =====
  enterOverlay.addEventListener('click', () => {
    enterOverlay.style.display = 'none';
    if (chillAudio.paused) chillAudio.play();
    if (cafeAudio.paused) cafeAudio.play();
  });

  // ===== FUNCTION TO SHOW PAGE =====
  function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');

    // AUDIO CONTROL
    if (pageId === 'kutis') {
      // stop chill and cafe
      chillAudio.pause();
      cafeAudio.pause();
      // play Kutiş audio if not already playing
      if (kutisAudio.paused) kutisAudio.play();
    } else {
      // stop Kutiş audio
      if (!kutisAudio.paused) {
        kutisAudio.pause();
        kutisAudio.currentTime = 0;
      }
      // play chill and cafe only if overlay was clicked and not already playing
      if (enterOverlay.style.display === 'none') {
        if (chillAudio.paused) chillAudio.play();
        if (cafeAudio.paused) cafeAudio.play();
      }
    }
  }

  // ===== NAV BUTTONS =====
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      clickSound.play();
      const target = btn.getAttribute('data-page');
      showPage(target);
    });

    btn.addEventListener('mouseover', () => {
      hoverSound.play();
    });
  });

  // ===== NOTEBOOK ITEMS =====
  notebookItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      popSound.play();
      item.style.transform = 'scale(1.2)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
    });

    item.addEventListener('click', () => {
      clickSound.play();
      const target = item.getAttribute('data-page');
      showPage(target);
    });
  });

  // ===== BIG BUTTONS =====
  bigBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clickSound.play();
      const target = btn.getAttribute('data-page');
      showPage(target);
    });
  });

  // ===== BACK BUTTONS =====
  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clickSound.play();
      const target = btn.getAttribute('data-page');
      showPage(target);
    });
  });

});
