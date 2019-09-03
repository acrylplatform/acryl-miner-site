///////////////////////////////
///////////phoneCodes.js///////
///////////////////////////////
//
// README
// 
// Библиотека для форматирования телефона
// Для работы нужен jquery и jquery inputmask
// Сначала надо подключить js:
//
// <script src="phoneCodes.js"></script>
//
// Затем надо добавить на страницу код:
//
// <select id="yourid"></select>
//
// И вызвать функцию и передать список id select
//
// phoneCodes(['#id1','#id2']);
//
// Там будет список стран и кодов. С помощью его можно сменить код страны в input[type=tel]


function phoneCodes(arr) {
    for(var i=0; i<codes.length; i++) {
        var code = codes[i].code;
        var name = codes[i].name;
        for(var j=0; j<arr.length; j++) {
            $(arr[j]).append($("<option></option>").attr("value",code).text(name));    
        }
    }

    $.ajax({
        url: "https://api.sypexgeo.net/json",
        success: function(data){
            var code = "+355";
            data.country.phone ? code = "+" + data.country.phone : code = codes[0].code ;
            for(var i=0; i<arr.length; i++) {
                $(arr[i]).val(code).trigger('change');
            }
        }
    });

    for(var i=0; i<arr.length; i++) {
        $(arr[i]).change(function(){
            var data = $(this).val();
            for(var j=0; j<arr.length; j++) {
                $(arr[j]).val(data);
            }
            data = data.replace("9", "\\9");
            var mask = data + "9{5,20}";
            $('input[type=tel]').inputmask(mask, { "placeholder": " " });
        });
    }
}

