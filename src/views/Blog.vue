<script setup>
import {onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
//iniciliazo el aos para poder usar la animacion
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
  window.scrollTo(0, 0); 
  AOS.refresh(); //refresh para hacer que el scroll retroceda al movimiento 
});
</script>

<template>
    <section id="blog" class="bg-light py-5">
      <div class="container">
        <h2 data-aos="fade-up" class="text-center mb-4 text-dark">Nuestro Blog</h2>
        <p class="text-center text-secondary mb-5">Encuentra artículos informativos, consejos y novedades sobre climatización y aire acondicionado.</p>
        <!-- articulos -->
        <div data-aos="fade-up" class="row">
          <!-- articulo 1 -->
          <div class="col-md-4 mb-4">
            <div class="card shadow border-0 rounded">
              <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744215287/cuarto_Acondicionado_qbqjqo.png" class="card-img-top" alt="Artículo 1">
              <div class="card-body">
                <h5 class="card-title">Consejos para elegir el aire acondicionado perfecto</h5>
                <p class="card-text">¿Cómo elegir el aire acondicionado ideal para tu hogar? Conoce los factores que debes considerar antes de comprar uno.</p>
                <router-link to="/blog/como-elegir" class="btn btn-outline-info stretched-link">Leer más</router-link>
              </div>
            </div>
          </div>
  
          <!-- articulo 2 -->
          <div class="col-md-4 mb-4">
            <div class="card shadow border-0 rounded">
              <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744215481/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-09T111747.984_f8lqot.png" class="card-img-top" alt="Artículo 2">
              <div class="card-body">
                <h5 class="card-title">Mantenimiento de aire acondicionado: lo que debes saber</h5>
                <p class="card-text">Todo lo que necesitas saber para mantener tu aire acondicionado en perfectas condiciones y evitar averías.</p>
                <router-link to="/blog/mantenimiento" class="btn btn-outline-info stretched-link">Leer más</router-link>
              </div>
            </div>
          </div>
  
          <!-- articulo 3 -->
          <div class="col-md-4 mb-4">
            <div class="card shadow border-0 rounded">
              <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744216404/enfermandes_aire_ozws09.png" class="card-img-top" alt="Artículo 3">
              <div class="card-body">
                <h5 class="card-title">Evita enfermedades relacionadas con el aire acondicionado</h5>
                <p class="card-text">Cómo el aire acondicionado puede afectar tu salud y qué hacer para prevenir enfermedades comunes relacionadas con su uso.</p>
                <router-link to="/blog/evitar-enfermedades" class="btn btn-outline-info stretched-link">Leer más</router-link>
              </div>
            </div>
          </div>
        </div>
  
<!-- fechas puestas de aire -->
<div class="text-center mt-5">
  <h3 class="text-dark mb-4">Fechas Importantes sobre el Aire Acondicionado</h3>
  <ul class="list-group list-group-flush">
    <li data-aos="fade-up" class="list-group-item text-start">
      <font-awesome-icon :icon="['fas', 'sun']" class="me-2 text-warning" />
      <strong>1 de Junio</strong> – Inicio de la temporada de calor en el hemisferio norte. ¡Es hora de revisar tu aire acondicionado!
      <br />
      <small class="text-muted fst-italic">Tip: Programa una revisión técnica anual antes de esta fecha.</small>
    </li>
    <li data-aos="fade-up" class="list-group-item text-start">
      <font-awesome-icon :icon="['fas', 'lightbulb']" class="me-2 text-warning" />
      <strong> 15 de Agosto</strong> – Día Mundial de la Eficiencia Energética. Aprende a usar tu aire acondicionado de manera más eficiente.
      <br />
      <small class="text-muted fst-italic">Tip: Utiliza termostatos inteligentes para ahorrar energía.</small>
    </li>
    <li data-aos="fade-up" class="list-group-item text-start">
      <font-awesome-icon :icon="['fas', 'tools']" class="me-2 text-primary" />
      <strong>30 de Septiembre</strong> – Fin de la temporada de aire acondicionado. ¿Estás listo para realizar el mantenimiento preventivo?
      <br />
      <small class="text-muted fst-italic">Tip: Limpia los filtros y revisa los niveles de gas refrigerante.</small>
    </li>
    <li data-aos="fade-up" class="list-group-item text-start">
      <strong>❄️ 3 de Julio</strong> – Día Mundial del Aire Acondicionado. Una fecha para reconocer su impacto y buen uso.
      <br />
      <small class="text-muted fst-italic">Tip: Aprovecha esta fecha para informarte y cuidar tu equipo.</small>
    </li>
  </ul>
