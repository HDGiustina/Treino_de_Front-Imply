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
                <Geral v-on:dados="infosGeral" />
            </v-tab-item>

            <v-tab-item style="background-color: var(--background-principal)">
                <Conteudo v-on:descricao="infosDesc" />
                <button @click="salvar" class="btn btn-sm w-24 font-normal botao" >Salvar</button>
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
                dados: {nome: '', slug: '', dtinicial: '', dtfinal: '', status: '', tag: '', ordem: '', descricao: ''},
            }
        },
        methods: {
            salvar(){
                this.$router.go()
            },
            infosDesc(descricao){
                this.dados.descricao = descricao.descricao
            },
            infosGeral(geral){
                this.dados.nome = geral.nome
                this.dados.slug = geral.slug
                this.dados.dtinicial = geral.dtinicial
                this.dados.dtfinal = geral.dtfinal
                this.dados.status = geral.status
                this.dados.tag = geral.tag
                this.dados.ordem = geral.ordem
                console.log(this.dados)
            }
        }
    }
</script>

<style scoped>
    .botao{
        background-color: var(--laranja-principal); 
        color: var(--background-principal);
        margin-top: 10px;
        font-size: 13px;
    }
</style>