<template>
  <div>
    <!-- Notification -->
    <div v-if="showNotification" class="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-90 max-w-lg">
      <div :class="[
        'px-4 py-3 rounded relative flex items-center',
        notificationType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      ]">
        <button class="absolute right-2 top-2" @click="showNotification = false">
          <span class="sr-only">Close</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"/>
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <i :class="[
            'fas',
            notificationType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
          ]"></i>
          <span>{{ notificationMessage }}</span>
        </div>
      </div>
    </div>

    <!-- Contact Hero -->
    <section class="relative py-24 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl md:text-2xl text-gray-300">Get in touch with us for a free consultation and estimate for your flooring project.</p>
      </div>
    </section>

    <!-- Contact Information and Form Section -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="bg-white rounded-lg shadow-xl overflow-hidden -mt-12">
          <div class="bg-blue-600 text-white p-10">
            <h3 class="text-3xl font-bold mb-8">Get In Touch</h3>
            <div class="space-y-8 mb-8">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500">
                  <i class="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <p class="text-blue-200 text-sm">Call Us</p>
                  <a href="tel:+16054567890" class="text-xl font-semibold hover:text-blue-200">
                    (605) 456-7890
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500">
                  <i class="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <p class="text-blue-200 text-sm">Email Us</p>
                  <a href="mailto:info@finalcutflooring.com" class="text-xl font-semibold hover:text-blue-200">
                    info@finalcutflooring.com
                  </a>
                </div>
              </div>
            </div>
            <p class="text-blue-200 mb-12">
              We're here to help with all your flooring needs. Contact us today for expert service and quality craftsmanship.
            </p>

            <!-- Contact Form -->
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-500 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Your name"
                >
              </div>

              <div>
                <label class="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-500 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Your email"
                >
              </div>

              <div>
                <label class="block text-white font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-500 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Your phone number"
                >
              </div>

              <div>
                <label class="block text-white font-medium mb-2">Project Type</label>
                <select
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-500 text-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                >
                  <option value="" class="bg-blue-600">Select a project type</option>
                  <option v-for="type in projectTypes" :key="type.value" :value="type.value" class="bg-blue-600">
                    {{ type.label }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-white font-medium mb-2">Project Details</label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-500 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                  :class="{ 'opacity-75 cursor-not-allowed': submitting }"
                >
                  {{ submitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const submitting = ref(false)
const showNotification = ref(false)
const notificationMessage = ref('')
const notificationType = ref('success')

const form = ref({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
})

const projectTypes = [
  { value: 'hardwood', label: 'Hardwood Flooring' },
  { value: 'tile', label: 'Tile Installation' },
  { value: 'restoration', label: 'Floor Restoration' },
  { value: 'other', label: 'Other' }
]

function showTemporaryNotification(message, type = 'success') {
  notificationMessage.value = message
  notificationType.value = type
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 5000)
}

async function submitForm() {
  submitting.value = true
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form.value),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    form.value = {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    }
    
    showTemporaryNotification('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    console.error('Failed to send message:', error)
    showTemporaryNotification('There was an error sending your message. Please try again or contact us directly.', 'error')
  } finally {
    submitting.value = false
  }
}
</script> 