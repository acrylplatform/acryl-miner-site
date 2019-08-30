import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import App from '../src/App.vue'

new Vue({
    el: '#app',
    template: '<App v-on:switch-lang="switchLang"/>',
    i18n: {
        locale: 'en'
    },
    components: { App },
    created: function () {
        if (navigator.language.includes('ru')) {
            this.$i18n.locale = 'ru'
        }
    },
    methods: {
        switchLang: function(lang) {
            this.$i18n.locale = lang
        }
    }
})