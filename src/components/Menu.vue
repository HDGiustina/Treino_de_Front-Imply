<template>
    <div class="menu text-3xl">
        <div class="logo py-3">
            <img src="https://portalsuperingresso.s3.amazonaws.com/eleventickets180x127.png" alt="logo" style="width: 57px">
        </div>
        <nav class="">
            <ul>
                <li class="menu-nav px-10 py-1">
                    <a href="/dashboard"><v-icon color="" size="18" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-view-dashboard</v-icon>Dashboard</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href=""><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-file-chart-outline</v-icon>Relatórios</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href="/conteudo"><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-file-edit-outline</v-icon>Conteúdos</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href=""><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-puzzle</v-icon>Layout</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href=""><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-translate</v-icon>Traduções</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href=""><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-account-supervisor</v-icon>Clientes</a>
                </li>
                <li class="menu-nav px-10 py-1">
                    <a href=""><v-icon color="" size="18"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-cog</v-icon>Configurações</a>
                </li>
            </ul>
        </nav>
        <v-card class="card my-7 mx-6 p-4" dark >
            <v-icon light size="26"  left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-book</v-icon>
            <h1 class="text-lg my-1">Posso ajudar?</h1>
            <p class="text-xs">Acesse a nossa documentação em caso de dúvidas!</p>
            <v-btn class="btn px-7"  rounded>DOCUMENTAÇÂO</v-btn>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Menu-painel",
    }
</script>

<style scoped>
    ul {
        padding: 0;
    }
    .menu {
        background-color: #262D35;
    }
    a{
        color: var(--texto-segundo);
        font-size: 17px;
    }
    .logo {
        display: flex;
        justify-content: center;
        background-color: #1A1A1A;
    }   
    .menu-nav {
        border-bottom: 1px solid #3A3F43;
        box-shadow: 0px -7px 25px -9px #292929 inset;
    }
    .menu-nav:hover, a:hover{
        background-color: #505050;
    }
    .card {
        width: 210px;
        background-image: linear-gradient(to top right, #272C30 , #1B1B1B);
        border: none;
        border-radius: 14px;
    }
    .btn {
        background-image: linear-gradient(to top , #75797C , #2E3134);
        font-size: 13px;
    }
</style>