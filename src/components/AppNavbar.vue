<template>
  <nav class="bg-transparent w-full sticky top-0 z-50">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20 py-4">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="text-2xl font-georgia-bold text-custom-dark-purple">
            Dream Agency
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center">
            <RouterLink
              to="/"
              class="text-custom-dark-purple px-3 py-2 text-base font-medium relative"
              :class="{ 'font-semibold active-link': $route.name === 'home' }"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              class="text-custom-dark-purple px-3 py-2 text-base font-medium relative"
              :class="{ 'font-semibold active-link': $route.name === 'about' }"
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/services"
              class="text-custom-dark-purple px-3 py-2 text-base font-medium relative"
              :class="{ 'font-semibold active-link': $route.name === 'services' }"
            >
              Services
            </RouterLink>
            <RouterLink
              to="/contact"
              class="text-custom-dark-purple px-3 py-2 text-base font-medium relative"
              :class="{ 'font-semibold active-link': $route.name === 'contact' }"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-custom-dark-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <svg
              class="h-6 w-6"
              :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden" :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }">
      <div class="px-2 pt-2 pb-3 flex space-y-1 sm:px-3 bg-custom-light-yellow border-t">
        <RouterLink
          to="/"
          @click="closeMobileMenu"
          class="text-custom-dark-purple block px-3 py-2 text-base font-medium"
          :class="{ 'font-semibold': $route.name === 'home' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          @click="closeMobileMenu"
          class="text-custom-dark-purple block px-3 py-2 text-base font-medium"
          :class="{ 'font-semibold': $route.name === 'about' }"
        >
          About Us
        </RouterLink>
        <RouterLink
          to="/services"
          @click="closeMobileMenu"
          class="text-custom-dark-purple block px-3 py-2 text-base font-medium"
          :class="{ 'font-semibold': $route.name === 'services' }"
        >
          Services
        </RouterLink>
        <RouterLink
          to="/contact"
          @click="closeMobileMenu"
          class="text-custom-dark-purple block px-3 py-2 text-base font-medium"
          :class="{ 'font-semibold': $route.name === 'contact' }"
        >
          Contact Us
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Override Vue Router's default active link styling completely */
.router-link-active,
.router-link-exact-active {
  color: #331b3b !important; /* custom-dark-purple */
}

/* Remove any default link styling and force colors */
a {
  text-decoration: none !important;
  color: #331b3b !important; /* custom-dark-purple */
}

/* Specific styling for navigation links */
nav a {
  color: #331b3b !important; /* custom-dark-purple */
}

/* Active navigation links */
nav a.router-link-active,
nav a.router-link-exact-active {
  color: #331b3b !important; /* custom-dark-purple */
  font-weight: 600 !important;
}

/* Disable all hover effects on links */
a:hover,
nav a:hover {
  color: #331b3b !important; /* custom-dark-purple */
  text-decoration: none !important;
  background-color: transparent !important;
}

/* Disable hover effects on router links */
.router-link-active:hover,
.router-link-exact-active:hover {
  color: #331b3b !important; /* custom-dark-purple */
}

/* Active link underline */
.active-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 30%;
  transform: translateX(-50%);
  width: 24px;
  height: 4px;
  background-color: #fbbf24;
  border-radius: 1px;
}
</style>
