<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<template>
<div class="contact-header">
  <h2>¡Solicita tu cotización ahora!</h2>
  <p>Déjanos tus datos y te contactaremos lo antes posible para brindarte la mejor solución.</p>
</div>
  <div data-aos="fade-up" class="contact-section">
    <!-- Formulario -->
    <div class="formulario">
      <h2>Solicita una Cotización</h2>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="nombre" class="form-label">Nombre Completo</label>
          <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
        </div>

        <div class="col-md-6">
          <label for="telefono" class="form-label">Teléfono</label>
          <input type="tel" class="form-control" id="telefono" placeholder="Ingresa tu teléfono" required>
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo" required>
        </div>

        <div class="col-md-6">
          <label for="servicio" class="form-label">Tipo de Servicio</label>
          <select class="form-select" id="servicio" required>
            <option selected disabled>Selecciona un servicio</option>
            <option value="instalacion">Instalación</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparación</option>
          </select>
        </div>

        <div class="col-12">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea class="form-control" id="mensaje" rows="3" placeholder="Escribe los detalles aquí..." required></textarea>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-quote">Enviar Solicitud</button>
        </div>
      </form>
    </div>

    <!-- informacion de Contacto -->
    <div class="info-contacto">
  <h3>Contáctanos</h3>
  <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> <strong>Dirección:</strong> Jr Puno 603</p>
  <p><font-awesome-icon :icon="['fas', 'phone']" /> <strong>Teléfono:</strong> +51 999 999 999</p>
  <p><font-awesome-icon :icon="['fas', 'envelope']" /> <strong>Email:</strong> 
    <a href="mailto:contacto@airecontrol.com">contacto@airecontrol.com</a>
  </p>
  <p><font-awesome-icon :icon="['fas', 'clock']" /> <strong>Horario:</strong> Lunes a Sábado - 8:00 AM a 6:00 PM</p>

  <!-- Redes Sociales -->
  <div class="redes-sociales">
    <a href="https://www.facebook.com" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </a>
    <a href="https://www.instagram.com" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://www.linkedin.com" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
    <a href="https://wa.me/51987654321" target="_blank">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </a>
  </div>
</div>
  </div>
  <iframe 
  src="https://www.google.com/maps/embed?pb=TUA_URL_DE_MAPA"
  width="100%" 
  height="300" 
  style="border:0;" 
  :allowfullscreen="true" 
  loading="lazy">
</iframe>
</template>

<style scoped>
.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.contact-header p {
  font-size: 18px;
  color: #555;
  font-weight: 500;
}
.contact-header h2 {
  border-bottom: 3px solid #3498db;
  display: inline-block;
  padding-bottom: 5px;
}
/* contenedor general */
.contact-section {
  display: flex;
  gap: 50px;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
}

/* Formulario */
.formulario {
  flex: 1;
}

.formulario h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #3498db;
}

.formulario input,
.formulario select,
.formulario textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.formulario input:focus,
.formulario select:focus,
.formulario textarea:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
}

/* boton de enviar */
.btn-quote {
  background: #3498db;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 5px;
  width: 100%;
}

.btn-quote:hover {
  background: #2980b9;
}

.info-contacto {
  font-size: 1rem;
  color: #333;
  line-height: 1.8;
}

.info-contacto h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #003366;
}

.info-contacto p {
  display: flex;
  align-items: center;
  gap: 10px; 
  margin-bottom: 10px;
}

.info-contacto font-awesome-icon {
  font-size: 1.2rem;
  color: #007bff; 
}

.info-contacto a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.info-contacto a:hover {
  text-decoration: underline;
}
/**redes sociales */
.redes-sociales {
  margin-top: 20px;
  text-align: center;
}

.redes-sociales a {
  display: inline-block;
  font-size: 24px;
  color: #007bff; 
  margin: 0 10px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.redes-sociales a:hover {
  color: #0056b3;
  transform: scale(1.2);
}
/* lo hacemos responsive para moviles */
@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    gap: 30px;
  }

  .btn-quote {
    width: 100%;
  }
}
</style>
