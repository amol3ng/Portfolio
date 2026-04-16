<template>
  <div class="skill-card">
    <div class="skill-icon" v-html="icon"></div>
    <div class="skill-info">
      <h4 class="skill-name">{{ name }}</h4>
      <p class="skill-desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    name: String,
    description: String,
    icon: String
  }
}
</script>

<style scoped>
.skill-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: var(--white);
  border: 1.5px solid var(--slate-200);
  border-radius: var(--radius-md);
  transition: var(--transition);
  cursor: default;
}

.skill-card:hover {
  border-color: var(--maroon);
  box-shadow: 0 0 0 3px rgba(137, 81, 89, 0.08), var(--shadow-md);
  transform: translateY(-2px);
}

.skill-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(137, 81, 89, 0.07);
  border-radius: 10px;
  transition: var(--transition);
}

.skill-card:hover .skill-icon {
  background: rgba(137, 81, 89, 0.14);
}

.skill-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.skill-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--slate-800);
  margin-bottom: 3px;
}

.skill-desc {
  font-size: 12px;
  color: var(--slate-500);
  line-height: 1.4;
}
</style>