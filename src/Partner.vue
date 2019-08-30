<template>
    <div class="profitable-terms-wrp partner" id="partner">
        <picture>
            <source type="image/webp" media="(min-width: 1200px)" srcset="img/partner-bg.webp">
            <img src="img/partner-bg.jpg" alt="miner partner image">
        </picture>
        <div class="container small-content">
            <div class="row terms-row">
                <div class="col-lg-6">
                    <span class="terms-title">{{ $t('partner.title') }}</span>
                    <div class="text">{{ $t('partner.text') }}</div>
                </div>
                <div class="col-lg-6">
                    <div class="feedback-form">
                        <form>
                            <input id="namepartner" aria-label="namepartner" type="text" name="name" :placeholder="$t('partner.name')">
                            <input id="phonepartner" aria-label="phonepartner" type="tel" name="phone" :placeholder="$t('partner.phone')">
                            <input id="emailpartner" aria-label="emailpartner" type="text" name="email" placeholder="E-mail" required="required">
                            <button id="partnersubmit" type="button" class="basic-button orange order">{{ $t('partner.call') }}</button>
                        </form>
                    </div>
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