<template>
    <div class="bg-gray-300 rounded-lg shadow-xl pt-20">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
                <ul>
                    <li>
                        <Cart v-for="item in items" :key="item.id" :CartItems="item" />
                    </li>
                </ul>
            </div>
            <!-- Sub total -->
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <sub-total :total="total" @checkout="closeModal"/>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import Cart from "./Cart.vue";
import SubTotal from "./SubTotal.vue";
import { ref, onMounted, computed, watch } from "vue";
import { useCartStore } from "../store/cart.js";

const cartStore = useCartStore();
const items = ref(0);

const total = computed(() => {
  return cartStore.totalPrice;
});

watch(() => {
  items.value = cartStore.cart;
});



function closeModal() {
  cartStore.showModalS = false;
  console.log("sdsdsd")
}

</script>



  