<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const theme = ref<'dark' | 'light'>('light')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  try {
    localStorage.setItem('theme', theme.value)
  } catch {}
}

const onScroll = () => (scrolled.value = window.scrollY > 8)

onMounted(() => {
  theme.value = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled: scrolled || open }">
    <div class="container bar">
      <a href="#top" class="logo" aria-label="Back to top">
        <span class="logo-text">{{ profile.headerName }}</span>
      </a>

      <nav class="nav" :class="{ open }" aria-label="Main">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
      </nav>

      <div class="actions">
        <button
          class="icon-btn"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="18" />
        </button>
        <button class="icon-btn menu-btn" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
          <AppIcon :name="open ? 'close' : 'menu'" :size="20" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.header.scrolled {
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  border-bottom-color: var(--border);
}
.bar {
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}
.logo-text {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.2rem;
}
.nav {
  display: flex;
  gap: 4px;
}
.nav a {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.92rem;
  color: var(--text-muted);
  transition: color 0.2s ease, background-color 0.2s ease;
}
.nav a:hover {
  color: var(--text);
  background: var(--accent-soft);
}
.actions {
  display: flex;
  gap: 6px;
}
.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-elev);
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.menu-btn {
  display: none;
}

@media (max-width: 820px) {
  .menu-btn {
    display: grid;
  }
  .nav {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 12px 16px 20px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .nav.open {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
  .nav a {
    padding: 12px;
    font-size: 1rem;
  }
}
@media (max-width: 400px) {
  .logo-text {
    font-size: 1.05rem;
  }
}
</style>
