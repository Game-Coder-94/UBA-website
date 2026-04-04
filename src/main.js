import './style.css'
import { setupNavbar } from './components/Navbar.js'
import { setupFooter } from './components/Footer.js'
import { setupHeroSlider } from './components/HeroSlider.js'

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupFooter();
  setupHeroSlider();

  // Loading Screen Logic
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBg = document.getElementById('loading-bg');
  const loadingPercent = document.getElementById('loading-percent');
  const loadingText = document.getElementById('loading-text');

  if (loadingScreen) {
    // Parallax Effect
    document.addEventListener('mousemove', (e) => {
      if (!loadingScreen.classList.contains('opacity-0')) {
        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;
        loadingBg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
      }
    });

    // Dynamic Text & Progress
    const phrases = [
      "Initializing village data...",
      "Connecting to rural network...",
      "Empowering communities...",
      "Analyzing sustainable growth...",
      "Unnat Bharat Abhiyan..."
    ];

    const minLoadTime = 1500; // 1.5 seconds for progress
    const intervalTime = 50; // Update every 50ms for smooth counter
    const steps = minLoadTime / intervalTime;
    let currentStep = 0;

    // Text Rotation
    let phraseIndex = 0;
    const textInterval = setInterval(() => {
      loadingText.style.opacity = '0';
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        loadingText.textContent = phrases[phraseIndex];
        loadingText.style.opacity = '1';
      }, 300);
    }, 600);

    // Progress Counter
    const progressInterval = setInterval(() => {
      currentStep++;
      const percent = Math.min(100, Math.round((currentStep / steps) * 100));
      loadingPercent.textContent = `${percent}%`;

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        clearInterval(textInterval);

        // Finish Loading
        window.addEventListener('load', () => {
          // specific check if already loaded or just ensure we run this after minimal time
          finishLoading();
        });
        // If window is already loaded by the time we finish our min timer:
        if (document.readyState === 'complete') {
          finishLoading();
        }
      }
    }, intervalTime);

    // Helper to finish loading
    let isFinished = false;
    function finishLoading() {
      if (isFinished) return;
      isFinished = true;

      loadingPercent.textContent = "100%";
      loadingText.textContent = "Ready";

      setTimeout(() => {
        loadingScreen.classList.add('opacity-0');
        setTimeout(() => {
          loadingScreen.remove();
        }, 500); // Wait for 500ms fade transition
      }, 100); // Brief 100ms pause at 100%
    }
  }
});

