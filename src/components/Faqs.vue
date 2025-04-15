<template>
    <section class="faqs-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 text-dark-emphasis display-6">Preguntas Frecuentes</h2>
  
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item border-bottom pb-3 mb-4"
            >
              <button class="faq-question btn w-100 text-start" @click="toggle(index)">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="fw-semibold">{{ faq.question }}</span>
                  <font-awesome-icon
                    :icon="faq.open ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                    class="text-primary"
                  />
                </div>
              </button>
              <transition name="fade">
                <p v-if="faq.open" class="faq-answer mt-2 text-secondary">
                  {{ faq.answer }}
                </p>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const faqs = reactive([
    {
      question: '¿Cada cuánto tiempo se le debe hacer mantenimiento a un aire acondicionado?',
      answer: 'Lo ideal es hacerlo cada 6 meses, aunque si se usa mucho o en zonas con polvo, es recomendable hacerlo cada 3 meses.',
      open: false
    },
    {
      question: '¿Qué significa que el aire acondicionado no enfría bien?',
      answer: 'Puede deberse a falta de gas refrigerante, filtros sucios o una falla en el compresor. Un técnico puede diagnosticarlo rápidamente.',
      open: false
    },
    {
      question: '¿Qué temperatura es ideal para ahorrar energía?',
      answer: 'Entre 24°C y 26°C es lo más eficiente. También se recomienda usar el modo “ECO” o “Inverter” si el equipo lo tiene.',
      open: false
    },
    {
      question: '¿Qué diferencia hay entre un aire acondicionado Inverter y uno tradicional?',
      answer: 'El Inverter regula la velocidad del compresor, consume menos energía y mantiene la temperatura constante. El tradicional es más económico pero menos eficiente.',
      open: false
    },
    {
      question: '¿Por qué gotea agua mi aire acondicionado?',
      answer: 'Puede deberse a un drenaje tapado, mal nivelado o falta de mantenimiento. Es uno de los problemas más comunes y fáciles de resolver.',
      open: false
    },
    {
      question: '¿Cuánto consume un aire acondicionado al mes?',
      answer: 'Depende del tipo, potencia y uso. Un aire de 12000 BTU puede consumir entre 200 y 400 kWh al mes si se usa 8 horas diarias.',
      open: false
    },
    {
      question: '¿Se puede instalar un aire sin dañar las paredes?',
      answer: 'Sí. Los técnicos profesionales usan herramientas que minimizan el impacto en la estructura. También existen opciones portátiles si no querés hacer obras.',
      open: false
    },
    {
      question: '¿Qué pasa si no le hago mantenimiento?',
      answer: 'Pierde eficiencia, consume más luz y puede dañar componentes internos. También puede generar malos olores o humedad en el ambiente.',
      open: false
    }
  ])
  
  const toggle = (index) => {
    faqs[index].open = !faqs[index].open
  }
  </script>
  
  <style scoped>
  .faqs-section {
    background: #f9fcfd;
    border-radius: 1rem;
  }
  
  .faq-question {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    padding: 1rem 1.2rem;
    transition: background-color 0.3s;
  }
  
  .faq-question:hover {
    background-color: #f1f9fc;
  }
  
  .faq-answer {
    padding: 0 0.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  /* agregamos transcicones */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
  }
  </style>
  