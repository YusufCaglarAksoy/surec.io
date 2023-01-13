<template>
    <button @click="createCardModal=true"><i class="fa-light fa-plus"></i> Yeni Görev Ekle</button>
    <div class="modal-shadow" :class="{active:createCardModal}">
        <div class="modal-inner">
            <div class="modal-header">
                <h1>Yeni Görev Oluştur</h1>
                <i class="fa-thin fa-xmark" @click="createCardModal=false"></i>
            </div>
            <div class="modal-body">
                <div class="inputs">
                    <div class="inp-group">
                        <label>Görev Başlığı</label>
                        <input type="text" v-model="createCardData.title">
                    </div>
                    <div class="inp-group">
                        <label>Task için son tarih</label>
                        <input type="date" v-model="createCardData.expired_date">
                    </div>
                    <div class="inp-group">
                        <label for="">İş Sorumlusu</label>
                        <select name="" id="">
                            <option value="" v-for="person in boardUsers">{{ person.userFirstName }} {{person.userLastName}}</option>
                        </select>
                        <i class="fa-regular fa-angle-right"></i>
                    </div>
                    <div class="inp-group">
                        <label>Kart Sırası</label>
                        <input type="number" v-model="createCardData.order">
                    </div>
                    <div class="inp-group textarea">
                        <label>Açıklama</label>
                        <textarea v-model="createCardData.description"></textarea>
                    </div>
                </div>
                <div id="alert" class="hidden">
                    <br>
                    <div class="alert alert-danger " role="alert">
                        <div id="alert-message"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="buttons">
                    <button class="gray" @click="createCardModal=false">İptal</button>
                    <button class="success" @click="createCard">Oluştur</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['boardID','boardUsers'],
    emits: ["successCreate"],
    data() {
        return {
            createCardModal:false,
            createCardData:{
                title:null,
                board_id:this.boardID,
                board_category_id:1,
                expired_date:null,
                description:null,
                order:null,
            },
        };
    },
    methods:{
        createCard(){
            this.$appAxios.post("/cards/create", this.createCardData,{headers:{ "Accept-Language": "tr", "Content-Type":"multipart/form-data"}})
                .then(response=>{
                    this.createCardModal=false;
                    this.$emit('successCreate')
                })
                .catch(error => {
                    const alert = document.getElementById("alert");
                    alert.classList.remove('hidden')
                    let message = error.response.data.data
                    const list = document.getElementById("alert-message");
                    list.innerHTML = '';
                    Object.keys(message).forEach(key => {
                        list.innerHTML += `<li>${message[key][0]}</li>`;
                    });
                });
        },
    }
}
</script>
