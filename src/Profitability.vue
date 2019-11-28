<template>
    <div class="profitability-wrp">
        <div class="container small-content">
            <span class="profitability-title">{{ $t('profitability.title') }}</span>
            <div class="row profitability-row">
                <div class="col-md-6">
                    <div class="item-of-profitability">
                        <span class="number">1</span>
                        <span class="step-title">{{ $t('profitability.step') }} 1 —</span>
                        <div class="text">{{ $t('profitability.step1') }} <br>{{ $t('profitability.step11') }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item-of-profitability">
                        <span class="number">2</span>
                        <span class="step-title">{{ $t('profitability.step') }} 2 —</span>
                        <div class="text">{{ $t('profitability.step2') }} <br> {{ $t('profitability.step22') }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item-of-profitability">
                        <span class="number">3</span>
                        <span class="step-title">{{ $t('profitability.step') }} 3 —</span>
                        <div class="text">{{ $t('profitability.step3') }} <br> {{ $t('profitability.step33') }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item-of-profitability">
                        <span class="number">4</span>
                        <span class="step-title">{{ $t('profitability.step') }} 4 —</span>
                        <div class="text">{{ $t('profitability.step4') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="container">-->
            <!--<div class="prices-table-wrp">-->
                <!--<table class="prices-table">-->
                    <!--<tbody>-->
                        <!--<tr class="table-head">-->
                            <!--<td>{{ $t('profitability.table.item1') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item2') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item3') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item4') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item5') }}&nbsp;{{ $t('profitability.table.item55') }}<br> {{ $t('profitability.table.inmonthdollar') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item6') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item7') }}<br> {{ $t('profitability.table.inmonth') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item8') }}</td>-->
                            <!--<td>{{ $t('profitability.table.item9') }}</td>-->
                        <!--</tr>-->
                        <!--<tr> </tr>-->
                        <!--<tr>-->
                            <!--<td>-->
                                <!--<div class="acryl-logo">-->
                                    <!--<img src="img/acryl.svg" alt="Acryl image">-->
                                    <!--Acryl-->
                                <!--</div>-->
                            <!--</td>-->
                            <!--<td> <span>  <div class="tabl"> Acryl Node v2.0</div></span></td>-->
                            <!--<td> <div class="tabl"> 1500$ </div></td>-->
                            <!--<td><div class="tabl">205$</div></td>-->
                            <!--<td><div class="tabl">202$</div></td>-->
                            <!--<td><div class="tabl">13$</div></td>-->
                            <!--<td><div class="tabl">3$</div></td>-->
                            <!--<td><div class="tabl">6,5$</div></td>-->
                            <!--<td><div class="tabl">7мес.</div></td>-->
                        <!--</tr>-->
                        <!--<tr> </tr>-->
                        <!--<tr>-->
                            <!--<td>BTC</td>-->
                            <!--<td>-->
                                <!--<span>s9j - 14,5 TH</span><br>-->
                                <!--<span>s15 - 27 TH</span><br>-->
                                <!--<span>t15 - 23 TH</span><br>-->
                                <!--<span>s11 - 20 TH</span>-->
                            <!--</td>-->
                            <!--<td>320$ <br> 1200$<br> 850$<br>550$</td>-->
                            <!--<td>70$ <br> 132$<br> 111$<br> 96$</td>-->
                            <!--<td>20$ <br> 80$<br> 51$<br> 30$</td>-->
                            <!--<td>3500$</td>-->
                            <!--<td>50$ <br> 60$<br> 60$<br>60$</td>-->
                            <!--<td>2,3$ <br> 4,4$<br> 3,7$<br> 3,2$</td>-->
                            <!--<td>16мес. <br> 15мес.<br> 17мес.<br> 18мес.</td>-->
                        <!--</tr>-->
                        <!--<tr> </tr>-->
                        <!--<tr>-->
                            <!--<td>LTC</td>-->
                            <!--<td><span>L3++ - 590 Mh</span></td>-->
                            <!--<td>220$</td>-->
                            <!--<td>39$</td>-->
                            <!--<td>9$</td>-->
                            <!--<td>25$</td>-->
                            <!--<td>30$</td>-->
                            <!--<td>1,3$</td>-->
                            <!--<td>23мес.</td>-->
                        <!--</tr>-->
                        <!--<tr> </tr>-->
                        <!--<tr>-->
                            <!--<td>x11</td>-->
                            <!--<td><span>d3 - 19,3 Mh</span></td>-->
                            <!--<td>120$</td>-->
                            <!--<td>36$</td>-->
                            <!--<td>-1$</td>-->
                            <!--<td>66$</td>-->
                            <!--<td>40$</td>-->
                            <!--<td>1,2$</td>-->
                            <!--<td>></td>-->
                        <!--</tr>-->
                        <!--<tr> </tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            <!--</div>-->
            <!--&lt;!&ndash;<span class="prices-table-descript">По состоянию на 14.01.2019. Цена за 1 kWt = 3,5руб/кВт</span>&ndash;&gt;-->
        <!--</div>-->
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