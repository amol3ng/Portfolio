<template>
  <div class="home">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <ContactSection />
  </div>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import CertificationsSection from '../components/sections/CertificationsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    CertificationsSection,
    ContactSection
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
