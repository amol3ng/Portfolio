import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'

// Google Fonts
const link = document.createElement('link')
link.rel = 'preconnect'
link.href = 'https://fonts.googleapis.com'
document.head.appendChild(link)

const link2 = document.createElement('link')
link2.rel = 'stylesheet'
link2.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=Roboto:wght@400;500;600&display=swap'
document.head.appendChild(link2)

createApp(App).use(router).mount('#app')
