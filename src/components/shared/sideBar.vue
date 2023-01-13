<template>
    <div class="left-bar">
        <div class="left-bar-head">
            <img src="@/front/assets/images/logo.png" alt="">
            <h2>Süreç Takip</h2>
        </div>
        <ul class="left-bar-body">
            <li :class="{active:activeMenu=='Ana Sayfa'}">
                <router-link :to="{ name: 'HomePage'}">
                    <i class="fa-light fa-house"></i><span>Ana Sayfa</span>
                </router-link>
            </li>
            <li :class="{active:activeMenu=='Tasklar'}">
                <router-link :to="{ name: 'TasksPage'}">
                    <i class="fa-light fa-list-check"></i><span>Tasklar</span>
                </router-link>
            </li>
            <li :class="{active:activeMenu=='Panolar'}">
                <router-link :to="{ name: 'UnitsPage'}">
                    <i class="fa-light fa-layer-group"></i><span>Panolar</span>
                </router-link>
            </li>
            <li :class="{active:activeMenu=='Performans'}">
                <a href=""><i class="fa-light fa-signal"></i><span>Performans</span></a>
            </li>
        </ul>
        <div class="left-bar-foot">
            <p>@2022 Created By Dijital Dönüşüm ve Yazılım ofisi</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["activeMenu"]
}
</script>
