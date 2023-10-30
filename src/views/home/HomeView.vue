<template>
  <div class="container">
    <div class="container__header">
      <Navbar></Navbar>
    </div>
    <div class="container__body">
      <TextContainer class="container__body__description"></TextContainer>
      <Table class="container__body__table"></Table>
    </div>
  </div>

</template>

<script setup>
import Table from '@/components/Table.vue'
import TextContainer from '@/components/TextContainer.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  &__header{
    height: 10rem;
    width: 100vw;
  }
  &__body{
    display: flex;
    flex-direction: row;
    margin: 1.5rem 2rem 1.5rem 2rem;
    &__description{
      width: 20rem;
      height: 400px;
      overflow-y: scroll;
    }
    &__table{
      width: 90%;
      margin-left: 1.5rem;
      &__body{
        width: 100%;
        
      }
    }
  }
}
</style>
