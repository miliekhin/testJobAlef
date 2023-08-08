<script setup>
  import { store } from "@/store";
  import ChildForm from "@/components/ChildForm.vue";
  const { data } = store;
</script>

<template>
  <div class="fields">
    <h3>Персональные данные</h3>
    <strong>{{`${data.name}, ${data.age} лет`}}</strong>
    <div class="childs">
      <h3>Дети</h3>
      <ChildForm
          v-for="(ch, i) in data.childrens"
          :key="i"
          :item="ch"
          preview
      />
    </div>
  </div>
</template>

<style scoped>
  h3{
    color: var(--colors-black, #111);
    font-family: Montserrat, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .fields h3{
    margin-bottom: 20px;
  }
  .childs {
    margin-top: 60px;
  }

</style>