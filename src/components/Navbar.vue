<script setup>
import { onMounted } from 'vue'
import { Offcanvas } from 'bootstrap'

let offcanvasInstance = null;

onMounted(() => {
  const el = document.getElementById('offcanvasNavbar')
  if (el) {
    offcanvasInstance = Offcanvas.getOrCreateInstance(el)
  }
})

const closeOffcanvas = () => {
  if (offcanvasInstance) {
    offcanvasInstance.hide()
  }
}
</script>

<template>
        <div class="announcement-bar">
    <p class="scrolling-text">"¡Mantenemos tu mundo fresco! Soluciones en refrigeración y aire acondicionado con calidad garantizada."</p>
</div>
<div class="announcement-contact">
  <div class="contact-info">
    <a href="https://maps.google.com/?q=Av. Ejemplo 123, Lima" target="_blank">
      <font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Jr Puno 603
    </a>
    <a href="tel:+51987654321">
      <font-awesome-icon :icon="['fas', 'phone']" /> +51 99999999
    </a>
    <a href="mailto:contacto@airecontrol.com">
      <font-awesome-icon :icon="['fas', 'envelope']" /> contacto@airecontrol.com
    </a>
  </div>
  <div class="social-icons">
    <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
    <a href="#"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
    <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
  </div>
</div>

<nav class="navbar navbar-expand-lg nav-underline">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand">
          <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1741223195/AirControlLOgo_1_kxgwi5.png" alt="Logo" class="logo">
        </router-link>
        
        <!--menu boton moviles-->
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
        <!-- MenU -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
             <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Nosotros</a></li>
            <li class="nav-item dropdown position-static">
              <router-link class="nav-link" to="/productos">Productos</router-link>

  <div class="dropdown-menu w-100 shadow border-0 p-4 mega-menu">
    <div class="row">
      <div class="col-md-3">
        <h6 class="text-uppercase text-primary mb-3">Equipos de Aire</h6>
        <a class="dropdown-item" href="/aires-domesticos">Aires Domésticos</a>
        <a class="dropdown-item" href="/aires-industriales">Aires Industriales</a>
        <a class="dropdown-item" href="/aires-portatiles">Aires Portátiles</a>
      </div>
      <div class="col-md-3">
        <h6 class="text-uppercase text-primary mb-3">Herramientas</h6>
        <a class="dropdown-item" href="/herramientas-instalacion">Instalación y Mantenimiento</a>
        <a class="dropdown-item" href="/kits-instalacion">Kits de Instalación</a>
        <a class="dropdown-item" href="/medidores">Manómetros y Medidores</a>
      </div>
      <div class="col-md-3">
        <h6 class="text-uppercase text-primary mb-3">Ventiladores</h6>
        <a class="dropdown-item" href="/ventiladores-techo">Ventiladores de Techo</a>
        <a class="dropdown-item" href="/ventiladores-pie">Ventiladores de Pie</a>
        <a class="dropdown-item" href="/ventiladores-industriales">Industriales</a>
      </div>
      <div class="col-md-3">
        <h6 class="text-uppercase text-primary mb-3">Suministros</h6>
        <a class="dropdown-item" href="/filtros">Filtros y Repuestos</a>
        <a class="dropdown-item" href="/termostatos">Termostatos</a>
        <a class="dropdown-item" href="/accesorios">Accesorios</a>
      </div>
    </div>
  </div>
</li>

<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Servicios</a>
  <ul class="dropdown-menu dropdown-menu-end py-3 px-4 shadow-lg rounded-3" style="min-width: 400px;">
    <div class="row">
      <div class="col-12 col-md-6">
        <li><a class="dropdown-item py-2" href="/instalacion">Instalación de Aire Acondicionado</a></li>
        <li><a class="dropdown-item py-2" href="/mantenimiento">Mantenimiento</a></li>
        <li><a class="dropdown-item py-2" href="/limpieza-desinfeccion">Limpieza y Desinfección</a></li>
      </div>
      <div class="col-12 col-md-6">
        <li><a class="dropdown-item py-2" href="/venta-equipos">Venta de Equipos</a></li>
        <li><a class="dropdown-item py-2" href="/proyectos">Elaboración de Proyectos</a></li>
        <li><a class="dropdown-item py-2" href="/consultoria-energetica">Consultoría Energética</a></li>
      </div>
    </div>
  </ul>
</li>
<li class="nav-item">
  <router-link class="nav-link" to="/proyectos">Proyectos</router-link>
</li>
    <router-link to="/blog" class="nav-link">Blog</router-link>
