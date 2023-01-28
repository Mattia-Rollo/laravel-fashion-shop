import axios, { Axios } from 'axios';
import {reactive} from 'vue';

export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imageBasePath: 'http://127.0.0.1:8000/storage/',
    productsArray: [],
    typesArray:[],
    getTypes: function(){
        axios.get(`${this.apiBaseUrl}/data`).then((res)=>{
            this.typesArray = res.data.results[0];
        })
    }

});


