<template>
    <div class="container">
    <div class="container__header">
      <img class="container__header__logo" src="https://www.cci-es.org/wp-content/uploads/logo_s2grupo.png" alt="logo" width="400">
      <div class="container__header__navbar"> 
        <a href="#" class="container__header__navbar__button">Inicio</a>
        <a href="#" class="container__header__navbar__button">Contactanos</a>
        <a href="#" class="container__header__navbar__button">Proyectos</a>
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  &__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    width: 100%;
    &__logo{
      width: 16rem;
      margin-left: 2rem !important;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    &__navbar{
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      margin-right: 2rem;
      display: flex;
      &__button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 20px;
        color: white;
        text-decoration: none ;
        background-color: rgb(4, 84, 101);

      }
    }
  }
}
</style>