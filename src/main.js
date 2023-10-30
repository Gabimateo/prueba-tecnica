import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import axios from 'axios';

const app = createApp(App);

// Tema de PrimeVue
import "primevue/resources/themes/lara-light-indigo/theme.css";

// Configura Axios con la base URL de la API
axios.defaults.baseURL = 'https://s2grupo-b4529-default-rtdb.europe-west1.firebasedatabase.app/users.json'; // Reemplaza con la URL de tu API

// Registra Axios como propiedad global en la instancia de la aplicación
app.config.globalProperties.$axios = axios;

app.use(PrimeVue).use(store).use(router).mount('#app');
