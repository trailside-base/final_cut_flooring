<template>
  <div>
    <!-- Gallery Hero -->
    <section class="relative py-20 bg-gray-900 text-white">
      <div class="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Work</h1>
          <p class="text-xl md:text-2xl text-gray-200 mx-auto">Browse through our portfolio of completed projects and get inspired for your next renovation.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Filter -->
    <section class="py-8 bg-white border-b">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-full"
            :class="selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="group relative cursor-pointer"
            @click="openModal(project)"
          >
            <div class="aspect-w-4 aspect-h-3">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
              >
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded-lg flex items-center justify-center">
              <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p>{{ project.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div class="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden relative" @click.stop>
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 z-10"
        >
          <i class="fas fa-times text-2xl"></i>
          <span class="sr-only">Close</span>
        </button>

        <img
          :src="selectedProject.image"
          :alt="selectedProject.title"
          class="w-full h-96 object-cover"
        >
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2">{{ selectedProject.title }}</h3>
          <p class="text-gray-600 mb-4">{{ selectedProject.category }}</p>
          <p class="mb-4">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const selectedProject = ref(null)

const categories = ['All', 'Hardwood', 'Tile', 'Restoration']

const projects = ref([
  {
    title: 'Modern Hardwood Installation',
    category: 'Hardwood',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80',
    description: 'Complete hardwood floor installation in a modern living room space.'
  },
  {
    title: 'Luxury Bathroom Renovation',
    category: 'Tile',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    description: 'Custom tile installation in a master bathroom renovation.'
  },
  {
    title: 'Vintage Floor Restoration',
    category: 'Restoration',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    description: 'Restoration of original hardwood flooring in a historic home.'
  },
  {
    title: 'Contemporary Kitchen Flooring',
    category: 'Tile',
    image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80',
    description: 'Modern kitchen floor tile installation with unique patterns.'
  },
  {
    title: 'Classic Hardwood Refinishing',
    category: 'Restoration',
    image: 'https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=800&q=80',
    description: 'Refinishing of classic hardwood floors in a traditional home.'
  },
  {
    title: 'Master Bath Remodel',
    category: 'Tile',
    image: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=800&q=80',
    description: 'Complete master bathroom remodel with custom tile work.'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})

function openModal(project) {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}
</script> 