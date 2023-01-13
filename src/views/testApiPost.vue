<template>
    <div style="display: flex;align-items: flex-start;width: 50%;flex-wrap: wrap">
    <div style="display: flex;align-items: end;    width: 100%;">
        <div class="inp-group">
            <label>Pano Adı</label>
            <input type="text" v-model="sendData.name">
        </div>
        <button @click="createBoard" style="border-radius: 10px;background: green;height: max-content;color:white;padding: 7px 15px">Gönder</button>
    </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            sendData:{
                name:null,
                department_id:2,
            }
        }
    },
    methods:{
        createBoard(){
            this.$appAxios.post("/boards/create", this.sendData,{headers:{ "Accept-Language": "tr", "Content-Type":"multipart/form-data"}})
                .then(response=>{
                    console.log(response)
                })
        }
    },
}
</script>
