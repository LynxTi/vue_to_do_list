<template>
  <button class="button-block" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
props: {
  disabled: {
    type: Boolean,
    default: false
  }
}
}
</script>


