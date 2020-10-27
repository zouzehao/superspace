<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>


    #tab-bar{
        /*flex布局*/
        display: flex;
        /*背景浅灰*/
        background-color: #f6f6f6;
        /*上边框阴影*/
        box-shadow: 0 -1px 1px rgba(100,100,100,.12);
        /*使组件居下*/
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }


</style>