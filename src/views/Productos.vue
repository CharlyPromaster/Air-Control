<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import productosJson from '../assets/productos.json'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Inicializar AOS cuando el componente se monte
onMounted(() => {
  AOS.init({
    duration: 1000, // Duración de la animación
    once: true, // Solo se ejecuta una vez
  });
});

// Variables reactivas para los productos y los filtros
const productos = ref(productosJson);
const searchQuery = ref('');
const categoriaFiltro = ref('');
const modoFiltro = ref('');
const tecnologiaFiltro = ref('');
const capacidadFiltro = ref('');
const marcaFiltro = ref('');

// funcion de redireccion la página de detalles del producto
const router = useRouter();
const verDetalles = (id) => {
  router.push(`/producto/${id}`);
};

// usamos computed para poder filtrar
const productosFiltrados = computed(() => {
  return productos.value.filter(producto => {
    const nombreCoincide = producto.nombre.toLowerCase().includes(searchQuery.value.toLowerCase());
    const categoriaCoincide = categoriaFiltro.value ? producto.categoria === categoriaFiltro.value : true;
    const modoCoincide = modoFiltro.value ? producto.modo === modoFiltro.value : true;
    const tecnologiaCoincide = tecnologiaFiltro.value ? producto.tecnologia === tecnologiaFiltro.value : true;
    const capacidadCoincide = capacidadFiltro.value ? producto.capacidad_btu == capacidadFiltro.value : true;
    const marcaCoincide = marcaFiltro.value ? producto.marca === marcaFiltro.value : true;

    return nombreCoincide && categoriaCoincide && modoCoincide && tecnologiaCoincide && capacidadCoincide && marcaCoincide;
  });
});
</script>

<template>
    <div class="productos">
      <div class="container">
        <h2 class="text-center mb-5">Nuestros Productos</h2>

        <div class="row">
        <!-- filtro de busqueda -->
        <div class="col-12 col-md-3 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Filtros</h5>

              <!-- filtro por nombre -->
              <div class="mb-3">
                <input
                  v-model="searchQuery"
                  type="text"
                  class="form-control"
                  placeholder="Buscar producto..."
                />
              </div>

              <!-- filtro por categoria -->
              <div class="mb-3">
                <select v-model="categoriaFiltro" class="form-select">
                  <option value="">Categoría: Todas</option>
                  <option value="Aires Domésticos">Aires Domésticos</option>
                  <option value="Aires Industriales">Aires Industriales</option>
                  <option value="Aires Portátiles">Aires Portátiles</option>
                </select>
              </div>

              <!-- filtro por tipo-->
              <div class="mb-3">
                <select v-model="modoFiltro" class="form-select">
                  <option value="">Modo: Todos</option>
                  <option value="Frío Solo">Frío Solo</option>
                  <option value="Frío/Calor">Frío/Calor</option>
                </select>
              </div>

              <!-- filtro por tecnologia-->
              <div class="mb-3">
                <select v-model="tecnologiaFiltro" class="form-select">
                  <option value="">Tecnología: Todos</option>
                  <option value="Inverter">Inverter</option>
                  <option value="No Inverter">No Inverter</option>
                </select>
              </div>

              <!-- filtro por capacidad-->
              <div class="mb-3">
                <select v-model="capacidadFiltro" class="form-select">
                  <option value="">Capacidad: Todas</option>
                  <option value="24000">24,000 BTU/h</option>
                  <option value="18000">18,000 BTU/h</option>
                  <option value="12000">12,000 BTU/h</option>
                  <option value="9000">9,000 BTU/h</option>
                </select>
              </div>

              <!-- filtro por marca -->
              <div class="mb-3">
                <select v-model="marcaFiltro" class="form-select">
                  <option value="">Marca: Todas</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Daikin">Daikin</option>
                  <option value="LG">LG</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                </select>
              </div>

            </div>
          </div>
        </div>
  
          <!-- productos a la derecha -->
          <div class="col-12 col-md-9">
            <div class="row">
              
              <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="producto in productosFiltrados" :key="producto.id">
                <div data-aos="fade-up" class="card shadow-sm border-0 h-100">
                  <router-link :to="`/producto/${producto.id}`">
          <img :src="producto.imagenes[0]" class="card-img-top img-fluid" alt="Imagen del producto" style="object-fit: cover; height: 250px;">
        </router-link>
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ producto.nombre }}</h5>
                    <p class="card-text" :title="producto.descripcion">{{ producto.descripcion.length > 100 ? producto.descripcion.substring(0, 100) + '...' : producto.descripcion }}</p>
                    <button class="btn btn-primary mt-auto" @click="verDetalles(producto.id)">Ver más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .card {
  background: #ffffff;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  .card-body {
    padding: 2rem 1.5rem;

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #004b91; 
      margin-bottom: 2rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 3px;
        background-color: #00c2ff;
        bottom: -10px;
        left: 0;
        border-radius: 10px;
      }
    }

    .mb-3 {
      margin-bottom: 1.8rem !important;

      label {
        display: block;
        margin-bottom: 0.4rem;
        font-weight: 600;
        font-size: 0.95rem;
        color: #555;
      }

      .form-control,
      .form-select {
        border: 1px solid #e0e6ed;
        border-radius: 1rem;
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        background-color: #f9f9f9;
        color: #333;
        transition: all 0.25s ease;

        &:focus {
          border-color: #00c2ff;
          background-color: #fff;
          box-shadow: 0 0 0 0.2rem rgba(0, 194, 255, 0.2);
        }
      }

      input::placeholder {
        color: #aaa;
      }
    }
  }
}
  .productos .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .productos .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .productos .card-title {
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .productos .card-text {
    font-size: 0.9rem;
    color: #555;
  }
  
  .productos button {
    font-weight: bold;
  }
  
  .productos input, .productos select {
    font-size: 1rem;
    padding: 0.75rem;
  }
  </style>
  