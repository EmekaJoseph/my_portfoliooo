<script setup lang="ts">
import { skills } from '~/data/profile'
</script>

<template>
  <section id="skills" class="section alt">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Skills</p>
        <h2 class="section-title">Tools I work with.</h2>
      </div>

      <div class="grid">
        <div v-for="(s, i) in skills" :key="s.group" class="group" v-reveal="i * 60">
          <h3>{{ s.group }}</h3>
          <ul>
            <li v-for="item in s.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: var(--bg-elev);
  border-block: 1px solid var(--border);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px 40px;
}
h3 {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
  margin-bottom: 14px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
li {
  padding: 7px 13px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  font-size: 0.9rem;
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;
}
li:hover {
  border-color: var(--accent);
  color: var(--accent);
}
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
