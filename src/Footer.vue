<template>
    <footer class="footer">
        <div class="container small-content footer-content">
            <div class="row subscribe-row">
                <div class="col-md-6">
                    <div class="requisites">{{ $t('footer.ltd') }}</div>
                    <div class="requisites">{{ $t('footer.phone') }}: <a style="color:white;" href="tel:+78005113715">8-800-511-37-15</a></div>
                    <div class="requisites">
                        <a style="color:white;" href="https://goo.gl/maps/hkJxgQ1BpbT2" target="_blank">{{ $t('footer.address') }}</a>
                    </div>
                    <div class="requisites">{{ $t('footer.ITN') }}: 5406797241</div>
                    <div class="requisites">{{ $t('footer.IEC') }}: 540601001</div>
                    <div class="requisites">{{ $t('footer.PSRN') }}: 1195476033730</div>
                    <div class="requisites">{{ $t('footer.bank') }}</div>
                    <div class="requisites">{{ $t('footer.BIC') }}: 044525092</div>
                    <div class="requisites">{{ $t('footer.IEC') }}: 771543001</div>
                    <div class="requisites">{{ $t('footer.ca') }}: 30101810645250000092</div>
                    <div class="requisites">{{ $t('footer.account') }}: 40702810070010147423</div>
                    <div class="requisites">E-mail: <a style="color:white;" href="mailto:sales@acrylminer.com">sales@acrylminer.com</a></div>
                    <div class="requisites">Support: <a style="color:white;" href="mailto:support@acryl.omnidesk.ru">support@acryl.omnidesk.ru</a></div>
                </div>
                <div class="col-md-6 search-form-wrp">
                    <span class="subscribe-title">{{ $t('footer.subscribeTitle1') }}<br> {{ $t('footer.subscribeTitle2') }}</span>
                    <form>
                        <div class="search-row">
                            <input id="userEmail" type="text" aria-label="userEmail" placeholder="E-mail" name="email" required="required">
                            <button id="emailSubmit" type="button" class="basic-button red subscribe-button" >{{ $t('footer.subscribe') }}</button>
                        </div>
                        <!--<label class="check-after-subscribe">-->
                            <!--<input id="emailCh1" type="checkbox" required="required" value="check1">-->
                            <!--<span></span>-->
                            <!--<span>Я прочитал и согласен с <a href="privacy-policy.html" class="privacy">Политикой конфиденциальности</a><br> и <a href="cookies-policy.html" class="Politic">Политикой Cookies</a></span>-->
                        <!--</label>-->
                        <label class="check-after-subscribe">
                            <input id="emailCh1" type="checkbox" required="required" value="check1">
                            <span></span>
                            <span>{{ $t('footer.email1') }} <a>ACRYL</a> {{ $t('footer.email2') }}</span>
                        </label>
                    </form>
                </div>
            </div>
            <div class="row footer-nav-row">
                <div class="col-lg-7 col-md-8">
                    <ul class="footer-nav">
                        <li>
                            <a href="" class="footer-logo">
                                <img src="img/logo-orange.svg" alt="Acryl logo text">
                            </a>
                        </li>
                        <li><a href="https://acrylplatform.com/">{{ $t('links.platform') }}</a></li>
                        <li><a id="orderacrylb3" href="#order">{{ $t('links.order') }}</a></li>
                        <li><a href="#partner">{{ $t('links.partner') }}</a></li>
                        <li><a id="shop1" href="https://shop.acrylminer.com">{{ $t('links.shop') }}</a></li>
                        <li><a id="support" href="https://support.acrylminer.com">{{ $t('links.support') }}</a></li>
                    </ul>
                </div>
                <div class="col-lg-5 col-md-4">
                    <ul class="networks">
                        <li class="networkspad"><a  id="youtube"><img src="img/youtube.svg" alt="Youtube Page"></a></li>
                        <li class="networkspad"><a  id="twitter"><img src="img/twitter.svg" alt="Twitter Page"></a></li>
                        <li class="networkspad"><a  id="telegram"><img src="img/telegram.svg" alt="Telegram Chanel"></a></li>
                        <li class="networkspad"><a  id="github"><img src="img/githubv3.svg" alt="Github Chanel"></a></li>
                        <li class="networkspad"><a  id="facebook"><img src="img/fb.svg" alt="Facebook Chanel"></a></li>
                        <li class="networkspad"><a  id="vk"><img src="img/vklogo.png" alt="Vk Chanel"></a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <ul class="footer-politics">
                    <li>Copyright © 2019, ACRYL </li>
                    <li><a href="privacy-policy.html" class="privacy textv2">Privacy policy</a>  <a href="cookies-policy.html" class="Politic textv2">Cookies policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
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
