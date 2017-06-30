<template>
  <div class="hello" @click="goHome">
     <span class="title">
      这是Hello页面 
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
    }
    &>.content{
      $color: red;  // scss局部的变量
      color:$color;
    }
  }
 
</style>
