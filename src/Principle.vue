<template>
    <div class="principle-of-work-wrp">
        <div class="container small-content">
            <span class="principle-title">{{ $t('principle.title') }}</span>
            <div class="row principle-row">
                <div class="col-lg-6">
                    <div class="left-principle">
                        <ul class="principle-list">
                            <li class="acryl-big">
                                <span class="principle-title">ACRYL PLATFORM</span>
                                <div class="text">{{ $t('principle.platformText') }}</div>
                            </li>
                            <li class="second">
                                <span class="principle-title">{{ $t('principle.coin') }}</span>
                                <div class="text">{{ $t('principle.coinText') }}</div>
                            </li>
                            <li class="three">
                                <span class="principle-title">{{ $t('principle.client') }}</span>
                                <div class="text">{{ $t('principle.clientText') }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-principle">
                        <ul class="principle-list">
                            <li class="first-right">
                                <span class="principle-title">{{ $t('principle.miner') }}</span>
                                <div class="text">{{ $t('principle.minerText') }}</div>
                            </li>
                            <li class="black-border">
                                <span class="principle-title">{{ $t('principle.project') }}</span>
                                <div class="text">{{ $t('principle.projectText') }}</div>
                            </li>
                        </ul>
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