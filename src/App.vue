<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header class="header" />
    <RouterView class="content-body"/>
  <Footer class="footer" />
</template>

<style scoped>
.header, .footer {
  height: 76px;
  flex-shrink: 0;
}

.content-body{
  flex: 1;
  width: 616px;
  align-self: center;
  padding: 30px 0;
}



</style>
