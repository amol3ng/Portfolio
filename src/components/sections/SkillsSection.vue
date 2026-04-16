<template>
  <section id="skills" class="skills section-padding" style="background: var(--off-white);">
    <div class="container">
      <div class="section-header">
        <p class="section-label">What I Work With</p>
        <h2>Skills & Technologies</h2>
        <div class="accent-line"></div>
        <p>Expertise across the full development stack</p>
      </div>

      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-category">
          <div class="category-header">
            <span class="category-icon" v-html="category.icon"></span>
            <h3 class="category-title" :style="{ color: category.color }">{{ category.name }}</h3>
          </div>
          <div class="skills-list">
            <SkillCard
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :description="skill.description"
              :icon="skill.icon"
            />
          </div>
        </div>
      </div>

      <!-- Tech Icons Grid -->
      <div class="tech-cloud">
        <div class="tech-cloud-title">All Technologies</div>
        <div class="tech-tags">
          <span v-for="tech in allTechs" :key="tech" class="tech-pill">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from '../ui/SkillCard.vue'

const icon = (paths) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

export default {
  name: 'SkillsSection',
  components: { SkillCard },
  data() {
    return {
      skillCategories: [
        {
          name: 'Frontend',
          color: '#895159',
          icon: icon('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
          skills: [
            {
              name: 'React',
              description: 'Component-based UI development',
              icon: icon('<circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>')
            },
            {
              name: 'Next.js',
              description: 'React framework for production',
              icon: icon('<path d="M12 2L2 19.5h20L12 2z"/><path d="M12 8v8"/><path d="M8.5 15.5l7-7"/>')
            },
            {
              name: 'Vue.js',
              description: 'Progressive JavaScript framework',
              icon: icon('<polygon points="12 2 22 20 2 20"/><polygon points="12 8 18 20 6 20"/>')
            },
            {
              name: 'TypeScript',
              description: 'Typed JavaScript at scale',
              icon: icon('<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 17v-6M11 11h6M14 11v6"/>')
            },
            {
              name: 'JavaScript',
              description: 'Modern ES6+ development',
              icon: icon('<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 17v-6M17 11c0 2.5-3 4-3 4v-8"/>')
            },
            {
              name: 'HTML',
              description: 'Semantic markup & structure',
              icon: icon('<path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z"/><path d="M8 8h8l-.5 5-3.5 1-3.5-1-.25-3H15"/>')
            },
            {
              name: 'CSS',
              description: 'Responsive design & animations',
              icon: icon('<path d="M2 3h20l-2 14-8 4-8-4L2 3z"/><path d="M12 17l5-2.5-1-9H8l-.5 4h7.5l-.5 5H12z"/>')
            },
            {
              name: 'Tailwind CSS',
              description: 'Utility-first CSS framework',
              icon: icon('<path d="M6 12s1-4 6-4 6 4 6 4-1 4-6 4-6-4-6-4z"/><path d="M2 16s1-4 6-4"/>')
            },
            {
              name: 'Bootstrap',
              description: 'Responsive UI component library',
              icon: icon('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 7h4.5a2.5 2.5 0 0 1 0 5H8V7z"/><path d="M8 12h5a2.5 2.5 0 0 1 0 5H8v-5z"/>')
            }
          ]
        },
        {
          name: 'Backend',
          color: '#5c8a6b',
          icon: icon('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'),
          skills: [
            {
              name: 'Node.js',
              description: 'Server-side JavaScript runtime',
              icon: icon('<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>')
            },
            {
              name: 'Python',
              description: 'Backend scripting & automation',
              icon: icon('<path d="M12 2C9 2 7 4 7 7v2h5v1H6c-2 0-4 2-4 5s2 5 4 5h1v-3H6c-1 0-2-.9-2-2s.9-2 2-2h6c2 0 4-2 4-4V7c0-3-2-5-4-5z"/><path d="M12 22c3 0 5-2 5-5v-2h-5v-1h6c2 0 4-2 4-5s-2-5-4-5h-1v3h1c1 0 2 .9 2 2s-.9 2-2 2h-6c-2 0-4 2-4 4v3c0 3 2 5 4 5z"/>')
            },
            {
              name: 'Django',
              description: 'High-level Python web framework',
              icon: icon('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v12c0 2-1 3-3 3"/><path d="M15 3v8"/><path d="M15 15v3c0 1.5-1 3-3 3"/>')
            },
            {
              name: 'REST APIs',
              description: 'RESTful API design & development',
              icon: icon('<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>')
            }
          ]
        },
        {
          name: 'Databases & ORM',
          color: '#5a7faa',
          icon: icon('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>'),
          skills: [
            {
              name: 'MySQL',
              description: 'Relational database management',
              icon: icon('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>')
            },
            {
              name: 'PostgreSQL',
              description: 'Advanced open-source relational DB',
              icon: icon('<ellipse cx="12" cy="7" rx="9" ry="4"/><path d="M3 7v5c0 2.21 4.03 4 9 4s9-1.79 9-4V7"/><path d="M3 12v5c0 2.21 4.03 4 9 4s9-1.79 9-4v-5"/>')
            },
            {
              name: 'Prisma',
              description: 'Next-generation ORM for Node.js',
              icon: icon('<path d="M3 21L12 3l9 18H3z"/><path d="M12 3v11"/><path d="M7.5 17.5L12 14l4.5 3.5"/>')
            },
            {
              name: 'Oracle APEX',
              description: 'Low-code Oracle DB app platform',
              icon: icon('<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8l4 4-4 4"/><path d="M8 8l-2 4 2 4"/>')
            }
          ]
        },
        {
          name: 'DevOps & Cloud',
          color: '#7a6aaa',
          icon: icon('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'),
          skills: [
            {
              name: 'Vercel',
              description: 'Frontend cloud deployment platform',
              icon: icon('<path d="M12 2L2 20h20L12 2z"/>')
            },
            {
              name: 'Git',
              description: 'Version control & collaboration',
              icon: icon('<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>')
            }
          ]
        }
      ],
      allTechs: [
        'React', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript',
        'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
        'Node.js', 'Python', 'Django',
        'MySQL', 'PostgreSQL', 'Prisma', 'Oracle APEX',
        'Vercel', 'Git', 'REST APIs'
      ]
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-bottom: 60px;
}

.skill-category {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 28px;
  border: 1px solid var(--slate-200);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.skill-category:hover {
  box-shadow: var(--shadow-lg);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--slate-100);
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Tech Cloud */
.tech-cloud {
  text-align: center;
}

.tech-cloud-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--slate-600);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.tech-pill {
  background: var(--white);
  border: 1.5px solid var(--slate-200);
  color: var(--slate-600);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  transition: var(--transition);
  cursor: default;
}

.tech-pill:hover {
  border-color: var(--maroon);
  color: var(--maroon);
  background: rgba(137,81,89,0.05);
}

@media (max-width: 900px) {
  .skills-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; gap: 16px; }
}
</style>