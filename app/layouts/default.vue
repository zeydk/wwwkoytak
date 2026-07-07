<template>
  <main :class="[$route.name]" class="main px-4 md:px-0">
    <div class="container mx-auto">
      <site-header />

      <div class="layout md:flex md:items-start">
        <profile-sidebar class="layout__sidebar" />

        <div class="layout__content w-full mt-8 md:mt-0">
          <nuxt class="nuxt" />
        </div>
      </div>
    </div>

    <div class="divider -mx-4 sm:mx-0"></div>

    <site-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SiteHeader from '@/components/partials/header.vue';
import SiteFooter from '@/components/partials/footer.vue';
import ProfileSidebar from '@/components/partials/profile-sidebar.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
    ProfileSidebar,
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

.layout {
  padding-top: 1rem;
}

// On narrow screens (phones / very narrow windows) the sidebar only
// shows on the homepage; other pages get the full width for their content.
.layout__sidebar {
  display: none;
}

.index .layout__sidebar {
  display: block;
}

@media (min-width: 768px) {
  .layout__sidebar {
    display: block;
    position: sticky;
    top: 1.5rem;
    align-self: flex-start;
    width: 15rem;
    flex-shrink: 0;
  }

  .layout__content {
    flex: 1 1 0%;
    min-width: 0;
  }
}
</style>
