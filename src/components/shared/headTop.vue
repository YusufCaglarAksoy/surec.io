<template>
    <div class="top-bar">
        <div class="top-bar-left">
            <h1>15</h1> <h2>MAYIS 2022</h2>
        </div>
        <div class="top-bar-right">
            <div><i class="fa-regular fa-bell"></i></div>
            <div><i class="fa-regular fa-user"></i></div>
            <div @click="logout"><i class="fa-regular fa-arrow-right-from-bracket"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$store.commit("logoutUser");
            window.location.href="https://jasig.firat.edu.tr/cas/logout"
        }
    }
}
</script>
