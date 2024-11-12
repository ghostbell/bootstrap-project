$(document).ready(function() {
    $('.single-item').slick();

    $('.test-popup-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    $(function() {
        $("#accordion").accordion({
            collapsible: true
        });
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    let form = $('#order-form');
    let successFormInfo = $('#success-form-info');

    form.on('submit', function(event) {
        event.preventDefault();

        let name = $('#name-input').val();
        let surname = $('#surname-input').val();
        let phone = $('#phone-input').val();
        let country = $('#country-input').val();
        let index = $('#index-input').val();
        let address = $('#address-input').val();
        let valid = true;

        if (!name) {
            alert("Пожалуйста, введите ваше имя");
            valid = false;
        }
        if (!surname) {
            alert("Пожалуйста, введите вашу фамилию");
            valid = false;
        }
        if (!phone) {
            alert("Пожалуйста, введите ваш телефон");
            valid = false;
        }
        if (!country) {
            alert("Пожалуйста, введите вашу страну");
            valid = false;
        }
        if (!index) {
            alert("Пожалуйста, введите ваш индекс");
            valid = false;
        }
        if (!address) {
            alert("Пожалуйста, введите ваш адрес");
            valid = false;
        }
        if (index.length !== 6) {
            alert("Индекс должен содержать 6 цифр");
            valid = false;
        }

        let result = parseInt(index);

        if (isNaN(result)) {
            alert("Индекс должен содержать только цифры");
            valid = false;
        }

        if (valid) {
            // form.css('display', 'none');
            form.hide();
            successFormInfo.removeClass('d-none').addClass('d-flex');
        }
    });
});