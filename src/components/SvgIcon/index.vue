<template>
    <svg :class="svgClass" aria-hidden="'true">
      <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: "svg-icon",
      props:{
          iconClass:{
            type:String,
            requried:true
          },
        className:{
            type:String
        }
      },
      computed:{
          iconName(){
            return `#icon-${this.iconClass}`
          },
        svgClass(){
          if (this.className) {
            return 'svg-icon ' + this.className
          } else {
            return 'svg-icon'
          }

        }
      }
    }
</script>


<style scoped>
.svg-icon{
  width:1.6em;
  height:1.4em;
  vertical-align:-0.18em;
  fill:currentColor;
  overflow:hidden;
}
</style>
