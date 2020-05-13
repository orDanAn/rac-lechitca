<template>
  <div>
    <project-header @clicBtnOpenPopap="messeg" />
    <nuxt />
    <project-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'project-header': Header,
    'project-footer': Footer,
  },
  methods: {
    messeg() {
      alert('я пока не работаю, нажмите кнопку Заполнить форму');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', Helvetica, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
