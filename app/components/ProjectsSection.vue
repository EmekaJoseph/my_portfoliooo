<script setup lang="ts">
import { projects } from '~/data/profile'

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Projects</p>
        <h2 class="section-title">Selected work.</h2>
      </div>

      <div class="grid">
        <component
          :is="p.url ? 'a' : 'article'"
          v-for="(p, i) in projects"
          :key="p.url || p.title"
          class="project card"
          :class="{ linked: p.url }"
          :href="p.url || undefined"
          :target="p.url ? '_blank' : undefined"
          :rel="p.url ? 'noopener' : undefined"
          v-reveal="i * 80"
        >
          <div class="top">
            <span class="index">0{{ i + 1 }}</span>
            <AppIcon v-if="p.url" name="arrow" :size="20" class="arrow" />
          </div>
          <h3>{{ p.title || domain(p.url) }}</h3>
          <p class="desc">{{ p.description }}</p>
          <div class="tags">
            <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.project {
  display: flex;
  flex-direction: column;
  padding: 28px;
}
.project.linked:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
.index {
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  color: var(--text-faint);
}
.arrow {
  color: var(--text-faint);
  transition: color 0.2s ease, transform 0.2s ease;
}
.project.linked:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
h3 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.3rem;
  font-weight: 600;
}
.desc {
  margin-top: 10px;
  color: var(--text-muted);
  font-size: 0.95rem;
  flex: 1;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 22px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .project {
    padding: 22px;
  }
}
</style>
