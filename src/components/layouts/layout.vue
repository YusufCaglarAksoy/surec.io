<template>
    <sideBar :activeMenu="this.activeMenu"/>
    <div class="right">
        <headTop />
        <main>
            <slot></slot>
        </main>
    </div>
</template>
<script>

export default {
    props:["activeMenu"],
}
</script>