</div>

<div class="text-center mt-5 curiosidades">
  <h3 class="text-dark mb-4">🌬️ Curiosidades y Datos Interesantes</h3>
  <div class="row justify-content-center">
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="curiosidad-card">
        <p><strong>❄️ El primer aire acondicionado se creó en 1902</strong><br>
        Fue inventado por Willis Carrier para resolver un problema de humedad en una imprenta.</p>
      </div>
    </div>
    <div  data-aos="fade-up" class="col-md-6 mb-4">
      <div class="curiosidad-card">
        <p><strong>🏢 Los primeros aires eran gigantes</strong><br>
        Medían varios metros y solo estaban en fábricas o cines. ¡Imposibles de tener en casa!</p>
      </div>
    </div>
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="curiosidad-card">
        <p><strong>🌡️ El aire acondicionado ayudó al desarrollo de ciudades como Dubái o Las Vegas</strong><br>
        Sin esta tecnología, no serían habitables durante el verano.</p>
      </div>
    </div>
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="curiosidad-card">
        <p><strong>🧠 Mejora la productividad</strong><br>
        Estudios demuestran que las personas rinden mejor en ambientes frescos.</p>
      </div>
    </div>
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="curiosidad-card">
        <p><strong>🌍 Los aires modernos consumen hasta un 50% menos que los antiguos</strong><br>
        Gracias a la tecnología inverter y la eficiencia energética.</p>
      </div>
    </div>
  </div>
</div>
  
<!-- consejos adicionales -->
<div class="text-center mt-5">
  <h3 class="text-dark mb-3">Consejos Útiles</h3>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-dark">
      <font-awesome-icon :icon="['fas', 'heartbeat']" class="me-2" />
      Aire acondicionado y salud
    </button>
    <button type="button" class="btn btn-outline-dark">
      <font-awesome-icon :icon="['fas', 'bolt']" class="me-2" />
      Consejos de ahorro energético
    </button>
    <button type="button" class="btn btn-outline-dark">
      <font-awesome-icon :icon="['fas', 'cogs']" class="me-2" />
      Cómo prolongar la vida útil de tu equipo
    </button>
    <button type="button" class="btn btn-outline-dark">
      <font-awesome-icon :icon="['fas', 'filter']" class="me-2" />
      Cómo limpiar el filtro
    </button>
  </div>
</div>

  
      <!-- novedades -->
