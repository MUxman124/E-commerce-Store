<template>
     
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-lg border-pink-300 sm:flex sm:justify-start">
        
        <img :src="CartItems.image" alt="product-image" class="w-full rounded-lg sm:w-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">{{ CartItems.name }}</h2>
                <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                <div class="flex items-center border-pink-200">
                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-pink-500 hover:text-white"> - </span>
                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-pink-500 hover:text-white"> + </span>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-sm">{{ CartItems.price }}</p>
                    
                    <span class="text-xs text-gray-500">x{{ CartItems.quantity }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['CartItems'],
}
</script>