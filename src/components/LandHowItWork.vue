<template>
    <div id="hoe_werkt_het" class="md:w-4/5 w-[90%] transition-all duration-300 ease-in-out mx-auto mt-20">
        <section class="flex flex-col gap-y-10 md:gap-y-20 bg-[#F5F5F7] rounded-3xl mx-auto p-[30px] md:p-[80px]">
            <div class="">
                <h2 class="md:text-[48px] text-[24px] font-bold md:text-center text-left">Hoe werkt het</h2>
                <p class="md:text-[16px] text-[12px] md:text-center lg:w-[40%] m-auto mt-3">In slechts 3 eenvoudige stappen maak jij kans op deze te gekke prijs!</p>
            </div>
    
            <div class="flex md:flex-row flex-col md:justify-center md:items-center gap-x-4">
                <aside class="flex flex-row md:flex-col items-center">
                    <img src="../assets/images/Doe nu mee.png" alt="" class="">
                    <span>Klok op de knop</span>
                </aside>
    
                <img class="hidden md:block" src="../assets/images/line.png" alt="line">
    
                <aside class="flex flex-row md:flex-col items-center">
                    <img class="" src="../assets/images/form.png" alt="">
                    <span>Vul je gegevens in</span>
                </aside>
                
                <img class="hidden md:block" src="../assets/images/line.png" alt="line">
    
                <aside class="flex flex-row md:flex-col items-center">
                    <img src="../assets/images/Maak kans.png" alt="">
                    <span>Maak kans</span>
                </aside>
            </div>
        </section>

        <section class="grid grid-rows-2 md:grid-cols-3 gap-4 mb-28 m-auto mt-20">
                <img src="../assets/images/ceramic.png" alt="" class="col-span-2 w-[100%] md:order-2 rounded-3xl">
                <img src="../assets/images/meer.png" alt="" class="w-[100%] md:order-1 rounded-3xl">
                <img src="../assets/images/vanaf.png" alt="" class="w-[100%] md:order-4 rounded-3xl">
                <img src="../assets/images/een.png" alt="" class="col-span-2 w-[100%] md:order-3 rounded-3xl">
        </section>

        <section>
            <div class="flex md:flex-row flex-col border-b-[0.02px] border-[#919191] justify-between md:p-[30px] py-5">
                <h3 class="text-[23px] font-bold">De organisator</h3>
                <p class="md:text-[16px] text-[14px] md:w-[60%]">Dit is een winactie van hoofdsponsor Direct-Besparen.nl, uitgevoerd door Your-Leads. Your-Leads voert acties uit waarbij de deelnemers kans maken op hele mooie prijzen.</p>
            </div>
            <div class="flex md:flex-row flex-col border-b-[0.02px] border-[#919191] justify-between md:p-[30px] py-5">
                <h3 class="text-[23px] font-bold">Direct-Besparen.nl</h3>
                <p class="md:text-[16px] md:w-[60%] text-[14px]">Direct-Besparen.nl zal u maximaal 4 maal per kalenderjaar contacteren met een interessant aanbod aangaande energie.</p>
            </div>
            <div class="flex md:flex-row flex-col border-b-[0.02px] border-[#919191] justify-between md:p-[30px] py-5">
                <h3 class="text-[23px] font-bold">De voorwaarden</h3>
                <p class="md:text-[16px] md:w-[60%] text-[14px]">Door deel te nemen aan onze actie ga je ermee akkoord dat Direct-Besparen.nl je hiervoor mogen benaderen. Op de volgende pagina krijg je meer informatie over de actievoorwaarden, welke informatie wij verzamelen, opslaan en delen.</p>
            </div>
        </section>

        <section class="text-center mt-20 bg-[#F5F5F7] rounded-3xl p-[60px]">
            <h1 class="text-[25px] md:text-[40px] font-bold mb-[15px] text-black">Ben je klaar om te winnen?</h1>
            <p class="text-[16px] mb-[20px] md:w-[70%] max-w-[450px] m-auto">Klik op de knop, vul je gegevens in en maak kans. Succes!</p>
            <Button color="#1D90F5" font_color="white">
                <a href="">Ja ik doe mee</a>
            </Button>
        </section>

        <div>
            <img src="../assets/images/besparen-icon.png" class="max-w-[100%] h-[200px]" alt="">
        </div>

        <div>
            <p class="text-[12px] md:text-[14px] text-[#919191] mb-[20px]">Dit is een winactie van hoofdsponsor Direct-Besparen.nl, uitgevoerd door Your-Leads. Door deel te nemen, ga je ermee akkoord dat Direct-Besparen.nl je mag benaderen met aanbiedingen van hun producten en/of diensten.</p>
            <p class="text-[12px] md:text-[14px] text-[#919191] mb-[20px]">De te winnen prijs is een iPhone 14 (6,1-inch display) met 128GB opslagruimte in de kleur 'moonlight/middernacht'. De prijs heeft een totale waarde van €1.019,- (incl. BTW). Let op: op deze prijs is kansspelbelasting van toepassing. De kansspelbelasting moet door de winnaar worden betaald.</p>
            <p class="text-[12px] md:text-[14px] text-[#919191] mb-[20px]">Jouw gegevens worden vertrouwelijk behandeld volgens de Algemene Verordening Gegevensbescherming (AVG). Deze winactie loopt van 01.05.2023 tot en met 31.04.2024.</p>

            <div class="md:text-[14px] text-[12px] font-normal flex md:flex-row flex-col justify-between border-t-[0.02px] border-[#919191] py-8">
                <p>©2023 Your-Leads</p>

                <ul class="flex justify-between items-center gap-x-3">
                    <li><router-link to="/terms-and-conditions">Actievoorwaarden</router-link></li>
                    <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                    <li><router-link to="/about-us">Over ons</router-link></li>

                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import Button from './Button.vue'
</script>

<style scoped>

</style>