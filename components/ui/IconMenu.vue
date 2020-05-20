<template>
  <div
    @click="SvitchMenu"
    :class="['icon-menu', { 'icon-menu_is_open': MenuIsOpen }]"
  ></div>
</template>

<script>
export default {
  computed: {
    MenuIsOpen() {
      return this.$store.getters['mobile-menu/getMenuState'];
    },
  },
  methods: {
    SvitchMenu() {
      this.$store.commit('mobile-menu/SelectMenuState');
    },
  },
};
</script>

<style scoped>
.icon-menu {
  width: 32px;
  height: 27px;
  background-image: url('/ui-image/Icon-menu.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.icon-menu_is_open {
  background-image: url('/ui-image/mobile-menu-close.svg');
}
</style>
