<template>
    <div class="modal-shadow active">
        <div class="modal-inner">
            <div class="modal-header">
                <h1>{{ card.title }}</h1>
                <i class="fa-thin fa-xmark" @click="this.$emit('closeModal')"></i>
            </div>
            <div class="modal-body">
                <div class="inputs">
                    <div class="inp-group">
                        <p>{{card.description}}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="buttons">
                    <button class="gray" @click="this.$emit('closeModal')" style="margin-left: auto">Kapat</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['card'],
    }
</script>
