<template>
    <div
        class="task-card"
        draggable="true"
        @dragstart="startDrag($event,card)"
        @click="modalActive=true"
    >
        <h4>{{card.title}}</h4>
        <img src="@/front/assets/images/profile.png" alt="">
    </div>
    <cardModal v-if="modalActive" @closeModal="modalActive=false" :card="this.card"/>
</template>
<script>
import cardModal from "../modals/cardDetail.vue"
export default {
    props:['card'],
    data(){
        return{
            modalActive:false,
        }
    },
    methods:{
        startDrag(event, card){
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('itemID', card.id)
        },
    },
    components:{
        cardModal
    },
}
</script>
