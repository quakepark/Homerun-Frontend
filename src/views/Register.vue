<template>
  <main id="register">
    <div class="register-main">
      <h5 class="register-txt">Register</h5>
      <p class="pt-2 mb-0">Start the Journey here</p>
        <form class="auth-form register-container">
          <div class="form-group first-name">
            <input
              required
              type="text"
              placeholder="First Name*"
            >
            <!-- <div
              v-if="submitted && !$v.user.firstName.required"
              class="invalid-feedback pl-4"
            >First Name is required</div> -->
          </div>

          <div class="form-group last-name">
            <input
              required
              type="text"
              placeholder="Last Name*"
            >
            <!-- <div
              v-if="submitted  && !$v.user.lastName.required"
              class="invalid-feedback pl-4"
            >Last Name is required</div> -->
          </div>

          <div class="form-group username">
            <input
              required
              type="text"
              placeholder="Username*"
            >
            <!-- <div
              v-if="submitted && !$v.user.username.required"
              class="invalid-feedback pl-4"
            >User Name is required</div> -->
            <!-- <div
              v-if="submitted && !$v.user.username.validateUserName"
              class="invalid-feedback pl-4"
            >
              Username is invalid:
              <br> A username should at least be 2 characters long
            </div> -->
          </div>

          <div class="form-group company">
            <input
              required
              type="text"
              placeholder="Address*"
            >
            <!-- <div v-if="submitted && $v.user.companyName.$error" class="invalid-feedback pl-4">
              <span v-if="!$v.user.companyName.required">company Name is required</span>
            </div> -->
          </div>

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
              type="phone"
              placeholder="Phone Number*"
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

          <div class="form-group confirm-password">
            <input
              required
              type="password"
              placeholder="Confirm Password*"
            >
            <!-- <div
              v-if="submitted && $v.user.confirmPassword.$error"
              class="invalid-feedback pl-4"
            >
              <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
              <span v-else-if="!$v.user.confirmPassword.sameAsPassword">
                Passwords does not match
              </span>
            </div> -->
          </div>

          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary submit-btn"
              >Submit</button>
          </div>
          <div class="sign-up-prompt text-center pt-5 pb-3">
            Already have an account?
            <router-link class="sign-in" to="/login">Sign In</router-link>
          </div>
        </form>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#register {
  height: auto;
}

#register .register-txt {
 font-weight: 600;
 font-size: 20px !important;
}

#register .register-main {
  margin: auto;
  width: 30%;
  margin-top: 3rem;

}

#register .first-name,
.last-name,
.username,
.company,
.password,
.email,
.confirm-password {
  position: relative;
}

#register .register-container {
  position: relative;
  text-align: center;
  margin-top: 1rem;

}

#register input::placeholder {
  padding: 0.7rem;
  color: #abadaf;
}

#register input {
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

#register .form-control {
  border: 1px solid #c9c9c9;
  border-radius: 40px;
  color: black;
}

#register .register-layout {
  margin-top: 50px;
}

#register .submit-btn {
  background-color: #6784ff;
  color: white;
  border-radius: 5px;
  padding: 11px 0;
  font-size: 18px;
  width: 100%;
  border: 1px solid #dddddd;
}

#register .submit-btn:hover {
  box-shadow: 5px 10px 15px rgba(0,0,0,0.12);
  background: rgba(0,0,0,0.100)
}

#register .agreement {
  font-size: 11px;
  color: #a6a6a6;
}

#register .sign-up-prompt {
  font-size: 15px;
  color: #ffffff;
  opacity: 0.85;
}

#register a {
  color: #558c90 !important;
  text-decoration: none;
}

#register .send {
  color: #558c90;
  margin-bottom: 42.78px;
}

#register .modal {
  top: 170px;
}

#register .modal-footer{
  border: none;
}

#register .a-message{
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
}

#register .green{
  background: #558c90;
  border: none;
  outline: none;
}
#register .green:active{
  border: none;
  outline: none;
}

#register .sign-in {
  color: #ffffff !important;
  text-decoration: underline;
}

</style>
