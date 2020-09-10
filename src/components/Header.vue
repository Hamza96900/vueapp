<template>
  <div class="Header">
    <div class="container">
      <div class="row">
        <div class="col-md-12 " id="nav">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="services">Services</router-link>
            </li>
            <li>
              <router-link to="/Pages">Pages</router-link>
            </li>
            <li>
              <router-link to="Contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script> 

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
ul li {
  display: inline-flex;
  padding: 10px;
  background-color: #141146;
  color: white;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.active {
  color: #42b983;
}
</style>
