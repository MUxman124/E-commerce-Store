<template>
  <div class="flex justify-between items-center text-center pt-10 mt-24 mx-24">
    <div>
      <h1 class="text-5xl font-bold font-sans bg-pink-500 text-white uppercase p-5 transition hover:-skew-y-3 ">Choose From the Best</h1>
      <p class="text-xl font-thin">Sale is on these stuff</p>
    </div>
    <div class="mt-10">
      <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
        class="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" type="button">
        Sort By
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" style="margin-top: 2rem;">
        <ul class="py-2 text-sm  dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          <li>
            <a  @click="SortPriceA()" class="cursor-pointer block px-4 py-2 rounded-md  text-gray-700 hover:text-white hover:bg-pink-500  dark:hover:bg-gray-600 dark:hover:text-white">Price Low to High</a>
          </li>
          <li>
            <a  @click="SortPriceD()" class="block cursor-pointer px-4 py-2 rounded-md  text-gray-700 hover:text-white hover:bg-pink-500  dark:hover:bg-gray-600 dark:hover:text-white">Price High to Low</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 rounded-md  text-gray-700 hover:text-white hover:bg-pink-500 dark:hover:bg-gray-600 dark:hover:text-white">Date</a>
          </li>
          <li>
            <a @click="SortByReviews()" class="block px-4 py-2 rounded-md  text-gray-700 hover:text-white hover:bg-pink-500 dark:hover:bg-gray-600 dark:hover:text-white">Reviews</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 rounded-md  text-gray-700 hover:text-white hover:bg-pink-500 dark:hover:bg-gray-600 dark:hover:text-white">Type</a>
          </li>
        </ul>

      </div>
    </div>
  </div>


<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
    <single-product v-for="product in items" :key="product.id" :product="product" @button-click="AddCart" @button-clickV="AddCurent"></single-product>
  </div>
</div>
  <div class="flex items-center justify-center">
    <a class="inline-block mt-12 rounded bg-gradient-to-t from-pink-500 via-pink-600 to-pink-700 p-[2px] hover:shadow-2xl hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="/download">
      <span class="block rounded-sm bg-white px-8 py-3 text-base font-medium hover:bg-transparent">
        Load More
      </span>
    </a>
  </div>
</template>
<script setup>
import { onMounted, ref, computed} from 'vue';
import SingleProduct from "./SingleProduct.vue";
import { useCartStore } from "../store/cart.js";
import Swal from 'sweetalert2'
const cartStore = useCartStore();
const ProductCount = ref(4);
const items = ref(0);

onMounted(() => {
  items.value = cartStore.products;
  console.log(items.value);
});
function AddCart(item) {

  cartStore.AddProductToCart(item);
  console.log("number", cartStore.cart.length);
  console.log("itmemmmmmmmmmm", item);
  Swal.fire({
    toast: true,
    position: 'top-end',

    icon: 'success',
    title: 'Added to cart',
    showConfirmButton: false,
    timer: 2000
  });

}

function SortPriceA () {
  items.value.sort((a, b) => a.price - b.price);
  console.log("SDsdsdsd")
}

function SortPriceD () {
  items.value.sort((a, b) => b.price - a.price);
  console.log("SDsdsdsd")
}

function SortByReviews() {
  items.value.sort((a, b) => b.review - a.review);
  console.log("SDsdsdsd")}

function AddCurent(item){
  cartStore.CurentProd = item;
  console.log("item", cartStore.CurentProd);

}


</script>



