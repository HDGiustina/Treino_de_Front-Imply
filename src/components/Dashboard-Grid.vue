<template>
    <section class="flex flex-col h-full p-10" style=" background-color: var(--background-principal);">
        <div class="grid grid-cols-4 gap-3 mb-3">
            <v-card class="card" dark v-for="(produto, index) in produtos" :key="index">
               <v-row class="p-2 items-center">
                   <img v-if="index == 0" :src="produto.img" alt="produto" :color="produto.color" style="background-color: #FA4A7B;" class="w-16 rounded-circle me-3">
                   <img v-if="index == 1" :src="produto.img" alt="produto" :color="produto.color" style="background-color: #25D499;" class="w-16 rounded-circle me-3">
                   <img v-if="index == 2" :src="produto.img" alt="produto" :color="produto.color" style="background-color: #FF8144;" class="w-16 rounded-circle me-3">
                   <div class="flex flex-col ">
                       <h1 class="text-xs font-bold titulo" >{{ produto.name }}</h1>
                       <h2 class="font-bold">{{ produto.preco }}</h2>
                   </div>
               </v-row>
            </v-card>
            <v-card class="card " dark>
                <v-row class="p-2 items-center">
                    <div style="background-color: #2C569A;" class="flex justify-center rounded-circle w-16 me-3">
                        <img :src="total.img" alt="total"  class="w-12 mx-2 my-2">
                    </div>
                    <div class="flex flex-col ">
                        <h1 class="text-xs font-bold titulo">{{ total.name }}</h1>
                        <h2 class="font-bold">{{ total.valor }}</h2>
                    </div>
                </v-row>
            </v-card>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-3">
            <v-card class="card p-3" dark>
                <h1 class="text-xs font-bold mb-2">Faturamento e Impacto</h1>
                <img src="" alt="Gráfico 1">
            </v-card>
            <v-card class="card p-3" dark>
                <h1 class="text-xs font-bold mb-2">Análise Regional</h1>
                <img src="" alt="Gráfico 2">
            </v-card>
        </div>
        <div class="grid grid-cols-3 gap-3">
            <v-card class="card p-3" dark>
                <h1 class="text-xs font-bold mb-2">Produto A</h1>
                <img src="" alt="Gráfico produto A">
            </v-card>
            <v-card class="card p-3" dark>
                <h1 class="text-xs font-bold mb-2">Produto B</h1>
                <img src="" alt="Gráfico produto B">
            </v-card>
            <v-card class="card p-3" dark>
                <h1 class="text-xs font-bold mb-2">Produto C</h1>
                <img src="" alt="Gráfico produto C">
            </v-card>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Dashboard-grid",
        data(){
            return{
                produtos: [
                    {name: 'Produto A', preco: '523', img: '../img/icone-camisa.png'},
                    {name: 'Produto B', preco: '808', img: '../img/icone-sapato.png'},
                    {name: 'Produto C', preco: '1012', img: '../img/icone-calca.png'},
                ],
                total: {
                    name:  'Total',
                    valor: '',
                    img: '../img/icone-total.png'
                }
            }
        },
        mounted(){
            this.Total(),
            this.mascara()
        },
        methods: {
            mascara(){
                this.produtos.forEach(e => {
                    let mask = parseFloat(e.preco).toFixed(2)
                    mask.toString()
                    mask = 'R$ ' + mask.replace('.', ',')
                    e.preco = mask
                });
                let tl = parseFloat(this.total.valor).toFixed(2)
                tl.toString()
                tl = 'R$ ' + tl.replace('.', ',')
                this.total.valor = tl
            },
            Total(){
                let teste = 0
                this.produtos.forEach(e => {
                    teste = parseFloat(teste) + parseFloat(e.preco) 
                });
                this.total.valor = teste
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
    }
    .card {
        background-color: var(--background-card);
    }
    .titulo {
        color: var(--texto-segundo)
    }
</style>