import { createRouter, createWebHistory } from 'vue-router'
import LayoutWrapper from '@/layouts/LayoutWrapper.vue'
import LoginFormPage from '@/components/LoginFormPage.vue'
import InventoryPage from '@/components/InventoryPage.vue'
import OCRUpload from '@/components/OCRUpload.vue'
import ItemFormPage from '@/components/ItemFormPage.vue'
import RecipeSuggestionPage from '@/components/RecipeSuggestionPage.vue'
import OCRDetailPage from '@/components/OCRDetailPage.vue'
import AccountPage from '@/components/AccountPage.vue'

const routes = [
  {
    path: '/login',
    component: LoginFormPage
  },
  {
    path: '/',
    component: LayoutWrapper,
    children: [
      { path: 'inventory', component: InventoryPage },
      { path: 'ocr-upload', component: OCRUpload },
      { path: 'ocr-detail', component: OCRDetailPage },
      { path: 'recipes', component: RecipeSuggestionPage },
      { path: 'account', component: AccountPage },
      { path: 'item-form/:id', name: 'EditItem', component: ItemFormPage },
      { path: 'item-form', name: 'AddItem', component: ItemFormPage }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
