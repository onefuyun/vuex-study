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
  
  
  $color: green !default;   // scss全局的变量
  .hello{
    padding:15px;
    &>.title{
      color:$color;
      position:relative;
      &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        border-top:1px;
        background:red;
        width:20px;
        height:1px;
        -webkit-transform:scale(0.5);
        transform:scale(0.5);
      }
    }
    &>.content{
      $color: red;  // scss局部的变量
      color:$color;
    }
  }
 
</style>
