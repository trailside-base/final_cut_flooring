<template>
  <div>
    <!-- About Hero -->
    <section class="relative py-20 bg-gray-900 text-white">
      <div class="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Final Cut Flooring</h1>
          <p class="text-xl md:text-2xl text-gray-200 mx-auto">Delivering exceptional flooring and tile installation services with craftsmanship and dedication since 2010.</p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <p class="mb-4">With years of experience in the flooring industry, Final Cut Flooring has established itself as a trusted name in professional flooring and tile installation services.</p>
            <p class="mb-4">Our commitment to quality workmanship and customer satisfaction has earned us a reputation as one of the most reliable flooring contractors in the area.</p>
            <p>We take pride in our attention to detail and our ability to bring our clients' vision to life, whether it's a simple floor replacement or a complete bathroom renovation.</p>
          </div>
          <div class="relative h-96">
            <img src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=800&q=80" alt="Our Workshop" class="w-full h-full object-cover rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding bg-gray-100">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="text-center p-6">
            <div class="text-blue-600 text-4xl mb-4">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="content-section">
          <h2 class="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div class="text-center">
              <img src="https://ui-avatars.com/api/?name=Chris+Brenden&size=200" alt="Chris Brenden" class="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg">
              <h3 class="text-2xl font-semibold mb-2">Chris Brenden</h3>
              <p class="text-gray-600 text-lg">Founder & Master Installer</p>
            </div>
            <div class="text-center">
              <img src="https://ui-avatars.com/api/?name=Orion+Brenden&size=200" alt="Orion Brenden" class="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg">
              <h3 class="text-2xl font-semibold mb-2">Orion Brenden</h3>
              <p class="text-gray-600 text-lg">Installation Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = ref([
  {
    icon: 'fas fa-medal',
    title: 'Expert Craftsmanship',
    description: 'Our team brings years of experience and expertise to every project.'
  },
  {
    icon: 'fas fa-clock',
    title: 'Timely Completion',
    description: 'We respect your time and ensure projects are completed on schedule.'
  },
  {
    icon: 'fas fa-star',
    title: 'Quality Materials',
    description: 'We use only the highest quality materials for lasting results.'
  }
])

const team = ref([
  {
    name: 'Chris Brenden',
    role: 'Founder & Master Installer',
    image: 'https://ui-avatars.com/api/?name=Chris+Brenden&size=200'
  },
  {
    name: 'Orion Brenden',
    role: 'Installation Specialist',
    image: 'https://ui-avatars.com/api/?name=Orion+Brenden&size=200'
  }
])
</script> 