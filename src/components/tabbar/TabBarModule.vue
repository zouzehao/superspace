<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="violet">
            <img slot="item-icon" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E7%81%B0%E9%BB%91%E8%89%B2/%E9%A6%96%E9%A1%B5.png" alt="首页">
            <img slot="item-icon-active" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E5%A4%9A%E5%BD%A9/%E9%A6%96%E9%A1%B5.png" alt="首页">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="classify" activeColor="deepPink">
            <img slot="item-icon" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E7%81%B0%E9%BB%91%E8%89%B2/%E5%88%86%E7%B1%BB.png" alt="分类">
            <img slot="item-icon-active" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E5%A4%9A%E5%BD%A9/%E5%88%86%E7%B1%BB.png" alt="分类">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="pagethree" activeColor="aquamarine">
            <img slot="item-icon" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E7%81%B0%E9%BB%91%E8%89%B2/%E7%8E%AF%E4%BF%9D.png" alt="环保">
            <img slot="item-icon-active" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E5%A4%9A%E5%BD%A9/%E7%8E%AF%E4%BF%9D.png" alt="环保">
            <div slot="item-text">环保</div>
        </tab-bar-item>
        <tab-bar-item path="pagetwo" activeColor="red">
            <img slot="item-icon" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E7%81%B0%E9%BB%91%E8%89%B2/%E4%BF%9D%E6%8A%A4.png" alt="保护">
            <img slot="item-icon-active" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E5%A4%9A%E5%BD%A9/%E4%BF%9D%E6%8A%A4.png" alt="保护">
            <div slot="item-text">秘密</div>
        </tab-bar-item>
        <tab-bar-item path="mysite" activeColor="cornflowerblue">
            <img slot="item-icon" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E7%81%B0%E9%BB%91%E8%89%B2/%E6%88%91%E7%9A%84.png" alt="我的">
            <img slot="item-icon-active" src="https://superspace-1300740713.cos.ap-beijing.myqcloud.com/%E5%A4%9A%E5%BD%A9/%E6%88%91%E7%9A%84.png" alt="我的">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "@/components/tabbar/TabBar";
    import TabBarItem from "@/components/tabbar/TabBarItem";
    export default {
        name: "TabBarModule",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>