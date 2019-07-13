<template>
  <main id="home">
    <nav-bar></nav-bar>
      <p>sjsds</p>
    <!-- <div class = "holder">
      <form @submit.prevent="addItem">
      <input
        type= "text"
        placeholder="Enter The items/Products You want us to purchase"
        v-model="item"
        v-validate= "'required|min:3|max:30'" name = "item">
      <transition
      name="alert-in"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
      >
      <p class= "alert" v-if="errors.has('item')">{{ errors.first('item')}}</p>
      </transition>
      </form>

      <ul>
        <div
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
          >
          <li v-for="(data, index) in items" :key='index'>
            {{data.item}}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            </li>
        </div>
      </ul>
      <p> These are items that you want us to purchase </p>
    </div> -->
  </main>
</template>

<script>
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {
      item: '',
      items: [],
    };
  },
  methods: {
    // addItem() {
    //   this.$validator.validateAll()
    //     .then((err, result) => {
    //       /* eslint consistent-return: "error" */
    //       if (result) {
    //         this.items.push({ item: this.item });
    //         this.item = '';
    //       } else {
    //         return err;
    //       }
    //     });
    // },
    remove(id) {
      this.items.splice(id, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#home {
  height: 100vh;
}

#home ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#home ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

#home p {
  color: gray;
}

#home .container {
  box-shadow: 0px 0px 40px lightgray;
}

#home input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F
}
#home .alert-in-enter-active {
  animation: bounce-in .5s;
}
#home .alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i{
  float: right;
  cursor: pointer;
}

</style>