var codes = [{"name": "Afghanistan", "code": "+93"},
{"name": "Albania", "code": "+355"},
{"name": "Algeria", "code": "+21"},
{"name": "American Samoa", "code": "+684"},
{"name": "Andorra", "code": "+376"},
{"name": "Angola", "code": "+244"},
{"name": "Armenia", "code": "+374"},
{"name": "Argentina", "code": "+54"},
{"name": "Australia", "code": "+61"},
{"name": "Austria", "code": "+43"},
{"name": "Azerbaijan", "code": "+994"},
{"name": "Bahrain", "code": "+973"},
{"name": "Bangladesh", "code": "+880"},
{"name": "Belarus", "code": "+375"},
{"name": "Belgium", "code": "+32"},
{"name": "Belize", "code": "+501"},
{"name": "Benin", "code": "+229"},
{"name": "Bolivia", "code": "+591"},
{"name": "Bosnia and Herzegovina", "code": "+387"},
{"name": "Botswana", "code": "+267"},
{"name": "Brazil", "code": "+55"},
{"name": "Brunei Darusalaam", "code": "+673"},
{"name": "Bulgaria", "code": "+359"},
{"name": "Burkina Faso", "code": "+226"},
{"name": "Burundi", "code": "+257"},
{"name": "Cambodia", "code": "+855"},
{"name": "Cameroon", "code": "+237"},
{"name": "Canada", "code": "+1"},
{"name": "Cape Verde", "code": "+238"},
{"name": "Central African Republic", "code": "+236"},
{"name": "Chad", "code": "+235"},
{"name": "Chile", "code": "+56"},
{"name": "China", "code": "+86"},
{"name": "Christmas Island", "code": "+672"},
{"name": "Cocos Islands", "code": "+672"},
{"name": "Colombia", "code": "+57"},
{"name": "Comoros and Mayotte Island", "code": "+269"},
{"name": "Congo", "code": "+242"},
{"name": "Cook Islands", "code": "+682"},
{"name": "Costa Rica", "code": "+506"},
{"name": "Croatia", "code": "+385"},
{"name": "Cuba", "code": "+53"},
{"name": "Cyprus", "code": "+357"},
{"name": "Czech Republic", "code": "+420"},
{"name": "Denmark", "code": "+45"},
{"name": "Diego Garcia", "code": "+246"},
{"name": "Djibouti", "code": "+253"},
{"name": "East Timor", "code": "+62"},
{"name": "Ecuador", "code": "+593"},
{"name": "Egypt", "code": "+20"},
{"name": "El Salvador", "code": "+503"},
{"name": "Equatorial Guinea", "code": "+240"},
{"name": "Estonia", "code": "+372"},
{"name": "Ethiopia", "code": "+251"},
{"name": "Faeroe Islands", "code": "+298"},
{"name": "Falkland Islands", "code": "+500"},
{"name": "Fiji", "code": "+679"},
{"name": "Finland", "code": "+358"},
{"name": "France", "code": "+33"},
{"name": "French Antilles", "code": "+590"},
{"name": "French Guiana", "code": "+594"},
{"name": "French Polynesia", "code": "+689"},
{"name": "Gabon", "code": "+241"},
{"name": "Gambia", "code": "+220"},
{"name": "Georgia", "code": "+995"},
{"name": "Germany", "code": "+49"},
{"name": "Ghana", "code": "+233"},
{"name": "Gibraltar", "code": "+350"},
{"name": "Greece", "code": "+30"},
{"name": "Greenland", "code": "+299"},
{"name": "Guam", "code": "+671"},
{"name": "Guatemala", "code": "+502"},
{"name": "Guinea", "code": "+224"},
{"name": "Guinea-Bissau", "code": "+245"},
{"name": "Guyana", "code": "+592"},
{"name": "Haiti", "code": "+509"},
{"name": "Honduras", "code": "+504"},
{"name": "Hong Kong", "code": "+852"},
{"name": "Hungary", "code": "+36"},
{"name": "Iceland", "code": "+354"},
{"name": "India", "code": "+91"},
{"name": "Indonesia", "code": "+62"},
{"name": "Iran", "code": "+98"},
{"name": "Iraq", "code": "+964"},
{"name": "Irish Republic", "code": "+353"},
{"name": "Israel", "code": "+972"},
{"name": "Italy", "code": "+39"},
{"name": "Ivory Coast", "code": "+225"},
{"name": "Japan", "code": "+81"},
{"name": "Jordan", "code": "+962"},
{"name": "Kenya", "code": "+254"},
{"name": "Kiribati Republic", "code": "+686"},
{"name": "Kirg(h)izia", "code": "+996"},
{"name": "Kuwait", "code": "+965"},
{"name": "Laos", "code": "+856"},
{"name": "Latvia", "code": "+371"},
{"name": "Lebanon", "code": "+961"},
{"name": "Lesotho", "code": "+266"},
{"name": "Liberia", "code": "+231"},
{"name": "Libya", "code": "+21"},
{"name": "Liechtenstein", "code": "+41"},
{"name": "Lithuania", "code": "+370"},
{"name": "Luxembourg", "code": "+352"},
{"name": "Macao", "code": "+853"},
{"name": "Macedonia", "code": "+389"},
{"name": "Madagascar", "code": "+261"},
{"name": "Malawi", "code": "+265"},
{"name": "Malaysia", "code": "+60"},
{"name": "Maldives", "code": "+960"},
{"name": "Mali", "code": "+223"},
{"name": "Malta", "code": "+356"},
{"name": "Marshall Islands", "code": "+692"},
{"name": "Martinique", "code": "+596"},
{"name": "Mauritania", "code": "+222"},
{"name": "Mauritius", "code": "+230"},
{"name": "Mexico", "code": "+52"},
{"name": "Micronesia", "code": "+691"},
{"name": "Monaco", "code": "+377"},
{"name": "Mongolia", "code": "+976"},
{"name": "Morocco", "code": "+212"},
{"name": "Mozambique", "code": "+258"},
{"name": "Myanmar", "code": "+95"},
{"name": "Namibia", "code": "+264"},
{"name": "Nauru", "code": "+674"},
{"name": "Nepal", "code": "+977"},
{"name": "Netherlands", "code": "+31"},
{"name": "Netherlands Antilles", "code": "+599"},
{"name": "New Caledonia", "code": "+687"},
{"name": "New Zealand", "code": "+64"},
{"name": "Nicaragua", "code": "+505"},
{"name": "Niger", "code": "+227"},
{"name": "Nigeria", "code": "+234"},
{"name": "Niue", "code": "+683"},
{"name": "Norfolk Island", "code": "+672"},
{"name": "North Korea", "code": "+850"},
{"name": "North Yemen", "code": "+967"},
{"name": "Northern Mariana Islands", "code": "+670"},
{"name": "Norway", "code": "+47"},
{"name": "Oman", "code": "+968"},
{"name": "Pakistan", "code": "+92"},
{"name": "Panama", "code": "+507"},
{"name": "Papua New Guinea", "code": "+675"},
{"name": "Paraguay", "code": "+595"},
{"name": "Peru", "code": "+51"},
{"name": "Philippines", "code": "+63"},
{"name": "Poland", "code": "+48"},
{"name": "Portugal", "code": "+351"},
{"name": "Qatar", "code": "+974"},
{"name": "Republic of San Marino", "code": "+378"},
{"name": "Reunion", "code": "+262"},
{"name": "Romania", "code": "+40"},
{"name": "Russia", "code": "+7"},
{"name": "Rwandese Republic", "code": "+250"},
{"name": "Saint Helena and Ascension Island", "code": "+247"},
{"name": "Saint Pierre et Miquelon", "code": "+508"},
{"name": "San Marino", "code": "+39"},
{"name": "Sao Tome e Principe", "code": "+239"},
{"name": "Saudi Arabia", "code": "+966"},
{"name": "Senegal", "code": "+221"},
{"name": "Seychelles", "code": "+248"},
{"name": "Sierra Leone", "code": "+232"},
{"name": "Singapore", "code": "+65"},
{"name": "Slovakia", "code": "+421"},
{"name": "Slovenia", "code": "+386"},
{"name": "Solomon Islands", "code": "+677"},
{"name": "Somalia", "code": "+252"},
{"name": "South Africa", "code": "+27"},
{"name": "South Korea", "code": "+82"},
{"name": "South Yemen", "code": "+969"},
{"name": "Spain", "code": "+34"},
{"name": "Sri Lanka", "code": "+94"},
{"name": "Sudan", "code": "+249"},
{"name": "Suriname", "code": "+597"},
{"name": "Svalbard and Jan Mayen Islands", "code": "+47"},
{"name": "Swaziland", "code": "+268"},
{"name": "Sweden", "code": "+46"},
{"name": "Switzerland", "code": "+41"},
{"name": "Syria", "code": "+963"},
{"name": "Ta(d)jikistan", "code": "+992"},
{"name": "Taiwan", "code": "+886"},
{"name": "Tanzania", "code": "+255"},
{"name": "Thailand", "code": "+66"},
{"name": "Togolese Republic", "code": "+228"},
{"name": "Tokelau", "code": "+690"},
{"name": "Tonga", "code": "+676"},
{"name": "Tunisia", "code": "+21"},
{"name": "Turkey", "code": "+90"},
{"name": "Turkmenistan", "code": "+993"},
{"name": "Tuvalu", "code": "+688"},
{"name": "Uganda", "code": "+256"},
{"name": "Ukraine", "code": "+380"},
{"name": "United Arab Emirates", "code": "+971"},
{"name": "United Kingdom", "code": "+44"},
{"name": "Uruguay", "code": "+598"},
{"name": "USA", "code": "+1"},
{"name": "Uzbekistan", "code": "+998"},
{"name": "Vanuatu", "code": "+678"},
{"name": "Vatican City", "code": "+39"},
{"name": "Venezuela", "code": "+58"},
{"name": "Vietnam", "code": "+84"},
{"name": "Wallis and Futuna Islands", "code": "+681"},
{"name": "Western Sahara", "code": "+21"},
{"name": "Western Samoa", "code": "+685"},
{"name": "Yugoslavia", "code": "+381"},
{"name": "Zaire", "code": "+243"},
{"name": "Zambia", "code": "+260"},
{"name": "Zimbabwe", "code": "+263"}
]