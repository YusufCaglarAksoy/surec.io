<template>
    <div class="fields  list-main" >
        <h2>Panolar</h2>
        <div class="search-area"><input type="text" v-model="searchUnit" @input="filterBoards"> <i class="fa-light fa-magnifying-glass"></i></div>
        <boardModal :unitID="this.unitId" @successCreate="getBoards"/>
        <router-link class="field list-card" v-for="board in activeBoards"  :to="{name:'BoardPage',params:{id:board.id}}">
            <div class="field-ico list-ico">
                <span>{{board.name.charAt(0)}}</span>
            </div>
            <p>{{board.name}}</p>
        </router-link>
    </div>
</template>
<script>
import boardModal from "../modals/createBoard.vue"
export default {
    props:["unitId"],
    data() {
        return {
            activeBoards:null,
            boards:null,
            searchUnit:"",
            depId: this.unitId,
        };
    },
    components:{
        boardModal
    },
    watch: {
        unitId: function(newVal, oldVal) {
            this.activeBoards = this.boards.filter(u => u.name.toLowerCase().includes(this.searchUnit.toLowerCase()) && u.department_id == this.unitId)
        }
    },
    created() {
        this.getBoards()
    },
    methods:{
        filterBoards(){
            this.activeBoards = this.boards.filter(u => u.name.toLowerCase().includes(this.searchUnit.toLowerCase()) && u.department_id == this.unitId)
        },
        getBoards(){
            this.$appAxios.get("/getUserBoards")
                .then(response=>{
                    this.boards = response?.data.data
                    this.activeBoards = this.boards.filter(u => u.name.toLowerCase().includes(this.searchUnit.toLowerCase()) && u.department_id == this.unitId)
                })
        }
    },
}
</script>
