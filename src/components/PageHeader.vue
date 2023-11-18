<template>
    <header class="w-4/5 transition-all duration-300 ease-in-out mx-auto transpare" :class="{ 'fixed-navbar': isNavbarFixed }" ref="navbar">
        <nav class="flex justify-between items-center content-center py-5 px-[19.2px] w-full max-w-screen-xl mx-auto">
            <div>
            <ul class="hidden md:flex items-center gap-[2vw] text-[16px]  text-[#0A0901]">
                <li>
                    <a class="hover:text-blue-300 transition duration-300 ease-in-out" href="#wat_kan_ik_winnen">Wat kan ik winnen</a>
                </li>
                <li>
                    <a class="hover:text-blue-300 transition duration-300 ease-in-out" href="#hoe_werkt_het">Hoe werkt het</a>
                </li>
                <li>
                    <router-link class="hover:text-blue-300 transition duration-300 ease-in-out" to="/terms-and-conditions">Voorwaarden</router-link>
                </li>
            </ul>
            </div>
            <div>
                <a class="text-[16px] font-medium text-#0A0901 bg-[#F5F5F7] hover:bg-[#319AF6] hover:text-white rounded-[1.8rem] p-[8px_16px] md:p-[16px_32px] cursor-pointer transition duration-300 ease-in-out" :class="{'button-bg': isNavbarFixed}" href="">Ja ik doe mee</a>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue';

const isNavbarFixed = ref(false);
const instance = getCurrentInstance();
let lastScrollTop = 0;

const handleScroll = () => {
  const navbar = instance.refs.navbar;
  if (navbar) {
    const scrollPosition = window.scrollY;
    isNavbarFixed.value = scrollPosition < lastScrollTop && scrollPosition > 0;
    lastScrollTop = scrollPosition;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add styles for the fixed navbar */
.fixed-navbar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, .64);
  backdrop-filter: blur(16px);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow */
}

.button-bg {
    background-color:#319AF6;
}

/* You can customize the styles further based on your design */
</style>
