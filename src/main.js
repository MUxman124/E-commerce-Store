import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
// import tailwind
import './assets/style.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia()
createApp(App).use(pinia).use(router).use(MotionPlugin).use(VueSweetalert2).mount('#app')
