<template>
  <div class="h-screen flex flex-col text-black">
    <header class="w-full bg-blue-600 p-4 flex justify-between items-center">
      <img :src="vueLogo" alt="Vue Logo" class="w-12 h-12">
      <h2 class="text-white text-2xl font-bold">TO-DO LIST!</h2>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-white bg-blue-500 px-4 py-2 rounded-lg">To-Do</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white bg-blue-500 px-4 py-2 rounded-lg">Done List</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="flex-grow p-5">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <Suspense timeout="0">
              <template #default>
                <!-- main content -->
                <component :is="Component"></component>
              </template>
              <template #fallback>
                <!-- loading state -->
                <h2>Loading ....</h2>
              </template>
            </Suspense>
          </Transition>
        </template>
      </RouterView>
    </main>
    <footer class="w-full bg-blue-600 p-4 text-center text-white">
      <p>&copy; 2024 Ndraw.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { vueLogo } from '@/assets';
</script>

<style scoped>
/* Add any additional styling here */
</style>
