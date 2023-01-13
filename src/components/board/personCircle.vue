<template>
    <div class="person">
        <span>{{ person.userFirstName.charAt(0) }}{{person.userLastName.charAt(0)}}</span>
        <p>{{ person.userFirstName }} {{person.userLastName}}</p>
    </div>
</template>
<script>
    export default {
        props:["person"]
    }
</script>
