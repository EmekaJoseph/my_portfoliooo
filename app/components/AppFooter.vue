<script setup lang="ts">
import { profile } from '~/data/profile'
// Set at build time, then refreshed in the visitor's browser so it is always the current year
const year = ref(new Date().getFullYear())
onMounted(() => (year.value = new Date().getFullYear()))
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <p>© {{ year }} {{ profile.headerName }}</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
  font-size: 0.88rem;
  color: var(--text-faint);
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
a:hover {
  color: var(--accent);
}
</style>
