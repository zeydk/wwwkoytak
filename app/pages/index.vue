<template>
  <section class="home">
    <div class="container mx-auto py-12 md:py-24 flex flex-wrap md:items-start">
      <div class="w-full md:w-3/5 flex flex-col justify-center items-start px-4 md:px-8">
        <div v-html="$md.render(welcomeText)" class="home__welcome markdown" />
      </div>

      <div class="w-full md:w-2/5 flex flex-col items-center mt-10 md:mt-0 px-4 md:px-8">
        <img
          alt="Huseyin Zeyd Koytak"
          class="profile-photo rounded shadow-xl max-w-full h-auto w-56 sm:w-64 md:w-72 lg:w-80"
          src="/images/uploads/hzk.jpg"
        />

        <nav class="profile-links mt-5" aria-label="Academic profiles">
          <a
            class="profile-link"
            href="https://scholar.google.com/citations?user=nestUyQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="profile-link__icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"
              />
            </svg>
            <span>Google Scholar</span>
          </a>

          <span class="profile-links__sep" aria-hidden="true">·</span>

          <a
            class="profile-link"
            href="https://orcid.org/0000-0003-1767-0695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="profile-link__icon"
              viewBox="0 0 256 256"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill="#A6CE39"
                d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"
              />
              <path
                fill="#FFF"
                d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"
              />
            </svg>
            <span>ORCID</span>
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  get posts(): Post[] {
    return this.$store.state.posts;
  }

  isSignedUp = false;
}
</script>

<style lang="scss" scoped>
.profile-photo {
  box-shadow: 0 18px 40px -14px rgba(11, 55, 101, 0.4);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 26px 52px -14px rgba(11, 55, 101, 0.5);
  }
}

.profile-links {
  @apply flex items-center justify-center;
  font-size: 0.9rem;
}

.profile-link {
  @apply inline-flex items-center font-medium;
  color: $ink;
  transition: color 0.18s ease;

  &:hover {
    color: $bluise;
  }
}

.profile-link__icon {
  @apply mr-2 flex-shrink-0;
  color: $bluise;
}

.profile-links__sep {
  @apply mx-3;
  color: #cbd5e0;
}
</style>
