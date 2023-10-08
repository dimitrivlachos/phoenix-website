<template>
  <div>
    <!-- First Section with Image Background -->
    <section class="relative bg-cover bg-center h-80 md:h-96" :style="{ backgroundImage: 'url(' + image + ')' }">
      <!-- Transparent Grey Overlay -->
      <div class="absolute inset-0 bg-gray-800 opacity-50"></div>

      <!-- Centered Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-3xl text-center md:text-5xl text-white font-bold uppercase">Phoenix Storage Solutions</h1>
      </div>
    </section>

    <!-- Second Section with White Background -->
    <section class="bg-white text-center">
      <section class="container mx-auto mt-8">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold">Why Choose Phoenix?</h2>
            <p class="mt-4 text-gray-700">
              We provide a safe, secure, and convenient storage solutions in the heart of Blue Hills, Midrand.
            </p>
          </div>

          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold">Discover Your Perfect Storage Solution</h2>
            <p class="mt-4 text-gray-700">
              Spacious and clean, our storage units are designed to accommodate all your storage needs. Whether it's
              household goods, business inventory, or furniture, we have the space for you!
            </p>

          </div>
        </div>
      </section>
      <div class="mt-6">
        <a @click="downloadLegal" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Download Rental Agreement
        </a>
      </div>
    </section>

    <hr class="my-8">    

    <!-- Third Section for image gallery -->
    <section class="bg-white text-center">
      <h2 class="text-2xl font-semibold">Gallery</h2>
      <div class="container mx-auto mt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Use v-for to loop through imageUrls -->
          <div v-for="(imageUrl, index) in imageUrls" :key="index">
            <div class="border rounded-lg p-2 ease-in-out hover:scale-105 cursor-pointer">
              <img :src="imageUrl" alt="Gallery Image" class="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import image from "@/assets/UnitsWithVan.png"

export default {
  data: function () {
    return {
      image: image,
      agreement: 'Phoenix6018 Rental Agreement.pdf',
      imageUrls: []
    }
  },
  computed: {
    agreementUrl: function () {
      return window.location.origin + '/files/' + this.agreement;
    }
  },
  methods: {
    downloadLegal() {
      const url = this.agreementUrl;
      window.open(url, '_blank');
    }
  },
  mounted() {
    // Get all images from the gallery folder
    const images = require.context('@/assets/gallery', false, /\.png$/);
    // Loop through all images and add them to the imageUrls array
    images.keys().forEach(key => {
      this.imageUrls.push(images(key));
    });
  }
}
</script>