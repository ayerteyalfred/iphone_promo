<template>
    
        <button :style="{backgroundColor: color, color: font_color}" class="p-[8px_8px] font-medium rounded-[2.8rem] text-[16px] justify-center content-center w-full md:w-[30%] lg:w-[20%] cursor-pointer">
            <slot />
        </button>
    
</template>

<script setup>
const {color, font_color} = defineProps(["color", "font_color"])
</script>

<style scoped>

</style>