<template>
    <div>
        <button :style="{backgroundColor: color, color: font_color}" class="p-[8px_8px] rounded-[2.8rem] text-[16px] justify-center content-center w-full md:w-3/5 lg:w-1/4 cursor-pointer">
            <slot />
        </button>
    </div>
</template>

<script setup>
const {color, font_color} = defineProps(["color", "font_color"])
</script>

<style scoped>

</style>