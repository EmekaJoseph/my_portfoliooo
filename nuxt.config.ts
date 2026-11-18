export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  // Page-level SEO tags live in app/app.vue and read from app/data/profile.ts
  nitro: {
    prerender: {
      routes: ['/', '/robots.txt', '/sitemap.xml'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f7f5f0', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#171614', media: '(prefers-color-scheme: dark)' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,600&display=swap',
        },
        { rel: 'preload', as: 'image', href: '/profile.webp', type: 'image/webp' },
      ],
      script: [
        {
          // Apply the saved theme before paint (defaults to light)
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.dataset.theme='dark'}catch(e){}})()",
          tagPosition: 'head',
        },
      ],
      noscript: [
        // Without JavaScript, show content that would otherwise fade in on scroll
        { innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' },
      ],
    },
  },
})
