<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import proyectosData from '../assets/proyecto.json'

const route = useRoute()
const id = route.params.id

const proyecto = ref(null)

onMounted(() => {
  proyecto.value = proyectosData.find(p => p.id === id)
})
</script>

<template>
    <div class="container mt-5" v-if="proyecto">
      <h2>{{ proyecto.titulo }}</h2>
      <p>{{ proyecto.descripcion }}</p>
      <img :src="proyecto.imagen" :alt="proyecto.titulo" class="img-fluid mb-4" />
  
      <h5>Galería:</h5>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="(img, index) in proyecto.imagenes_extras" :key="index">
          <img :src="img" class="img-fluid rounded" />
        </div>
      </div>
    </div>
  
    <div v-else class="container mt-5">
      <p>Proyecto no encontrado.</p>
    </div>
  </template>
  