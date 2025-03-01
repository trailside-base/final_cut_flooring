<script setup>
import logoImage from '~/assets/images/logo.png'
</script>

<template>
  <img 
    :src="`${$config.public.baseURL}/images/logo.png`" 
    alt="Final Cut Flooring" 
    class="h-20 md:h-32 w-auto object-contain min-h-[5rem] md:min-h-[8rem]"
  >
</template> 