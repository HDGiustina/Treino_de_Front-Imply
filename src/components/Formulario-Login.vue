<template>
    <section class="flex flex-col px-16 py-14 mx-16">  
        <div class="logo">
            <img src="https://portalsuperingresso.s3.amazonaws.com/eleventickets180x127.png" alt="Logo" class="pb-10" style="width: 140px;">
        </div>
        <form  class="">
			<div class="space-y-4">
                <div class="campo">
					<label for="id" class="block mb-2 text-sm">Id do projeto</label>
					<input type="text" name="id" id="id" class="w-full px-3 py-2">
				</div>
				<div class="campo py-5">
					<label for="email" class="block mb-2 text-sm">E-mail</label>
					<input type="email" name="email" id="email" class="w-full px-3 py-2 ">
				</div>
				<div class="campo">
					<label for="password" class="text-sm">Senha</label>
					<input type="password" name="password" id="password" class="w-full px-3 py-2 ">
				</div>
			</div>
			<div class="pt-10">
			    <button type="button" class="px-7 py-2" @click="Login" >Login</button>
			</div>
		</form>
        <p class="pt-10 ">Powered by Imply Group - Painel administrativo de projetos criado pelo grupo. Caso você não tenha acesso por favor contatar o SAC solicitando o acesso ao painel.</p>
    </section>
</template>

<script>
    export default {
        name: "formulario-login",
        methods: {
            Login(){
                this.$router.push('/dashboard')
            }
        }
    }
</script>

<style  scoped>
    input {
        border: 1px solid #b3b3b3;
        background-color: #f3f2f2;
        border-radius: 6px;
    }

    button {
        background-color: #FF6400;
        border-radius: 6px;
    }
    p {
        color: #808080;
        font-size: 14px;
    }
    label {
        color: #808080;
    }

    .logo {
        display: flex;
        justify-content: center;
    }
    .campo{
        display:flex; 
        flex-direction:column;
    }
</style>