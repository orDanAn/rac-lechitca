<template>
  <input
    class="input-popup"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :minlength="minlength"
    :maxlength="maxlength"
    :name="name"
    v-model="content"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
      default: 'Напишите тут',
    },

    required: {
      type: String,
      default: 'required',
    },

    minlength: {
      type: String,
      default: '2',
    },

    maxlength: {
      type: String,
      default: '500',
    },

    name: {
      type: String,
      default: 'name',
    },
  },

  data() {
    return { content: this.value };
  },

  watch: {
    value(newVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
};
</script>

<style scoped>
.input-popup {
  display: block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-left: 40px;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 10px;
  width: 840px;
}

@media screen and (max-width: 1280px) {
  .input_popup {
    font-size: 16px;
    line-height: 22px;
    width: 720px;
  }
}

@media screen and (max-width: 1024px) {
  .input_popup {
    font-size: 15px;
  }
}

@media screen and (max-width: 768px) {
  .input_popup {
    width: 500px;
    line-height: 19px;
  }
}

@media screen and (max-width: 590px) {
  .input_popup {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin-left: 15px;
  }
}
</style>
