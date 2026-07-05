<template>
  <section class="home">
    <div class="home__body md:flex md:items-start pt-8 md:pt-12">
      <aside class="profile w-full md:w-1/3 lg:w-1/4 px-4 md:pl-0 md:pr-8 text-center md:text-left">
        <img
          class="profile__photo"
          src="/images/uploads/hzk.jpg"
          alt="Huseyin Zeyd Koytak"
        />

        <h1 class="profile__name">Huseyin Zeyd Koytak</h1>
        <p class="profile__role">Sociologist, PhD</p>
        <p class="profile__role">Assistant Professor</p>

        <a class="profile__email" href="mailto:zeyd@koytak.com">zeyd@koytak.com</a>

        <div class="profile__edu">
          <p class="profile__edu-heading">Education</p>
          <ul>
            <li><span class="profile__edu-degree">PhD</span>, Syracuse University</li>
            <li><span class="profile__edu-degree">MA</span>, İstanbul Şehir University</li>
            <li><span class="profile__edu-degree">BA</span>, Boğaziçi University</li>
          </ul>
        </div>

        <nav class="profile__social" aria-label="Academic profiles">
          <a
            class="social-link"
            href="https://scholar.google.com/citations?user=nestUyQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="social-link__icon"
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

          <a
            class="social-link"
            href="https://orcid.org/0000-0003-1767-0695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="social-link__icon"
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
      </aside>

      <div class="about w-full md:w-2/3 lg:w-3/4 px-4 md:px-0 mt-10 md:mt-0">
        <div v-html="$md.render(welcomeText)" class="home__welcome markdown" />
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
}
</script>

<style lang="scss" scoped>
.profile__photo {
  display: block;
  width: 11rem;
  height: auto;
  margin: 0 auto;
  border: 6px solid #fff;
  box-shadow: 0 14px 34px -10px rgba(11, 55, 101, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px -12px rgba(11, 55, 101, 0.4);
  }
}

.profile__name {
  @apply text-xl font-bold mt-4 leading-tight;
  color: $ink;
  letter-spacing: -0.01em;
}

.profile__role {
  @apply text-sm leading-snug;
  color: #4a5568;
}

.profile__email {
  @apply block text-sm mt-3 font-medium;
  color: $bluise;

  &:hover {
    text-decoration: underline;
  }
}

.profile__edu {
  @apply mt-4;
}

.profile__edu-heading {
  @apply text-xs font-semibold uppercase mb-1;
  color: #718096;
  letter-spacing: 0.06em;
}

.profile__edu ul {
  @apply text-sm;
  list-style: none;
  padding-left: 0;
  color: #4a5568;
}

.profile__edu li {
  @apply leading-snug;
  margin-bottom: 0.15rem;
}

.profile__edu-degree {
  @apply font-semibold;
  color: $ink;
}

.profile__social {
  @apply mt-4 flex flex-col items-center;
}

.social-link {
  @apply inline-flex items-center text-sm font-medium py-1;
  color: $ink;
  transition: color 0.18s ease;

  &:hover {
    color: $bluise;
  }
}

.social-link__icon {
  @apply mr-2 flex-shrink-0;
  color: $bluise;
}

@media (min-width: 768px) {
  .profile__photo {
    margin-left: 0;
    margin-right: 0;
    width: 12rem;
  }

  .profile__social {
    align-items: flex-start;
  }

  .about {
    padding-top: 0.5rem;
  }
}
</style>
