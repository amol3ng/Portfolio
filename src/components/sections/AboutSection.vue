<template>
  <section id="about" class="about section-padding">
    <div class="container">
      <div class="about-grid">
        <!-- Left: Image -->
        <div class="about-image" ref="imgRef">
          <div class="img-container">
            <div class="img-wrapper">
              <img src="@/assets/about-photo.jpg" alt="Amohelang Mokhele" class="about-photo" />
            </div>
            <div class="img-decoration"></div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="about-content" ref="contentRef">
          <div class="section-label">Who I Am</div>
          <h2>About <span class="maroon">Me</span></h2>
          <div class="accent-line" style="margin: 14px 0;"></div>

          <p class="about-text">
            I'm a full-stack JavaScript developer focused on building modern, user-friendly web applications.
            I work with technologies like React, Next.js, TypeScript, Vue, mySQL and PostgreSQL to create
            responsive and scalable solutions. I enjoy turning ideas into real products, especially projects
            that solve practical problems and improve user experience.
          </p>
          <br/>
          <p class="about-text">
            Currently, I'm building portfolio projects such as an e-commerce platform and an expense tracking
            app, where I focus on performance, clean architecture, and real-world functionality.
          </p>
          <p class="about-text" style="margin-top: 14px;">
            I'm continuously improving my skills in both frontend and backend development, with a strong
            interest in building complete, production-ready applications.
          </p>

          <!-- Professional Overview -->
          <div class="overview-title">Professional Overview</div>
          <div class="overview-cards">
            <div class="overview-card" v-for="stat in stats" :key="stat.label">
              <div class="overview-icon" v-html="stat.icon"></div>
              <div class="overview-num">{{ stat.value }}</div>
              <div class="overview-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      stats: [
        {
          value: '4+',
          label: 'Projects Completed',
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
        },
        {
          value: '15+',
          label: 'Technologies',
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
        }
      ]
    }
  }
}
</script>

<style scoped>
.about { background: var(--white); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image { position: relative; }

.img-container { position: relative; }

.img-wrapper {
  width: 100%;
  aspect-ratio: 4/4.5;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid var(--slate-100);
  box-shadow: var(--shadow-xl);
}

.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.img-decoration {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 120px;
  height: 120px;
  border: 3px solid var(--maroon);
  border-radius: var(--radius-lg);
  opacity: 0.2;
  z-index: -1;
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--maroon);
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-size: 38px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: var(--slate-900);
}

.maroon { color: var(--maroon); }

.about-text {
  font-size: 15.5px;
  line-height: 1.75;
  color: var(--slate-600);
}

.overview-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--slate-700);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 32px 0 16px;
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.overview-card {
  background: var(--off-white);
  border: 1px solid var(--slate-200);
  border-radius: var(--radius-md);
  padding: 18px 14px;
  text-align: center;
  transition: var(--transition);
}

.overview-card:hover {
  border-color: var(--maroon);
  box-shadow: 0 4px 16px rgba(137,81,89,0.12);
  transform: translateY(-2px);
}

.overview-icon { display: flex; justify-content: center; margin-bottom: 8px; }

.overview-num {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 22px;
  color: var(--maroon);
  line-height: 1;
  margin-bottom: 4px;
}

.overview-label { font-size: 11px; color: var(--slate-500); font-weight: 500; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-image { max-width: 400px; margin: 0 auto; }
}

@media (max-width: 480px) {
  .overview-cards { grid-template-columns: repeat(3, 1fr); gap: 8px; }
}
</style>