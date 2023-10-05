<template>
        <div class="bg-white p-8 shadow-md rounded-md w-full md:w-1/2 my-4">
            <h1 class="text-2xl font-semibold mb-4">Contact Us</h1>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="mt-0"> <!-- Remove top margin -->
                <!-- Name Input -->
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-semibold">Name</label>
                    <input type="text" id="name" v-model="formData.name"
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Your Name" required />
                </div>

                <!-- Email Input -->
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-semibold">Email</label>
                    <input type="email" id="email" v-model="formData.email"
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Your Email" required />
                </div>

                <!-- Message Textarea -->
                <div class="mb-4">
                    <label for="message" class="block text-gray-700 font-semibold">Message</label>
                    <textarea id="message" v-model="formData.message"
                        class="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
                        placeholder="Your Message" rows="4" required></textarea>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                    <button type="submit"
                        class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here (e.g., send data to a server)
            console.log('Form Data:', this.formData);
        },
    },
};
</script>
