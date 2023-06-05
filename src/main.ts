import router from "./router/index"
import { createApp, h } from 'vue'
import App from './App.vue'
import "./assets/sass/main.sass";

const app = createApp({
    render: () => h(App)
});

app.use(router)

app.mount('#app')

