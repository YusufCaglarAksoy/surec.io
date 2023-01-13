<template>
    <div class="task-area">
        <div class="task-area-head">
            <h3>{{ area.title }}</h3>
        </div>
        <div
            class="tasks"
            @drop="$emit('areaDrop',$event,area.id)"
            @dragenter.prevent
            @dragover.prevent
        >
            <taskCard
                v-for="card in getList(area.id)"
                :key="card"
                :card="card"
            />
        </div>
    </div>
</template>
<script>
import taskCard from "./taskCard.vue"
export default {
    props:['area','cards','searchValue'],
    components:{
        taskCard
    },
    methods:{
        getList(list){
            return this.cards?.filter((card) => card.board_category_id === list && card.title.toLowerCase().includes(this.searchValue.toLowerCase()))
        },
    }
}
</script>

