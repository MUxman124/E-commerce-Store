<template>
  
  <div class="flex items-center justify-center max-h-xl pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
     
        <whole-cart />
      
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
          close
        </button>
        
      </div>
    </div>
  </div>


</template>

<script setup>
import WholeCart from './/WholeCart.vue'
</script>