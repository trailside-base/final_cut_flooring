<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center bg-gray-900">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1920&q=80" alt="Flooring Installation" class="w-full h-full object-cover opacity-50">
      </div>
      <div class="relative z-10 text-center text-white px-6 sm:px-12 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Transform Your Space</h1>
        <p class="text-xl md:text-2xl mb-8">Professional Flooring & Tile Installation Services</p>
        <NuxtLink to="/contact" class="btn-primary text-lg">Get Free Quote</NuxtLink>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="content-section">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="p-8 bg-gray-50 rounded-lg text-center">
              <h3 class="text-xl font-semibold mb-4">Hardwood Flooring</h3>
              <p class="text-gray-600">Expert installation of hardwood floors, including solid and engineered wood options.</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-lg text-center">
              <h3 class="text-xl font-semibold mb-4">Tile Installation</h3>
              <p class="text-gray-600">Professional bathroom and kitchen tile installation with precision and attention to detail.</p>
            </div>
            <div class="p-8 bg-gray-50 rounded-lg text-center">
              <h3 class="text-xl font-semibold mb-4">Floor Restoration</h3>
              <p class="text-gray-600">Restore and refinish your existing floors to their original beauty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work -->
    <section class="section-padding bg-gray-100">
      <div class="container-custom">
        <div class="content-section">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in featuredProjects" :key="index" class="aspect-w-4 aspect-h-3">
              <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover rounded-lg shadow-lg">
            </div>
          </div>
          <div class="text-center mt-16">
            <NuxtLink to="/gallery" class="btn-primary">View All Projects</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-blue-600 text-white">
      <div class="container-custom">
        <div class="content-section text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p class="text-xl mb-12">Contact us today for a free consultation and estimate</p>
          <NuxtLink to="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import project1 from '~/assets/images/project-1.jpg'
import project2 from '~/assets/images/project-2.jpg'
import project3 from '~/assets/images/project-3.jpg'
import project4 from '~/assets/images/project-4.jpg'
import project5 from '~/assets/images/project-5.jpg'
import project6 from '~/assets/images/project-6.jpg'
import project7 from '~/assets/images/project-7.jpg'

const featuredProjects = ref([
  {
    image: project1,
    title: 'Project 1'
  },
  {
    image: project2,
    title: 'Project 2'
  },
  {
    image: project3,
    title: 'Project 3'
  },
  {
    image: project4,
    title: 'Project 4'
  },
  {
    image: project5,
    title: 'Project 5'
  },
  {
    image: project6,
    title: 'Project 6'
  },
  {
    image: project7,
    title: 'Project 7'
  }
])
</script> 