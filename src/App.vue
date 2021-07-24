<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <router-link to="/sobremi">Sobre Mi</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/ultimopost/1">Ultimo Post</router-link>
      
    </div>

  <transition name="effectOp">
      <router-view/>
  </transition>

  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

 .effectOp-enter-active, .effectOp-leave-active {
        transition: opacity .5s;
    }
    .effectOp-enter, .effectOp-leave-to {
        opacity: 0;   
    }
</style>
