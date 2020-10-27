<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        // 组件名称
        name: "TabBarItem",
        // 参数列表
        props:{
          // tabbar每一个item（分栏、类）的路径
          path:String,
          // tabbar点击后的颜色
          activeColor:{
              // 传递方式是字符串类型
              type:String,
              // 默认字体点击后变红
              default:'red'
          }
        },
        // 数据域
        data(){
            return{
                // active:false,
            }
        },
        // 计算属性
        computed:{
            // item的点击事件，验证当前点击的item是否为当下路径，用以判断当前的tabbar-item
            isActive(){
              // 判断当前活跃路由的路径 来给tabbar-item加样式
              return this.$route.path.indexOf(this.path)!==-1
          },
            activeStyle(){
                // 如果item处于活跃状态 将用户传递的颜色动态的加载设置为 当前的item颜色，如果不是则传递为空即为初始默认颜色
                if (this.isActive){
                    return {color: this.activeColor}
                }else{
                    return {}
                }
                //三目运算的写法
                //return this.active ? {color: this.activeColor} : {}
            }
        },
        // 方法域
        methods:{
            // 点击事件，路由跳转
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    /*每一个tab-bar的item样式*/
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        font-weight: bold;
        font-family:YouYuan;
    }
    /*每个item中icon图片的样式*/
    .tab-bar-item img{
        height: 24px;
        width: 26px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>
