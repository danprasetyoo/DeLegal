<script setup lang="ts">
defineProps<{ label: string; modelValue: string }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 10px;
}
</style>
