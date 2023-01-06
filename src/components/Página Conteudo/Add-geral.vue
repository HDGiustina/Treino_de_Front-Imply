<template>
    <section class="mt-4">
        <div class="grid grid-cols-10 gap-4 place-items-center text-zinc-500 my-6 texto">
            <h1 style="" class="place-self-start mt-2">Nome</h1>
            <input v-model="geral.nome" type="text" class="input input-bordered input-xs col-span-4 w-72 input-back">
            <p class="col-span-5 border-l-2 border-l-zinc-500 ps-13">Nome que será exibido em sua lista de conteúdos e como link em sua página!</p>
        </div>
        <div class="grid grid-cols-10 gap-4 place-items-center text-zinc-500 my-6 texto">
            <h1 style="" class="place-self-start mt-1">SLUG</h1>
            <input type="text" class="input input-bordered input-xs col-span-4 w-72 input-back">
            <p class="col-span-5 text-sm border-l-2 border-l-zinc-500 ps-13 place-self-start mt-1 pb-4">Link do site que será exibido o conteúdo</p>
        </div>
        <div class="grid grid-cols-10 gap-4 place-items-center text-zinc-500 my-6 texto">
            <h1 style="" class="place-self-start mt-2">Exibição</h1>
            <div class="col-span-4 grid grid-cols-6 gap-3 w-72">
                <div class="col-span-3 grid grid-cols-1 gap-1">
                    <label for="inicio" class="text-zinc-500">Dtd. início</label>
                    <input name="inicio" id="inicio" type="date" class="input input-bordered input-xs input-back">
                </div>
                <div class="col-span-3 grid grid-cols-1 gap-1">
                    <label for="fim" class="text-zinc-500">Dtd. fim</label>
                    <input name="fim" id="fim" type="date" class="input input-bordered input-xs input-back">
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-1">
                    <label for="status" class="text-zinc-500">Status</label>
                    <select name="status" id="status" class="select select-bordered select-xs w-full max-w-xs font-normal input-back">
                        <option disabled selected>Teste</option>
                    </select>
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-1">
                    <label for="tag" class="text-zinc-500">Tag/Página</label>
                    <select name="tag" id="tag" class="select select-bordered select-xs w-full max-w-xs font-normal input-back">
                        <option disabled selected>Teste</option>
                    </select>
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-1">
                    <label for="ordem" class="text-zinc-500">Ordem</label>
                    <input name="ordem" id="ordem" type="text" class="input input-bordered input-xs input-back">
                </div>
            </div>
            <!-- <button onclick="agora()">teste</button> -->
            <p class="col-span-5 text-sm border-l-2 border-l-zinc-500 ps-13 place-self-start mt-2">Selecione a data início e fim para que seja programado a exibição. Ordene, inative e troque o conteúdo para ser qualquer página.</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Add-geral",
        data(){
            return {
                geral: {nome: '', slug: '', dtinicial: '', dtfinal: '', status: '', tag: '', ordem: ''}
            }
        },
        watch:{
            // geral(test, teste){
            //     this.teste(teste)
            // }
        },
        method: {
            teste(){
                //this.$emit('descricao', {descricao: this.geral})
                console.log('teste')
                console.log(this.geral)
            },
            agora(){
                console.log('foi')
            }
        }
    }
</script>

<style scoped>
    p{
        margin-bottom: 0;
    }
    .input-back{
        background-color: var(--cinza-input);
    }
    .texto{
        font-size: 13px;
    }
</style>