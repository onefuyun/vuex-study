<template>
  <div class="hello">
     <span class="title" @click="goHome">
        这是Hello页面 ,可以跳到Home页面
     </span>
     <div class="content">
        <span>hello word</span>
        <span>hello 安枫</span>     
     </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
       
    }
  },
  methods:{
    goHome(){
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
    padding:15px;
    &>.title{
      display:block;
      height:30px;
      color:$color;
      position:relative;
      // border-bottom:1px solid #ccc;
      // 解决移动端1px的线条过粗的情况
      &:before{
        content:'';
        // 混合宏的调用   
        @include border-top1px(50%,-150px,600px);
      }
    }
    &>.content{
      $color: red;  // scss局部的变量
      color:$color;
    }
  }
 
</style>
