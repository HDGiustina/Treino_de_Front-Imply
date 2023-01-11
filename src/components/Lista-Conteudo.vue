<template>
    <section class="flex flex-col h-full w-full p-14" style=" background-color: var(--background-principal);">
        <div v-if="!Add"  class="flex flex-column">
            <div class="flex flex-row mt-6 gap-6 " >
                <div class="input-group input-group-sm w-4/12" dark>
                    <button class="btn btn-square btn-sm input-back">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" class="input input-bordered input-sm input-back w-full" />
                </div>
                <div class="flex flex-col w-2/12" style="margin-top: -24px">
                    <label for="tag" class="text-xs pb-2" style="color: var(--texto-segundo);">Tag/tipo</label>
                    <select name="tag" id="tag" class="select select-bordered select-sm w-full max-w-xs font-normal input-back ">
                        <option disabled selected>Teste</option>
                    </select>
                </div>
                <div class="flex flex-col w-2/12" style="margin-top: -24px">
                    <label for="status" class="text-xs pb-2" style="color: var(--texto-segundo);">Status</label>
                    <select name="status" id="status" class="select select-bordered select-sm w-full max-w-xs  font-normal input-back">
                        <option disabled selected>teste</option>
                    </select>
                </div>
                <button class="btn btn-square btn-sm" style="background-color: var(--laranja-principal); color: var(--background-principal)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor"><path fill="currentColor" d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>
                </button>
                <button @click="add" class="btn btn-sm w-16 font-normal" style="background-color: var(--laranja-principal); color: var(--background-principal)">ADD</button>
                <button class="btn btn-sm font-normal text-sm normal-case" style="background-color: #272727; border: 1px solid var(--cinza-input)">Criar tag</button> 
            </div>   
            <div class="mt-16">
                <table class="table-fixed w-full">
                    <thead >
                        <tr class="linha text-zinc-500 text-sm">
                            <th class="w-2/12"></th>
                            <th class="w-5/12 pb-1 font-normal text-left">Nome</th>
                            <th class="w-1/12 pb-1 font-normal text-left">Ordem</th>
                            <th class="w-1/12 pb-1 font-normal text-left">Tag/tipo</th>
                            <th class="w-1/12 pb-1 font-normal text-left">Status</th>
                            <th class="w-2/12 pb-1 font-normal text-left">SLUG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in lista" :key="item.id" class="linha item text-sm">
                            <td class="py-2">
                                <button @click="editar(item)" class="mx-3"><v-icon size="18" color="var(--texto-segundo)">mdi-pencil</v-icon></button>
                                <button @click="remover(item)"><v-icon size="18" color="var(--texto-segundo)">mdi-trash-can-outline</v-icon></button>
                            </td>
                            <td class="py-2">{{ item.nome }}</td>
                            <td class="py-2">{{ item.ordem }}</td>
                            <td class="py-2">{{ item.tag }}</td>
                            <td class="py-2">{{ item.status }}</td>
                            <td class="py-2">{{ item.slug }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else class="conatiner w-full h-full" id="add" style="visibility: visible; background-color: var(--background-principal); max-width: 990px;">
            <Adicionar :lista="lista" />
        </div>
    </section>
</template>

<script>  
    import Adicionar from '../components/Página Conteudo/Adicionar-conteudo.vue'
    export default {
        name: "Lista-Conteudo",
        components: {
            Adicionar
        },
        data(){
            return {
                Add: false,
                items: '',
                lista: [],
            }
        },
        mounted() {
            const conteudos = JSON.parse(localStorage.getItem('conteudos'))
            this.lista = conteudos ? conteudos : []
            console.log(this.lista)
        },
        methods: {
            add(){
                this.Add = true
            },
            remover(item){
                const idx = this.lista.indexOf(item)
                this.lista.splice(idx, 1)
                localStorage.setItem('conteudos', JSON.stringify(this.lista))
            }
        }
    }
</script>

<style scoped>
    .input-back{
        background-color: var(--cinza-input);
        color: var(--texto-segundo);
    }
    .linha{
        border-bottom: 1px solid var(--cinza-input);
    }
    .item{
        color: var(--texto-segundo);
    }
</style>