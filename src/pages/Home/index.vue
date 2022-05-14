<template>
 <div>
    <TypeNav/>
  <ListContainer/>
  <Recommend/>
  <Rank/>
  <Lick/>
  <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
  <Brand/>
 </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Lick from './Lick'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
name:'',
components:{
  ListContainer,Recommend,Rank,Lick,Floor,Brand
},
mounted(){
    this.$store.dispatch('floorList')
    localStorage.getItem('token')
    this.$store.dispatch('getUserInfo')
},
computed:{
  ...mapState({floorList:state=>state.home.floorList})
}
}
</script>

<style>

</style>