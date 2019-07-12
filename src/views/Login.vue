<template>
  <main id="login">
    <div class="login-main">
      <h5 class="login-txt font-weight-bold">Login</h5>
      <p class="pt-2 mb-0">Welcome Back</p>
        <form class="auth-form login-container">

          <div class="form-group email">
            <input
              required
              type="email"
              placeholder="Email Address*"
            >
            <!-- <div v-if="submitted && $v.user.email.$error" class="invalid-feedback pl-4">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-if="!$v.user.email.email">Email is invalid</span>
            </div> -->
          </div>

          <div class="form-group password">
            <input
              required
              type="password"
              placeholder="Password*"
            >
            <!-- <div v-if="submitted && $v.user.password.$error" class="invalid-feedback pl-4">
              <span v-if="!$v.user.password.required">Password is required</span>
            </div> -->
            <!-- <div v-if="submitted && $v.user.password.$error" class="invalid-feedback pl-4">
              <span v-if="!$v.user.password.validatePassword">
                The password failed to match the following rules:
                <br>1. It must contain ONLY lower case, upper case or numerics
                <br>2. It must be at least 8 characters long, and not more than 32 characters
              </span>
            </div> -->
          </div>

          <div class="d-flex justify-content-end">
            <router-link class="font-weight-bold f-password" to="#">Forgot Password?</router-link>
          </div>

          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary submit-btn"
              >Login</button>
          </div>
        </form>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#login {
  height: 100vh;
}

#login .login-txt {
 font-weight: 600;
 font-size: 20px !important;
}

#login .login-main {
  margin: auto;
  width: 30%;
  margin-top: 7rem;
}

#login .email,
.password {
  position: relative;
}

#login .login-container {
  position: relative;
  text-align: center;
  margin-top: 1rem;

}

#login input::placeholder {
  padding: 0.7rem;
  color: #abadaf;
}

#login input {
  font-size: 15px;
  height: 38px;
  outline: none !important;
  box-shadow: none !important;
  padding: 5px;
  border: 1px solid #ced4da;
  margin-top: 0.2rem;
  width: 100%;
  padding-left: 16px;
}

#login .form-control {
  border: 1px solid #c9c9c9;
  border-radius: 40px;
  color: black;
}

#login .register-layout {
  margin-top: 50px;
}

#login .f-password {
  color: #222222;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

#login .submit-btn {
  background-color: #6784ff;
  color: white;
  border-radius: 5px;
  padding: 11px 0;
  font-size: 18px;
  width: 100%;
  border: 1px solid #dddddd;
}

#login .submit-btn:hover {
  box-shadow: 5px 10px 15px rgba(0,0,0,0.12);
  background: rgba(0,0,0,0.100)
}

#login .agreement {
  font-size: 11px;
  color: #a6a6a6;
}

#login .sign-up-prompt {
  font-size: 15px;
  color: #ffffff;
  opacity: 0.85;
}

#login .a-message{
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
}

</style>
