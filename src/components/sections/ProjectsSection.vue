<template>
  <section id="projects" class="projects section-padding">
    <div class="container">
      <div class="section-header">
        <p class="section-label">What I've Built</p>
        <h2>Featured Projects</h2>
        <div class="accent-line"></div>
        <p>A selection of projects I've worked on</p>
      </div>
    </div>

    <!-- Scrollable Carousel -->
    <div class="carousel-wrapper">
      <button class="carousel-nav prev" @click="scroll(-1)" :disabled="atStart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div class="carousel-track" ref="track" @scroll="checkScroll">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <button class="carousel-nav next" @click="scroll(1)" :disabled="atEnd">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>

    <!-- Scroll indicator dots -->
    <div class="carousel-dots container">
      <div class="scroll-hint-text">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        Scroll to see more projects
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '../ui/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: { ProjectCard },
  data() {
    return {
      atStart: true,
      atEnd: false,
      projects: [
        {
          title: 'AI Skincare E-Commerce Platform',
          description: 'Online store selling facial products and AI-powered face scanners that detect skin deficiencies. Features partnering brands NIVEA, The Ordinary, and Neutrogena.',
          technologies: ['Vue.js', 'Node.js', 'MySQL'],
          liveUrl: '',
          githubUrl: 'https://github.com/amol3ng/E-Commerce_project.git',
          bgColor: '#fef2f2',
          accentColor: '#895159'
        },
        {
          title: 'HR Management System (Frontend)',
          description: 'Digital HR platform built to replace a paper-based system. Handles employee attendance, time off, payroll, clock-in/out, and sick leave management.',
          technologies: ['Vue.js'],
          liveUrl: '',
          githubUrl: 'https://github.com/tylormentor-dev/Module.1_Project.git',
          bgColor: '#f0fdf4',
          accentColor: '#16a34a'
        },
        {
          title: 'HR Management System (Backend)',
          description: 'Full back-end integration for the HR platform, transitioning the company from a paper trail to a fully digital HR system with robust data handling.',
          technologies: ['Node.js', 'MySQL'],
          liveUrl: '',
          githubUrl: 'https://github.com/tylormentor-dev/Full-Stack-Project.git',
          bgColor: '#eff6ff',
          accentColor: '#2563eb'
        },
        {
          title: 'Oracle APEX Data Dashboard',
          description: 'Data categorisation and reporting dashboard built on Oracle APEX. Sorts and organises data into structured categories for streamlined business reporting.',
          technologies: ['Oracle APEX', 'SQL'],
          liveUrl: 'https://oracleapex.com/ords/r/otdb1/ot-enterprise/home?session=111839947343956',
          githubUrl: '',
          bgColor: '#fff7ed',
          accentColor: '#ea580c'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => this.checkScroll())
  },
  methods: {
    scroll(dir) {
      const track = this.$refs.track
      track.scrollBy({ left: dir * 350, behavior: 'smooth' })
    },
    checkScroll() {
      const track = this.$refs.track
      if (!track) return
      this.atStart = track.scrollLeft <= 10
      this.atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10
    }
  }
}
</script>

<style scoped>
.section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--maroon);
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  max-width: 1260px;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  gap: 22px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 16px 8px 24px;
  scrollbar-width: thin;
  scrollbar-color: rgba(137,81,89,0.3) transparent;
  -webkit-overflow-scrolling: touch;
}

.carousel-track > * {
  scroll-snap-align: start;
}

.carousel-track::-webkit-scrollbar {
  height: 4px;
}
.carousel-track::-webkit-scrollbar-track {
  background: transparent;
}
.carousel-track::-webkit-scrollbar-thumb {
  background: rgba(137,81,89,0.3);
  border-radius: 2px;
}

.carousel-nav {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--white);
  border: 1.5px solid var(--slate-200);
  color: var(--slate-600);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: var(--transition);
  box-shadow: var(--shadow-md);
  z-index: 2;
}

.carousel-nav:hover:not(:disabled) {
  border-color: var(--maroon);
  color: var(--maroon);
  box-shadow: 0 4px 16px rgba(137,81,89,0.2);
}

.carousel-nav:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.scroll-hint-text {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--slate-400);
  font-style: italic;
}

@media (max-width: 640px) {
  .carousel-nav { display: none; }
  .carousel-wrapper { padding: 0 16px; }
}
</style>