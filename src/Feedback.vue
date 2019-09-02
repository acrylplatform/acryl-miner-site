<template>
    <div class="leave-feedback-wrp feedback-top">
        <div class="container">
            <div class="feedback-block">
                <div class="col-lg-7">
                    <span class="feedback-descript">{{ $t('feedback.descript1') }}<br> {{ $t('feedback.descript2') }}</span>
                </div>
                <div class="col-lg-5">
                    <a id="orderacrylb2" href="#order" class="basic-button feedback-button black">{{ $t('feedback.order') }}</a>
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