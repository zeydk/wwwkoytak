<template>
  <header class="flex flex-wrap items-center py-4 md:py-8">
    <div class="header__logo">
      <nuxt-link to="/" class="header__wordmark">Koytak, PhD</nuxt-link>
    </div>

    <nav class="nav ml-auto flex items-center">
      <ul class="flex flex-row flex-wrap items-center md:mr-3 lg:mr-6">
        <li
          v-for="(page, index) in pages"
          :key="index"
          class="block font-medium px-3 py-1 md:px-3 lg:px-4"
        >
          <nuxt-link :to="`/${page.slug}`">{{ loc(page, 'title') }}</nuxt-link>
        </li>
      </ul>

      <div class="lang" role="group" aria-label="Language">
        <button
          type="button"
          class="lang__btn"
          :class="{ 'lang__btn--active': locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <span class="lang__sep" aria-hidden="true">/</span>
        <button
          type="button"
          class="lang__btn"
          :class="{ 'lang__btn--active': locale === 'tr' }"
          @click="setLocale('tr')"
        >
          TR
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  get locale(): string {
    return this.$store.state.locale;
  }

  setLocale(value: string): void {
    this.$store.commit('SET_LOCALE', value);
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('locale', value);
    }
  }
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    transition: color 0.18s ease;

    &:hover {
      color: $bluise;
    }

    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}

.header__wordmark {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: $bluise;
  line-height: 1;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.78;
  }
}

.lang {
  @apply flex items-center;
  font-size: 0.8rem;
}

.lang__btn {
  @apply font-semibold px-1;
  color: #a0aec0;
  letter-spacing: 0.02em;
  transition: color 0.18s ease;

  &:hover {
    color: $bluise;
  }

  &--active {
    color: $bluise;
  }
}

.lang__sep {
  color: #cbd5e0;
}
</style>
