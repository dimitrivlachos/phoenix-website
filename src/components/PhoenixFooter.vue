<template>
    <div class="pb-1">
        <footer class="bg-white rounded-lg shadow dark:bg-gray-800 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex items-center mb-4 sm:mb-0">
                        <img src="@/assets/Phoenix_logo.png" class="h-8 mr-3" alt="Phoenix" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Phoenix</span>
                    </div>
                    <ul
                        class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <RouterLink :to="{ name: 'home' }" class="mr-4 hover:underline md:mr-6 ">Home</RouterLink>
                        </li>
                        <li>
                            <a :href="agreementUrl" class="mr-4 hover:underline md:mr-6 cursor-pointer">Rental Agreement</a>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contact' }" class="hover:underline">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <RouterLink
                        :to="{ name: 'home' }" class="hover:underline">Phoenix6018</RouterLink>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
</template>

<script>
import RouterLink from 'vue-router'

export default {
    components: {
        RouterLink,
    },
    data: function () {
        return {
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