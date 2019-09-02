<template>
    <div class="first-banner-wrp" >
        <picture>
            <source type="image/webp" srcset="img/miner-top.webp">
            <img src="img/miner-top.jpg" alt="Acryl miner top image">
        </picture>
        <div class="container small-content">
            <div class="row">
                <div class="col-lg-7 first-banner-content">
                    <h2 class="second-level-title">ACRYL NODE</h2>
                    <div class="text">{{ $t('banner.text') }}</div>
                    <ul class="three-buttons-list acryl-buttons">
                        <li><a id="orderacryl" href="#order" class="basic-button orange">{{ $t('banner.order') }}</a></li>
                        <!--<li>-->
                            <!--<a id="downloaddocuments" class="download">-->
                                <!--{{ $t('banner.download') }}-->
                                <!--<img src="img/download-orange.svg" alt="Acryl miner download icon">-->
                            <!--</a>-->
                        <!--</li>-->
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