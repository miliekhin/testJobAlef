<script setup>
  import InputField from "@/components/InputField.vue";
  import { store } from "@/store";
  const { data } = store;
  const props = defineProps({
    item: {
      type: Object,
      default: () => {},
    },
    preview: {
      type: Boolean,
      default: false,
    },
  });
  const updName = (val) => {
    data.childrens.find((ch) => ch.id === props.item.id).name = val.trim();
  }
  const updAge = (val) => {
    data.childrens.find((ch) => ch.id === props.item.id).age = val.trim();
  }
  const delChild = () => {
    const i = data.childrens.findIndex((ch) => ch.id === props.item.id);
    data.childrens.splice(i, 1);
  }
</script>

<template>
  <div class="child-form">
    <div v-if="preview" class="preview">
      <strong>{{`${item.name}, ${item.age} лет`}}</strong>
    </div>
    <div v-else class="child-form-row">
      <InputField
          :modelValue="item.name"
          label="Имя"
          @update:modelValue="updName"
      />
      <InputField
          :modelValue="item.age"
          label="Возраст"
          field-type="number"
          @update:modelValue="updAge"
      />
      <div
          class="del-btn"
          @click="delChild"
      >
        Удалить
      </div>
    </div>
  </div>
</template>

<style scoped>
  .child-form-row{
    display: flex;
    column-gap: 18px;
    align-items: center;
    padding: 5px 0;
  }
  .del-btn{
    color: var(--colors-primary);
    cursor: pointer;
    user-select: none;
  }
  .del-btn:hover{
    border-bottom: 1px dashed var(--colors-primary);
  }
  .preview{
    border-radius: 5px;
    background: var(--colors-gray-l);
    font-size: 16px;
    line-height: 24px;
    padding: 10px 20px;
    margin-top: 20px;
  }
</style>