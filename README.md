# 🎈 Happy Birthday Merav — Interactive Luxury Lacoste Atelier Experience

[![GitHub Pages Deployment](https://github.com/talmalek/HappyBirthdayMerav/actions/workflows/deploy.yml/badge.svg)](https://github.com/talmalek/HappyBirthdayMerav/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-5ecceb?style=for-the-badge&logo=github)](https://talmalek.github.io/HappyBirthdayMerav/)

A state-of-the-art, luxury interactive web application custom crafted for **Merav** (born 13.09.1981). Inspired by Lacoste's iconic *Polo Atelier* digital design system, this web app combines a 3-layer visual architecture, AI portrait segmentation, real-time Web Audio API sound synthesis, GSAP micro-animations, and interactive secret Easter eggs.

---

## 🌟 Live Demo & Public Access

- **Public Site URL**: [https://talmalek.github.io/HappyBirthdayMerav/](https://talmalek.github.io/HappyBirthdayMerav/)
- **Passcode Key**: `1309` *(September 13th)* or tap **💖 Enter as Guest / Family VIP** on the login gate.

---

## 🛠️ Architecture & Engineering Highlights

### 1. 🎨 3-Layer Visual Architecture
The application is architected into three distinct stacking context layers:
* **Layer 1 (Background & AI Portrait)**: Deep sky blue background (`#5ecceb`) featuring Merav's portrait headshot centered gracefully without frames or rectangular bounding boxes.
* **Layer 2 (Atelier UI & Controls)**: Top-left rotating seal stamp (`HAPPY BIRTHDAY MERAV • 13.09.1981 •`), audio toggle, lock button, and a bottom curved white wave dock with a 3D Arcade Push Button.
* **Layer 3 (Wish Card & Particle Overlay)**: High-z-index pop-up modal displaying randomized romantic wishes and confetti particle animations. Dismissable by clicking anywhere on the backdrop.

### 2. 🤖 AI U2-Net Background Removal Pipeline
* Utilized **rembg** and **U2-Net deep learning segmentation models** to process source portrait photographs into a 100% transparent RGBA PNG (`assets/merav_nobg.png`).
* Over 42% of canvas pixels are completely transparent (`alpha == 0`) with smooth sub-pixel anti-aliasing edges, allowing seamless blending into the Lacoste sky blue background without rectangular box dithering.

### 3. 🔐 VIP Passcode Access Gate
* Built an overlay security modal protecting the experience with local storage persistence (`localStorage`).
* Supports birthday PIN entry (`1309`), custom passcodes, and instant one-click Guest VIP login.
* Includes a top-right lock button (`🔒`) allowing users to re-lock the experience at any time.

### 4. 💋 Secret "1,000 Kisses" Easter Egg
* Tapping the top-left rotating seal stamp 3 times within 1.8 seconds activates a hidden Easter egg.
* Triggers a 360-degree, multi-wave confetti explosion of custom **`💋` (kisses)** and **`💖` (hearts)** shapes across the entire screen, accompanied by a Web Audio kiss chime synthesizer.

### 5. 🔊 Web Audio API Sound Synthesizer
* Programmatic real-time sound effects generated without external MP3/WAV assets.
* Synthesizes button press pop tones, fanfare chords, and kiss chimes using Web Audio API oscillators and gain ramps.

---

## 💻 Tech Stack

* **Frontend**: HTML5, CSS3 (Vanilla design tokens & HSL color palette), ES6+ JavaScript
* **Animations**: GSAP 3 (GreenSock Animation Platform)
* **Particles**: Canvas Confetti Library (`canvas-confetti`)
* **Audio**: Web Audio API Synthesizer
* **AI Image Segmentation**: Python 3 (`rembg`, `pillow`, `opencv-python`)
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

Designed & Developed with ❤️ for **Merav** by Tal Malek.
