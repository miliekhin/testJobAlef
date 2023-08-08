<script setup>
  import IconPlus from "@/components/IconPlus.vue";

  const props = defineProps({
    label: {
      type: String,
      default: 'Label',
    },
    iconPlus: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <button
      :class="[{'outline': outline, 'solid': solid}]"
  >
    <IconPlus class="icon" v-if="props.iconPlus"/>
    {{ label }}
  </button>
</template>

<style scoped>
  button{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 10px 20px;
    border: 2px solid var(--colors-primary);
    border-radius: 100px;
    background-color: var(--colors-white);
    cursor: pointer;
  }
  .solid{
    color: var(--colors-white);
    background-color: var(--colors-primary);
  }
  .solid:hover{
    color: var(--colors-white);
    background-color: #1ab2ff;
    border: 2px solid #1ab2ff;
  }

  .outline{
    color: var(--colors-primary);
  }
  .outline:hover{
    background-color: #f0f5fc;
  }
  .icon{
    margin-right: 7px;
    margin-left: -7px;
  }
</style>