
<template>
  <section class="home">
    <div class="container mx-auto py-12 md:py-24 flex flex-wrap items-center">
      <div class="w-full md:w-3/5 flex flex-col justify-center items-start px-4 md:px-8">
        <div v-html="$md.render(welcomeText)" class="home__welcome markdown" />
      </div>
      <div class="w-full md:w-2/5 flex justify-center md:justify-start mt-10 md:mt-0">
        <img
          alt="Huseyin Zeyd Koytak"
          class="rounded shadow-xl max-w-full h-auto w-65 md:w-80 lg:w-96"
          src="http://www.koytak.com/images/uploads/hzk.jpg"
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

<style lang="scss" scoped>
.home {
  img {
    box-shadow: 0 18px 40px -14px rgba(11, 55, 101, 0.4);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  img:hover {
    transform: translateY(-5px);
    box-shadow: 0 26px 52px -14px rgba(11, 55, 101, 0.5);
  }
}
</style>
