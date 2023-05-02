<template>
    <div class="flex flex-row space-x-8 text-center justify-center mx-auto mt-44">
        <span class="text-2xl md:text-7xl text-slate-700 font-black cursor-pointer">New</span>
        <h1 class="text-2xl md:text-7xl text-white font-black cursor-pointer">
            <span class="bg-pink-500 px-4 py-2 inline-block ">Arival</span>
        </h1>
    </div>
    <div class="flex text-center justify-center">
    <p class="text-2xl text-slate-700 font-thin mt-14">All New Stuff</p>
</div>
    <carasoul class="mt-10"></carasoul>
</template>

<script setup>
import carasoul from "../components/carasoul.vue";
</script>