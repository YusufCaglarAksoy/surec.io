<template>
    <layout activeMenu="Panolar">
        <div class="main-head">
            <div class="main-head-left">
                <div class="search">
                    <input type="text" v-model="searchValue">
                    <i class="fa-light fa-magnifying-glass"></i>
                </div>
                <div class="persons">
                    <personCircle v-for="person in boardUsers" :key="person" :person="person" />
                    <addUser :board="board" />
                </div>
            </div>
            <div class="main-head-right">
                <createCard :boardUsers="boardUsers" :boardID="id" @successCreate="getCards"/>
            </div>
        </div>
        <div class="main-inner">
            <div class="class-main-areas">
                <taskArea v-for="area in this.areas" :key="area" :area="area" :cards="cards" :searchValue="searchValue" @areaDrop="onDrop"/>
            </div>
        </div>
    </layout>
</template>
<script>
import personCircle from "../components/board/personCircle.vue"
import taskArea from "../components/board/taskArea.vue"
import createCard from "../components/modals/createCard.vue"
import layout from "../components/layouts/layout.vue"
import addUser from "../components/modals/addUser.vue"
export default {
    props:['id'],
    data() {
        return {
            areas:null,
            cards:null,
            boardUsers:null,
            unitId:null,
            searchValue:"",
            board:null,
        };
    },
    components:{
        personCircle,
        taskArea,
        createCard,
        layout,
        addUser
    },
    created() {
        this.getBoardDetail();
        this.getFieldCats();
        this.getCards();
        this.getBoardUsers();
    },
    methods:{
        getBoardDetail(){
            this.$appAxios.get("/boards/getBoard/" + this.id)
                .then(response=>{
                    this.board = response.data.data
                })
        },
        getFieldCats(){
            this.$appAxios.get("/boards/categories/list/" + this.id)
                .then(response=>{
                    this.areas = response.data.data
                })
        },
        getCards(){
            this.$appAxios.get("/cards/getBoardCards/" + this.id)
                .then(response=>{
                    this.cards = response.data.data
                })
        },
        getBoardUsers(){
            this.$appAxios.get("/boards/persons/getBoardUsers/" + this.id)
                .then(response=>{
                    this.boardUsers = response.data.data
                })
        },
        onDrop(event, areaID){
            const itemID  = event.dataTransfer.getData('itemID')
            const item = this.cards.find((card) => card.id == itemID)
            item.board_category_id = areaID
            this.$appAxios.post("/cards/changeCardCategory", {card_id:itemID,board_category_id:areaID},{headers:{ "Accept-Language": "tr", "Content-Type":"multipart/form-data"}})
                .then(response=>{
                })
        },
    }
}
</script>
