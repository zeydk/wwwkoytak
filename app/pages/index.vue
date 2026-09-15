<template>
  <section class="home">
    <div v-html="$md.render(loc(settings, 'welcomeText'))" class="home__welcome markdown" />
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
  settings = settings;

  get posts(): Post[] {
    return this.$store.state.posts;
  }
}
</script>
