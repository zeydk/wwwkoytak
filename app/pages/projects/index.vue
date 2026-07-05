<template>
  <section class="projects">
    <div class="py-8 md:py-16 text-center">
      <h1 class="text-lg md:text-xl lg:text-4xl xl:text-6xl">Projects</h1>
      <h2 class="text-base md:text-lg lg:text-xl xl:text-2xl">
        Featured research projects and highlights.
      </h2>
    </div>

    <ul class="project-list pb-20">
      <li v-for="(post, index) in posts" :key="index" class="project-item">
        <nuxt-link :to="`/projects/${post.slug}`" class="project-link">
          <img
            :alt="post.title"
            loading="lazy"
            class="project-thumb flex-shrink-0 object-cover rounded w-24 h-16 sm:w-32 sm:h-20"
            :src="post.featuredImage || 'https://source.unsplash.com/random/320x200'"
          />
          <div class="project-body min-w-0">
            <p v-if="post.publishedAt" class="project-date">{{ post.publishedAt }}</p>
            <h3 class="project-title">{{ post.title }}</h3>
            <p class="project-excerpt">{{ post.excerpt }}</p>
            <span class="project-more">Read more &rarr;</span>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

const Pagination = () => import('@/components/commons/pagination.vue');

@Component({
  components: {
    Pagination,
  },

  head(): MetaInfo {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Featured research projects and highlights.',
        },
      ],
    };
  },
})
export default class BlogIndex extends Vue {
  currentPage!: number;

  totalPages!: number;

  posts: Post[] = [];

  async asyncData({ params, store }) {
    const page: number = params.page ? parseInt(params.page, 10) : 1;
    const { perPage }: { perPage: number } = store.state;
    const range = page * perPage;

    const posts = store.state.posts.filter((post, index) => {
      const indexPage = index + 1;
      return range - perPage < indexPage && indexPage <= range;
    });

    return {
      currentPage: page,
      totalPages: Math.ceil(store.state.posts.length / perPage),
      posts: posts || [],
    };
  }
}
</script>

<style lang="scss" scoped>
.project-list {
  @apply max-w-3xl mx-auto;
}

.project-item {
  border-bottom: 1px solid $bluise-tint;

  &:first-child {
    border-top: 1px solid $bluise-tint;
  }
}

.project-link {
  @apply flex items-center py-5;
  transition: background-color 0.18s ease;

  &:hover {
    background-color: rgba(11, 55, 101, 0.03);

    .project-title {
      color: $bluise;
    }

    .project-more {
      opacity: 1;
      transform: translateX(2px);
    }
  }
}

.project-thumb {
  box-shadow: 0 6px 16px -8px rgba(11, 55, 101, 0.45);
}

.project-body {
  @apply ml-4 sm:ml-5;
}

.project-date {
  @apply text-xs font-medium uppercase mb-1;
  color: #a0aec0;
  letter-spacing: 0.05em;
}

.project-title {
  @apply text-base sm:text-lg font-semibold leading-snug;
  color: $ink;
  letter-spacing: -0.01em;
  transition: color 0.18s ease;
}

.project-excerpt {
  @apply text-sm text-gray-600 mt-1 leading-snug;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-more {
  @apply inline-block text-xs font-medium mt-2;
  color: $bluise;
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;
}

@media (max-width: 640px) {
  .project-more {
    opacity: 1;
  }
}
</style>
