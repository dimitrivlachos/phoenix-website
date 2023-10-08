<template>
    <div
        class="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <!-- Modal Overlay -->
        <div class="fixed inset-0 bg-gray-600 opacity-70" @click="closeModal"></div>

        <!-- Modal Content -->
        <div class="relative w-auto max-w-3xl mx-auto my-6">
            <!-- Modal Card -->
            <div
                class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <!-- Header -->
                <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 class="text-2xl font-semibold">
                        Image Preview
                    </h3>
                    <!-- Close Button -->
                    <button @click="closeModal"
                        class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span
                            class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                    </button>
                </div>
                <!-- Body -->
                <div class="relative p-6 flex-auto">
                    <img :src="image" alt="Gallery Image" class="w-full h-auto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>