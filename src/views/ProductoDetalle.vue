<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import productosJson from '../assets/productos.json';

const route = useRoute();
const router = useRouter();
const productoId = route.params.id;

const producto = ref(null);
const cargando = ref(true);
const imagenActual = ref(''); 

onMounted(() => {
  const encontrado = productosJson.find(p => p.id === productoId);
  if (encontrado) {
    producto.value = encontrado;
    imagenActual.value = encontrado.imagenes[0];
  } else {
    router.push('/');
  }
  cargando.value = false;
});
</script>

<template>
  <div class="container py-5" v-if="!cargando">
    <div v-if="producto" class="row">
      <!-- Galeria de imágenes -->
      <div class="col-md-6">
        <div class="mb-3">
            <img
  :src="imagenActual"
  alt="Imagen principal del producto"
  class="img-fluid rounded shadow"
  style="max-height: 400px; object-fit: cover;"
/>

        </div>
        <div class="d-flex gap-2">
            <img
  v-for="(img, index) in producto.imagenes"
  :key="index"
  :src="img"
  alt="Imagen secundaria"
  class="img-thumbnail"
  style="width: 100px; height: 100px; object-fit: cover;"
  @click="imagenActual = img"
/>

        </div>
      </div>

      <!-- informacion del producto -->
      <div class="col-md-6">
        <h1 class="mb-3">{{ producto.nombre }}</h1>
        <p class="text-muted">{{ producto.descripcion }}</p>

        <ul class="list-group mb-3">
          <li class="list-group-item"><strong>Marca:</strong> {{ producto.marca }}</li>
          <li class="list-group-item"><strong>Tipo:</strong> {{ producto.tipo }}</li>
          <li class="list-group-item"><strong>Capacidad:</strong> {{ producto.capacidad_btu }} BTU</li>
          <li class="list-group-item"><strong>Tecnología:</strong> {{ producto.tecnologia }}</li>
          <li class="list-group-item"><strong>Modo:</strong> {{ producto.modo }}</li>
          <li class="list-group-item"><strong>Categoría:</strong> {{ producto.categoria }}</li>
        </ul>

        <!-- caracteristicas -->
        <h5>Características:</h5>
        <ul>
          <li v-for="(car, index) in producto.caracteristicas" :key="index">
            {{ car }}
          </li>
        </ul>

        <!-- las etiquetas-->
        <div class="mt-3">
          <span
            v-for="(tag, index) in producto.etiquetas"
            :key="index"
            class="badge bg-secondary me-1"
          >
            #{{ tag }}
          </span>
        </div>

        <button class="btn btn-primary mt-4" @click="router.push('/')">Volver</button>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h2>Producto no encontrado</h2>
      <button class="btn btn-outline-secondary mt-3" @click="router.push('/')">Volver al inicio</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 1200px;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e1e1e;
}

.card-img-top,
.img-fluid {
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
}

.img-fluid:hover {
  transform: scale(1.02);
}

.img-thumbnail {
  border-radius: 0.5rem;
  border: 2px solid #ddd;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.img-thumbnail:hover {
  border-color: #0d6efd;
}

.list-group-item {
  background-color: #f8f9fa;
  border: none;
  font-size: 0.95rem;
  padding: 0.75rem 1rem;
}

ul {
  padding-left: 1rem;
}

ul li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.badge {
  font-size: 0.8rem;
  padding: 0.5em 0.75em;
  border-radius: 999px;
  background-color: #212529;
  color: #fff;
  text-transform: capitalize;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #0d6efd, #5b9dfc);
  box-shadow: 0 4px 12px rgba(0, 98, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #0857d4, #5a8be5);
}

.text-muted {
  font-size: 1rem;
  color: #6c757d;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  .img-fluid {
    max-height: 300px;
  }

  .img-thumbnail {
    width: 80px;
    height: 80px;
  }

  .btn-primary {
    width: 100%;
  }
}
</style>

