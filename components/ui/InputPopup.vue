<template>
  <input
    class="input_popup"
    type="text"
    placeholder="Напишите тут"
    required
    minlength="2"
    maxlength="500"
  />
</template>

<script>
export default {};
</script>

<style scoped>
.input_popup {
  display: block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-top: 80px;
  margin-left: 40px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 10px;
  width: 840px;
}
</style>
