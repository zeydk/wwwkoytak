import Vue from 'vue';

// Lightweight localization helper available in every component/template.
// Returns the `_tr` variant of a field when the active locale is Turkish
// and that variant exists; otherwise falls back to the base (English) field.
Vue.mixin({
  methods: {
    loc(obj, field) {
      if (!obj) return '';
      const locale = this.$store && this.$store.state ? this.$store.state.locale : 'en';
      const trValue = obj[`${field}_tr`];
      if (locale === 'tr' && trValue) return trValue;
      return obj[field];
    },
  },
});
