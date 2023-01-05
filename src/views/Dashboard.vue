<template>
    <div style="display:flex;">
        <Menu />
        <div class="w-full flex flex-col">
            <Header />
            <Grid />
        </div>
    </div>
  </template>
  
  <script>
    import Menu from '../components/layout/Menu.vue'
    import Header from '../components/layout/Header.vue'
    import Grid from '../components/Dashboard-Grid.vue'
    export default {
        name: "Dashboard-painel",
        components: {
            Menu,
            Header,
            Grid
        }
    }
  </script>
  
  <style scoped>
  
  </style>