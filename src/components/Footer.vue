<template>
<footer class="footer-custom bg-dark text-white pt-5 pb-4 mt-5">
  <div class="container">
    <div class="row g-4">
  
      <div class="col-md-4">
        <div class="mb-3 d-flex align-items-center gap-2">
          <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1741623549/Air_logo_1_alfnad.png" alt="Logo de Tu Empresa" class="footer-logo" />
          <span class="fw-bold fs-5">AIR CONTROL</span>
        </div>
        <p class="text-secondary">
          Brindamos soluciones en climatización para hogares, comercios e industrias. Calidad y eficiencia garantizadas.
        </p>
      </div>

      <!-- Informacion de contacto -->
      <div class="col-md-4">
        <h5 class="fw-bold mb-3">Contáctanos</h5>
        <ul class="list-unstyled text-secondary footer-contact">
          <li><i class="fas fa-map-marker-alt me-2 text-info"></i>Av. Ejemplo 123, Lima, Perú</li>
          <li><i class="fas fa-phone me-2 text-info"></i>+51 999 888 777</li>
          <li><i class="fas fa-envelope me-2 text-info"></i>informes@aireempresa.com</li>
          <li><i class="fas fa-clock me-2 text-info"></i>Lun - Sáb: 8:00 am - 6:00 pm</li>
        </ul>
        <div class="d-flex gap-3 mt-3">
          <a href="https://wa.me/51987654321" target="_blank" class="footer-icon">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
          <a href="https://www.facebook.com/tuempresa" target="_blank" class="footer-icon">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </div>
      </div>

      <!-- Enlaces rapidos -->
      <div class="col-md-4">
        <h5 class="fw-bold mb-3">Enlaces rápidos</h5>
        <ul class="list-unstyled footer-links">
          <li><a href="#servicios">Nosotros</a></li>
          <li><a href="#proyectos">Produtos</a></li>
          <li><a href="#faq">Servicios</a></li>
          <li><a href="#contacto">Proyectos</a></li>
          <li><a href="#comparador">Blog</a></li>
        </ul>
      </div>
    </div>

    <!-- linea final -->
    <div class="text-center pt-4 mt-4 border-top border-secondary">
      <p class="mb-0 text-secondary small">&copy; 2025 Pagina realizada de practica por Izzmadel</p>
      <a href="https://www.facebook.com/profile.php?id=100084279949244" target="_blank" class="footer-icon">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
    </div>
  </div>
</footer>
</template>

<style scoped> 
.footer-custom {
  background: linear-gradient(145deg, #111, #1c1c1c);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.footer-logo {
  height: 90px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
}
.footer-contact li {
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}
.footer-contact li:hover {
  color: #fff;
  transform: translateX(5px);
}
.footer-icon {
  color: #fff;
  font-size: 1.3rem;
  transition: color 0.3s ease, transform 0.3s ease;
}
.footer-icon:hover {
  color: #17c1e8;
  transform: scale(1.2);
}
.footer-links li {
  margin-bottom: 0.5rem;
}
.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: all 0.3s ease;
}
.footer-links a:hover {
  color: #fff;
  text-decoration: underline;
  padding-left: 5px;
}
/*responsivo para moviles */
@media (max-width: 768px) {
  .footer-custom .row {
    flex-direction: column;
    align-items: center;
  }

  .footer-custom .col-md-4 {
    text-align: center;
    margin-bottom: 20px;
  }

  .footer-custom .footer-logo {
    height: 50px; 
  }

  .footer-custom .footer-contact,
  .footer-custom .footer-links {
    padding-left: 0;
  }

  .footer-custom .footer-links li {
    margin-bottom: 10px;
  }

  /* aqui ajusto el tamaño de las redes sociales */
  .footer-custom .footer-icon {
    font-size: 30px;
    margin: 0 10px;
  }

  .footer-custom .text-center p {
    font-size: 12px;
  }
}

@media (max-width: 576px) {
  .footer-custom .footer-logo {
    height: 40px;
  }

  .footer-custom .footer-icon {
    font-size: 26px;
  }
}
</style>