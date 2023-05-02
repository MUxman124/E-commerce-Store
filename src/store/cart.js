import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        CurentProd: [],
        showModalS: false,
        products: [
            {
              id: 1,
              name: "Product 1",
              review: 121,
              price: 15,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
            },
    
            {
              id: 2,
              name: "Product two",
              review: 43,
              price: 32,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
            },
            {
              id: 3,
              name: "Product three",
              review: 23,
              price: 35,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
            },
            {
              id: 4,
              name: "Product four",
              review: 11,
              price: 18,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
            },
            {
              id: 5,
              name: "Product five",
              review: 220,
              price: 31,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
            },
            {
              id: 6,
              name: "Product six",
              review: 141,
              price: 16,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
            },
            {
              id: 7,
              name: "Product seven",
              review: 121,
              price: 15,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
            },
            {
              id: 8,
              name: "Product eight",
              review: 121,
              price: 15,
              image:
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
            }
          ],
    }),
    getters: {
        getCart: (state) => state.cart,

        totalPrice : (state) => {
            let total = 0;
            state.cart.forEach((product) => {
                total += product.price;
            });
            return total;
        }
    },
    actions: {
        AddProductToCart(product) {
            this.cart.push(product);
        },
        RemoveProductFromCart(product) {
            this.cart.splice(this.cart.indexOf(product), 1);
        },
        ClearCart() {
            this.cart = [];
        },
        
    }
})