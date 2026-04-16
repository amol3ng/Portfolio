<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="nav-container">
      <!-- Logo / Name -->
      <router-link to="/#hero" class="nav-brand">
        <div class="nav-avatar">AM</div>
        <span class="nav-name">Amohelang Mokhele</span>
      </router-link>

      <!-- Desktop Nav Links -->
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <router-link
            :to="`/#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </router-link>
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
          <router-link
            :to="`/#${item.id}`"
            :class="{ active: activeSection === item.id }"
            @click="menuOpen = false"
          >{{ item.label }}</router-link>
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
  border-radius: 8px;
  transition: background 0.2s;
}

.hamburger:hover {
  background: rgba(137, 81, 89, 0.08);
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--slate-700);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.menu-open .hamburger span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid var(--slate-100);
  display: none;
}

.mobile-menu.open {
  max-height: 480px;
}

.mobile-menu ul {
  list-style: none;
  padding: 8px 24px 20px;
  margin: 0;
}

.mobile-menu ul li a {
  display: block;
  padding: 13px 4px;
  font-size: 15px;
  font-weight: 500;
  color: var(--slate-700);
  border-bottom: 1px solid var(--slate-100);
  text-decoration: none;
  transition: color 0.2s;
}

.mobile-menu ul li:last-child a {
  border-bottom: none;
}

.mobile-menu ul li a:hover,
.mobile-menu ul li a.active {
  color: var(--maroon);
}

.mobile-hire {
  color: var(--maroon) !important;
  font-weight: 700 !important;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
}
</style>