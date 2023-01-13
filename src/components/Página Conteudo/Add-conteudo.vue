<template>
    <section class="mt-5 d-flex flex-column">
        <div class="container mb-5">
            <div class="quilleditor">
                <p class="text-zinc-500 text-sm">Descrição</p>
                <quill-editor
                ref="refQuillEditor"
                :options="quillOptions"
                @change="descChange($event.text)"
                id="teste"
                >
                </quill-editor>
            </div>
            <div class="d-flex justify-center celular">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Add-conteudo",
        props:['edit'],
        data(){
            return {
                textarea: '',
                quillOptions: {
                    placeholder: '',
                } 
            }
        },
        methods: {
            descChange( text ) {
                this.textarea = text
                this.$emit('descricao', {descricao: this.textarea})
            }
        },
        mounted(){
            if(this.edit != false){
                let test = document.getElementById('teste')
                test = test.getElementsByTagName('p')[0]
                test.innerHTML = this.edit.descricao
            }
        }
    }
</script>

<style>
    .ql-toolbar{
        background-color: white;
    }
    .ql-container{
        max-width: 500px;
        height: 150px;
        background-color: var(--cinza-input);
        border: none !important;
        color: white;
    }
</style>

<style scoped>
    .container{
        display: flex;
        padding: 0;
    }
    .quilleditor{
        width: 50%;
    }
    .celular{
        width: 50%;
    }
</style>