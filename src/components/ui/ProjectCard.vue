<template>
  <div class="project-card">
    <div class="project-image">
      <div class="image-placeholder">
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" :fill="bgColor"/>
          <rect x="20" y="20" width="160" height="10" rx="5" :fill="accentColor" opacity="0.5"/>
          <rect x="20" y="38" width="100" height="6" rx="3" fill="#cbd5e1" opacity="0.6"/>
          <rect x="20" y="52" width="130" height="6" rx="3" fill="#cbd5e1" opacity="0.4"/>
          <rect x="20" y="66" width="80" height="6" rx="3" fill="#cbd5e1" opacity="0.3"/>
          <rect x="20" y="84" width="50" height="20" rx="4" :fill="accentColor" opacity="0.7"/>
          <rect x="80" y="84" width="50" height="20" rx="4" fill="#e2e8f0"/>
        </svg>
      </div>
      <div class="project-overlay">
        <div class="overlay-links">
          <a v-if="liveUrl && liveUrl !== '#'" :href="liveUrl" target="_blank" class="overlay-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live
          </a>
          <a v-if="githubUrl && githubUrl !== '#'" :href="githubUrl" target="_blank" class="overlay-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-desc">{{ description }}</p>

      <div class="project-tags">
        <span v-for="tech in technologies" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>

      <div class="project-links">
        <a v-if="liveUrl && liveUrl !== '#'" :href="liveUrl" target="_blank" class="link-btn live-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Live Site
        </a>
        <a v-if="githubUrl && githubUrl !== '#'" :href="githubUrl" target="_blank" class="link-btn github-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    technologies: Array,
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    bgColor: { type: String, default: '#f1f5f9' },
    accentColor: { type: String, default: '#895159' }
  }
}
</script>

<style scoped>
.project-card {
  background: var(--white);
  border: 1.5px solid var(--slate-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  flex-shrink: 0;
  width: 320px;
}

.project-card:hover {
  border-color: var(--maroon);
  box-shadow: 0 12px 32px rgba(137,81,89,0.12);
  transform: translateY(-4px);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 160px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
}

.image-placeholder svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(137,81,89,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-links {
  display: flex;
  gap: 12px;
}

.overlay-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  color: var(--maroon);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.overlay-btn:hover {
  background: var(--maroon);
  color: white;
}

.project-content {
  padding: 20px;
}

.project-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--slate-900);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 13.5px;
  color: var(--slate-500);
  line-height: 1.6;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tech-tag {
  background: rgba(137,81,89,0.08);
  color: var(--maroon);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11.5px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

.project-links {
  display: flex;
  gap: 10px;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.live-btn {
  background: var(--maroon);
  color: white;
  box-shadow: 0 2px 8px rgba(137,81,89,0.25);
}

.live-btn:hover {
  background: var(--maroon-dark);
  transform: translateY(-1px);
}

.github-btn {
  background: var(--slate-100);
  color: var(--slate-700);
  border: 1px solid var(--slate-200);
}

.github-btn:hover {
  border-color: var(--slate-400);
  color: var(--slate-900);
}
</style>