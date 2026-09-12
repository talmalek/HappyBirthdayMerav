# 🎈 Happy Birthday Merav (מזל טוב מירב!) — Interactive Luxury Lacoste Atelier Experience

[![GitHub Pages Deployment](https://github.com/talmalek/HappyBirthdayMerav/actions/workflows/deploy.yml/badge.svg)](https://github.com/talmalek/HappyBirthdayMerav/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-5ecceb?style=for-the-badge&logo=github)](https://talmalek.github.io/HappyBirthdayMerav/)

A state-of-the-art, luxury interactive web application custom crafted for **Merav (מירב)** (born 13.09.1981). Inspired by Lacoste's iconic *Polo Atelier* digital design system, this web app combines a 3-layer visual architecture, bilingual Hebrew/English engine, AI portrait segmentation, live countdown clock, real-time Web Audio API sound synthesis, GSAP micro-animations, and interactive secret Easter eggs.

---

## 🌟 Live Demo & Public Access

- **Public Site URL**: [https://talmalek.github.io/HappyBirthdayMerav/](https://talmalek.github.io/HappyBirthdayMerav/)
- **Passcode Key**: `1309` *(September 13th)*

---

## 🛠️ Architecture & Engineering Highlights

### 1. 🌐 Bilingual HE/EN Engine (Default: Hebrew / מירב)
* **Hebrew Default (`HE`)**: The application defaults to Hebrew on load with full Right-to-Left (`RTL`) layout support, authentic typography, and correct Hebrew spelling (**מירב**).
* **Header Language Switcher (`HE` / `EN`)**: A dedicated language toggle button in the top-right header dynamically translates all UI elements, seal text, countdown labels, push badges, and 18+ romantic birthday wishes in real time.

### 2. ⏰ Live Dynamic Countdown Clock (HOURS : MINUTES : SECONDS)
* Features a live dynamic countdown timer counting down total **HOURS : MINUTES : SECONDS** to **September 13, 2026**.
* Until her birthday arrives, the experience is protected by the secret passcode (`1309`).

### 3. 🎨 3-Layer Visual Architecture
The application is architected into three distinct stacking context layers:
* **Layer 1 (Background & AI Portrait)**: Deep sky blue background (`#5ecceb`) featuring Merav's portrait headshot centered gracefully without frames or bounding boxes.
* **Layer 2 (Atelier UI & Controls)**: Top-left rotating seal stamp (`מזל טוב מירב • 13.09.1981 •`), audio toggle, lock button, language switcher (`HE`/`EN`), and a bottom curved white wave dock with a 3D Arcade Push Button.
* **Layer 3 (Wish Card & Particle Overlay)**: High-z-index pop-up modal displaying randomized romantic wishes and confetti particle animations. Dismissable by clicking anywhere on the backdrop.

### 4. 🤖 AI Portrait Segmentation & Surprised Kisses Swap
* Utilized **rembg** and **U2-Net deep learning segmentation models** to process source portrait photographs into 100% transparent RGBA PNGs (`assets/merav_nobg.png` & `assets/merav_kisses_nobg.png`).
* Generated a high-quality surprised portrait of Merav covered in red lipstick kiss marks.
* **Secret 3-Click Easter Egg**: Tapping the top-left rotating seal 3 times activates a 360° all-over-the-screen kiss confetti burst (`💋` & `💖`) and smoothly swaps her portrait to the lipstick-kissed version for 10 seconds before seamlessly reverting back.

### 5. 🔐 VIP Passcode Access Gate
* Built an overlay security modal protecting the experience with local storage persistence (`localStorage`).
* Requires the secret passcode (`1309`). Includes a top-right lock button (`🔒`) allowing users to re-lock the experience at any time.

### 6. 🔊 Web Audio API Sound Synthesizer
* Programmatic real-time sound effects generated without external MP3/WAV assets.
* Synthesizes button press pop tones, fanfare chords, and kiss chimes using Web Audio API oscillators and gain ramps.

---

## 💻 Tech Stack

* **Frontend**: HTML5, CSS3 (Vanilla design tokens & HSL color palette), ES6+ JavaScript
* **Internationalization**: Custom HE/EN i18n Translation Engine with RTL support
* **Animations**: GSAP 3 (GreenSock Animation Platform)
* **Particles**: Canvas Confetti Library (`canvas-confetti`)
* **Audio**: Web Audio API Synthesizer
* **AI Image Segmentation & Edit**: Python 3 (`rembg`, `pillow`, `opencv-python`)
* **CI/CD & Hosting**: GitHub Actions & GitHub Pages

---

## 🚀 Local Development Setup

To run the application locally on your machine:

```bash
# Clone the repository
git clone https://github.com/talmalek/HappyBirthdayMerav.git

# Navigate into the project folder
cd HappyBirthdayMerav

# Start local HTTP server
python3 -m http.server 8080
```

Open your browser and navigate to `http://localhost:8080`.

---

## 📄 License & Attribution

Designed & Developed with ❤️ for **מירב** by Tal Malek.
