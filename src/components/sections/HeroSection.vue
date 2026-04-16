<template>
  <section id="hero" class="hero grid-bg">
    <div class="hero-container container">
      <!-- Left Content -->
      <div class="hero-left" :class="{ visible: mounted }">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Available for Work
        </div>

        <h1 class="hero-title">
          Hi, I'm <span class="name-highlight">Amohelang</span>
        </h1>

        <p class="hero-subtitle">Software Developer</p>

        <p class="hero-desc">
          Crafting innovative digital solutions with modern technologies and user-centered design principles.
        </p>

        <div class="hero-stats">
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">4+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">15+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>

        <div class="hero-ctas">
          <router-link to="/#contact" class="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
            </svg>
            Contact Me
          </router-link>
        </div>
      </div>

      <!-- Right: Profile Image -->
      <div class="hero-right" :class="{ visible: mounted }">
        <div class="profile-frame">
          <div class="profile-ring ring-1"></div>
          <div class="profile-ring ring-2"></div>
          <div class="profile-img-wrap">
            <img
              src="@/assets/profile.jpeg"
              alt="Amohelang - Software Developer"
              class="profile-image"
              fetchpriority="high"
            />
          </div>
          <div class="tech-tag tag-1">Vue.js</div>
          <div class="tech-tag tag-2">Node.js</div>
          <div class="tech-tag tag-3">mySQL</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-hint">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return { mounted: false }
  },
  mounted() {
    setTimeout(() => { this.mounted = true }, 100)
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  background: linear-gradient(160deg, var(--white) 0%, var(--off-white) 50%, rgba(137,81,89,0.03) 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(137,81,89,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding-top: 40px;
  padding-bottom: 80px;
}

.hero-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(137,81,89,0.08);
  color: var(--maroon);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 22px;
  border: 1px solid rgba(137,81,89,0.2);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.hero-title {
  font-size: clamp(36px, 5vw, 58px);
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: var(--slate-900);
  line-height: 1.1;
  margin-bottom: 10px;
}

.name-highlight {
  color: var(--maroon);
  position: relative;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--maroon), transparent);
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: var(--slate-500);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 16px;
  color: var(--slate-600);
  line-height: 1.7;
  max-width: 460px;
  margin-bottom: 32px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;
  padding: 20px 24px;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--slate-100);
  width: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: var(--maroon);
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  color: var(--slate-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 3px;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--slate-200);
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-right {
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.profile-frame {
  position: relative;
  width: 380px;
  height: 420px;
}

.profile-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(137,81,89,0.2);
}
.ring-1 {
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin 20s linear infinite;
}
.ring-2 {
  width: 370px;
  height: 370px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: dashed;
  animation: spin 30s linear infinite reverse;
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.profile-img-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  height: 280px;
  border-radius: var(--radius-xl);
  background: var(--off-white);
  border: 3px solid var(--maroon);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(137,81,89,0.2);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tech-tag {
  position: absolute;
  background: white;
  border: 1.5px solid var(--slate-200);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: var(--maroon);
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}
.tag-1 { top: 30px; left: 0; animation: float 3s ease-in-out infinite; }
.tag-2 { bottom: 60px; left: -10px; animation: float 3s ease-in-out infinite 1s; }
.tag-3 { top: 50px; right: 0; animation: float 3s ease-in-out infinite 0.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.scroll-hint {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--slate-400);
  font-size: 12px;
}

.scroll-mouse {
  width: 22px;
  height: 34px;
  border: 2px solid var(--slate-300);
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-wheel {
  width: 3px;
  height: 6px;
  background: var(--slate-400);
  border-radius: 2px;
  animation: scroll-down 1.5s ease infinite;
}

@keyframes scroll-down {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(8px); opacity: 0; }
}

@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  .hero-stats { margin: 0 auto 36px; }
  .hero-desc { margin: 0 auto 32px; }
  .hero-ctas { justify-content: center; }
  .hero-right { order: -1; }
  .profile-frame { width: 300px; height: 340px; }
  .profile-img-wrap { width: 200px; height: 220px; }
  .name-highlight::after { display: none; }
}

/* ✅ Hide scroll hint on mobile */
@media (max-width: 480px) {
  .hero-stats { flex-wrap: wrap; gap: 16px; }
  .stat-divider { display: none; }

  .scroll-hint {
    display: none;
  }
}
</style>