<template>
  <section class="page" :class="page.slug">
    <h1 class="page__title text-2xl md:text-3xl lg:text-4xl text-center py-5 md:py-8">
      {{ loc(page, 'title') }}
    </h1>

    <div v-html="$md.render(loc(page, 'content'))" class="page__content markdown pt-4 md:pt-6 md:pb-24" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) {
      return 'slide-left';
    }

    return 'slide-right';
  },

  head(): MetaInfo {
    return {
      title: this.loc(this.page, 'title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.loc(this.page, 'seoDescription'),
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.seoMetaImage,
        },
      ],
    };
  },
})
export default class PageTemplate extends Vue {
  page!: Page;

  async asyncData({ params, payload }): Promise<{ page: Page }> {
    if (payload) {
      return { page: payload };
    }

    try {
      const page = require(`@/content/pages/${params.page}.json`);

      return {
        page,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  }
}
</script>
