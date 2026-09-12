/* ==========================================================================
   Lacoste Polo Atelier Experience - 3-Layer Controller Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Birthday Wishes Collection - Hebrew & English (Dedicated to Merav)
    const HE_WISHES = [
        { category: "אהבה רומנטית", text: "מזל טוב לאשתי המדהימה מרב! כל יום איתך הוא מתנה, ואני כל כך מאושר לצעוד לצידך בחיים. אוהב אותך עד השמיים! ❤️" },
        { category: "יופי וחן", text: "החיוך שלך מאיר כל חדר והחום שלך נוגע בכל מי שמסביבך. את נהיית יפה ומרהיבה יותר עם כל שנה שעוברת! ✨" },
        { category: "חגיגה ושמחה", text: "לאישה הכי מדהימה שנולדה ב-13 בספטמבר 1981 – שהיום הולדת שלך יהיה שמח, נוצץ ומלא באהבה בדיוק כמוך! 🎂🎈" },
        { category: "הערכה והודיה", text: "תודה שאת מביאה כל כך הרבה צחוק, רוך ואור לבית שלנו. מאחל לך אושר אינסופי היום ותמיד! 💖" },
        { category: "שמחה טהורה", text: "מאחל לך שהשנה הזו תביא איתה את כל האהבה שאת מעניקה לאחרים, מוגברת פי אלף, וכל חלומותייך יתגשמו! 🌟" },
        { category: "מחמאה מהלב", text: "מרב, האלגנטיות שלך, הטוב שבלבך והעיניים המהפנטות שלך גורמים לי להתאהב בך מחדש כל יום! 🥰" },
        { category: "תמיד ולנצח", text: "לחגוג את העבר שלך, לנצור את ההווה שלנו ולבנות עתיד עוד יותר מדהים יחד. מזל טוב אהובתי! 🥂" },
        { category: "איחול מלא אהבה", text: "היום את המלכה הבלתי מעורערת! תירגעי, תיהני מכל האהבה, תאכלי עוד עוגה ותני לנו לפנק אותך עד הסוף! 👑🍰" },
        { category: "נשמת תאומה", text: "החיים איתך הם הרפתקה מתמשכת מלאה במתיקות. מזל טוב לאהבת חיי, מרב! 🌹" },
        { category: "זהר וקרינה", text: "תמשיכי להפיץ את האור הנפלא שלך על העולם! האנרגיה שלך מדבקת והלב שלך הוא זהב טהור. ✨" },
        { category: "חמימות ובית", text: "איתך, כל מקום מרגיש כמו בית. תודה על האהבה האינסופית שלך ועל היותך המרכז של עולמנו. 🏠❤️" },
        { category: "פתיחת שמפניה", text: "תפתחו את השמפניה ותזרקו את הקונפטי! היום אנחנו חוגגים את היום הנפלא שבו הגעת לעולם. לחיים יפהפייה! 🍾🎉" },
        { category: "אהבה רומנטית", text: "לא משנה כמה נרות יש על העוגה, האש של האהבה שלי אלייך בוקעת חזק יותר מאי פעם. מזל טוב מרב! 🔥❤️" },
        { category: "תודה מכל הלב", text: "אני מודה למזל שלי כל יום מחדש שהביא אותך לחיי. שתהיה לך שנה מבורכת בריאות, אושר ושפע! 🙏" },
        { category: "חלומות לעתיד", text: "שתביא איתה השנה החדשה חוויות מרגשות, זיכרונות נפלאים וכל השלווה והשמחה שלבך מייחל להם! ✈️🌈" },
        { category: "מחמאה מתוקה", text: "אומרים שגיל הוא רק מספר, אבל עלייך הוא נראה כמו קסם טהור! מזל טוב לאישה הכי שמורה ויפה שאני מכיר! 🌸" },
        { category: "אושר וצחוק", text: "הצחוק שלך הוא השיר האהוב עליי בעולם. שהיום הולדת שלך יהיה מלא בסיבות לחייך ללא הפסקה! 😄🎶" },
        { category: "אהבת אמת", text: "מזל טוב לחברה הכי טובה שלי, לנשמה התאומה שלי ולאשתי היפהפייה. הנה להפיכת היום הזה לבלתי נשכח! 💑" }
    ];

    const EN_WISHES = [
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

    // BILINGUAL TRANSLATION DICTIONARY (HEBREW IS DEFAULT)
    const DICTIONARY = {
        he: {
            sealText: "מזל טוב מרב • 13.09.1981 •",
            pushPill: "לחצי",
            loginBadge: "כניסת VIP • 13.09.1981",
            loginTitle: "מזל טוב מרב! 🎈",
            countdownLabel: "ספירה לאחור ל-13 בספטמבר 2026",
            lblHours: "שעות",
            lblMins: "דקות",
            lblSecs: "שניות",
            loginSubtitle: "רק מי שיודע את הסיסמה הסודית יוכל להיכנס לפני שתגיע השעה!",
            passcodePlaceholder: "הכניסי סיסמה",
            unlockBtn: "שחררי את החוויה ✨",
            loginError: "סיסמה שגויה! אנא נסי שוב.",
            wishModalTitle: "מזל טוב, מרב!",
            dismissHint: "✨ לחצי מחוץ לכרטיס כדי לסגור ✨",
            birthdayArrived: "מזל טוב מרב! 🎉",
            langLabel: "HE"
        },
        en: {
            sealText: "HAPPY BIRTHDAY MERAV • 13.09.1981 •",
            pushPill: "Push",
            loginBadge: "VIP ACCESS • 13.09.1981",
            loginTitle: "Happy Birthday Merav! 🎈",
            countdownLabel: "COUNTDOWN TO SEPTEMBER 13, 2026",
            lblHours: "HOURS",
            lblMins: "MINUTES",
            lblSecs: "SECONDS",
            loginSubtitle: "Only those with the secret passcode can unlock before time arrives!",
            passcodePlaceholder: "Enter Passcode",
            unlockBtn: "Unlock Experience ✨",
            loginError: "Incorrect passcode! Please try again.",
            wishModalTitle: "Happy Birthday, Merav!",
            dismissHint: "✨ Tap anywhere outside to close ✨",
            birthdayArrived: "HAPPY BIRTHDAY MERAV! 🎉",
            langLabel: "EN"
        }
    };

    let currentLang = localStorage.getItem('merav_lang') || 'he';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('merav_lang', lang);
        
        document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        const dict = DICTIONARY[lang] || DICTIONARY['he'];

        // Update Language Toggle Button Label
        const langTextLabel = document.getElementById('lang-text-label');
        if (langTextLabel) langTextLabel.textContent = dict.langLabel;

        // Update Seal Stamp Text
        const sealTextPath = document.querySelector('.seal-text textPath');
        if (sealTextPath) sealTextPath.textContent = dict.sealText;

        // Update Push Floating Pill Badge
        const pushPill = document.querySelector('.push-floating-pill span');
        if (pushPill) pushPill.textContent = dict.pushPill;

        // Update Login Modal Elements
        const loginBadge = document.querySelector('.login-badge');
        if (loginBadge) loginBadge.textContent = dict.loginBadge;

        const loginTitle = document.querySelector('.login-title');
        if (loginTitle) loginTitle.textContent = dict.loginTitle;

        const countdownLabel = document.querySelector('.countdown-label');
        if (countdownLabel && countdownLabel.textContent !== DICTIONARY['he'].birthdayArrived && countdownLabel.textContent !== DICTIONARY['en'].birthdayArrived) {
            countdownLabel.textContent = dict.countdownLabel;
        }

        const timerLbls = document.querySelectorAll('.timer-lbl');
        if (timerLbls.length >= 3) {
            timerLbls[0].textContent = dict.lblHours;
            timerLbls[1].textContent = dict.lblMins;
            timerLbls[2].textContent = dict.lblSecs;
        }

        const loginSubtitle = document.querySelector('.login-subtitle');
        if (loginSubtitle) loginSubtitle.textContent = dict.loginSubtitle;

        const passcodeInput = document.getElementById('passcode-input');
        if (passcodeInput) passcodeInput.placeholder = dict.passcodePlaceholder;

        const loginSubmitBtn = document.querySelector('#login-submit-btn span');
        if (loginSubmitBtn) loginSubmitBtn.textContent = dict.unlockBtn;

        const loginErrorMsg = document.getElementById('login-error-msg');
        if (loginErrorMsg) loginErrorMsg.textContent = dict.loginError;

        const modalTitle = document.querySelector('.modal-title');
        if (modalTitle) modalTitle.textContent = dict.wishModalTitle;

        const dismissHint = document.querySelector('.dismiss-hint');
        if (dismissHint) dismissHint.textContent = dict.dismissHint;
    }

    // Web Audio Synthesizer
    let audioCtx = null;
    let isSfxMuted = false;

    // LOGIN & ACCESS GATE CONTROLLER
    const loginGateOverlay = document.getElementById('login-gate-overlay');
    const loginForm = document.getElementById('login-form');
    const passcodeInput = document.getElementById('passcode-input');
    const loginErrorMsg = document.getElementById('login-error-msg');
    const lockAppBtn = document.getElementById('lock-app-btn');
    const langToggleBtn = document.getElementById('lang-toggle-btn');

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

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const nextLang = (currentLang === 'he') ? 'en' : 'he';
            setLanguage(nextLang);
            playPopSound();
        });
    }

    setLanguage(currentLang);
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
        const wishes = (currentLang === 'he') ? HE_WISHES : EN_WISHES;
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * wishes.length);
        } while (randomIndex === lastWishIndex && wishes.length > 1);
        
        lastWishIndex = randomIndex;
        return wishes[randomIndex];
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

    let portraitSwapTimer = null;
    const meravBlendImg = document.getElementById('merav-blend-img');

    function swapToSurprisedKissesPortrait() {
        if (!meravBlendImg) return;
        
        clearTimeout(portraitSwapTimer);

        // Smooth GSAP transition to surprised kisses portrait
        if (typeof gsap !== 'undefined') {
            gsap.to(meravBlendImg, {
                opacity: 0.2,
                scale: 0.95,
                duration: 0.18,
                ease: 'power2.in',
                onComplete: () => {
                    meravBlendImg.src = 'assets/merav_kisses_nobg.png';
                    gsap.fromTo(meravBlendImg, 
                        { opacity: 0.2, scale: 1.15, rotate: -2 }, 
                        { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: 'back.out(2)' }
                    );
                }
            });
        } else {
            meravBlendImg.src = 'assets/merav_kisses_nobg.png';
        }

        // Revert back to original transparent portrait after 10 seconds
        portraitSwapTimer = setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                gsap.to(meravBlendImg, {
                    opacity: 0.2,
                    scale: 0.96,
                    duration: 0.25,
                    ease: 'power2.in',
                    onComplete: () => {
                        meravBlendImg.src = 'assets/merav_nobg.png';
                        gsap.to(meravBlendImg, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
                    }
                });
            } else {
                meravBlendImg.src = 'assets/merav_nobg.png';
            }
        }, 10000);
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
                // Trigger full screen kisses confetti explosion
                triggerFullScreenKissesConfetti();
                // Swap Merav portrait to lipstick kisses portrait for 10 seconds
                swapToSurprisedKissesPortrait();
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
