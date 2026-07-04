<template>
  <main :class="[$route.name]" class="main px-4 md:px-0">
    <div class="container mx-auto">
      <site-header />
      <nuxt class="nuxt" />
    </div>

    <div class="divider -mx-4 sm:mx-0"></div>

    <site-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SiteHeader from '@/components/partials/header.vue';
import SiteFooter from '@/components/partials/footer.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(11, 55, 101, 0.18) 20%,
    rgba(11, 55, 101, 0.18) 80%,
    transparent
  );
}

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
