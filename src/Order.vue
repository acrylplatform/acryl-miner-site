<template>
    <div class="profitable-terms-wrp" id="order">
        <picture>
            <source type="image/webp" media="(min-width: 1200px)" srcset="img/terms-bg.webp">
            <img src="img/terms-bg.jpg" alt="Miner terms image">
        </picture>
        <div class="container small-content">
            <div class="row terms-row">
                <div class="col-lg-6">
                    <span class="terms-title">{{ $t('order.title') }}</span>
                    <div class="text">{{ $t('order.text') }}</div>
                </div>
                <div class="col-lg-6">
                    <div class="feedback-form">
                        <span class="feedback-form-title">{{ $t('order.feedback') }}</span>
                        <form>
                            <input id="namebuy" type="text" aria-label="namebuy" name="name" :placeholder="$t('order.name')">
                            <select id="phonecodebuy"></select>
                            <input id="phonebuy" type="tel" aria-label="phonebuy" name="phone" :placeholder="$t('order.phone')">
                            <input id="emailbuy" type="text" aria-label="emailbuy" name="email" placeholder="E-mail">
                            <button id="buysubmit" type="button" class="basic-button orange order">{{ $t('order.buy') }}</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6"></div>
                <span class="text-center textv1 col-lg-6">{{ $t('order.or') }}</span>
                <div class="col-lg-6"></div>
                <div class="col-lg-6">
                    <div class="feedback-form">
                        <form>
                            <a id="shopsubmit" class="basic-button orange order" href="https://shop.acrylminer.com/ru/">{{ $t('order.shop') }}</a>
                        </form>
                    </div>
                </div>
                <!--<div class="col-lg-6">-->
                    <!--<div class="feedback-form">-->
                        <!--&lt;!&ndash;<span class="feedback-form-title">Оставьте заявку и получите особые условия для покупки майнера.</span>&ndash;&gt;-->
                        <!--<form>-->
                            <!--<a id="shopsubmit" class="basic-button orange order" href="https://shop.acrylminer.com/ru/">Купить в интеренет-магазине</a>-->
                        <!--</form>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<form>-->
                    <!--<span class="text-center textv1">или</span>-->
                    <!--<a id="shopsubmit" class="basic-button orange order" href="https://shop.acrylminer.com/ru/">Купить в интеренет-магазине</a>-->
                <!--</form>-->
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