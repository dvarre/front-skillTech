import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import router from './routes.ts'

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
    }
})

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount('#app')