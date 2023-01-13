<template>
    <div class="add-person" @click="this.addPersonCheck=true">
        <span><i class="fa-light fa-plus"></i></span>
        <p>Kişi Ekle</p>
    </div>
    <div class="modal-shadow" :class="{active:addPersonCheck}">
        <div class="modal-inner">
            <div class="modal-header">
                <h1>Pano Kullanıcılarını Düzenle</h1>
                <i class="fa-thin fa-xmark" @click="this.addPersonCheck=false"></i>
            </div>
            <div class="modal-body">
                <div class="userTrans">
                    <div class="search-input">
                        <input type="text" placeholder="Ara..." v-model="searchValue">
                        <i class="fa-regular fa-magnifying-glass"></i>
                    </div>
                    <div class="passiveUser userArea">
                        <h2>Birimdeki Kullanıcılar</h2>
                        <div
                            class="userArea-inner"
                            @drop="onDropUser($event,1)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                         <div
                            v-for="user in passiveUser(1)"
                            class="userDiv"
                            draggable="true"
                            @dragstart="startDragUser($event,user)"
                            @click="addUser(user.id)"
                        >
                            <div class="user-text">
                                <span>{{ user.userFirstName.charAt(0) }}{{ user.userLastName.charAt(0) }}</span>
                                <p>{{ user.userFirstName }} {{ user.userLastName }}</p>
                            </div>
                            <i class="fa-regular fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div class="activeUser userArea">
                        <h2>Panodaki Kullanıcılar</h2>
                        <div
                            class="userArea-inner"
                            @drop="onDropUser($event,2)"
                            @dragenter.prevent
                            @dragover.prevent
                        >
                            <div
                                v-for="user in passiveUser(2)"
                                class="userDiv"
                                draggable="true"
                                @dragstart="startDragUser($event,user)"
                                @click="removeUser(user.id)"
                            >
                                <div class="user-text">
                                    <span>{{ user.userFirstName.charAt(0) }}{{ user.userLastName.charAt(0) }}</span>
                                    <p>{{ user.userFirstName }} {{ user.userLastName }}</p>
                                </div>
                                <i class="fa-light fa-xmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <div class="buttons">
                    <button class="gray" @click="this.addPersonCheck=false" style="margin-left: auto">Kapat</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["board"],
    data(){
        return{
            addPersonCheck:false,
            searchValue:"",
            depUsers:[
                {
                    id:1,
                    userFirstName:"Yusuf Çağlar",
                    userLastName:"Aksoy",
                },
                {
                    id:2,
                    userFirstName:"Fatih",
                    userLastName:"Alıcı",
                },
                {
                    id:3,
                    userFirstName:"Tuncay",
                    userLastName:"Forma",
                },
                {
                    id:4,
                    userFirstName:"Mehmet",
                    userLastName:"Geçici",
                },
                {
                    id:5,
                    userFirstName:"Çağatay",
                    userLastName:"Uçer",
                }
            ],
            boardUsers:[
                {
                    id:3,
                    userFirstName:"Tuncay",
                    userLastName:"Forma",
                },
                {
                    id:4,
                    userFirstName:"Mehmet",
                    userLastName:"Geçici",
                },
                {
                    id:5,
                    userFirstName:"Çağatay",
                    userLastName:"Uçer",
                }
            ],
        }
    },
    created() {
        this.getUsers();
    },
    methods:{
        removeUser(userId){
            const user= this.depUsers.find((u) => u.id == userId)
            user.boardId = 1
        },
        addUser(userId){
            const user= this.depUsers.find((u) => u.id == userId)
            user.boardId = 2
        },
        passiveUser(boardId){
            return this.depUsers?.filter((user) => user.boardId === boardId &&
                (user.userFirstName.toLowerCase().includes(this.searchValue.toLowerCase()) || user.userLastName.toLowerCase().includes(this.searchValue.toLowerCase())))
        },
        getUsers(){
            // this.$appAxios.get("/boards/persons/getBoardUsers/" + this.boardID)
            //     .then(response=>{
            //         this.boardUsers = response.data.data
            //     })
            // this.$appAxios.get("/getDepartmentsUser/" + this.unitId)
            //     .then(response=>{
            //         this.depUsers = response?.data.data
            //     })
            this.depUsers = this.depUsers.map(user => {
                if(this.boardUsers.find(u => u.id == user.id)){
                    user.boardId = 2
                }
                else{
                    user.boardId = 1
                }
                return user;
            })
        },
        startDragUser(event, user){
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('itemID', user.id)
        },
        onDropUser(event, areaID){
            const itemID  = event.dataTransfer.getData('itemID')
            const user = this.depUsers.find((user) => user.id == itemID)
            user.boardId = areaID
        }
    }
}
</script>
