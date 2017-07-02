
<!--********************************************************************
 * Author        : anfeng
 * Create Date   : 2017-07-03 00:38
 * Filename      :header.vue
 * Description   : 头部导航
 * Arguments     :
     title       : 导航标题
 * Callbacks     :
     back        : 返回按钮的点击事件
********************************************************************-->
<template>
<!--
    <div class="header">
        <img src="../assets/image/icon_arrow.png" alt="">
        <div class="title">{{title}}</div>
    </div>
    -->
</template>
<script>
    export default {
        props:{
            title:{
                type:String,
                default:'标题'
            },
        },
        methods:{
            back(){
                this.$emit('goback')
            }
        },
        mounted(){
            // 兼容IOS的写法
            let nav = document.createElement('div');
            let arrow = document.createElement('img');
            let text = document.createElement('div');
            nav.className = 'header';
            nav.id = 'cancle';
            arrow.src= require('../assets/image/icon_arrow.png');
            arrow.onclick = this.back
            text.className = 'title';
            text.innerHTML = this.title;
            try{
                document.body.appendChild(nav);
                nav.appendChild(arrow);
                nav.appendChild(text);
            }catch(e){
                alert(e)
            }
            console.log(nav)
        },
        beforeDestroy(){
            let navbar = document.getElementById('cancle')
            console.log(navbar)
            document.body.removeChild(navbar)
        }
    }
</script>
<style lang="scss" rel="stylesheet">
    @import '../assets/scss/function';
    .header{
        position:absolute;
        width:100%;
        top:0;
        left:0;
        height:44px;
        background:blue;
        padding:15px;
        &>img{
            -webkit-transform-origin:0 0;
            transform:0 0;
            -webkit-transform:scale(0.5);
            transform:scale(0.5);
        }
        &>.title{
            width:50%;
            margin: -38px auto;
            text-align:center;
            font-size:16px;
        }
    }
    
</style>