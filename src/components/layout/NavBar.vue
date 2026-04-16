<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="nav-container">
      <!-- Logo / Name -->
      <a href="#hero" class="nav-brand" @click.prevent="scrollTo('#hero')">
        <div class="nav-avatar">AM</div>
        <span class="nav-name">Amohelang Mokhele</span>
      </a>

      <!-- Desktop Nav Links -->
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(`#${item.id}`)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            @click.prevent="mobileNav(item.id)"
          >{{ item.label }}</a>
        </li>
        <li>
          <a href="#contact" class="mobile-hire" @click.prevent="mobileNav('contact')">Hire Me</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      activeSection: 'hero',
      navItems: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20

      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          this.activeSection = sections[i]
          break
        }
      }
    },
    scrollTo(hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => { window.scrollBy(0, -80) }, 100)
      }
      this.menuOpen = false
    },
    mobileNav(id) {
      this.menuOpen = false
      setTimeout(() => this.scrollTo(`#${id}`), 100)
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 16px 0;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.05);
  padding: 10px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.nav-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--maroon);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(137, 81, 89, 0.3);
}

.nav-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--slate-800);
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
  margin-left: auto;
}

.nav-link {
  display: block;
  padding: 7px 14px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--slate-600);
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
  color: var(--maroon);
  background: rgba(137, 81, 89, 0.06);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background: var(--maroon);
  border-radius: 1px;
}

.btn-hire {
  background: var(--maroon);
  color: white;
  padding: 9px 22px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(137, 81, 89, 0.3);
  flex-shrink: 0;
}

.btn-hire:hover {
  background: var(--maroon-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(137, 81, 89, 0.4);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--slate-700);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-open .hamburger span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}
.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  background: white;
  border-top: 1px solid var(--slate-100);
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-menu ul {
  list-style: none;
  padding: 12px 24px 20px;
}

.mobile-menu ul li a {
  display: block;
  padding: 12px 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--slate-700);
  border-bottom: 1px solid var(--slate-100);
  text-decoration: none;
}

.mobile-menu ul li a.active {
  color: var(--maroon);
}

.mobile-hire {
  color: var(--maroon) !important;
  font-weight: 600 !important;
  border-bottom: none !important;
}

@media (max-width: 900px) {
  .nav-links, .btn-hire { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
</style>
