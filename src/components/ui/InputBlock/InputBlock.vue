<template>
  <div
      class="ui-input-block"
  >
    <div v-if="label" class="ui-input-block__label">
      {{ label }}
    </div>
    <div class="ui-input-wrapper">
      <input
          :type="inputType"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

  </div>
</template>

<script>

export default {
  name: "InputBlock",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ""
    },
  },
};
</script>