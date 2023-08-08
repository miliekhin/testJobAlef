<script setup>
  import { RouterLink } from 'vue-router'
  import Logo from "@/components/Logo.vue";
</script>

<template>
  <div>
    <Logo id="logo"/>
    <nav>
      <RouterLink to="/">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  div{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(17, 17, 17, 0.10);
  }
  #logo{
    position: absolute;
    top: 24px;
    left: 5%;
  }
  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    color: #1111117A;
    font-family: Montserrat, serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px
  }

  nav a:first-of-type {
    border: 0;
  }

</style>