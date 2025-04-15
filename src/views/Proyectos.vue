<script setup>
import proyectoData from '../assets/proyecto.json'

import { ref } from 'vue'

const proyectos = ref(proyectoData) 

/**codigo que me robe xd */
const formatearId = (titulo) => {
  return titulo.toLowerCase().replace(/\s+/g, '-')
}

// Función para hacer scroll al proyecto correspondiente
const scrollAProyecto = (titulo) => {
  const id = formatearId(titulo)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>


<template>
    <section class="proyectos container mt-5">
      <div class="row">
        <!-- lista debotones a la izquierda -->
        <div class="col-md-3">
          <div class="indice-proyectos">
            <button
              v-for="(proyecto, index) in proyectos"
              :key="index"
              class="btn btn-primary w-100 mb-3"
              @click="scrollAProyecto(proyecto.titulo)"
            >
              {{ proyecto.titulo }}
            </button>
          </div>
        </div>
  
        <!-- tarjetas de proyectos a la derecha -->
        <div class="col-md-9">
          <div class="row">
            <div
              class="col-md-4 mb-4"
              v-for="(proyecto, index) in proyectos"
              :key="index"
              :id="formatearId(proyecto.titulo)"
            >
            <router-link
  :to="`/proyecto/${proyecto.id}`"
  class="proyecto-card card text-decoration-none text-dark"
>
  <img :src="proyecto.imagen" :alt="proyecto.titulo" class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{{ proyecto.titulo }}</h5>
    <p class="card-text">{{ proyecto.descripcion }}</p>
  </div>
</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .proyectos {
    padding: 2rem;
  }
  
  .indice-proyectos button {
    border-radius: 8px;
    text-align: left;
    transition: background-color 0.3s ease;
  }
  
  .indice-proyectos button:hover {
    background-color: #0056b3;
  }
  
  .proyecto-card {
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    border-radius: 8px;
  }
  </style>
  