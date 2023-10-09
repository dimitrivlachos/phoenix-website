<template>
    <div>
        <!-- Section 1: Map of Location -->
        <section class="relative bg-cover bg-center p-4" :style="{ backgroundImage: 'url(' + image + ')' }">
            <div class="absolute inset-0 bg-gray-800 opacity-50 z-0"></div>
            <h1 class="text-3xl md:text-5xl text-white z-10 relative text-center">Where to find us:</h1>
            <p class="text-white text-3xl underline z-10 relative text-center pt-4 font-bold">Blue Hills, Midrand</p>
            <p class="text-white z-10 relative text-center pb-4">Contact us to find out more.</p>
            <!-- Flex container to center the map -->
            <div class="flex items-center justify-center z-10 relative w-full max-w-screen-md aspect-video mx-auto">
                    <!-- Google Maps Embed -->
                    <iframe class="border-4 border-gray-800 rounded-md w-full h-full"
                        src="https://www.google.com/maps/embed/v1/view?zoom=14&center=-25.9474%2C28.0918&key=AIzaSyByhNS7f8tv2TpDukN0leRmlvPOtBdM-f0"
                        style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>

        <!-- Section 2: Contact Form -->
        <section class="bg-gray-200 shadow-md rounded-md">
            <div class="flex items-center justify-center"> <!-- Center the contact form -->
                <ContactForm />
            </div>
        </section>

        <!-- Section 3: Contact Details -->
        <section class="bg-white p-4">
        <div class="text-center">
          <h2 class="text-2xl font-semibold mb-4">Contact Details</h2>
          <!-- List of contact details using v-for loop -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(person, index) in people" :key="index" class="bg-white text-black border-solid border-2 p-4 rounded-md">
              <strong>Name:</strong> {{ person.name }}<br />
              <strong>Phone:</strong> {{ person.number }}<br />
              <strong>Email:</strong> {{ person.email }}
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
  
<script>
import image from "@/assets/UnitsWithVan.png";
import ContactForm from "@/components/ContactForm.vue";

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            image: image,
            people: [
                {
                    name: 'Scott McNeilage',
                    number: '+26 (0)377 759 3979 (Zimbabwe)',
                    email: 'office@phoenix6018.co.za',
                },
                {
                    name: 'Angelo Vlachos',
                    number: '+27 (0)82 770 8949 (South Africa)',
                    email: 'office@phoenix6018.co.za',
                },
                {
                    name: 'Angela Vlachos',
                    number: '+27 (0)82 574 6516 (South Africa)',
                    email: 'office@phoenix6018.co.za',
                }
                // Add more people objects as needed
            ],
        };
    },
};
</script>
  