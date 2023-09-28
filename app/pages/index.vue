
<template>
  <section class="home">
    <div class="py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
        <div v-html="$md.render(welcomeText)" class="home__welcome markdown"/>

      </div>
      <div class="flex flex-col w-full xl:w-2/5 pl-10">
        <img
          alt="Huseyin Zeyd Koytak"
          class="rounded shadow-xl"
          src="https://www.maxwell.syr.edu/images/default-source/people-listings/zeyd-koytak.jpg?sfvrsn=3fe010a7_6"
          width="350" height="350"
        />
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
