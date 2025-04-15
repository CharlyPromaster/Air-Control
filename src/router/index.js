import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cotizacion from '../views/Cotizacion.vue';
import Blog from '../views/Blog.vue';
import Productos from '../views/Productos.vue';
import ProductoDetalle from '../views/ProductoDetalle.vue';
import Proyectos from '../views/Proyectos.vue';
import ProyectoDetalle from '../views/ProyectoDetalle.vue';

const routes = [
  {
    path: '/',
    name: 'Home', 
    component: Home
  },
  {
    path: '/cotizacion',
    name: 'Cotizacion',
    component: Cotizacion,
    meta: { title: 'Cotización │ Air Control' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Blog │ Air Control' }
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos,
    meta: { title: 'Productos │ Air Control' }
  },
  {
    path: '/producto/:id',
    name: 'ProductoDetalle',
    component: ProductoDetalle,
    meta: { title: 'Productos Detallados │ Air Control' }
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos,
    meta: { title: 'Proyectos │ Air Control' }
  },
  {
    path: '/proyecto/:id',
    name: 'ProyectoDetalle',
    component: ProyectoDetalle,
    props: true,
    meta: { title: 'Proyectos Detallados │ Air Control' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.afterEach((to) => {
  const defaultTitle = 'Air Control │ Climatización Integral';
  document.title = to.meta.title || defaultTitle;
});

export default router;
