<template>
    <section>
        <div class="grid grid-cols-7 gap-4 place-items-center">
            <h1 style="color: var(--texto-segundo);" class="">Nome</h1>
            <input type="text" class="input input-bordered input-xs col-span-3 w-64 input-back">
            <p style="color: var(--texto-segundo);" class="col-span-3 text-sm">Nome que será exibido em sua lista de conteúdos e como link em sua página!</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Add-geral",
        data(){
            return {
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .input-back{
        background-color: var(--cinza-input);
        color: var(--texto-segundo);
    }
</style>