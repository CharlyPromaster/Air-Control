<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Faqs from './components/Faqs.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 6000);
});
</script>

<template>
  <div v-if="loading" class="preloader">
    <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1741623549/Air_logo_1_alfnad.png" class="logo" alt="Logo">
    <p class="texto">Air Control se esta cargando para usted...</p>
  </div>

  <div v-else>
  <Navbar />
  <div class="main-content">
    <router-view />
    <Faqs />
  </div>
  <Footer />
  <a href="https://wa.me/51926092427" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
  <span class="whatsapp-msg">¿Necesitas ayuda?</span>
  <font-awesome-icon :icon="['fab', 'whatsapp']" />
</a>
  </div>
</template>

<style scoped>
/**Pagina de carga */
/* Preloader */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.logo {
  width: 100px;
  height: auto; 
  max-width: 100%; 
  animation: rotate 1s linear 5, zoomOut 0.5s ease 5s forwards;
}

.texto{
  font-family: 'Playfair Display', serif; 
  font-size: 28px; 
  color: white;
  text-align: center;
  opacity: 0;
  animation: fadeInText 1.5s ease-in-out 1.2s forwards;
}

/* Animaciones */
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeInText {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes zoomOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
/** */
.whatsapp-btn {
  position: fixed !important;
  bottom: 20px !important; 
  left: 50px !important; 
  background-color: #08d453 !important; 
  color: white !important;
  width: 60px !important;
  height: 60px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 50% !important;
  font-size: 35px !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3) !important;
  transition: transform 0.3s ease !important;
  z-index: 1000 !important; 
  text-decoration: none !important;
  flex-direction: column; 
}
.whatsapp-btn:hover {
  transform: scale(1.1) !important; /* efecto de agrandamiento */
}
.whatsapp-msg {
  position: absolute;
  bottom: 55px; 
  left: 50%; 
  transform: translateX(-50%); 
  background-color: #ffffff !important;
  color: rgb(0, 0, 0) !important;
  font-size: 13px !important;
  padding: 6px 12px !important;
  border-radius: 15px !important;
  white-space: nowrap !important;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2) !important;
}
</style>
