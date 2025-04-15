import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Importamos FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faCalculator, faLightbulb, faSun, faTools, faHeartbeat, faBolt, faCogs, faFilter,
    faWindowClose, faWind, faTemperatureLow, faExclamationTriangle, faQuestionCircle, faTint, faBox, faSnowflake, faClipboardList, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons';


// agregamos aqui para que se puedan usar, esta es la libreria
library.add(faWhatsapp, faMapMarkerAlt, faPhone, faEnvelope, faClock, faFacebook, faInstagram, faLinkedin, faCalculator, faLightbulb, faSun, faTools, faHeartbeat, faBolt, faCogs, faFilter,
    faWindowClose, faWind, faTemperatureLow, faExclamationTriangle, faQuestionCircle, faTint, faBox, faSnowflake, faClipboardList, faGlobe, faHome);

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
