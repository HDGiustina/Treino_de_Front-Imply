
<template>
  <v-app>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/painel">Painel</router-link>
    </nav> -->
    
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
 *{
    padding: 0;
    margin: 0;
  }
</style>
