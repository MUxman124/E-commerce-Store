<template>
  <nav class="bg-gradient-to-r from-pink-500 to-indigo-500 border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between ml-12  p-2">
      <router-link to="/" class="flex items-center">

        <img src="" class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-bold text-white whitespace-nowrap dark:text-white">ECOM</span>
      </router-link>
      <div class="flex items-center text-center md:order-2">
        <a class="inline-block rounded bg-gradient-to-t from-pink-400 via-pink-500 to-pink-600 p-[2px] hover:shadow-2xl hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="/download">
          <span class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
            Sign IN
          </span>
        </a>
        <a href="#" @click="showCart" class="relative inline-flex items-center px-3 py-2 mx-3 rounded-lg text-sm font-medium text-center text-white  ">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 ml-1 -mr-1" fill="currentColor" data-name="Layer 2" viewBox="0 0 35 35" id="cart">
            <path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"></path>
            <path
              d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z">
            </path>
            <path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z"></path>
          </svg>
          <div class="absolute inline-flex z-10 items-center justify-center p-3  -top-3 -right-3 mt-2 mr-2 w-4 h-4 rounded-full bg-pink-600 text-white text-sm font-bold">
            {{ cartLength }}
          </div>
        </a>
        <button type="button" class="flex  text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="../assets/img.png" alt="user photo">
        </button>
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Maani 124</span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">hello@vue.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-pink-500 dark:hover:bg-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-pink-500 dark:hover:bg-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-pink-500 dark:hover:bg-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-pink-500 dark:hover:bg-gray-600 dark:text-gray-200 hover:text-white dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent hover:bg-white  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stores</a>
          </li>
          <li>
            <router-link to="/contact">
              <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <div class="fixed z-50 shadow-2xl inset-0" :class="{ 'hidden': !showModal }">

    <div class="flex items-center justify-center max-h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0 border-5 border-pink-600 ">
      <div class="inline-block align-bottom  rounded-lg text-left overflow-y-visible shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:max-h-full sm:w-full">
        <div v-motion-pop>
          <WholeCart v-if="showModal" @close="closeCart" />
        </div>
        <div class="bg-white  px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" @click="closeCart" class="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded">
            Close
          </button>

        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
import { useCartStore } from '../store/cart';
import Cart from '../Item/Cart.vue';
import CartModal from '../Item/CartModal.vue';
import WholeCart from '../Item/WholeCart.vue';
import { ref, watch } from 'vue'
import Swal from 'sweetalert2'
const cartStore = useCartStore();

const showModal = ref(false);
const cartLength = ref(cartStore.cart.length);

watch(cartStore.cart, () => {
  cartLength.value = cartStore.cart.length;
});

watch(() => cartStore.showModalS, (newVal) => {
  showModal.value = newVal;
});


function showCart() {
  if (cartStore.cart.length > 0) {
    cartStore.showModalS = true;
    showModal.value = cartStore.showModalS
  }

  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Your cart is empty',
      footer: `
            <button class="btn btn-pink" @click="this.$router.push('/')">Go Shopping</button>
          `
    })

  }
}

function closeCart() {
  cartStore.showModalS = false;
  showModal.value = cartStore.showModalS;
}


</script>

