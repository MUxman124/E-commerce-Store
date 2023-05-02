<template>
    <div class="mb-2 flex justify-between">
      <p class="text-gray-700">Subtotal</p>
      <p class="text-gray-700">$129.99</p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-700">Shipping</p>
      <p class="text-gray-700">$4.99</p>
    </div>
    <hr class="my-4" />
    <div class="flex justify-between">
      <p class="text-lg font-bold">Total</p>
      <div class="">
        <p class="mb-1 text-lg font-bold">$ {{ total }} USD</p>
        <p class="text-sm text-gray-700">including VAT</p>
      </div>
    </div>
    <router-link to="/checkout" class="mt-6 w-full inline-block rounded-md text-center justify-center bg-pink-500 py-1.5 font-medium text-white hover:bg-pink-600"
      @click="onCheckoutClick">Check Out</router-link>
      <router-link to="/" class="mt-6 w-full inline-block rounded-md text-center justify-center bg-teal-500 py-1.5 font-medium text-white hover:bg-teal-600"
      >Continue Shopping</router-link>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
        required: true,
      },
    },
    methods: {
      onCheckoutClick() {
        this.$emit('checkout');
        console.log('checkout');
      },
    },
  };
  </script>
  