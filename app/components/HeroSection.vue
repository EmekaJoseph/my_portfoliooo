<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="top" class="hero">
    <div class="container grid">
      <div class="copy">
        <p v-if="profile.available" class="status" v-reveal>
          <span class="dot" /> Open to new opportunities
        </p>
        <h1 v-reveal="80">
          Hi, I’m {{ profile.firstName }}.<br />
          <span class="muted">{{ profile.role }}.</span>
        </h1>
        <p class="tagline" v-reveal="160">{{ profile.tagline }}</p>

        <div class="cta" v-reveal="240">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a :href="profile.cv" class="btn btn-ghost" download>
            <AppIcon name="download" :size="18" /> Download CV
          </a>
        </div>

        <div class="meta" v-reveal="320">
          <span><AppIcon name="pin" :size="16" /> {{ profile.location }}</span>
          <a :href="profile.socials.github" target="_blank" rel="noopener" aria-label="GitHub">
            <AppIcon name="github" :size="18" />
          </a>
          <a :href="profile.socials.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
            <AppIcon name="linkedin" :size="18" />
          </a>
          <a :href="profile.socials.whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp">
            <AppIcon name="whatsapp" :size="18" />
          </a>
        </div>
      </div>

      <div class="visual" v-reveal="200">
        <div class="portrait">
          <img
            v-if="profile.photo"
            :src="profile.photo"
            :alt="`Portrait of ${profile.name}`"
            width="800"
            height="1000"
            fetchpriority="high"
          />
          <span v-else class="monogram">{{ profile.initials }}</span>
        </div>
        <div class="badge card">
          <span class="badge-value">8+</span>
          <span class="badge-label">years shipping<br />production software</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  background: var(--glow);
}
.grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 64px;
  align-items: center;
}
.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-muted);
  background: var(--bg-elev);
  margin-bottom: 24px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--success) 20%, transparent);
}
h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}
.muted {
  color: var(--text-muted);
}
.tagline {
  margin-top: 22px;
  max-width: 34rem;
  font-size: 1.12rem;
  color: var(--text-muted);
}
.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}
.meta {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 36px;
  color: var(--text-faint);
  font-size: 0.92rem;
}
.meta span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.meta a {
  color: var(--text-muted);
  transition: color 0.2s ease;
}
.meta a:hover {
  color: var(--accent);
}

.visual {
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 340px;
}
.portrait {
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  background:
    linear-gradient(145deg, var(--accent-soft), transparent 60%),
    var(--surface);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow);
}
.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.monogram {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 6rem;
  font-weight: 600;
  color: var(--accent);
  opacity: 0.9;
}
.badge {
  position: absolute;
  left: -28px;
  bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  box-shadow: var(--shadow);
}
.badge-value {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.9rem;
  font-weight: 600;
  color: var(--accent);
}
.badge-label {
  font-size: 0.8rem;
  line-height: 1.35;
  color: var(--text-muted);
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .visual {
    max-width: 280px;
    order: -1;
    justify-self: start;
  }
  .badge {
    left: auto;
    right: -24px;
  }
  .hero {
    min-height: auto;
    padding-top: 110px;
  }
}
@media (max-width: 480px) {
  .visual {
    max-width: 220px;
  }
  .badge {
    right: -12px;
    bottom: 16px;
    padding: 10px 14px;
  }
  .badge-value {
    font-size: 1.4rem;
  }
}
</style>
