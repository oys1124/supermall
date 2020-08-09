<template>
  <div class="wrapper">
<!--    <h2>分类</h2>-->
    <ul class="content">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>

      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li></li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name: "Category",
      data(){
        return {
          scroll:null
        }
      },
      mounted() {
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
          probeType:2,
          pullUpLoad:true
        })

        this.scroll.on('scroll',(position)=>{
          console.log(position)
        })
        this.scroll.on('pullingUp',()=>{
          console.log('more')
        })
      }
    }
</script>

<style scoped>
  .wrapper{
    height: 150px;
    /*overflow: scroll;*/
    background-color: red;
  }
</style>
