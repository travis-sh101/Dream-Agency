<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const isOpen = ref(false)
const formData = ref({
  fullName: '',
  email: '',
  message: '',
})

function openDialog() {
  isOpen.value = true
}

function closeDialog() {
  isOpen.value = false
}

function handleSubmit() {
  console.log('Form submitted:', formData.value)
  // Handle form submission here
  closeDialog()
}
</script>

<template>
  <div class="min-h-screen flex flex-col gap-40 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div class="max-w-7xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center">
            <!-- Left Content -->
            <div class="lg:w-1/2">
              <div class="text-4xl lg:mt-32 lg:text-5xl text-[#331B3B]">
                <span class="text-4xl md:text-5xl lg:text-6xl font-georgia-bold text-[#331B3B]">
                  We Help you<br
                /></span>

                <span> to grow your </span>
                <div class="relative w-fit">
                  <span class="z-10 relative">Business</span>
                  <span class="absolute left-0 bottom-0 w-full h-8 bg-[#FBBF24] z-0"></span>
                </div>
              </div>
              <p class="text-lg max-w-md my-10">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen
                book.
              </p>
              <button class="text-white px-8 py-3 bg-[#331b3b] rounded-lg font-semibold">
                GET STARTED
              </button>
            </div>

            <!-- Right Content - Hero Image -->
            <div class="relative flex items-center justify-center lg:w-1/2">
              <img
                src="/src/assets/Yellow.svg"
                alt="Yellow background shape"
                class="absolute left-[100px] z-0 w-[500px] max-w-xl"
              />
              <img
                src="/src/assets/Ellipse.svg"
                alt="Ellipse shape"
                class="absolute z-5 left-[40px] bottom-[-40px] md:w-[380px] max-w-xl"
              />
              <img
                src="/src/assets/amber.svg"
                alt="background"
                class="absolute z-10 max-w-lg w-80"
              />
              <img
                src="/src/assets/Mask.png"
                alt="Business professionals"
                class="relative z-20 w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="relative top-20 py-40">
        <div
          class="absolute left-0 top-0 rounded-tr-full bg-[#E0F2FE] z-10 h-full w-full object-contain"
        ></div>
        <img
          src="@/assets/Ellipse.svg"
          alt="ellipse"
          class="absolute left-2/3 bottom-[-80px] z-5"
        />
        <div class="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-16 text-center">
            <div class="mb-4 text-3xl font-georgia-bold flex-col flex text-[#331B3B] md:text-4xl">
              What We Do
              <div class="flex mx-auto">
                <span>For Your </span>
                <div class="relative ml-2 w-fit">
                  <span class="z-10 relative">Business </span
                  ><span class="absolute left-0 bottom-1 w-5/6 h-2 bg-[#FBBF24] z-0"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-8 justify-center">
            <!-- Website Design -->
            <div class="w-full lg:w-80 flex flex-col rounded-lg bg-white p-4 shadow-sm">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-pink-100">
                <img src="/src/assets/website-icon.svg" alt="Website Design" class="w-8 h-8" />
              </div>
              <h3 class="mb-2 text-sm font-arial-bold font-semibold text-[#331B3B]">
                WEBSITE DESIGN
              </h3>
              <p class="text-sm text-gray-600">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            <!-- Web Development -->
            <div class="w-full lg:w-80 flex flex-col rounded-lg bg-white p-4 shadow-sm">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
                <img src="/src/assets/computer-icon.svg" alt="Web Development" class="w-16 h-16" />
              </div>
              <h3 class="mb-2 text-sm font-arial-bold font-semibold text-[#331B3B]">
                WEB DEVELOPMENT
              </h3>
              <p class="text-sm text-gray-600">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            <!-- Mobile App Development -->
            <div class="w-full lg:w-80 flex flex-col items-start rounded-lg bg-white p-4">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[#BAE6FD]">
                <img
                  src="/src/assets/mobile-phone-icon.svg"
                  alt="Mobile App Development"
                  class="w-12 h-12"
                />
              </div>
              <h3 class="mb-2 text-sm font-arial-bold font-semibold text-[#331B3B]">
                MOBILE APP DEVELOPMENT
              </h3>
              <p class="text-sm text-gray-600">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            <!-- Marketing -->
            <div class="w-full lg:w-80 flex flex-col rounded-lg bg-white p-4 shadow-sm">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                <img src="/src/assets/rocket-icon.svg" alt="Marketing" class="w-12 h-12" />
              </div>
              <h3 class="mb-2 text-sm font-arial-bold font-semibold text-[#331B3B]">MARKETING</h3>
              <p class="text-sm text-gray-600">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="bg-white lg:mt-2 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <!-- Left Content - About Image -->
            <div class="relative lg:w-1/2">
              <div class="relative z-10">
                <!-- Circular image container -->
                <div class="relative mx-auto">
                  <img
                    src="/src/assets/Graphic1.png"
                    alt="Our team"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="space-y-6 gap-4 flex flex-col text-[#331B3B] lg:w-1/2">
              <div>
                <h2 class="text-3xl md:text-4xl font-arial-bold mb-2">About Us</h2>
                <div class="text-2xl font-semibold mb-6 flex">
                  <span>Fake or </span>
                  <div class="ml-2 relative">
                    <span class="z-10 relative"> Real </span>
                    <span class="absolute left-0 bottom-0 w-full h-3 bg-[#FBBF24] z-0"></span>
                  </div>
                </div>
              </div>

              <div class="space-y-10">
                <p class="">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <p class="">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>

              <button class="bg-[#331B3B] text-white px-8 w-fit py-3 rounded-lg font-semibold">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer--->
    <div class="flex-col flex">
      <div class="bg-[#331B3B] text-white py-16 rounded-tr-full">
        <div class="max-w-7xl ml-80 px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="space-y-4 md:w-1/2">
              <h3 class="text-2xl font-georgia-bold">Dream Agency</h3>
              <p class="text-gray-300 max-w-md">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries.
              </p>
            </div>

            <div class="md:text-right flex flex-col items-start gap-2 font-semibold md:w-1/2">
              <button class="text-xl capitalize font-semibold mb-4">GET IN TOUCH</button>
              <button
                @click="openDialog"
                class="bg-[#FBBF24] text-[#331B3B] font-arial-bold px-8 py-3 rounded-lg"
              >
                REQUEST MORE INFORMATION
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dialog -->
      <Dialog :open="isOpen" @close="closeDialog" class="relative z-50">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/25" aria-hidden="true" />

        <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
          <!-- Dialog panel -->
          <DialogPanel class="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
            <DialogTitle class="text-2xl font-arial-bold text-[#331B3B] mb-2"
              >GET IN TOUCH</DialogTitle
            >

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="flex w-full gap-4">
                <div class="w-full">
                  <label for="fullName" class="block w-full text-sm font-medium text-gray-700 mb-1">
                    FULL NAME
                  </label>
                  <input
                    id="fullName"
                    v-model="formData.fullName"
                    type="text"
                    required
                    class="w-full py-2 border border-[#331B3B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#331B3B] focus:border-transparent"
                  />
                </div>

                <div class="w-full">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full grow px-2 py-2 border border-[#331B3B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#331B3B] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  required
                  class="w-full px-3 py-2 border border-[#331B3B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#331B3B] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div class="flex pt-4">
                <button
                  type="button"
                  @click="closeDialog"
                  class="font-arial bg-[#331B3B] text-white py-2 px-6 rounded-md font-semibold hover:bg-[#2a1530] transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  </div>
</template>
