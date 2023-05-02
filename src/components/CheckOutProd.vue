<template>
    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" :src="CartItems.image" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{{ CartItems.name }}</span>
            <span class="float-right text-gray-400">42EU - 8.5US</span>
            <p class="text-lg font-bold">$ {{ CartItems.price }}</p>
        </div>
    </div>
</template>

<script >

export default {
    props: ['CartItems']
    
}

</script>