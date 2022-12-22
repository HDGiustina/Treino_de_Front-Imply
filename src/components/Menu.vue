<template>
    <div class="menu text-3xl">
        <div class="logo py-3">
            <img src="https://portalsuperingresso.s3.amazonaws.com/eleventickets180x127.png" alt="logo" style="width: 100px">
        </div>
        <nav class="">
            <ul>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-view-dashboard</v-icon>Dashboard</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-file-chart-outline</v-icon>Relatórios</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-file-edit-outline</v-icon>Conteúdos</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-puzzle</v-icon>Layout</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-translate</v-icon>Traduções</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-account-supervisor</v-icon>Clientes</a>
                </li>
                <li class="menu-nav px-16 py-4">
                    <a href=""><v-icon color="" left style="background-color:white; border-radius: 5px; padding: 4px;">mdi-cog</v-icon>Configurações</a>
                </li>
            </ul>
        </nav>
        
        <div>
            <h1></h1>
            <p></p>
            <button></button>
        </div>
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
        height: 100vh;
        background-color: #262D35;
    }
    a{
        color: #ABAFB0;
        font-size: 20px;
    }
    .logo {
        display: flex;
        justify-content: center;
        background-color: #1A1A1A;
    }   
    .menu-nav:hover, a:hover{
        background-color: #505050;
    }
</style>