<script setup lang="ts">
import { experience } from '~/data/profile'
</script>

<template>
  <section id="experience" class="section alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Experience</p>
        <h2 class="section-title">Where I’ve worked.</h2>
      </div>

      <ol class="timeline">
        <li v-for="(job, i) in experience" :key="job.company" class="item" v-reveal="i * 60">
          <p class="period">{{ job.period }}</p>
          <div class="body">
            <h3>{{ job.role }}</h3>
            <p class="company">{{ job.company }}</p>
            <ul>
              <li v-for="p in job.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: var(--bg-elev);
  border-block: 1px solid var(--border);
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 28px 0;
  border-top: 1px solid var(--border);
}
.item:first-child {
  border-top: 0;
  padding-top: 0;
}
.period {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.82rem;
  color: var(--text-faint);
  padding-top: 4px;
}
h3 {
  font-size: 1.15rem;
  font-weight: 600;
}
.company {
  color: var(--accent);
  font-weight: 500;
  font-size: 0.95rem;
  margin-top: 2px;
}
ul {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
}
ul li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 0.97rem;
}
ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--accent);
  opacity: 0.6;
}

@media (max-width: 680px) {
  .item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
