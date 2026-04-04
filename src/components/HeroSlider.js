
export function setupHeroSlider() {
    console.log('Hero Slider: Initializing with Modern Layout...');

    // Slide Data: Images and unique descriptions
    const slidesData = [
        {
            image: '/images/slider-1.jpg',
            description: "UNNAT BHARAT ABHIYAN: Empowering rural India through higher education and sustainable development."
        },
        {
            image: '/images/slider-2.jpg',
            description: "SVPCET NAGPUR: Bridging the gap between technology and rural needs for a better tomorrow."
        },
        {
            image: '/images/slider-3.jpg',
            description: "COMMUNITY ENGAGEMENT: Students and faculty working hand-in-hand with villagers to solve real-world problems."
        },
        {
            image: '/images/slider-4.jpg',
            description: "SUSTAINABLE GROWTH: Implementing eco-friendly solutions for agriculture, water management, and energy."
        }
    ];

    const heroContainer = document.getElementById('hero-bg');
    const descBox = document.getElementById('hero-description-box');
    const descText = document.getElementById('hero-description-text');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (!heroContainer) return;

    // Cleanup existing logic
    if (window.heroSliderInterval) clearInterval(window.heroSliderInterval);

    // Setup container
    heroContainer.innerHTML = '';
    heroContainer.className = 'absolute inset-0 z-0 overflow-hidden'; // Reset class base

    // Create Slide Elements
    const slideElements = slidesData.map((slide, index) => {
        const img = document.createElement('img');
        img.src = slide.image;
        img.alt = `Slide ${index + 1}`;
        img.className = 'absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out';
        img.style.opacity = '0'; // Start hidden
        img.style.zIndex = '1';
        heroContainer.appendChild(img);
        return img;
    });

    let currentIndex = 0;
    const intervalTime = 5000; // Slower for reading text
    let isTransitioning = false;

    // Function to update description text with simple animation
    const updateDescription = (index) => {
        if (!descBox || !descText) return;

        // Fade out
        descBox.classList.remove('opacity-100', 'translate-y-0');
        descBox.classList.add('opacity-0', 'translate-y-4');

        setTimeout(() => {
            descText.textContent = slidesData[index].description;

            // Fade in
            descBox.classList.remove('opacity-0', 'translate-y-4');
            descBox.classList.add('opacity-100', 'translate-y-0');
        }, 300); // Wait for fade out
    };

    const updateSlides = (newIndex) => {
        if (isTransitioning) return;
        isTransitioning = true;

        const incomingSlide = slideElements[newIndex];
        const outgoingSlide = slideElements[currentIndex];

        // Ensure incoming is properly set up
        incomingSlide.style.zIndex = '2';
        // Force reflow
        void incomingSlide.offsetWidth;

        // Start transition
        incomingSlide.style.opacity = '1';

        // Update text
        updateDescription(newIndex);

        setTimeout(() => {
            outgoingSlide.style.opacity = '0';
            outgoingSlide.style.zIndex = '1';
            isTransitioning = false;
        }, 1000); // Match CSS duration

        currentIndex = newIndex;
    };

    // Initial State
    slideElements[0].style.opacity = '1';
    slideElements[0].style.zIndex = '2';
    updateDescription(0);

    const nextSlideFunc = () => {
        updateSlides((currentIndex + 1) % slidesData.length);
    };

    const prevSlideFunc = () => {
        updateSlides((currentIndex - 1 + slidesData.length) % slidesData.length);
    };

    // Auto-play
    window.heroSliderInterval = setInterval(nextSlideFunc, intervalTime);

    // Controls
    const resetInterval = () => {
        clearInterval(window.heroSliderInterval);
        window.heroSliderInterval = setInterval(nextSlideFunc, intervalTime);
    };

    if (nextBtn) {
        nextBtn.onclick = () => {
            nextSlideFunc();
            resetInterval();
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            prevSlideFunc();
            resetInterval();
        };
    }
}
