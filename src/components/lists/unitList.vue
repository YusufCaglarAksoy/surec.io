<template>
    <div class="units list-main">
        <h2>Birimlerim</h2>
        <div class="search-area"><input type="text" v-model="searchUnit" @input="filterUnits"> <i class="fa-light fa-magnifying-glass"></i></div>
        <div class="unit list-card" v-for="unit in activeUnits" @click="getBoards(unit.id)">
            <div class="units-ico list-ico">
                <span>{{unit.name.charAt(0)}}</span>
            </div>
            <p>{{unit.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            units:null,
            activeUnits:null,
            searchUnit:"",
        };
    },
    methods:{
        getBoards(unitId){
            this.$emit("getBoards",unitId)
        }
    },
    computed:{
        filterUnits(){
            this.$emit("hideBoards")
            this.activeUnits = this.units.filter(u => u.name.toLowerCase().includes(this.searchUnit.toLowerCase()))
        }
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
