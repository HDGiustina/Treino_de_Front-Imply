<template>
    <div class="w-full flex items-center px-12 text-zinc-500 h-16" style=" background-color: #1A1F22;">
        <v-row class="d-flex justify-space-between ">
            <div class="flex flex-row items-center">
                <div class="pe-10 border-r-2 border-r-zinc-600 text-xl text-slate-100">
                    <h1>Flamengo</h1>
                </div>
                <button class="mx-7 px-3 py-1 rounded-xl hover:bg-zinc-900 text-slate-100 text-xs"><v-icon color="#f1f5f9" left size="16" >mdi-eye</v-icon>Visualizar o site</button>
                <p class="text-xs">Admin 1.11</p>
            </div>
            <div class="flex items-center">
                <p class="text-xs me-3">Helena</p>
                <img v-if="usuario" class="rounded-circle w-7" :src="usuario" alt="usuario">
                <v-icon color="#1A1F22" style="background-color:white; padding: 1px;" left size="20" class="rounded-circle">mdi-account</v-icon>
            </div>
        </v-row>
    </div>
</template>

<script>
    export default {
      name: "Header-Painel",
      data(){
        return {
            usuario: ''
        } 
      }
     
  }
</script>

<style scoped>
    p{
        margin-bottom: 0;
    }
</style>