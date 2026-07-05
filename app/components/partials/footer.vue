<template>
  <footer class="footer -mx-4 md:mx-0">
    <div class="container mx-auto py-8 px-4 flex flex-col items-center text-center">
      <nav class="footer__links" aria-label="Contact and academic profiles">
        <a class="footer__link" href="mailto:zeyd@koytak.com">Email</a>
        <span class="footer__sep" aria-hidden="true">·</span>
        <a
          class="footer__link"
          href="https://scholar.google.com/citations?user=nestUyQAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar
        </a>
        <span class="footer__sep" aria-hidden="true">·</span>
        <a
          class="footer__link"
          href="https://orcid.org/0000-0003-1767-0695"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCID
        </a>
      </nav>

      <p class="footer__copy">&copy; {{ year }} Huseyin Zeyd Koytak</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {
  year: number = new Date().getFullYear();
}
</script>

<style lang="scss">
.footer {
  background-color: $bluise;
  color: rgba(255, 255, 255, 0.9);
}

.footer__links {
  @apply flex flex-wrap items-center justify-center;
  font-size: 0.92rem;
}

.footer__link {
  @apply font-medium px-1;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.18s ease;

  &:hover {
    color: #fff;
  }
}

.footer__sep {
  @apply mx-2;
  color: rgba(255, 255, 255, 0.4);
}

.footer__copy {
  @apply text-sm mt-3;
  color: rgba(255, 255, 255, 0.65);
}
</style>
