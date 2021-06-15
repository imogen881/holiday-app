import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)

app.component('Button', Button);
app.component('InputText', InputText)
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Dropdown', Dropdown)
app.component('Calendar', Calendar)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('InputNumber', InputNumber)

// const app = createApp(App);
app.mount('#app');