<div class="text-center mt-5">
  <h3 class="text-dark mb-3">Novedades Tecnológicas</h3>
  <div class="row">
    <!-- aire acondicionado inteligente -->
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="card shadow border-0 rounded">
        <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744220173/Dise%C3%B1o_sin_t%C3%ADtulo_vappxk.gif" class="card-img-top" alt="Tecnología 1">
        <div class="card-body">
          <h5 class="card-title">Aire acondicionado inteligente: lo último en tecnología</h5>
          <p class="card-text">Descubre cómo los aires acondicionados inteligentes están revolucionando la forma en que enfriamos nuestros hogares. Control por IA, eficiencia y automatización en un solo equipo.</p>
          <router-link to="/blog/aire-inteligente" class="btn btn-outline-info stretched-link">Leer más</router-link>
        </div>
      </div>
    </div>

    <!-- eficiencia tecnologia -->
    <div data-aos="fade-up"  class="col-md-6 mb-4">
      <div class="card shadow border-0 rounded">
        <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744221009/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-09T124954.177_iqrqux.png" class="card-img-top" alt="Tecnología 2">
        <div class="card-body">
          <h5 class="card-title">El futuro de la climatización: eficiencia energética</h5>
          <p class="card-text">Los sistemas de aire acondicionado más eficientes para el hogar del futuro. Conoce las innovaciones que permiten utilizar energías renovables para reducir la huella de carbono.</p>
          <router-link to="/blog/futuro-climatizacion" class="btn btn-outline-info stretched-link">Leer más</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- nuevas tecnologias -->
  <div class="row mt-4">
    <!-- control desde movil -->
    <div  data-aos="fade-up" class="col-md-6 mb-4">
      <div class="card shadow border-0 rounded">
        <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744221734/Dise%C3%B1o_sin_t%C3%ADtulo_1_wjxejc.gif" class="card-img-top" alt="Tecnología 3">
        <div class="card-body">
          <h5 class="card-title">Control remoto desde tu smartphone</h5>
          <p class="card-text">Conoce cómo las aplicaciones móviles pueden hacer que tu aire acondicionado sea más fácil de controlar, incluso antes de llegar a casa.</p>
          <router-link to="/blog/control-remoto" class="btn btn-outline-info stretched-link">Leer más</router-link>
        </div>
      </div>
    </div>

    <!-- Sistemas hibridos -->
    <div  data-aos="fade-up" class="col-md-6 mb-4">
      <div class="card shadow border-0 rounded">
        <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744082706/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-07T222449.118_wodvf5.png" class="card-img-top" alt="Tecnología 4">
        <div class="card-body">
          <h5 class="card-title">Sistemas híbridos de climatización</h5>
          <p class="card-text">Los sistemas híbridos combinan tecnologías convencionales con fuentes de energía renovable, mejorando la eficiencia y el confort.</p>
          <router-link to="/blog/sistemas-hibridos" class="btn btn-outline-info stretched-link">Leer más</router-link>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- mitos sobre el aire acondicionado -->
<div data-aos="fade-up"  class="text-center mt-5">
  <h3 class="text-dark mb-4">🌬️ Mitos sobre el Aire Acondicionado</h3>
  <div class="row justify-content-center">
    
    <!-- mito 1 -->
    <div class="col-md-4 mb-4">
      <div class="card shadow border-0 h-100">
        <div class="card-body">
          <h5 class="card-title text-danger">❌ Dormir con aire es malo</h5>
          <p class="card-text">Dormir con aire acondicionado no es dañino si se usa correctamente. Lo ideal es mantener una temperatura estable (22-24°C), evitar el chorro de aire directo y mantener el filtro limpio.</p>
        </div>
      </div>
    </div>

    <!-- mito 2 -->
    <div class="col-md-4 mb-4">
      <div class="card shadow border-0 h-100">
        <div class="card-body">
          <h5 class="card-title text-danger">❌ El aire seco te enferma</h5>
          <p class="card-text">El aire acondicionado reduce la humedad, sí, pero no enferma por sí solo. La clave está en ventilar adecuadamente, hidratarse y hacer mantenimiento al equipo para evitar acumulación de bacterias.</p>
        </div>
      </div>
    </div>

    <!-- mito 3 -->
    <div class="col-md-4 mb-4">
      <div class="card shadow border-0 h-100">
        <div class="card-body">
          <h5 class="card-title text-danger">❌ El aire consume demasiada electricidad</h5>
          <p class="card-text">Los nuevos equipos inverter son muy eficientes. Un mantenimiento adecuado y usarlo en modo ECO puede reducir mucho el consumo. Además, si el ambiente está bien aislado, consume menos.</p>
        </div>
      </div>
    </div>

  </div>
</div>
  
<!-- errores al usar aire acondicionado -->
<div data-aos="fade-up"  class="errores-aire text-start mt-5">
  <h3 class="text-center text-dark mb-4 position-relative">
    7 errores comunes al usar aire acondicionado
    <small class="d-block fs-6 text-muted">Y cómo evitarlos para mejorar tu confort y ahorro</small>
  </h3>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'window-close']" class="text-danger me-2" />
      Usarlo con ventanas abiertas
    </li>
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'wind']" class="text-primary me-2" />
      No limpiar los filtros
    </li>
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'temperature-low']" class="text-info me-2" />
      Ponerlo a 16°C pensando que enfría más rápido
    </li>
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-warning me-2" />
      Ignorar ruidos raros
    </li>
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'tools']" class="text-secondary me-2" />
      No hacerle mantenimiento regular
    </li>
    <li class="list-group-item">
      <font-awesome-icon :icon="['fas', 'question-circle']" class="text-muted me-2" />
      No leer el manual de uso ni configurar bien el control
    </li>
  </ul>
