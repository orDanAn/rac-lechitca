<template>
  <div class="popup">
    <popup-conteiner />
  </div>
</template>
<script>
import PopupConteiner from '@/components/PopupConteiner';
import Title_section from '@/components/Title_section';
import ButtonSmoll from '@/components/ui/ButtonSmoll';
import ButtonBack from '@/components/ui/ButtonBack';

export default {
  components: {
    'popup-conteiner': PopupConteiner,
  },
};
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
