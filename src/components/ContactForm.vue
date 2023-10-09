<template>
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-screen-md aspect-video mx-auto my-4">
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

            <!-- Success Message -->
            <div v-if="success" class="text-green-500 mt-4 text-center">
                Your message has been sent successfully!
            </div>
        </form>
    </div>
</template>
  
<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
            success: false,
        };
    },
    methods: {
        async submitForm() {
            try {
                this.success = false; // Reset success status
                // Send email using EmailJS
                const templateParams = {
                    from_name: this.formData.name,
                    email: this.formData.email,
                    message: this.formData.message,
                };

                const response = await emailjs.send("service_wzayo9i", "template_4m718bc", templateParams, "pn1xiO4orjLlEiZAD");
                console.log('Email sent successfully:', response);
                this.success = true;

                // Clear the form after successful submission
                this.formData.name = '';
                this.formData.email = '';
                this.formData.message = '';
            } catch (error) {
                console.error('Error sending email:', error);
            }
        },
    },
};
</script>
