<script setup>
  import InputField from "@/components/InputField.vue";
  import InputButton from "@/components/InputButton.vue";
  import ChildForm from "@/components/ChildForm.vue";
  import { store } from "@/store";
  import router from "@/router";
  const { data } = store;
  const id = () => {
    if (!data.childrens.length){
      return 1;
    }
    return Math.max(...data.childrens.map((ch) => ch.id)) + 1;
  }
  const addChild = () => {
    data.childrens.push({
      id: id(),
      name: '',
      age: '',
    });
  }
  const saveForm = () => {
    router.push('/preview')
  }
</script>

<template>
  <div>
    <div class="fields">
      <h3>Персональные данные</h3>
      <input-field
          v-model.trim="data.name"
          label="Имя"
      />
      <input-field
          v-model.trim="data.age"
          label="Возраст"
          field-type="number"
      />
    </div>
    <div class="adder-header">
      <h3>Дети (макс. 5)</h3>
      <InputButton
          v-if="data.childrens.length < 5"
          label="Добавить ребенка"
          icon-plus
          outline
          @click="addChild"
      />
    </div>
    <ChildForm
        v-for="(ch, i) in data.childrens"
        :key="i"
        :item="ch"
    />
    <InputButton
        class="save"
        label="Сохранить"
        solid
        @click="saveForm"
    />
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
  .fields{
    margin-bottom: 33px;
  }
  .adder-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    height: 44px;
  }
  .save{
    margin-top: 25px;
  }
</style>