<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
// Importar Glide y su CSS
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const consumoChart = ref(null);
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
  AOS.refresh();
  new Chart(consumoChart.value, {
    type: 'bar', // este tipo de grafico es de barras
    data: {
      labels: ['12000 BTU', '18000 BTU', '24000 BTU'], // aqui mencionamos los distitintos tipos de tamaños de aire acondicionado
      datasets: [
        {
          label: 'Consumo Energético (kWh/mes)', 
          data: [192, 288, 400], //valor de cada consumo
          backgroundColor: ['#4CAF50', '#FF9800', '#F44336'], // Colores 
          borderColor: ['#388E3C', '#F57C00', '#D32F2F'], //colores del borde de cada barra
          borderWidth: 1, //grosor
        },
        {
          label: 'Consumo Energético Inverter (kWh/mes)', // Etiqueta para los modelos Inverter
          data: [144, 208, 288], // consumo mensual de los modelos Inverter
          backgroundColor: ['#80E27E', '#FFEB3B', '#FF7043'], // colores para las barras de los modelos Inverter
          borderColor: ['#388E3C', '#F57C00', '#D32F2F'], // colores para el borde de las barras Inverter
          borderWidth: 1, //grosor
        },
      ],
    },
    options: {
      responsive: true, //responsive de las barras
      plugins: {
        legend: {
          position: 'top', 
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Consumo: ${context.raw} kWh/mes`; // hover de consumo cuando pasas el mouse sobre las barras
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true, // grafico desde 0
          ticks: {
            stepSize: 50, // no me acuerdo
          },
        },
      },
    },
  });
  new Glide('#brands-carousel', {
    type: 'carousel', // aqui establezco sobre el tipo de glide
    startAt: 0, 
    perView: 3, //cuanto se va mostrar en la pagina
    focusAt: 'center',
    gap: 15, // gap se sabe que es espacio
    autoplay: 2000, // cambio automático de imagen cada 3 segundos
    hoverpause: true, // pausa al pasar el mouse
    animationDuration: 800, 
    animationTimingFunc: 'ease-in-out', // tipo de animación
  }).mount();
});
const tips = [
  {
    title: '¿Cómo ahorrar luz con tu aire?',
    description: 'Mantené la temperatura entre 24°C y 26°C, usá modo ECO e instalá cortinas para evitar el calor externo.'
  },
  {
    title: '¿Qué hacer antes de llamar a un técnico?',
    description: 'Revisá si el filtro está limpio, si hay obstrucciones en la salida de aire o si el control está funcionando bien.'
  },
  {
    title: '¿Qué BTU necesito para mi ambiente?',
    description: 'Por cada 10 m² necesitás alrededor de 1000 BTU. Una habitación de 20 m² requiere un aire de 20000 BTU.'
  },
  {
    title: '¿Cuándo hacer mantenimiento?',
    description: 'Se recomienda cada 6 meses. Si lo usás a diario o hay mucho polvo, cada 3 meses es lo ideal.'
  },
  {
    title: '¿Cuál es la mejor ubicación para el aire?',
    description: 'Debe estar alto, sin obstáculos cerca y lejos de fuentes de calor. Así enfría de forma más eficiente.'
  }
]
const projects = [
  {
    title: 'Instalación de Aire Acondicionado',
    description: 'Instalamos 8 aires acondicionados "Midea" en la azotea, organizados en filas y fijados para optimizar espacio y mantenimiento. ¡Eficiencia y estilo en uno!',
    subtitule:'Resultado',
    resultado:'La instalación se completó exitosamente, cumpliendo estándares de calidad y adaptándose al entorno urbano, garantizando confort y eficiencia energética para los ocupantes.',
    image: 'https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744082115/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-07T221356.143_xyy3mn.png'
  },
  {
    title: 'Cuarto Mecánico HVAC',
    description: 'Se habilitó un cuarto mecánico equipado con unidades industriales HVAC, conectadas y etiquetadas para flujo eficiente de suministro y retorno. El diseño priorizó funcionalidad y aprovechamiento del espacio.',
    subtitule:'Resultado',
    resultado:'Sistema listo para ofrecer climatización de alto rendimiento. Instalación precisa, conectividad impecable y confort garantizado en todo el edificio.',
    image: 'https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744082706/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-07T222449.118_wodvf5.png'
  },
  {
    title: 'Mantenimiento de Unidad de Aire Acondicionado',
    description: 'Mantenimiento de aire acondicionado en la azotea del "CC. El Quinde" en Ica. Uso de gas refrigerante y ajustes precisos para rendimiento óptimo.',
    subtitule:'Resultado',
    resultado:'Sistema acondicionado y listo para operar al máximo rendimiento. ¡Trabajo profesional asegurando climatización eficiente y confiable!',
    image: 'https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744083122/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-07T222908.594_iz37ck.png'
  }
]
</script>

<template>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <!-- imagen para escritorio -->
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744648995/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-14T114156.802_oj8q39.png" class="d-none d-md-block w-100" alt="Imagen con texto">
      <!-- Imagen para movil -->
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744649034/DESCUBRE_EL_AIRE_PERFECTO_PARA_TU_ESPACIO._CONFORT_Y_FRESCURA_AL_MEJOR_PRECIO._cnbylw.png" class="d-block d-md-none w-100" alt="Imagen solo">
    <!-- contenedor de mi texto y botón -->
      <div class="texto-aire d-none d-md-block w-100">
      <p>DESCUBRE EL AIRE PERFECTO PARA TU ESPACIO. CONFORT Y FRESCURA AL MEJOR PRECIO.</p>
      <a href="/categoria-aires" class="boton-aire">Ver productos</a>
  </div>
    </div>

    <div class="carousel-item">
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1741930906/Dise%C3%B1o_sin_t%C3%ADtulo_71_t5hooa.png" class="d-none d-md-block w-100" alt="summersale" >
      <!-- imagen m0vil -->
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744649223/DESCUBRE_EL_AIRE_PERFECTO_PARA_TU_ESPACIO._CONFORT_Y_FRESCURA_AL_MEJOR_PRECIO._1_pckhel.png" class="d-block d-md-none w-100" alt="summersale">
      <div class="texto-aire2 texto-aire d-none d-md-block w-100">
      <p>DESCUBRE NUESTROS PROYECTOS EN CLIMATIZACIÓN</p>
      <p>¡Calidad y eficiencia en cada instalación!</p>
      <a href="/categoria-aires" class="boton-aire2">Ver Proyectos</a> 
      <a href="/categoria-aires" class="boton-aire2C">Contáctanos</a>
  </div>
    </div>

    <div class="carousel-item">
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1741930906/Dise%C3%B1o_sin_t%C3%ADtulo_70_zo3dvq.png" class="d-none d-md-block w-100" alt="statewarrior">
      <!-- imagen movil -->
      <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744649487/DESCUBRE_EL_AIRE_PERFECTO_PARA_TU_ESPACIO._CONFORT_Y_FRESCURA_AL_MEJOR_PRECIO._2_tmj09y.png" class="d-block d-md-none w-100" alt="statewarrior" >
      <div class="texto-aire3 d-none d-md-block w-100">
      <p>DETRÁS DE CADA INSTALACIÓN, HAY UN EQUIPO DEDICADO A OFRECERTE EL MEJOR SERVICIO.</p>
  </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  <section class="services-section py-5">
  <div class="container">
    <h2 class="text-center mb-4 text-dark-emphasis display-6">Nuestros Servicios</h2>
    <p class="text-center text-secondary mb-5">
      Conoce los servicios que ofrecemos para mantener tu aire acondicionado en óptimas condiciones.
    </p>

    <!-- agregar los servicios -->
    <div class="row g-4 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
          <font-awesome-icon :icon="['fas', 'cogs']" class="fs-2 mb-3 text-primary" />
          <h5 class="fw-semibold mb-2">Instalación de Aire Acondicionado</h5>
          <p class="text-secondary small">Ofrecemos instalación profesional de aire acondicionado para garantizar un funcionamiento eficiente y duradero.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
          <font-awesome-icon :icon="['fas', 'tools']" class="fs-2 mb-3 text-primary" />
          <h5 class="fw-semibold mb-2">Mantenimiento</h5>
          <p class="text-secondary small">Realizamos mantenimiento preventivo a tus sistemas de aire acondicionado para maximizar su vida útil y eficiencia energética.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
          <font-awesome-icon :icon="['fas', 'tint']" class="fs-2 mb-3 text-primary" />
          <h5 class="fw-semibold mb-2">Limpieza y Desinfección</h5>
          <p class="text-secondary small">Limpieza a fondo de filtros, conductos y unidades interiores para mejorar la calidad del aire y prevenir la acumulación de bacterias y moho.</p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
          <font-awesome-icon :icon="['fas', 'box']" class="fs-2 mb-3 text-primary" />
          <h5 class="fw-semibold mb-2">Venta de Equipos</h5>
          <p class="text-secondary small">Reparación rápida y eficaz de fallas en sistemas de aire acondicionado, asegurando un rendimiento óptimo y duradero.</p>
        </div>
      </div>
      
  <div class="col-md-6 col-lg-4">
  <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
    <font-awesome-icon :icon="['fas', 'clipboard-list']" class="fs-2 mb-3 text-primary" />
    <h5 class="fw-semibold mb-2">Elaboración de Proyectos</h5>
    <p class="text-secondary small">Diseñamos proyectos a medida para la instalación y optimización de sistemas de aire acondicionado, adaptados a las necesidades específicas de tu espacio.</p>
  </div>
</div>

      <div class="col-md-6 col-lg-4">
        <div data-aos="fade-up" class="service-card p-4 h-100 bg-white rounded-4 shadow-sm">
          <font-awesome-icon :icon="['fas', 'globe']" class="fs-2 mb-3 text-primary" />
          <h5 class="fw-semibold mb-2">Consultoría Energética</h5>
          <p class="text-secondary small">Brindamos asesoría para mejorar la eficiencia energética de tus sistemas de climatización, reduciendo costos y el impacto ambiental.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!--tips y recomendaciones-->

  <section class="tips-section py-5">
      <div class="container">
        <h2 class="text-center mb-4 text-dark-emphasis display-6">Tips y Recomendaciones</h2>
        <p class="text-center text-secondary mb-5">
          Consejos útiles para cuidar tu aire acondicionado y mejorar su rendimiento.
        </p>

        <div class="row g-4 justify-content-center">
          <div
            v-for="(tip, index) in tips"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <div  data-aos="fade-up" class="tip-card p-4 h-100 bg-white rounded-4 shadow-sm">
              <font-awesome-icon :icon="['fas', 'lightbulb']" class="fs-2 mb-3 text-primary" />
              <h5 class="fw-semibold mb-2">{{ tip.title }}</h5>
              <p class="text-secondary small">{{ tip.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- barra de consumo-->
    <section class="comparison-chart py-5">
  <div class="container">
    <h2 class="text-center mb-4 text-dark-emphasis display-6">Comparador de Consumo</h2>
    <p class="text-center text-secondary mb-5">
      Compara el consumo energético entre los diferentes modelos de aire acondicionado.
    </p>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <canvas ref="consumoChart"></canvas>
      </div>
    </div>
  </div>
</section>
<!-- proyectos-->
<section class="projects-section py-5">
  <div class="container">
    <h2 class="text-center mb-4 text-dark-emphasis display-6">Nuestros Proyectos</h2>
    <p class="text-center text-secondary mb-5">
      Algunos de los proyectos de instalación realizados con éxito.
    </p>

    <div class="row g-4 justify-content-center">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-md-6 col-lg-4"
      >
        <div class="project-card bg-white rounded-4 shadow-sm">
          <img :src="project.image" :alt="project.title" class="img-fluid rounded-3 mb-3" />
          <!-- contenido de la tarjeta -->
          <div class="content">
            <h5 class="fw-semibold mb-2 text-dark">{{ project.title }}</h5>
            <p class="text-secondary small">{{ project.description }}</p>
            <h5 class="fw-semibold mb-2 text-dark">{{ project.subtitule }}</h5>
            <p class="text-secondary small">{{ project.resultado }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <!-- carrusel de Marcas -->
 <section class="brands-carousel py-5">
      <div class="container">
        <h2 class="text-center mb-4 text-dark-emphasis display-6">Marcas de Aire Acondicionado</h2>
        <div id="brands-carousel" class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <!-- aquia agrego las marcas -->
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744434931/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-12T000326.099_1_sszkat.webp" alt="Marca 1" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744434931/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-12T000051.095_1_ywsvwm.webp" alt="Marca 2" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435351/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235503.323_1_nkhyvx.webp" alt="Marca 3" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435527/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235530.394_1_ofbeko.webp" alt="Marca 4" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435560/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235833.081_1_1_bruhpm.webp" alt="Marca 5" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435589/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235754.982_1_xrxrau.webp" alt="Marca 6" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435622/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-12T000027.416_1_vghknv.webp" alt="Marca 7" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435667/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-12T000138.019_1_dumgff.webp" alt="Marca 8" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435727/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235728.141_1_wzema6.png" alt="Marca 9" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435768/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235926.518_1_czzln5.png" alt="Marca 10" class="img-fluid">
              </li>
              <li class="glide__slide">
                <img src="https://res.cloudinary.com/dqlo0hvvh/image/upload/v1744435833/Dise%C3%B1o_sin_t%C3%ADtulo_-_2025-04-11T235629.143_1_1_ulomk2.webp" alt="Marca 11" class="img-fluid">
              </li>
            </ul>
          </div>
          <!-- Controles de navegación (flechas) -->
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">←</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">→</button>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
.carousel-item {
  transition: opacity 1.2s ease-in-out !important;
  opacity: 0 !important;
  position: absolute !important;
  width: 100% !important;
}
.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  opacity: 1 !important;
  position: relative !important;
}
@keyframes slideInBottom {
  0% { 
    opacity: 0; 
    transform: translateY(100px); /* Ahora empieza desde abajo */
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); /* Llega a su posición normal */
  }
}
.aire {
  position: absolute;
  left: -100px; /* Sale de la pantalla */
  top: 15%;
  width: 300px;
  animation: slideInLeft 1s ease-out forwards;
}
@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
}
/**Letras */
.texto-aire {
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 30px;
  font-weight: bold;
  max-width: 300px;
  opacity: 0;
  animation: fadeInText 1.2s ease-out forwards;
}
@keyframes fadeInText {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
/**Boton carrusel */
.boton-aire {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 20px;
  background-color: white;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.boton-aire:hover {
  background: linear-gradient(135deg, #0056b3, #003c80);
  transform: translateY(-2px); 
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}
/**letras carrusel 2 */
.texto-aire2 {
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 5%;
  right: 70%;
  transform: translateY(-50%);
  color: white;
  font-size: 30px;
  font-weight: bold;
  max-width: 300px;
  opacity: 0;
  animation: fadeInText 1.2s ease-out forwards;
}
@keyframes fadeInText {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
/**Boton carrusel 2 */
.boton-aire2 {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 20px;
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.boton-aire2C {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 29px;
  background-color: #ffffff;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.boton-aire2:hover {
  background: linear-gradient(135deg, #375370, #1e3148);
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}
.boton-aire2C:hover {
  background: linear-gradient(135deg, #0056b3, #003c80);
  transform: translateY(-2px); 
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}
/**letras carrusel 2 */
.texto-aire3 {
  font-family: "Poppins", sans-serif;
  position: absolute;
  top: 40%; 
  left: 25%; 
  transform: translate(-50%, -50%); 
  color: white;
  font-size: 30px; 
  max-width: 50%; 
  text-align: center;
  line-height: 1.3;
  font-weight: bold;
  opacity: 0;
  animation: fadeInText 1.2s ease-out forwards;
}
@keyframes fadeInText {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
/***** */
/* contenedor de la seccion */
.services-section {
  background-color: #f8f9fa;
  padding-top: 60px;
  padding-bottom: 60px;
}

/* estilo de las tarjetas de servicio */
.service-card {
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100%;
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.service-card .fa {
  transition: transform 0.3s ease;
}

/* hover del cursor sobre el icono */
.service-card:hover .fa {
  transform: scale(1.2);
  color: #007bff; /* Cambia el color al pasar el ratón */
}

/* titulo */
.service-card h5 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

/* descripcion */
.service-card p {
  font-size: 0.875rem;
  color: #6c757d;
  line-height: 1.6;
  transition: color 0.3s ease;
}

/* efecto de hover en el texto */
.service-card:hover h5,
.service-card:hover p {
  color: #007bff; 
}
/* gap entre columnas */
.row.g-4 {
  margin-left: -15px;
  margin-right: -15px;
}
/* espaciado en dispositivos pequeños */
@media (max-width: 767px) {
  .service-card {
    padding: 20px;
  }

  .service-card h5 {
    font-size: 1.1rem;
  }

  .service-card p {
    font-size: 0.8rem;
  }
}
.service-card {
  opacity: 0;
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/**Estilo barras */
/* Estilos para la sección Comparador de Consumo */
.comparison-chart {
  padding: 60px 0;
  background-color: #f4f6f9;
}

.comparison-chart h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.comparison-chart p {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 40px;
}

.comparison-chart .row {
  justify-content: center;
}

.comparison-chart .col-md-8 {
  padding-left: 15px;
  padding-right: 15px;
}

.comparison-chart canvas {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* unas animaciones */
@keyframes fadeInChart {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.comparison-chart canvas {
  animation: fadeInChart 1s ease-out;
}

/* estiloo del titulo */
.comparison-chart h2 {
  color: #007bff; 
  font-weight: 700;
}

/* responsivo para móviles */
@media (max-width: 768px) {
  .comparison-chart h2 {
    font-size: 2rem; 
    margin-bottom: 15px;
  }

  .comparison-chart p {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
}
/* estilo de Tips */
.tips-section {
  background-color: #f5f9fc; 
  padding: 60px 0;
  color: #333;
  position: relative;
}

.tips-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #003366; 
  text-transform: uppercase;
}

.tips-section p {
  font-size: 1.1rem;
  color: #555; 
  margin-bottom: 30px;
}

.tip-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px; 
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  max-width: 350px;
  margin: 0 auto;
}

.tip-card:hover {
  transform: translateY(-10px); 
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.tip-card .fs-2 {
  color: #ff8a00; 
  transition: color 0.3s ease;
}

.tip-card:hover .fs-2 {
  color: #ff4500; 
}

.tip-card h5 {
  font-size: 1.4rem;
  color: #003366; 
  margin-bottom: 20px;
}

.tip-card p {
  color: #666; 
  font-size: 1rem;
}

@media (min-width: 768px) {
  .tip-card {
    max-width: 350px;
  }
}
/**Proyectos */
.projects-section {
  background-color: #f0f9ff; 
  padding: 60px 0;
  color: #333;
}
.project-card .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  flex-grow: 1; 
}
.projects-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #003366;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.projects-section p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
}

.project-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 350px; 
  height: 100%; 
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.project-card img {
  max-height: 250px;
  object-fit: cover;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.project-card h5 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #003366;
  margin-top: 15px;
  text-align: center;
}

.project-card p {
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 10px;
  text-align: center;
}

.project-card .fw-semibold {
  font-weight: 600;
}

.project-card .text-dark {
  color: #2c2c2c;
}

.project-card .text-secondary {
  color: #666;
}

/* colores celestes en hover */
.project-card:hover {
  background-color: #e3f2fd;
  border: 2px solid #0288d1;
}

.projects-section .row {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.projects-section .col-md-6 {
  flex: 0 0 30%;
}

@media (max-width: 768px) {
  .projects-section h2 {
    font-size: 2rem;
  }

  .project-card {
    padding: 15px;
  }

  .project-card img {
    max-height: 200px;
  }

  .project-card h5 {
    font-size: 1.1rem;
  }

  .project-card p {
    font-size: 0.9rem;
  }

  .projects-section .col-md-6 {
    flex: 0 0 100%;
  }
}
/* estilos del carrusel */
.brands-carousel {
  background-color: #f8f8f8;
  padding: 3rem 0;
  position: relative;

  .glide__slide img {
    max-height: 100px;
    object-fit: contain;
    transition: transform 0.4s ease, filter 0.3s ease;
    filter: grayscale(100%) brightness(0.9);
    margin: 0 auto;
    display: block;
  }

  .glide__slide img:hover {
    transform: scale(1.08);
    filter: grayscale(0%) brightness(1);
  }

  .glide__arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .glide__arrow {
    pointer-events: all;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: none;
    padding: 0.6rem 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    .glide__arrow {
      font-size: 1.2rem;
      padding: 0.5rem 0.8rem;
    }

    .glide__slide img {
      max-height: 80px;
    }
  }
}
</style>