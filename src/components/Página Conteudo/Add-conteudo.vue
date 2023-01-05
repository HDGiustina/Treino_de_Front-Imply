<template>
    <section class="mt-5 d-flex flex-column">
        <div class="container mb-5">
            <div class="quilleditor">
                <p class="text-zinc-500 text-sm">Descrição</p>
                <quill-editor
                ref="refQuillEditor"
                :options="quillOptions"
                @change="onEditorChange($event.text)"
                
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
        data(){
            return {
                textarea: '',
                quillOptions: {
                    placeholder: '',
                } 
            }
        },
        methods: {
            onEditorChange( text ) {
                this.textarea = text
                console.log('teste')
                this.$emit('descricao', {descricao: this.textarea})
            }
        },
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