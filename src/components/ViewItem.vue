<template>
 
<ViewItemP :prod="prod" />
</template>

<script setup >
import ViewItemP from './ViewItemP.vue'
import { useCartStore } from '../store/cart';
import { onMounted, ref } from 'vue';
const prod = ref([
    {
        id: 1,
        name: 'Bread',
        price: 100,
        image: 'https://via.placeholder.com/150x150'
    },
 
])
const cartStore = useCartStore();
onMounted(() => {
  prod.value = cartStore.CurentProd
  console.log("asdasdsdsfsfdssdfdsf")
  console.log(prod.value)
})

</script>