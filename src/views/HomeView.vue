<template>
  <div>
    <!-- First Section with Image Background -->
    <section class="relative bg-cover bg-center h-80 md:h-96" :style="{ backgroundImage: 'url(' + image + ')' }">
      <!-- Transparent Grey Overlay -->
      <div class="absolute inset-0 bg-gray-800 opacity-50"></div>

      <!-- Centered Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-3xl md:text-5xl text-white font-bold uppercase">Phoenix Storage Solutions</h1>
      </div>
    </section>

    <!-- Second Section with White Background -->
    <section class="bg-white text-center">
      <section class="container mx-auto mt-8">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold">Why Choose Phoenix Storage Solutions?</h2>
            <p class="mt-4 text-gray-700">
              Just like a Phoenix, we are breathing new life into storage solutions. Here at Phoenix, we understand
              that your possessions hold sentimental and practical value.
              That's why we offer a diverse range of storage options tailored to your unique requirements.
              Whether it's your cherished furniture seeking refuge or your trusty vehicle in need of a safe haven,
              we've got you covered.
            </p>
            <p class="mt-4 text-gray-700">
              We're not just a storage facility; we're your partner in safeguarding what matters most to you.
              Our facility and attentive staff ensure your items stay in pristine condition. You can trust us to keep your
              treasures safe and sound, just like a phoenix guarding its nest.
            </p>
          </div>

          <div class="md:w-1/2 p-6">
            <h2 class="text-2xl font-semibold">Discover Your Perfect Storage Solution</h2>
            <p class="mt-4 text-gray-700">
              Explore our range of storage options designed to cater to every need, big or small. From spacious units
              for household furniture to secure garages for your vehicles, Phoenix Storage Solutions is your one-stop
              destination.
            </p>

            <br />
            <div class="mt-6">
              <a :href="agreementUrl"
                class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Download Rental Agreement
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="bg-gray-800 text-white py-8 absolute bottom-0 w-full">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold text-center">
            <RouterLink to="/contact" class="hover:text-gray-400">Contact Us Today</RouterLink>
          </h2>
          <p class="mt-4 text-center">
            Ready to experience storage solutions that rise above the ordinary? Contact us today to learn more about our
            offerings and how we can help you find the perfect storage solution. Embrace the transformation and let your
            belongings find their own phoenix nest with us.
          </p>
        </div>
      </section> -->
    </section>
  </div>
</template>

<script>
  import image from "@/assets/UnitsWithVan.png"
    
    export default {
        data: function () {
            return {
                image: image,
                agreement: 'Phoenix6018 Rental Agreement.pdf'
            }
        },
        computed: {
            agreementUrl: function () {
                return window.location.origin + '/files/' + this.agreement;
            }
        }
    }
</script>