
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import CartItem from '@/components/CartItem.vue';
import CheckOutItem from '@/components/CheckOutItem.vue';
import HomeItem from '@/components/HomeItem.vue';
import MenuLayout from '@/components/MenuLayout.vue';
import ProductCreateItem from '@/components/product/ProductCreateItem.vue';
import AdminProductItem from '@/components/product/ProductViewItem.vue';
import ProductListItem from '@/components/product/ProductListItem.vue';
import ProductDetailItem from '@/components/ProductPublicDetailItem.vue';
import ProductItem from '@/components/ProductItem.vue';
import ProfileItem from '@/components/ProfileItem.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeItem
  },
  {
    path: '/product',
    name: 'product',
    component: ProductItem
  },
  
  {
    path: '/profile',
    name: 'profile',
    component: ProfileItem
  },
  {
    path: '/profile/product',
    name: 'profile/product',
    component: AdminProductItem
  },
  {
    path: '/product/:id',
    component: ProductDetailItem
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartItem
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutItem
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