</ul>
</div>
<!-- Botón de Cotización -->
<router-link to="/cotizacion" class="btn btn-quote ms-4">
  <font-awesome-icon icon="fa-solid fa-calculator" class="me-2" />
  Cotiza con Nosotros
</router-link>

      </div>
    </nav>
    <!-- Offcanvas Navbar -->
    <div class="offcanvas offcanvas-end offcanvas-sm" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <router-link class="nav-link" to="/" @click="closeOffcanvas">Inicio</router-link>
      <router-link class="nav-link" to="/nosotros" @click="closeOffcanvas">Nosotros</router-link>
      <li class="nav-item dropdown">
        <router-link class="nav-link" to="/productos" @click="closeOffcanvas">Productos</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Servicios</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Opción 1</a></li>
          <li><a class="dropdown-item" href="#">Opción 2</a></li>
        </ul>
      </li>

      <router-link class="nav-link" to="/proyectos" @click="closeOffcanvas">Proyectos</router-link>
      <router-link  class="nav-link" to="/blog"  @click="closeOffcanvas">Blog</router-link>
    </ul>
  </div>
</div>
  </template>
  <style scoped>
  
/**Barra de anuncios */
.announcement-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #474545;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  overflow: hidden;
  z-index: 10002 !important; 
}
.scrolling-text {
  position: relative;
  white-space: nowrap;
  animation: scrollText 12s linear infinite;
  font-size: 14px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #ffffff;
}

@keyframes scrollText {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
/**Barra de redes y contactos */
.announcement-contact {
  position: fixed;
  top: 37px !important;
  left: 0;
  width: 100%;
  background-color: #589afc;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 40px;
  z-index: 10001;
  padding: 0 50px;
}
.announcement-contact .contact-info{
  display: flex;
  align-items: center;
  gap: 25px;
}
/*ajustar tamaño icon web */
.announcement-contact .social-icons svg {
  font-size: 22px;
}.announcement-contact .social-icons {
  display: flex; 
  gap: 25px;
}
.announcement-contact a, 
.announcement-contact svg {
  color: white;
  font-size: 17px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
.announcement-contact a:hover, 
.announcement-contact svg:hover {
  color: #ffdd57;
}
@media (max-width: 768px) {
  .announcement-contact {
    justify-content: space-between;
    padding: 5px 20px;
    height: 35px;
    font-size: 14px;
  }

  .announcement-contact .contact-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .announcement-contact .contact-info a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
  }

  .announcement-contact .social-icons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  /**Aqui ocultamos los contactos*/
  .announcement-contact .contact-info a:not(:first-child) {
    display: none;
  }
}
/** */
.btn-quote {
  background: linear-gradient(135deg, #004d7a, #0082b6);
  color: white !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 30px !important;
  padding: 12px 25px !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2) !important;
  transition: all 0.3s ease-in-out !important;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  .btn-quote {
    margin-top: -110px; 
    padding: 6px 12px;
    font-size: 14px;   
  }
}
.btn-quote:hover {
  background: linear-gradient(135deg, #003a5c, #00709c); 
  color: #fff !important;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3) !important;
  transform: scale(1.08) !important;
}

  /* Ajustar tamaño del navbar sin que se agrande */
.navbar {
  position: sticky !important;
  top: 74px !important;
  display: flex;
  justify-content: space-between; /* Espaciado entre elementos principales */
  align-items: center; /* Centra verticalmente */
  height: 120px;
  width: 100% !important;
  z-index: 1000 !important;
  background-color: white;
}
.navbar-nav {
    display: flex;
    gap: 20px; /* gap entre elementos */
}
/**controlamos el tamaño del logo */
.logo {
    height: 270px; 
    width: auto;
}
@media (max-width: 768px) {
  .logo {
    margin-top: -80px; 
    max-height: 200px;
  }
}
  /* Centrar todo correctamente */
.navbar .container {
max-width: 1200px;
}
  /**lETRAS */
.navbar-nav .nav-link {
font-size: 18px; 
font-weight: bold;
color: #545353;
transition: color 0.3s ease; 
}
.navbar-nav .nav-link:hover {
color: #007bff; 
}
/*manejamos el mega menu */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0; 
}
.nav-item.dropdown {
  position: relative;
}
.nav-item.dropdown .dropdown-menu {
  display: none; 
  position: absolute;
  top: 100%;
  left: 0;
  width: 600px; 
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
/* efecot de aparicion  */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* columnas*/
.dropdown-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.dropdown-menu li {
  flex: 1;
  min-width: 200px;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  font-weight: bold;
  color: #333;
  transition: 0.3s;
}

.dropdown-menu a:hover {
  color: #007bff;
  background: rgba(0, 123, 255, 0.1);
  border-radius: 5px;
}
</style>