<template>
  <section id="certifications" class="certifications section-padding" style="background: var(--off-white);">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Achievements</p>
        <h2>Certifications</h2>
        <div class="accent-line"></div>
        <p>Professional certifications and achievements</p>
      </div>

      <div class="certs-grid">
        <CertCard
          v-for="cert in certifications"
          :key="cert.title + cert.issuer"
          v-bind="cert"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CertCard from '../ui/CertCard.vue'

export default {
  name: 'CertificationsSection',
  components: { CertCard },
  data() {
    return {
      certifications: [
        {
          title: 'Full Stack Developer',
          issuer: 'Life Choices Academy',
          date: 'Issued: April 2026',
          icon: 'https://logo.clearbit.com/lifechoicesacademy.com',
          initials: 'LC',
          badgeColor: 'rgba(255,153,0,0.1)',
          verified: true
        },
        {
          title: 'Full Stack Developer',
          issuer: 'FNB App Academy',
          date: 'Issued: August 2025',
          icon: 'https://logo.clearbit.com/fnb.co.za',
          initials: 'FNB',
          badgeColor: 'rgba(0,114,206,0.1)',
          verified: true
        },
        {
          title: 'Full Stack Developer',
          issuer: 'Codeeza Bootcamp',
          date: 'Issued: May 2025',
          icon: null,
          initials: 'CZ',
          badgeColor: 'rgba(71,162,72,0.1)',
          verified: false
        },
        {
          title: 'Introduction to Data Science',
          issuer: 'Cisco',
          date: 'Issued: February 2026',
          icon: 'https://logo.clearbit.com/cisco.com',
          initials: 'CS',
          badgeColor: 'rgba(0,120,212,0.1)',
          verified: true
        },
        {
          title: 'Cloud Essentials',
          issuer: 'IBM',
          date: 'Issued: February 2026',
          icon: 'https://logo.clearbit.com/ibm.com',
          initials: 'IBM',
          badgeColor: 'rgba(0,0,0,0.05)',
          verified: true
        },
        {
          title: 'Introduction to Cybersecurity',
          issuer: 'Cisco',
          date: 'Issued: February 2026',
          icon: 'https://logo.clearbit.com/cisco.com',
          initials: 'CS',
          badgeColor: 'rgba(0,120,212,0.1)',
          verified: true
        },
        {
          title: 'Professional Development',
          issuer: 'ALX',
          date: 'Issued: October 2025',
          icon: 'https://logo.clearbit.com/alxafrica.com',
          initials: 'ALX',
          badgeColor: 'rgba(255,0,0,0.08)',
          verified: true
        }
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

.certs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .certs-grid {
    grid-template-columns: 1fr;
  }
}
</style>