</div>
      </div>
    </section>
  </template>

  <style scoped>
  h2.text-center {
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
}

h2.text-center::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background-color: #0dcaf0;
  border-radius: 2px;
  margin: 12px auto 0;
}

.text-center.text-secondary {
  font-size: 1.15rem;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

/* misma altura de columnas */
#blog .row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 0;
}

#blog .col-md-4 {
  display: flex;
}

/* las tarjetas tomaran la mayor altura */
#blog .card {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#blog .card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }

    img {
      height: 200px;
      object-fit: cover;
      border-bottom: 1px solid #eee;
    }

    .card-body {
      padding: 1.5rem;

      .card-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1d3557;
        margin-bottom: 0.8rem;
      }

      .card-text {
        font-size: 0.98rem;
        color: #555;
        margin-bottom: 1.2rem;
      }

      .btn {
        font-weight: 500;
        padding: 0.5rem 1.2rem;
        border-radius: 50px;
        transition: all 0.2s ease;
        border: 1px solid #17a2b8;
        color: #17a2b8;

        &:hover {
          background-color: #17a2b8;
          color: white;
        }
      }
    }
  }

  .row {
    justify-content: center;
    gap: 1rem 0;
  }
/**Fechas Importantes */
.list-group-item {
  background-color: #f8f9fa;
  border: none;
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  text-align: left;
}

.list-group-item:hover {
  background-color: #e9f7fe;
  transform: scale(1.02);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
}

.list-group-item strong {
  font-size: 1.1rem;
  color: #0d6efd; 
}

.list-group-item small {
  display: block;
  margin-top: 0.5rem;
  color: #6c757d;
  font-style: italic;
}

#blog h3 {
  font-weight: bold;
  font-size: 1.75rem;
  color: #212529;
}
/**Datos */
.curiosidades h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #0dcaf0;
  margin: 10px auto 0;
  border-radius: 2px;
}

.curiosidad-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-left: 5px solid #0dcaf0;
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, transform 0.3s;
}

.curiosidad-card:hover {
  background-color: #eafcff;
  transform: translateY(-3px);
}

/**consejos adicionales */
/* Consejos Útiles */
.text-center {
  margin-top: 50px;
}
h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}
h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #007bff; /* Azul fresco en lugar de verde */
  margin-top: 10px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.btn-group .btn {
  background-color: #f8f9fa; /* Fondo gris suave */
  border-color: #ced4da; /* Gris claro */
  color: #495057; /* Color oscuro para el texto */
  font-size: 1.1rem;
  padding: 12px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-group .btn:hover {
  background-color: #007bff; /* Azul frío para el hover */
  color: white;
  border-color: #007bff;
}

.btn-group .btn:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5); /* Brillo suave en el borde al hacer clic */
}

.btn-group .btn i {
  font-size: 1.3rem; /* Íconos un poco más grandes para resaltar */
}

.text-center h3 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #343a40; /* Gris oscuro */
  margin-bottom: 20px;
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 15px; /* Espacio entre botones */
  margin-top: 30px;
}


@media (max-width: 768px) {
  .btn-group {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    font-size: 1rem;
    padding: 10px 15px;
  }

  .font-awesome-icon {
    font-size: 1.1rem;
  }
}
/**Errores */
.errores-aire {
  h3 {
    font-weight: bold;
    position: relative;

    &::after {
      content: '';
      width: 60px;
      height: 3px;
      background-color: #17a2b8;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .list-group-item {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    background-color: #f9f9f9;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
      background-color: #eef7fa;
    }

    svg {
      font-size: 1.2rem;
    }
  }
}
  </style>
  