<template>
    <layout activeMenu="Panolar">
        <div class="units-main">
            <unitList @getBoards="getBoards" @hideBoards="hideBoards" />
            <boardList v-if="hideBoard" :unitId="unitIdForBoard" />
        </div>
    </layout>
</template>
<script>
import layout from "../components/layouts/layout.vue"
import unitList from "../components/lists/unitList.vue"
import boardList from "../components/lists/boardList.vue"

export default {

    data() {
        return {
            units:null,
            boards:null,
            hideBoard:false,
            unitIdForBoard:0,
        };
    },
    methods:{
        getBoards(unitId){
            this.unitIdForBoard = unitId
            this.hideBoard=true;
        },
        hideBoards(success){
            this.hideBoard=false;
        }
    },
    components:{
        layout,
        unitList,
        boardList
    }
}
</script>
