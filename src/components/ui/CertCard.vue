<template>
  <div class="cert-card">
    <div class="cert-badge" :style="{ background: badgeColor }">
      <img
        v-if="icon && !imgError"
        :src="icon"
        :alt="issuer"
        class="cert-logo"
        @error="imgError = true"
      />
      <span v-else class="cert-initials">{{ initials }}</span>
    </div>

    <div class="cert-info">
      <h4 class="cert-title">{{ title }}</h4>
      <p class="cert-issuer">{{ issuer }}</p>
      <p class="cert-date">{{ date }}</p>
    </div>

    <div v-if="verified" class="cert-verified">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Verified
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertCard',
  props: {
    title: String,
    issuer: String,
    date: String,
    icon: {
      type: String,
      default: null
    },
    initials: {
      type: String,
      default: '?'
    },
    badgeColor: {
      type: String,
      default: 'rgba(137,81,89,0.1)'
    },
    verified: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      imgError: false
    }
  }
}
</script>

<style scoped>
.cert-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--white);
  border: 1.5px solid var(--slate-200);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.cert-card:hover {
  border-color: var(--maroon);
  box-shadow: 0 4px 20px rgba(137,81,89,0.1);
  transform: translateX(4px);
}

.cert-badge {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cert-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 7px;
}

.cert-initials {
  font-size: 12px;
  font-weight: 700;
  color: var(--maroon, #895159);
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1;
}

.cert-info {
  flex: 1;
}

.cert-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--slate-800);
  margin-bottom: 3px;
}

.cert-issuer {
  font-size: 13px;
  color: var(--maroon);
  font-weight: 500;
  margin-bottom: 2px;
}

.cert-date {
  font-size: 12px;
  color: var(--slate-400);
}

.cert-verified {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #22c55e;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  white-space: nowrap;
}
</style>