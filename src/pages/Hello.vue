<template>
  <div class="hello">
  <navbar :title='theme' @goback="back"></navbar>
     <span class="title" @click="goHome">
        这是Hello页面 ,可以跳到Home页面
     </span>
     <div class="content">
        <span>hello word</span>
         <span>hello 安枫</span>      
     </div>
    <div class="cloud">
      今天风很大
    </div>
  </div>
</template>

<script>
import navbar from '../components/header'
export default {
  name: 'hello',
  data () {
    return {
       theme:'不是首页'
    }
  },
  mounted(){
  },
  components:{
    navbar,
  },
  methods:{
    goHome(){
       this.$router.push('home')
    },
    back(){
      console.log(1)
      this.$router.push('home')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import './src/assets/scss/function';
  
  
  $color: green !default;   // scss全局的变量
  .hello{
    padding:50px 15px;
    &>.title{
       
      height:30px;
      color:$color;
      // border-bottom:1px solid #ccc;
      // 解决移动端1px的线条过粗的情况
      // 混合宏的调用
      @include border-top1px($color);
    }
    &>.content{
      $color: red;  // scss局部的变量
      color:$color;
    }
    &>.cloud{
      font-size:40px;
      color:blue;
      @include border-bottom1px(blue);
    }
  }
 
</style>

