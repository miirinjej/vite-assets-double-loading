<template>
  <header class="c-navbar">
    <BaseMenu
      :menu-items="menuItems"
    />
  </header>
</template>
<script>
  import BaseMenu from './BaseMenu.vue';

  export default {
    name: 'TheNavbar',
    components: {
      BaseMenu,
    },

    computed: {
      menuItems() {
        return [
          {
            name: 'articles',
            title: 'Articles'
          },
          {
            name: 'projects',
            title: 'Projects',
          },
        ];
      },
    },
  };
</script>
<style lang="scss">
</style>
