<template>
    <div class="field list-card add-card"  @click="createBoardModal=true">
        <p><i class="fa-light fa-plus"></i> Yeni Pano Ekle</p>
    </div>
    <div class="modal-shadow" :class="{active:createBoardModal}">
        <div class="modal-inner">
            <div class="modal-header">
                <h1>Yeni Görev Oluştur</h1>
                <i class="fa-thin fa-xmark" @click="createBoardModal=false"></i>
            </div>
            <div class="modal-body">
                <div class="inputs">
                    <div class="inp-group">
                        <label>Pano Adı</label>
                        <input type="text" v-model="createBoardData.name">
                    </div>
                    <div class="inp-group textarea">
                        <label for="">Pano Kullanıcıları</label>
                        <select name="" id="">
                            <option value="" v-for="person in depUsers">{{person.userFirstName}} {{person.userLastName}}</option>
                        </select>
                        <i class="fa-regular fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="buttons">
                    <button class="gray" @click="createBoardModal=false">İptal</button>
                    <button class="success" @click="createBoard">Oluştur</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['unitID'],
    emits: ["successCreate"],
    data() {
        return {
            units:null,
            createBoardModal:false,
            createBoardData:{
                name:null,
                department_id:this.unitID,
            },
            depUsers:null,
        };
    },
    watch: {
        unitID: function(newVal, oldVal) {
            this.createBoardData.department_id =newVal
            this.$appAxios.get("/getDepartmentsUser/" + this.unitID)
                .then(response=>{
                    this.depUsers = response?.data.data
                })
        }
    },
    methods:{
        createBoard(){
            this.$appAxios.post("/boards/create", this.createBoardData,{headers:{ "Accept-Language": "tr", "Content-Type":"multipart/form-data"}})
                .then(response=>{
                    this.createBoardModal=false;
                    this.$emit('successCreate')
                })
        }
    },
    created() {
        this.$appAxios.get("/getDepartmentsUser/" + this.unitID)
            .then(response=>{
                this.depUsers = response?.data.data
            })
    }
}
</script>
