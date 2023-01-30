import axios, { Axios } from 'axios';
import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imageBasePath: 'http://127.0.0.1:8000/storage/',
    productsArray: [],
    isLoading: false,
    openCart: false,
    shoppingCart: [],
    cartData: [],
    

    getTexture: function(){
        axios.get(`${this.apiBaseUrl}/data`).then((res)=>{
            this.texturesArray = res.data.results[0];
        })
    },

    getBrands: function(){
        axios.get(`${this.apiBaseUrl}/data`).then((res)=>{
            this.brandsArray = res.data.results[1];
        })
    }, 
    getTypes: function(){
      axios.get(`${this.apiBaseUrl}/data`).then((res)=>{
          this.typesArray = res.data.results[2];
      })
    },

    // FUNZIONE PER ANIMARE GLI ELEMENTI IN ENTRATA NELLA PAGINA
    showitems() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("showing");
            } 
          });
        });
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((element) => observer.observe(element));
      }

    

});


