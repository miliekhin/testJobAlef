<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Label',
    },
    fieldType: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <div class="text-field text-field_floating">
    <input
        :value="modelValue"
        class="text-field__input"
        :type="fieldType"
        id="tinp"
        placeholder=""
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <label class="text-field__label" for="tinp">{{ label }}</label>
  </div>
</template>

<style scoped>
  .text-field {
    margin-bottom: 10px;
    flex: 1;
  }
  .text-field__label {
    display: block;
    margin-bottom: 10px;
  }
  .text-field__input {
    display: block;
    width: 100%;
    height: 56px;
    padding: 8px 16px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    color: var(--colors-black);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--colors-gray-l);
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .text-field__input[type="search"]::-webkit-search-decoration,
  .text-field__input[type="search"]::-webkit-search-cancel-button,
  .text-field__input[type="search"]::-webkit-search-results-button,
  .text-field__input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  .text-field__input::placeholder {
    color: var(--colors-gray-l);
    opacity: 0.4;
  }
  .text-field__input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  .text-field__input:disabled,
  .text-field__input[readonly] {
    background-color: #f5f5f5;
    opacity: 1;
  }
  .text-field_floating {
    position: relative;
  }
  .text-field_floating .text-field__input {
    height: 56px;
    padding: 8px 16px;
  }
  .text-field_floating .text-field__label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem .75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .15s ease-in-out, transform .15s ease-in-out;
  }
  .text-field_floating .text-field__input::-moz-placeholder {
    color: transparent;
  }
  .text-field_floating .text-field__input::placeholder {
    color: transparent;
  }
  .text-field_floating .text-field__input:focus,
  .text-field_floating .text-field__input:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: .625rem;
  }
  .text-field_floating .text-field__input:focus~.text-field__label,
  .text-field_floating .text-field__input:not(:placeholder-shown)~.text-field__label {
    opacity: .65;
    transform: scale(.85) translateY(-.75rem) translateX(.15rem);
  }
</style>