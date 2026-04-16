<template>
  <section id="contact" class="contact section-padding">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <p class="section-label">Get In Touch</p>
        <h2>Let's <span class="maroon">Work Together</span></h2>
        <div class="accent-line"></div>
        <p>Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
      </div>

      <div class="contact-grid">
        <!-- Left: Info -->
        <div class="contact-info">
          <div class="info-card">
            <h3>Ready to Build Something Great?</h3>
            <p>Whether you're looking to bring a new product to life, scale an existing application, or need a dedicated developer on your team — I'm here and ready.</p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div class="info-label">Location</div>
                  <div class="info-value">South Africa</div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div class="info-label">Email</div>
                  <div class="info-value">amohelamokhele@gmail.com</div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#895159" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div class="info-label">Availability</div>
                  <div class="info-value">Open to Opportunities</div>
                </div>
              </div>
            </div>

            <div class="social-section">
              <div class="social-label">Find Me On</div>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/amohelang-mokhele/" target="_blank" class="social-btn linkedin" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/amol3ng" target="_blank" class="social-btn github" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <div class="form-card">
            <h3>Send a Message</h3>

            <div v-if="successMessage" class="alert success">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ successMessage }}
            </div>

            <div v-if="errorMessage" class="alert error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {{ errorMessage }}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Full Name <span class="req">*</span></label>
                <input
                  type="text"
                  v-model="form.fullName"
                  placeholder="Amohelang Mokhele"
                  :class="{ error: errors.fullName }"
                />
                <span v-if="errors.fullName" class="field-error">{{ errors.fullName }}</span>
              </div>
              <div class="form-group">
                <label>Email Address <span class="req">*</span></label>
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="you@example.com"
                  :class="{ error: errors.email }"
                />
                <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-group">
              <label>Subject <span class="req">*</span></label>
              <input
                type="text"
                v-model="form.subject"
                placeholder="What's this about?"
                :class="{ error: errors.subject }"
              />
              <span v-if="errors.subject" class="field-error">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label>Message <span class="req">*</span></label>
              <textarea
                v-model="form.message"
                placeholder="Tell me about your project, idea, or opportunity..."
                rows="5"
                :class="{ error: errors.message }"
              ></textarea>
              <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
            </div>

            <button class="submit-btn" @click="sendToWhatsApp" :disabled="loading">
              <span v-if="!loading" class="btn-content">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Send via WhatsApp
              </span>
              <span v-else class="btn-content">
                <svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" opacity="0.3"/><path d="M12 3a9 9 0 0 1 9 9"/></svg>
                Opening WhatsApp...
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>© 2026 Amohelang Mokhele · Built with Vue.js & Node.js</p>
        <p class="footer-love">Crafted with <span class="heart">♥</span> in South Africa</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      loading: false,
      successMessage: '',
      errorMessage: '',
      form: { fullName: '', email: '', subject: '', message: '' },
      errors: {}
    }
  },
  methods: {
    validate() {
      this.errors = {}
      if (!this.form.fullName.trim()) this.errors.fullName = 'Name is required'
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email'
      }
      if (!this.form.subject.trim()) this.errors.subject = 'Subject is required'
      if (!this.form.message.trim()) this.errors.message = 'Message is required'
      return Object.keys(this.errors).length === 0
    },
    sendToWhatsApp() {
      this.successMessage = ''
      this.errorMessage = ''
      
      if (!this.validate()) return
      
      this.loading = true
      
      // Format the message for WhatsApp (using proper encoding)
      const message = `New Contact Form Submission:%0A%0AName: ${encodeURIComponent(this.form.fullName)}%0AEmail: ${encodeURIComponent(this.form.email)}%0ASubject: ${encodeURIComponent(this.form.subject)}%0AMessage: ${encodeURIComponent(this.form.message)}`
      
      // Your WhatsApp number
      const phoneNumber = '27792253194'
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
      
      // Try to open WhatsApp - this works on both mobile and desktop
      window.open(whatsappUrl, '_blank')
      
      // Show success message
      this.successMessage = 'WhatsApp is opening! Send the message to get in touch with me.'
      
      // Reset form
      this.form = { fullName: '', email: '', subject: '', message: '' }
      this.loading = false
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.successMessage = ''
      }, 5000)
    }
  }
}
</script>

<style scoped>
.contact {
  background: var(--slate-900);
  color: var(--white);
}

.contact :deep(.section-header h2) {
  color: var(--white);
}
.contact :deep(.section-header p) {
  color: rgba(255,255,255,0.6);
}
.contact :deep(.accent-line) {
  background: var(--maroon);
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--maroon-light);
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
}

.maroon { color: var(--maroon-light); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: start;
}

/* Info */
.info-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-xl);
  padding: 36px;
}

.info-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: white;
  margin-bottom: 12px;
}

.info-card > p {
  font-size: 14.5px;
  line-height: 1.7;
  color: rgba(255,255,255,0.6);
  margin-bottom: 28px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 32px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.info-icon {
  width: 38px;
  height: 38px;
  background: rgba(137,81,89,0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-label {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

.info-value {
  font-size: 14px;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
  margin-top: 2px;
}

.social-label {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 12px;
}

.social-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.04);
}

.social-btn:hover {
  transform: translateY(-2px);
}
.social-btn.linkedin:hover { background: rgba(0,119,181,0.2); border-color: #0077b5; color: #5ab9e8; }
.social-btn.github:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); color: white; }

/* Form */
.form-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 36px;
}

.form-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--slate-900);
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--slate-700);
  margin-bottom: 6px;
  font-family: 'Roboto', sans-serif;
}

.req { color: var(--maroon); }

input, textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid var(--slate-200);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: var(--slate-800);
  background: var(--white);
  transition: var(--transition);
  outline: none;
  resize: none;
}

input:focus, textarea:focus {
  border-color: var(--maroon);
  box-shadow: 0 0 0 3px rgba(137,81,89,0.1);
}

input.error, textarea.error {
  border-color: #ef4444;
}

.field-error {
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #25D366;
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:hover:not(:disabled) {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,211,102,0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.alert {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
}

.alert.success {
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
}

.alert.error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
.spin { animation: spin 0.8s linear infinite; }

/* Footer */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.08);
  font-size: 13px;
  color: rgba(255,255,255,0.35);
}

.footer-love .heart {
  color: var(--maroon-light);
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .footer-bottom { flex-direction: column; gap: 6px; text-align: center; }
}
</style>