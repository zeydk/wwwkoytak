import { ActionContext, ActionTree, MutationTree } from 'vuex';
import { Route } from 'vue-router';
import Vue from 'vue';
import { getContent } from '@/utils';

export interface State {
  perPage: number;
  pages: Page[];
  posts: Post[];
  route?: Route;
}

// Initial State
export const appState = {
  perPage: 4,
  pages: [],
  posts: [],
};

export const mutations: MutationTree<State> = {
  SET_PAGES: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'pages', payload);
  },
  SET_POSTS: (state, payload: Record<string, unknown>): void => {
    Vue.set(state, 'posts', payload);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  GET_PAGES_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  GET_POSTS_LIST(context: ActionContext<S, R>): Promise<void | Error>;
  nuxtServerInit(context: ActionContext<S, R>): void;
}

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// Sortable timestamp from a "MMM YYYY" (or "Do MMM YYYY") publishedAt string.
function publishedTime(value?: string): number {
  if (!value) return 0;
  const m = value.match(/([A-Za-z]{3})[a-z]*\s+(\d{4})/);
  if (m) return new Date(parseInt(m[2], 10), MONTHS[m[1].toLowerCase()] || 0, 1).getTime();
  const y = value.match(/(\d{4})/);
  return y ? new Date(parseInt(y[1], 10), 0, 1).getTime() : 0;
}

export const actions: Actions<State, State> = {
  async GET_POSTS_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/blog/', false, /\.json$/);
    const posts = await getContent({ context, prefix: 'blog' });
    posts.sort(
      (a, b) =>
        publishedTime((b as { publishedAt?: string }).publishedAt) -
        publishedTime((a as { publishedAt?: string }).publishedAt),
    );
    commit('SET_POSTS', posts);
  },

  async GET_PAGES_LIST({ commit }): Promise<void | Error> {
    // Use webpack to search the blog directory matching .json files
    const context = await require.context('@/content/pages/', false, /\.json$/);
    const pages = await getContent({
      context,
      prefix: 'pages',
    });
    commit('SET_PAGES', pages);
  },

  async nuxtServerInit({ dispatch }): Promise<void> {
    await Promise.all([dispatch('GET_PAGES_LIST'), dispatch('GET_POSTS_LIST')]);
  },
};

export const state = (): State => ({
  ...appState,
});

export const strict = false;
