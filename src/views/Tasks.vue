<template>
    <layout activeMenu="Tasklar">
        <div class="task-main-head">
            <div class="inp-group filter-group">
                <select name="" id="units">
                    <option value="" selected disabled>Birimler</option>
                </select>
                <i class="fa-regular fa-angle-right"></i>
            </div>
            <div class="inp-group filter-group">
                <select name="" id="boards">
                    <option value="" selected disabled>Panolar</option>
                    <option value=""></option>
                </select>
                <i class="fa-regular fa-angle-right"></i>
            </div>
            <div class="inp-group filter-group">
                <select name="" id="cardState">
                    <option value="" selected disabled>Kart Durumu</option>
                    <option value=""></option>
                </select>
                <i class="fa-regular fa-angle-right"></i>
            </div>

        </div>
        <div class="task-main-inner">
            <div class="search">
                <input type="text" v-model="searchValue" placeholder="Ara...">
                <i class="fa-light fa-magnifying-glass"></i>
            </div>
        </div>
    </layout>
</template>

<script>
import layout from "../components/layouts/layout.vue"
export default {
    props:['id'],
    data() {
    },
    components:{
        layout,
    },
    created() {
        this.$appAxios.get("/getUserUnits")
            .then(response=>{
                this.units = response?.data.data
                this.activeUnits = this.units.filter(u => u.name.toLowerCase().includes(this.searchUnit.toLowerCase()) && u.department_id == this.unitId)
            })
    }
}
</script>
