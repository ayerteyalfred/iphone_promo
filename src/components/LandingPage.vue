<template>
    <main class="flex flex-col">
        <PageHeader />

        <div class="w-4/5 flex sm:flex-row-reverse justify-between items-center content-center m-auto max-w-screen-xl mx-auto mt-12 p-4 md:p-0">
            <div>
                <img class="hidden md:block" src="../assets/images/iphone14.png" alt="">
            </div>
            <div class="text-center md:text-left md:px-5 md:flex md:flex-col">
                <img class="hidden md:flex h-[200px] w-[50%]" src="../assets/images/besparen-icon.png" alt="besparen Logo">
                <h2 class="text-[25px] font-bold bg-gradient-to-r from-teal-400 to-blue-500 via-indigo-500 via-fuchsia-500 to-red-500 text-transparent bg-clip-text">Heb je geluk?</h2>
                <h1 class="font-bold text-[30px] lg:text-[55px] mb-[20px] w-[100%] lg:w-[80%]">Win de nieuwste iPhone 14</h1>
                <p class="text-[16px] mb-[20px] lg:w-[65%]">Vul je persoonlijke gegevens in en maak kans op de nieuwste iPhone 14 ter waarde van ruim €1.000! <br/>Mede mogelijk gemaakt door Direct-Besparen.nl.</p>
                <a href="" >
                    <button class="bg-[#1D90F5] text-white p-[8px_8px] rounded-[2.8rem] text-[16px] justify-center content-center w-full md:w-3/5 lg:w-[30%] cursor-pointer">Ja ik doe mee</button>
                </a>
                <p class="text-[14px] mt-[16px] text-[#FB7185] font-semibold">Slechts één deelname per persoon mogelijk!</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<style scoped>

</style>