<template>
    <div style="display:flex;">
        <Menu />
        <div class="w-full flex flex-col">
            <Header />
            <Lista />
        </div>
    </div>
  </template>
  
  <script>
    import Menu from '../components/layout/Menu.vue'
    import Header from '../components/layout/Header.vue'
    import Lista from '../components/Lista-Conteudo.vue'
    export default {
        name: "Dashboard-painel",
        components: {
            Menu,
            Header,
            Lista
        }
    }
  </script>
  
  <style scoped>
  
  </style>