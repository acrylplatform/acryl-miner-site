(function($) {
	"use strict"; // Start of use strict
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	jQuery(function() {
			var a=jQuery;
			a.cookiesDirective( {
					explicitConsent: !1, position: "bottom", duration: 9999, limit: 0, message: a("input[name=cookieData]").attr("data-cookie-text"), fontFamily: "Arial", fontColor: "#424a4d", fontSize: "13px", backgroundColor: "#eaeff1", backgroundOpacity: "80"
				}
			);
			a(".cookieText").find("a").css( {
					color: "#424a4d", "text-decoration": "underline"
				}
			);
			a("input[name=cookieData]").remove()
		}

	);
	function GetURLParameter(sParam)
	{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam)
			{
				return sParameterName[1];
			}
		}
	}

	function gaSendEvent(status, email) {
		ga('send', {
			hitType: 'event',
			eventCategory: 'User',
			eventAction: 'subscription',
			eventLabel: status
		});
		if (email !== "") {
			ga('set', 'userId', email);
		}
	}
    function gaSendButton(buttonName) {
        ga('send', 'event', 'Knopka', 'Click', buttonName);
    }
    function yaSendButton(buttonName) {
        ym(52828636, 'reachGoal', buttonName);
    }
    function gaSendScroll(status, email) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'User',
            eventAction: 'scroll',
            eventLabel: status
        });
        if (email !== "") {
            ga('set', 'userId', email);
        }
    }
	function infoalert() {
		alert("Запуск сайта будет произведен в ближайшее время");
	}

	var source = "default";

	try {
        if (GetURLParameter('utm_source')) {
            if (localStorage.getItem('utm_source') !== null) {
                source = localStorage.getItem('utm_source');

            } else {
                source = GetURLParameter("utm_source");
                if (source !== "default") {
					localStorage.setItem("utm_source", GetURLParameter("utm_source"));
				}
            }
        } else {
            if (localStorage.getItem('utm_source')) {
                source = localStorage.getItem('utm_source');
            }
        }
    } catch (e) {}

	var encoded = "&bull;&nbsp;";
	var bull = $("<div/>").html(encoded).text();
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
				    gaSendScroll(target[0].id, "");
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					});
				}
			}
		});

	$(document).ready(function() {
		//Create phone mask
		if ($('input[type=tel]').length > 0) {
			$('input[type=tel]').inputmask('+9 (999) 999-99-99');
			$("input[type=tel]").inputmask({"clearIncomplete": true});
		}
		$("#buysubmit").click(function () {
			if (validateEmail($("#emailbuy").val()) === false || $("#phonebuy").val() === "") {
				if (validateEmail($("#emailbuy").val()) === true || $("#phonebuy").val().length >= 8) {
					console.log(source);
                    // $.ajax({
                    //     url: "https://forms.amocrm.ru/queue/add",
                    //     type: 'post',
                    //     data: {
                    //         "fields[name_1]": $("#namebuy").val(),
                    //         "fields[543953_1][907777]": "+" + $("#phonebuy").val().replace(/\+| |\-|\(|\)/g, ""),
                    //         "fields[543955_1][907789]": $("#emailbuy").val(),
                    //         "fields[608791_1]": source,
                    //         "form_id": "459268",
                    //         "hash": "35d247b6ea0d2920c2f0c771f4688712"
                    //     },
                    //     crossDomain: true
                    //     // dataType: "jsonp"
                    // });
				}
				try {
					gaSendEvent('Customers', $("#namepartner").val().toString());
					FS.setUserVars({
						"displayName": $("#namepartner").val().toString(),
						"email": $("#emailbuy").val()
					});
				} catch (e) {
				}
				alert("Вы указали неверные контакты");

			} else {

                $.ajax({
                    url: "https://forms.amocrm.ru/queue/add",
                    type: 'post',
                    data: {
                        "fields[name_1]": $("#namebuy").val(),
                        "fields[543953_1][907777]": "+" + $("#phonebuy").val().replace(/\+| |\-|\(|\)/g, ""),
                        "fields[543955_1][907789]": $("#emailbuy").val(),
                        "fields[608791_1]": source,
                        "form_id": "459268",
                        "hash": "35d247b6ea0d2920c2f0c771f4688712"

                    },
                    crossDomain: true
                    // dataType: "jsonp"
                });
				try {
					gaSendEvent('not register customers', $("#namepartner").val().toString());
                    gaSendButton('Zakaz1');
                    yaSendButton('order1');
					FS.setUserVars({
						"displayName": $("#namepartner").val().toString(),
						"email": $("#emailbuy").val()
					});
				} catch (e) {
				}
				var infoText = "";
				infoText += ("Мы с вами свяжемся в ближайшее время") + "\n";
				alert(infoText);
				$("#emailbuy").val("");
				$("#namebuy").val("");
				$("#phonebuy").val("");
			}
		});

		// $("#take").click(function () {
		// 	if ($("#phonebuy").val() === "") {
		// 		if ($("#phonebuy").val().length >= 8) {
		// 			console.log(source);
		// 			$.ajax({
		// 				url: "https://forms.amocrm.ru/queue/add",
		// 				type: 'post',
		// 				data: {
		// 					"fields[name_1]": $("#namebuy").val(),
		// 					"fields[543953_1][907777]": "+" + $("#phonebuy").val().replace(/\+| |\-|\(|\)/g, ""),
		// 					"fields[543955_1][907789]": "null@null.com",
		// 					"fields[608791_1]": source,
		// 					"form_id": "459268",
		// 					"hash": "35d247b6ea0d2920c2f0c771f4688712"
		// 				},
		// 				crossDomain: true
		// 				// dataType: "jsonp"
		// 			});
		// 		}
		// 		try {
		// 			gaSendEvent('Customers', $("#namepartner").val().toString());
		// 			FS.setUserVars({
		// 				"displayName": $("#namepartner").val().toString(),
		// 				"email": $("#emailbuy").val()
		// 			});
		// 		} catch (e) {
		// 		}
		// 		alert("Вы указали неверные контакты");
		//
		// 	} else {
		//
		// 		$.ajax({
		// 			url: "https://forms.amocrm.ru/queue/add",
		// 			type: 'post',
		// 			data: {
		// 				"fields[name_1]": $("#namebuy").val(),
		// 				"fields[543953_1][907777]": "+" + $("#phonebuy").val().replace(/\+| |\-|\(|\)/g, ""),
		// 				"fields[543955_1][907789]": "null@null.com",
		// 				"fields[608791_1]": source,
		// 				"form_id": "459268",
		// 				"hash": "35d247b6ea0d2920c2f0c771f4688712"
		// 			},
		// 			crossDomain: true
		// 			// dataType: "jsonp"
		// 		});
		// 		try {
		// 			gaSendEvent('not register customers', $("#namepartner").val().toString());
		// 			gaSendButton('Zakaz1');
		// 			yaSendButton('order1');
		// 			FS.setUserVars({
		// 				"displayName": $("#namepartner").val().toString(),
		// 				"email": $("#emailbuy").val()
		// 			});
		// 		} catch (e) {
		// 		}
		// 		var infoText = "";
		// 		infoText += ("Мы с вами свяжемся в ближайшее время") + "\n";
		// 		alert(infoText);
		// 		$("#emailbuy").val("");
		// 		$("#namebuy").val("");
		// 		$("#phonebuy").val("");
		// 	}
		// });

		$("#partnersubmit").click(function () {
			if (validateEmail($("#emailpartner").val()) === false || $("#phonepartner").val() === "") {
				if (validateEmail($("#emailpartner").val()) === true || $("#phonepartner").val().length >= 8) {
					// $.ajax({
					// 	url: "https://docs.google.com/forms/d/e/1FAIpQLSfjZO4eGMzQm-Geety4TWpBnpGxBqMLtIdGN3vbp_NWYVzKow/formResponse",
					// 	type: 'post',
					// 	data: {
					// 		"entry.292576426": $("#namepartner").val(),
					// 		"entry.927324316": $("#phonepartner").val().replace(/\+| |\-|\(|\)/g, ""),
					// 		"entry.782534400": $("#emailpartner").val(),
					// 		"entry.852532570": source
					//
					//
					// 	},
					// 	crossDomain: true,
					// 	dataType: "jsonp"
					// });
				}
				try {
					gaSendEvent('Become a partner', $("#namepartner").val().toString());
					FS.setUserVars({
						"displayName": $("#namepartner").val().toString(),
						"email": $("#emailpartner").val()
					});
				} catch (e) {
				}
				alert("Вы указали неверные контакты");
			} else {

                $.ajax({
                    url: "https://forms.amocrm.ru/queue/add",
                    type: 'post',
                    data: {
                        "fields[name_1]": $("#namepartner").val(),
                        "fields[543953_1][907777]": "+" + $("#phonepartner").val().replace(/\+| |\-|\(|\)/g, ""),
                        "fields[543955_1][907789]": $("#emailpartner").val(),
                        "fields[608791_1]": source,
                        "form_id": "515395",
                        "hash": "788ad99bed94945d0776f1302c78d840"

                    },
					crossDomain: true
					// dataType: "jsonp"
				});
				try {
					gaSendEvent('not register Become a partner', $("#namepartner").val().toString());
                    gaSendButton('Zakaz2');
                    yaSendButton('order2')
					FS.setUserVars({
						"displayName": $("#namepartner").val().toString(),
						"email": $("#emailpartner").val()
					});
				} catch (e) {
				}
				var infoText = "";
				infoText += ("Мы с вами свяжемся в ближайшее время") + "\n";
				alert(infoText);
				$("#namepartner").val("");
				$("#emailpartner").val("");
				$("#phonepartner").val("");
			}
		});

		//Collect email
		$("#emailSubmit").click(function () {
			if (validateEmail($("#userEmail").val()) === true && $('#emailCh1').is(":checked") === true) {
				$.ajax({
					url: "https://docs.google.com/forms/d/e/1FAIpQLSdJ-3_yFHuexV95aD2WkDc11fI2JRzle2_amwcnkAB3uClYgw/formResponse",
					type: 'post',
					data: {
						"entry.948252205": $("#userEmail").val()
					},
					crossDomain: true,
					dataType: "jsonp"
				});
				try {
					gaSendEvent('Email Subscription', $("#userEmail").val());
                    gaSendButton('Podpiska');
                    yaSendButton('podpiska');
					FS.setUserVars({
						"displayName": $("#userEmail").val(),
						"email": $("#userEmail").val()
					});
				} catch (e) {
				}
				alert("Спасибо за подписку на новости: " + $("#userEmail").val().toString() + "!");
				$("#userEmail").val("");
			} else {
				var infoText = "";
				if (validateEmail($("#userEmail").val()) === false) {
					infoText += bull + "Email указан не верно\n";
				}
				if ($('#emailCh1').is(":checked") === false) {
					infoText += bull + "Вы не согласились получать маркетинговую информацию\n";
				}
				// if ($('#emailCh2').is(":checked") === false) {
				// 	infoText += bull + "Вы не согласились с Политикой конфиденциальности\n";
				// }
				alert(infoText);
			}
		});

        $("#orderacryl").click(function () {
            try {
                gaSendButton('Knopka zakazat');
                yaSendButton('click_order')
            } catch (e) {}
        });
        $("#orderacrylb2").click(function () {
            try {
                gaSendButton('Knopka zakazat');
                yaSendButton('click_order')
            } catch (e) {}
        });
        $("#orderacrylb3").click(function () {
            try {
                gaSendButton('Knopka zakazat2');
                yaSendButton('click_order2')
            } catch (e) {}
        });
        $("#orderacrylb4").click(function () {
			try {
				gaSendButton('Knopka zakazat2');
				yaSendButton('click_order2')
			} catch (e) {}
		});
		$("#shop").click(function () {
			try {
				gaSendButton('shop');
				yaSendButton('click_shop')
			} catch (e) {}
		});
		$("#shop1").click(function () {
			try {
				gaSendButton('shop');
				yaSendButton('click_shop')
			} catch (e) {}
		});
        $("#downloaddocuments").click(function () {
            try {
                gaSendButton('Dokument');
                yaSendButton('click_doc')
            } catch (e) {}
        });
        $("#downloaddocuments2").click(function () {
            try {
                gaSendButton('Dokument');
                yaSendButton('click_doc')
            } catch (e) {}
        });
        $("#aboutacrylplatform").click(function () {
            try {
                gaSendButton('Inform');
                yaSendButton('click_info')
            } catch (e) {}
        });
        $("#callphone").click(function () {
            try {
                gaSendButton('Tel');
                yaSendButton('click_tel')
            } catch (e) {}
        });
		$("#shopsubmit").click(function () {
			try {
				gaSendButton('shop');
				yaSendButton('shop')
			} catch (e) {}
		});
		$("#support").click(function () {
			try {
				gaSendButton('Support');
				yaSendButton('Support')
			} catch (e) {}
		});
        $("#youtube").click(function () {
            try {
				gaSendButton('Sotseti');
                yaSendButton('click_seti')
            } catch (e) {}
        });
        $("#twitter").click(function () {
            try {
				gaSendButton('Sotseti');
                yaSendButton('click_seti')
            } catch (e) {}
        });
        $("#telegram").click(function () {
            try {
				gaSendButton('Sotseti');
                yaSendButton('click_seti')
            } catch (e) {}
        });
		$("#github").click(function () {
			try {
				gaSendButton('Sotseti');
				yaSendButton('click_seti')
			} catch (e) {}
		});
		$("#facebook").click(function () {
			try {
				gaSendButton('Sotseti');
				yaSendButton('click_seti')
			} catch (e) {}
		});

		$("#downloaddocuments").click(function() {
			infoalert()
		});
		$("#downloaddocuments2").click(function() {
			infoalert()
		});
		$("#aboutacrylplatform").click(function() {
			infoalert()
		});
		$("#youtube").click(function() {
            window.open('https://www.youtube.com/channel/UCk5D9wlKQbD1sRkPXAxVIlQ','_blank')
		});
		$("#twitter").click(function() {
            window.open('https://twitter.com/acrylplatform','_blank')
		});
		$("#telegram").click(function() {
            window.open('https://t.me/Acrylplatform','_blank')
		});
		$("#github").click(function() {
			window.open('https://github.com/acrylplatform','_blank')
		});
		$("#facebook").click(function() {
			window.open('https://www.facebook.com/acrylplatformofficial','_blank')
		});
		$("#weisswaters").click(function() {
			infoalert()
		});
		$("#confidentiality").click(function() {
			infoalert()
		});
		$("#Politic").click(function() {
			infoalert()
		});
	});

})(jQuery); // End of use strict











