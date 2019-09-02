<template>
    <div class="only-miner-section">
        <picture>
            <source type="image/webp"  srcset="img/miner-bg.webp">
            <img src="img/miner-bg.jpg" alt="Acryl miner black block">
        </picture>
        <div class="container small-content">
            <div class="row">
                <div class="col-lg-12 node-mobile">
                    <picture>
                        <source type="image/webp" srcset="img/one-miner.webp">
                        <img src="img/one-miner.png" alt="Miner image">
                    </picture>
                </div>
                <div class="col-lg-7">

                    <span class="miner-title" id="platform" v-if="this.$i18n.locale == 'ru'">{{ $t('miner.title') }}<br> с  <span>ACRYL NODE</span></span>
                    <span class="miner-title" id="platform" v-else>{{ $t('miner.title') }}<br><span>ACRYL NODE</span></span>

                    <ul class="about-miner-list">
                        <li>
                            <img src="img/lpos.svg" alt="Miner lpos image">
                            <span class="list-title">{{ $t('miner.lpos.title') }}</span>
                            <span class="small">Leasing Proof-of-Stake</span>
                            <div class="text">{{ $t('miner.lpos.text') }}</div>
                        </li>
                        <li>
                            <img src="img/nergy.svg" alt="Miner nergy image">
                            <span class="list-title">{{ $t('miner.nergy.title') }}</span>
                            <div class="text">{{ $t('miner.nergy.text') }}</div>
                        </li>
                        <li>
                            <img src="img/all-in.svg" alt="Miner all-in image">
                            <span class="list-title">All-in-Box</span>
                            <div class="text">{{ $t('miner.all.text') }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import locale from '../src/locale.js'
    
    export default{
        i18n: {
            messages: {},
            sharedMessages: locale
        }
    }
</script>