<template>
  <div>
    <image-modal :image="selectedImage" v-if="selectedImage" @close="selectedImage = null" />

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
              We provide a safe, secure, and convenient storage solution in the heart of Blue Hills, Midrand.
            </p>
            <p class="mt-4 text-gray-700">
              Spacious and clean, our storage units are designed to accommodate all your storage needs. Whether it's
              household goods, business inventory, or furniture, we have the space for you!
            </p>
          </div>

          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold">Discover Your Perfect Storage Solution</h2>
            <p class="mt-4 text-gray-700">
              Our units are 4m x 4m in size, with a 2m high ceiling. This means you get 16m<sup>2</sup> of storage space.
            </p>
            <br>
            <h2 class="text-2xl font-semibold">Follow Us!</h2>
            <!-- Instagram Logo -->
            <div class="flex justify-center mt-4">
              <div class="border-dashed border-2 border-gray-500 rounded-xl hover:bg-gray-200 cursor-pointer" @click="openUrl(insta_url)">
              <!-- Include the SVG here -->
              <div class="flex items-center my-1 mx-2">
              <Instagram color="#374151" width="40" height="40" />
              <a href="https://www.instagram.com/phoenix_6018_storage/" target="_blank"
                class="ml-4 text-blue-500 hover:text-blue-600">
                @phoenix_6018_storage
              </a>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mt-6">
        <a @click="openUrl(this.agreementUrl)" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer">
          Download Rental Agreement
        </a>
      </div>
    </section>

    <hr class="my-8">

    <!-- Third Section for image gallery -->
    <section class="bg-white text-center">
      <h2 class="text-2xl font-semibold">Gallery</h2>
      <div class="container mx-auto mt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4" v-if="imageUrls.length > 0">
          <!-- Use v-for to loop through imageUrls -->
          <div v-for="(imageUrl, index) in imageUrls" :key="index" @click="openModal(imageUrl)">
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
import ImageModal from "@/components/ImageModal.vue"
import Instagram from "@/components/svg/Instagram.vue"

export default {
  components: {
    ImageModal,
    Instagram,
  },
  data: function () {
    return {
      image: image,
      agreement: 'Phoenix6018 Rental Agreement.pdf',
      insta_url: 'https://www.instagram.com/phoenix_6018_storage/',
      imageUrls: [],
      selectedImage: null,
      isModalOpen: false,
    }
  },
  computed: {
    agreementUrl: function () {
      return window.location.origin + '/phoenix-website/files/' + this.agreement;
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    },
    openModal(imageUrl) {
      this.selectedImage = imageUrl;
      this.isModalOpen = true;
    },
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