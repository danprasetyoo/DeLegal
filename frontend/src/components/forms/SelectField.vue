<script setup lang="ts">
defineProps<{
  label: string
  options: Array<{ value: string; text: string }>
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 10px;
}
select {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
