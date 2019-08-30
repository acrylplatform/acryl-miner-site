<template>
    <div>
        <headline v-on:switch-lang="switchLang"></headline>
        <main class="main">
            <banner></banner>
            <miner></miner>
            <feedback></feedback>
            <benefits></benefits>
            <principle></principle>
            <profitability></profitability>
            <documentation></documentation>
            <order></order>
            <node></node>
            <partner></partner>
        </main>
        <footline></footline>
        <input name="cookieData" type="hidden" :data-cookie-text="$t('cookie.text', { lnk1: `<a href='cookies-policy.html'>Cookie policy</a>`, lnk2: `<a href='privacy-policy.html'>Privacy policy</a>`})">
    </div>
</template>

<script>
    import headline from '../src/Header.vue'
    import banner from '../src/Banner.vue'
    import miner from '../src/Miner.vue'
    import feedback from '../src/Feedback.vue'
    import benefits from '../src/Benefits.vue'
    import principle from '../src/Principle.vue'
    import profitability from '../src/Profitability.vue'
    import documentation from '../src/Documentation.vue'
    import order from '../src/Order.vue'
    import node from '../src/Node.vue'
    import partner from '../src/Partner.vue'
    import footline from '../src/Footer.vue'

    import locale from '../src/locale.js'
    
    export default{
        components: {
            headline,
            banner,
            miner,
            feedback,
            benefits,
            principle,
            profitability,
            documentation,
            order,
            node,
            partner,
            footline
        },
        i18n: {
            messages: {},
            sharedMessages: locale
        },
        methods: {
            switchLang: function(lang) {
                this.$emit('switch-lang', lang)
            }
        }
    }
</script>