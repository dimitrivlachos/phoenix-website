<template>
  <div>
    <!-- First Section with Image Background -->
    <section class="relative bg-cover bg-center h-80 md:h-96" style="background-image: url('/UnitsWithVan.png');">
      <!-- Transparent Grey Overlay -->
      <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
      
      <!-- Centered Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-4xl md:text-6xl text-white font-bold">Phoenix Storage Solutions</h1>
      </div>
    </section>

    <!-- Second Section with White Background -->
    <section class="bg-white py-16 text-center">
      <div class="max-w-3xl mx-auto">
        <!-- Text -->
        <p class="text-lg md:text-xl text-gray-800">
          Your text content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit dolor in dui malesuada bibendum.
        </p>
        <!-- Add more text as needed -->
      </div>
    </section>
  </div>
</template>