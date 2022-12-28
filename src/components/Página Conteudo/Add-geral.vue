<template>
    <section>
        <div class="grid grid-cols-7 gap-4 place-items-center">
            <h1 style="color: var(--texto-segundo);" class="">Nome</h1>
            <input style="background-color: var(--cinza-input);" type="text" class="input input-bordered input-xs col-span-3 w-64">
            <p style="color: var(--texto-segundo);" class="col-span-3 text-sm">Nome qie será exibido em sua lista de conteúdos e como link em sua página!</p>
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

</style>