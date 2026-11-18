<script setup lang="ts">
import { profile, stats, education } from '~/data/profile'
</script>

<template>
  <section id="about" class="section">
    <div class="container grid">
      <div>
        <div class="section-head" v-reveal>
          <p class="eyebrow">About</p>
          <h2 class="section-title">Full-stack, end to end.</h2>
        </div>
        <div class="text" v-reveal="100">
          <p v-for="(p, i) in profile.about" :key="i">{{ p }}</p>
        </div>

        <div class="stats" v-reveal="180">
          <div v-for="s in stats" :key="s.label" class="stat">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <aside class="edu card" v-reveal="240">
        <p class="edu-title"><AppIcon name="cap" :size="18" /> Education</p>
        <div v-for="e in education" :key="e.degree" class="edu-item">
          <p class="edu-degree">{{ e.degree }}</p>
          <p class="edu-school">{{ e.school }}</p>
          <p class="edu-period">{{ e.period }}</p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 56px;
  align-items: end;
}
.text {
  display: grid;
  gap: 16px;
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 36rem;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-value {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.1;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--text-faint);
  line-height: 1.4;
}
.edu {
  padding: 28px;
}
.edu-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--accent);
}
.edu-item + .edu-item {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}
.edu-degree {
  font-weight: 600;
}
.edu-school {
  color: var(--text-muted);
  font-size: 0.92rem;
}
.edu-period {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.78rem;
  color: var(--text-faint);
  margin-top: 4px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
@media (max-width: 480px) {
  .stat-value {
    font-size: 1.7rem;
  }
}
</style>
