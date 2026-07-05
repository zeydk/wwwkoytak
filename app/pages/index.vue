<template>
  <section class="home">
    <div v-html="$md.render(welcomeText)" class="home__welcome markdown" />
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
.home__welcome {
  max-width: 46rem;
}
</style>
