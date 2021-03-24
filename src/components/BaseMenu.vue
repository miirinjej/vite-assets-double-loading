<template>
  <nav class="c-menu">
    <router-link
      v-for="{ name, title } in menuItems"
      :key="name"
      class="c-menu__item"
      :to="{ name }"
    >
      {{ title }}
    </router-link>
  </nav>
</template>
<script>
  export default {
    name: 'BaseMenu',
    props: {
      menuItems: {
        type: Array,
        required: true,
        validator(menuItems) {
          for (let i = 0; i < menuItems.length; i += 1) {
            if (typeof menuItems[i].name !== 'string') {
              return false;
            }

            if (typeof menuItems[i].title !== 'string') {
              return false;
            }
          }

          return true;
        },
      },
    },
  };
</script>
<style lang="scss">
</style>
