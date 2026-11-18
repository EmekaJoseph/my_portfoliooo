<script setup lang="ts">
import { profile } from '~/data/profile'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="panel card" v-reveal>
        <p class="eyebrow">Contact</p>
        <h2 class="section-title">Let’s build something great.</h2>
        <p class="lead">
          Have a project, a role, or just want to say hello? My inbox is always open.
        </p>

        <div class="cta">
          <a :href="profile.socials.whatsapp" target="_blank" rel="noopener" class="btn btn-primary">
            <AppIcon name="whatsapp" :size="18" /> Chat on WhatsApp
          </a>
          <button class="btn btn-ghost" @click="copyEmail">
            <AppIcon :name="copied ? 'check' : 'copy'" :size="18" />
            {{ copied ? 'Copied!' : profile.email }}
          </button>
        </div>

        <div class="socials">
          <a :href="profile.socials.linkedin" target="_blank" rel="noopener">
            <AppIcon name="linkedin" :size="18" /> LinkedIn
          </a>
          <a :href="profile.socials.github" target="_blank" rel="noopener">
            <AppIcon name="github" :size="18" /> GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  padding: 64px 48px;
  text-align: center;
  background:
    radial-gradient(500px circle at 50% 0%, var(--accent-soft), transparent 70%),
    var(--surface);
}
.lead {
  margin: 16px auto 0;
  max-width: 30rem;
  color: var(--text-muted);
  font-size: 1.05rem;
}
.cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.cta .btn-ghost {
  max-width: 100%;
  overflow-wrap: anywhere;
}
.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  margin-top: 32px;
}
.socials a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s ease;
}
.socials a:hover {
  color: var(--accent);
}
@media (max-width: 600px) {
  .panel {
    padding: 44px 20px;
  }
}
</style>
