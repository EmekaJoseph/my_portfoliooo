<script setup lang="ts">
import { profile, seo, siteUrl, experience } from '~/data/profile'

const url = `${siteUrl}/`
const image = `${siteUrl}${seo.ogImage}`

useSeoMeta({
  title: seo.title,
  description: seo.description,
  author: profile.headerName,
  robots: 'index, follow, max-image-preview:large',
  ogType: 'profile',
  ogSiteName: profile.headerName,
  ogLocale: 'en_NG',
  ogUrl: url,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: image,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${profile.headerName}, ${profile.role}`,
  profileFirstName: 'Chukwuemeka',
  profileLastName: 'Iwuji',
  twitterCard: 'summary_large_image',
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: image,
})

useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url,
        name: seo.title,
        mainEntity: {
          '@type': 'Person',
          name: profile.headerName,
          alternateName: ['Iwuji Joseph', 'Iwuji Chukwuemeka', 'Chukwuemeka Iwuji'],
          jobTitle: profile.role,
          description: seo.description,
          url,
          image: `${siteUrl}${profile.photo}`,
          email: `mailto:${profile.email}`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lagos',
            addressCountry: 'NG',
          },
          worksFor: { '@type': 'Organization', name: experience[0]?.company },
          alumniOf: [
            { '@type': 'CollegeOrUniversity', name: 'Adekunle Ajasin University' },
            { '@type': 'CollegeOrUniversity', name: 'Yaba College of Technology' },
          ],
          knowsAbout: ['Vue.js', 'Nuxt', 'Laravel', 'PHP', 'Node.js', 'Flutter', 'MySQL', 'PostgreSQL'],
          sameAs: [profile.socials.github, profile.socials.linkedin],
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
