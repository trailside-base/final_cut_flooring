<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row justify-between items-center py-6">
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-12 order-1">
            <NuxtLink
              v-for="(item, index) in navigation"
              :key="index"
              :to="item.path"
              class="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Logo -->
          <div class="w-full md:w-auto text-center mb-4 md:mb-0 flex justify-center md:justify-start order-2">
            <NuxtLink to="/" class="inline-flex items-center">
              <img 
                src="@/assets/images/logo.png" 
                alt="Final Cut Flooring" 
                class="h-20 md:h-32 w-auto object-contain min-h-[5rem] md:min-h-[8rem]"
              />
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden absolute right-4 top-6 order-3"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200"
      >
        <div class="px-4 py-2 space-y-1">
          <NuxtLink
            v-for="(item, index) in navigation"
            :key="index"
            :to="item.path"
            class="block px-4 py-3 text-lg font-medium text-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow pt-28 md:pt-32">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white mt-16">
      <div class="container-custom py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Company Info -->
          <div class="col-span-2 text-center md:text-left">
            <h3 class="text-2xl font-bold mb-6">Final Cut Flooring</h3>
            <p class="mb-6 text-gray-300">Professional flooring and tile installation services with a commitment to quality and customer satisfaction.</p>
            <div class="flex justify-center md:justify-start space-x-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="sr-only">Facebook</span>
                <i class="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="sr-only">Instagram</span>
                <i class="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="text-center md:text-left">
            <h3 class="text-xl font-semibold mb-6">Contact</h3>
            <ul class="space-y-4 text-gray-400">
              <li>Phone: (605) 456-7890</li>
              <li>Email: info@finalcutflooring.com</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800">
        <div class="container-custom py-8 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Final Cut Flooring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = ref([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
])
</script> 