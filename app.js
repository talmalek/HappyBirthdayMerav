/* ==========================================================================
   Lacoste Polo Atelier Experience - 3-Layer Controller Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Birthday Wishes Collection (Dedicated to Merav)
    const MERAV_WISHES = [
        { category: "Romantic Love", text: "Happy Birthday to my gorgeous wife, Merav! Every single day with you is a gift, and I am so grateful to share my life with you. ❤️" },
        { category: "Beauty & Grace", text: "Your smile brightens up every room and your warmth touches everyone around you. You get more beautiful with every passing year! ✨" },
        { category: "Celebration", text: "To the most incredible woman born on September 13th, 1981 — may your birthday be as extra, bright, and joyous as you are! 🎂🎈" },
        { category: "Appreciation", text: "Thank you for bringing so much laughter, tenderness, and love into our home. Wishing you endless happiness today and always! 💖" },
        { category: "Pure Joy", text: "May this year bring you all the love you give out doubled, all your biggest dreams fulfilled, and endless moments of joy! 🌟" },
        { category: "Compliment", text: "Merav, your elegance, your kindness, and your mesmerizing eyes make my head turn every single day. I'm the luckiest man alive! 🥰" },
        { category: "Forever & Always", text: "Here's to celebrating your past, cherishing our present, and building an even more amazing future together. Happy Birthday, my love! 🥂" },
        { category: "Playful Wish", text: "Today you are the absolute Queen! Relax, enjoy all the love, eat extra cake, and let us spoil you completely! 👑🍰" },
        { category: "Soulmate", text: "Life with you is a continuous adventure filled with sweetness. Happy Birthday to the love of my life, Merav! 🌹" },
        { category: "Radiance", text: "Keep shining your wonderful light on the world! Your energy is infectious and your heart is pure gold. ✨" },
        { category: "Warmth & Home", text: "With you, anywhere feels like home. Thank you for your unwavering love and for being the center of our world. Happy Birthday! 🏠❤️" },
        { category: "Celebration", text: "Pop the champagne, throw the confetti! Today we celebrate the wonderful day you came into this world. Cheers to you, beautiful! 🍾🎉" },
        { category: "Romantic Love", text: "No matter how many candles are on the cake, my love for you burns brighter than ever. Happy Birthday, Merav! 🔥❤️" },
        { category: "Gratitude", text: "I thank my lucky stars every single day for bringing you into my life. May your year ahead be blessed with health, wealth, and joy! 🙏" },
        { category: "Future Dreams", text: "May your new age bring exciting adventures, amazing memories, and all the peace and bliss your heart desires! ✈️🌈" },
        { category: "Compliment", text: "They say age is just a number, but on you, it looks like magic! Happy Birthday to the most ageless, stunning woman I know! 🌸" },
        { category: "Happiness", text: "Your laughter is my favorite song in the world. May your birthday be filled with continuous reason to smile! 😄🎶" },
        { category: "Romantic Love", text: "Happy Birthday to my best friend, my soulmate, and my beautiful wife. Here's to making today unforgettable! 💑" }
    ];

    let lastWishIndex = -1;

    // Web Audio Synthesizer
    let audioCtx = null;
    let isSfxMuted = false;

    // LOGIN & ACCESS GATE CONTROLLER
    const loginGateOverlay = document.getElementById('login-gate-overlay');
    const loginForm = document.getElementById('login-form');
    const passcodeInput = document.getElementById('passcode-input');
    const loginErrorMsg = document.getElementById('login-error-msg');
    const guestLoginBtn = document.getElementById('guest-quick-login-btn');
    const lockAppBtn = document.getElementById('lock-app-btn');

    const VALID_PASSCODES = ['1309', '13091981', '130981', '1981', 'merav', 'love'];

    // DYNAMIC COUNTDOWN CLOCK TO SEPTEMBER 13, 2026 (HOURS : MINUTES : SECONDS)
    const cdHours = document.getElementById('cd-hours');
    const cdMins = document.getElementById('cd-mins');
    const cdSecs = document.getElementById('cd-secs');

    // Target: September 13th, 2026 (00:00:00)
    const TARGET_BIRTHDAY = new Date('2026-09-13T00:00:00+03:00').getTime();

    function updateCountdownTimer() {
        const now = new Date().getTime();
        const difference = TARGET_BIRTHDAY - now;

        if (difference > 0) {
            const totalHours = Math.floor(difference / (1000 * 60 * 60));
            const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((difference % (1000 * 60)) / 1000);

            if (cdHours) cdHours.textContent = String(totalHours).padStart(2, '0');
            if (cdMins) cdMins.textContent = String(mins).padStart(2, '0');
            if (cdSecs) cdSecs.textContent = String(secs).padStart(2, '0');
        } else {
            if (cdHours) cdHours.textContent = '00';
            if (cdMins) cdMins.textContent = '00';
            if (cdSecs) cdSecs.textContent = '00';
            const label = document.querySelector('.countdown-label');
            if (label) label.textContent = "HAPPY BIRTHDAY MERAV! 🎉";
        }
    }

    updateCountdownTimer();
    setInterval(updateCountdownTimer, 1000);

    function checkAuthStatus() {
        const isAuth = localStorage.getItem('merav_birthday_auth');
        if (isAuth === 'true') {
            if (loginGateOverlay) loginGateOverlay.classList.add('hidden');
        } else {
            if (loginGateOverlay) loginGateOverlay.classList.remove('hidden');
        }
    }

    function unlockExperience() {
        localStorage.setItem('merav_birthday_auth', 'true');
        playFanfareSound();
        
        if (typeof confetti === 'function') {
            confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        }

        if (typeof gsap !== 'undefined' && loginGateOverlay) {
            gsap.to('.login-card-modal', { scale: 0.8, opacity: 0, duration: 0.35, ease: 'power2.in', onComplete: () => {
                loginGateOverlay.classList.add('hidden');
                gsap.set('.login-card-modal', { scale: 1, opacity: 1 });
            }});
        } else if (loginGateOverlay) {
            loginGateOverlay.classList.add('hidden');
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = (passcodeInput.value || '').trim().toLowerCase();
            if (VALID_PASSCODES.includes(val) || val === '1309') {
                if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
                unlockExperience();
            } else {
                if (loginErrorMsg) loginErrorMsg.classList.remove('hidden');
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('.login-card-modal', { x: -10 }, { x: 10, duration: 0.08, repeat: 5, yoyo: true, ease: 'sine.inOut' });
                }
            }
        });
    }

    if (guestLoginBtn) {
        guestLoginBtn.addEventListener('click', () => {
            if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
            unlockExperience();
        });
    }

    if (lockAppBtn) {
        lockAppBtn.addEventListener('click', () => {
            localStorage.removeItem('merav_birthday_auth');
            if (loginGateOverlay) loginGateOverlay.classList.remove('hidden');
            playPopSound();
            if (typeof gsap !== 'undefined') {
                gsap.fromTo('.login-card-modal', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' });
            }
        });
    }

    checkAuthStatus();

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function playPopSound() {
        if (isSfxMuted) return;
        try {
            initAudioContext();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(90, audioCtx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.6, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        } catch (e) {}
    }

    function playFanfareSound() {
        if (isSfxMuted) return;
        try {
            initAudioContext();
            const chord = [261.63, 329.63, 392.00, 523.25];
            chord.forEach((freq) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.6);
            });
        } catch (e) {}
    }

    // LAYER 3: Modal UI & Confetti Controller
    const layer3Popup = document.getElementById('layer-3-popup');
    const modalOverlay = document.getElementById('wish-modal-overlay');
    const wishCardModal = document.querySelector('.wish-card-modal');
    const wishCategoryTag = document.getElementById('wish-category-tag');
    const wishTextContent = document.getElementById('wish-text-content');

    function getRandomWish() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * MERAV_WISHES.length);
        } while (randomIndex === lastWishIndex && MERAV_WISHES.length > 1);
        
        lastWishIndex = randomIndex;
        return MERAV_WISHES[randomIndex];
    }

    function showLayer3RandomWish() {
        const wish = getRandomWish();
        if (wishCategoryTag) wishCategoryTag.textContent = wish.category;
        if (wishTextContent) wishTextContent.textContent = wish.text;
        
        if (layer3Popup) layer3Popup.classList.remove('hidden');

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.wish-card-modal', { scale: 0.5, y: 40, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.7)' });
        }

        // Layer 3: Confetti Animation Burst
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 95,
                spread: 85,
                origin: { y: 0.6 },
                colors: ['#ff2a75', '#ffb703', '#00f5d4', '#7b2cbf', '#ffffff']
            });
        }
    }

    function hideLayer3WishModal() {
        if (typeof gsap !== 'undefined') {
            gsap.to('.wish-card-modal', { scale: 0.6, y: 30, opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => {
                if (layer3Popup) layer3Popup.classList.add('hidden');
            }});
        } else {
            if (layer3Popup) layer3Popup.classList.add('hidden');
        }
    }

    // LAYER 2: Button Press Triggering Layer 3
    const mainPopBtn = document.getElementById('pop-wish-main-btn');
    if (mainPopBtn) {
        mainPopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            playPopSound();
            playFanfareSound();

            if (typeof gsap !== 'undefined') {
                gsap.to(mainPopBtn, { scale: 0.88, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' });
            }

            showLayer3RandomWish();
        });
    }

    // Dismiss Layer 3 When Clicking Anywhere Outside Wish Card
    if (layer3Popup) {
        layer3Popup.addEventListener('click', (e) => {
            if (!wishCardModal.contains(e.target) || e.target === modalOverlay || e.target === layer3Popup) {
                playPopSound();
                hideLayer3WishModal();
            }
        });
    }

    function playKissSound() {
        if (isSfxMuted) return;
        try {
            initAudioContext();
            const now = audioCtx.currentTime;
            [0, 0.11, 0.22].forEach((delay) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(650, now + delay);
                osc.frequency.exponentialRampToValueAtTime(1500, now + delay + 0.08);
                gain.gain.setValueAtTime(0.5, now + delay);
                gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now + delay);
                osc.stop(now + delay + 0.08);
            });
        } catch (e) {}
    }

    function spawnFloatingKiss(x, y) {
        const kiss = document.createElement('div');
        kiss.textContent = '💋';
        kiss.style.position = 'fixed';
        kiss.style.left = `${x}px`;
        kiss.style.top = `${y}px`;
        kiss.style.fontSize = '2.5rem';
        kiss.style.pointerEvents = 'none';
        kiss.style.zIndex = '99999';
        kiss.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
        kiss.style.transform = 'translate(-50%, -50%) scale(0.5)';
        kiss.style.opacity = '1';
        document.body.appendChild(kiss);

        requestAnimationFrame(() => {
            kiss.style.transform = `translate(-50%, -130px) scale(1.6) rotate(${(Math.random() - 0.5) * 40}deg)`;
            kiss.style.opacity = '0';
        });

        setTimeout(() => kiss.remove(), 1300);
    }

    function triggerFullScreenKissesConfetti() {
        if (typeof confetti !== 'function') return;

        let kissShape = null;
        let heartShape = null;
        try {
            kissShape = confetti.shapeFromText({ text: '💋', scalar: 3 });
            heartShape = confetti.shapeFromText({ text: '💖', scalar: 3 });
        } catch (e) {}

        const shapes = (kissShape && heartShape) ? [kissShape, heartShape] : ['circle', 'square'];

        // Wave 1: Immediate full-screen burst from left, right, top and center
        confetti({
            particleCount: 90,
            spread: 360,
            startVelocity: 50,
            origin: { x: 0.2, y: 0.3 },
            shapes: shapes,
            scalar: 3.2,
            colors: ['#ff2a75', '#ff4d8d', '#ff0055', '#ffffff']
        });

        confetti({
            particleCount: 90,
            spread: 360,
            startVelocity: 50,
            origin: { x: 0.8, y: 0.3 },
            shapes: shapes,
            scalar: 3.2,
            colors: ['#ff2a75', '#ff4d8d', '#ff0055', '#ffffff']
        });

        confetti({
            particleCount: 140,
            spread: 360,
            startVelocity: 60,
            origin: { x: 0.5, y: 0.5 },
            shapes: shapes,
            scalar: 3.8,
            colors: ['#ff2a75', '#ffb703', '#ff0055', '#ffffff', '#ff75a0']
        });

        // Wave 2: Rain of kisses bursting across random points all over the screen over 2.5 seconds
        const duration = 2.5 * 1000;
        const end = Date.now() + duration;

        const interval = setInterval(() => {
            if (Date.now() > end) {
                return clearInterval(interval);
            }
            confetti({
                particleCount: 30,
                startVelocity: 35,
                spread: 360,
                ticks: 70,
                origin: { x: Math.random(), y: Math.random() * 0.7 },
                shapes: shapes,
                scalar: 2.8 + Math.random() * 1.5,
                colors: ['#ff2a75', '#ff4d8d', '#ff0055', '#ffb703', '#ffffff']
            });
        }, 180);
    }

    // EASTER EGG: 3 Clicks on Top-Left Seal/Heart Logo
    let sealClickCount = 0;
    let sealClickTimer = null;
    const sealTopLeft = document.getElementById('seal-top-left');
    const heartSealIcon = document.getElementById('heart-seal-icon');

    if (sealTopLeft) {
        sealTopLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            sealClickCount++;

            playPopSound();

            // Heart icon subtle scale pulse on tap
            if (heartSealIcon && typeof gsap !== 'undefined') {
                gsap.fromTo(heartSealIcon, { scale: 1.4 }, { scale: 1.1, duration: 0.25, ease: 'back.out(2)' });
            }

            clearTimeout(sealClickTimer);

            if (sealClickCount === 3) {
                sealClickCount = 0;
                playKissSound();
                // ONLY trigger the full screen kisses confetti across the entire screen (NO modal window)
                triggerFullScreenKissesConfetti();
            } else {
                // Reset counter after 1.8s of inactivity
                sealClickTimer = setTimeout(() => {
                    sealClickCount = 0;
                }, 1800);
            }
        });
    }

    // Sound Toggle
    const sfxBtn = document.getElementById('sfx-toggle-btn');
    if (sfxBtn) {
        sfxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isSfxMuted = !isSfxMuted;
            if (isSfxMuted) {
                sfxBtn.classList.remove('active');
                sfxBtn.querySelector('.sound-icon').textContent = '🔇';
            } else {
                sfxBtn.classList.add('active');
                sfxBtn.querySelector('.sound-icon').textContent = '🔊';
                playPopSound();
            }
        });
    }

});
