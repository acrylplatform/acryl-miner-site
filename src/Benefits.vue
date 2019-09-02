<template>
    <div class="benefits-wrp">
        <div class="container">
            <div class="benefits-content">
                <div class="col-lg-6">
                    <div class="benefit-image">
                        <picture>
                            <source type="image/webp" media="(min-width: 1200px)" srcset="img/client.webp">
                            <img src="img/client.png" alt="Miner client image">
                        </picture>
                    </div>
                </div>
                <div class="col-lg-6">
                    <span class="benefits-title">{{ $t('benefits.title1') }} <br> {{ $t('benefits.title2') }}</span>
                    <ul class="benefits-list">
                        <li>{{ $t('benefits.list.item1') }}</li>
                        <li>{{ $t('benefits.list.item2') }}</li>
                        <li>{{ $t('benefits.list.item3') }}</li>
                        <li>{{ $t('benefits.list.item4') }}</li>
                        <li>{{ $t('benefits.list.item5') }}</li>
                        <li>{{ $t('benefits.list.item6') }}</li>
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