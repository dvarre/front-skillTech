import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes.ts'

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {TroisJSVuePlugin} from "troisjs";

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(TroisJSVuePlugin)

app.mount('#app')