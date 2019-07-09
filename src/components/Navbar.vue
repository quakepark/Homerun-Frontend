<template>
  <main id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light main-navbar">
      <div>
        <router-link class="navbar-brand" to="/">Home_Run</router-link>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-auto">
      <li class="nav-item active">
        <router-link 
          class="nav-link un" 
          to="/about">About
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          class="nav-link un" 
          to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
      <router-link class="btn btn-primary mr-sm-2 register-btn" to="/auth/register">Register</router-link>
      <router-link class="btn my-2 my-sm-0 login-btn" to="/auth/login">Login</router-link>
    </div>
  </div>
</nav>
  </main>
  
</template>

<script>
export default {
  name: 'Navbar'
  
}
</script>

<style scoped>

#navbar {
  height: auto;
}

#navbar .main-navbar{
  background-color: #f3f6fd;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 5px 10px 15px rgba(0,0,0,0.14); */
}

#navbar .register-btn {
  cursor: pointer;
  background: #6784ff;
  border: none;
  box-shadow: 2px 7px 12px rgba(0,0,0,0.14);
}

#navbar .login-btn {
  cursor: pointer;
  border: 1px solid #6784ff;
  box-shadow: 2px 7px 12px rgba(0,0,0,0.14);
}

#navbar .un {
  display: inline-block;
}

#navbar .un:after {
  content: '';
  width: 0px;
  height: 1px;
  display: block;
  background: #6784ff;
  transition: 300ms;
}

#navbar .un:hover:after {
  width: 100%;
}

</style>
