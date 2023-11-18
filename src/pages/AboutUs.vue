<template>
    <div class="min-h-[75vh]">
        <section class="md:p-[5rem_0_0] w-full h-max p-[0_0_5rem]">
            <div class="h-max">
                <div class="flex justify-center items-stretch content-center relative w-full">
                    <div class="hidden lg:flex lg:flex-col lg:justify-between fixed w-[20%] items-center min-h-[40rem] max-h-[50rem] left-4">
                        <img src="../assets/images/apple_icon.png" alt="Apple icon">
                        <img src="../assets/images/bright_icon.png" alt="Bright icon">
                    </div>

                    <div class="lg:w-[50%] w-[90%]">
                        <h1 class="block text-[30px] m-[20px_0_30px] md:text-[50px] md:m-[0_0_40px] font-bold">Over ons</h1>
                        <h4>Dit is een winactie van hoofdsponsor Direct-Besparen.nl, uitgevoerd door Your-Leads.</h4>
                        <div>
                            <address>
                                <div class="pb-[5px]">Your-Leads</div>
                                <div class="pb-[5px]">Ruimtevaart 22</div>
                                <div class="pb-[5px]">3824 MX Amersfoort</div>
                                <div class="pb-[5px]"><a class="text-[#1D90F5]" href="mailto:info@your-leads.com">info@your-leads.com</a></div>
                                <div>KVK: 74741993</div>
                            </address>
                        </div>
                        <Button color="#1D90F5" font_color="white" @click="$router.go(-1)">
                            Terug
                        </Button>
                    </div>

                    <div class="hidden lg:flex lg:flex-col lg:justify-between items-center fixed w-[20%] right-4 min-h-[40rem] max-h-[50rem]">
                        <img src="../assets/images/load_icon.png" alt="Load Icon">
                        <img src="../assets/images/flash_icon.png" alt="Flash Icon">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
</script>

<style scoped>
h4 {
    font-size: 15px;
    margin-bottom: 25px;
    font-weight: 700;
}

p {
    font-size: 14px;
    margin-bottom: 20px;
}

span {
    display: block;
    margin: 0px 0px 20px 15px;
}

address {
    font-size: 14px;
    font-style: normal;
    margin: 0 0 1.5rem;
}

@media (min-width: 768px) {
    h4 {
        font-size: 18px;
    }

    p {
        font-size: 16px;
    }

    address {
        font-size: 16px;
    }
}
</style>