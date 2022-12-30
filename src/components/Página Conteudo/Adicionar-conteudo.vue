<template>
    <section>
        <v-tabs
        dark
        left
        background-color="var(--background-principal)"
        >

        <v-tabs-slider color="var(--laranja-principal)"></v-tabs-slider>
        <v-tab class="me-10" >GERAL</v-tab>
        <v-tab >CONTEÚDO</v-tab>

        <v-tab-item style="background-color: var(--background-principal)">    
            <Geral />
        </v-tab-item>

        <v-tab-item style="background-color: var(--background-principal)">
            <v-container >
                <Conteudo />
            </v-container>
        </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
    import Geral from '../Página Conteudo/Add-geral.vue'
    import Conteudo from '../Página Conteudo/Add-conteudo.vue'
    export default {
        name: "Adicionar-conteudo",
        components: {
            Geral,
            Conteudo
        },
        data(){
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>