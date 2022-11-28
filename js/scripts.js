(function($) {
    'use strict';

    $('.service-caro').owlCarousel({
        loop:false,
        margin:5,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.test-caro').owlCarousel({
        autoplay:true,
        dots: true,
        loop:true,
        nav:false,
        items: 1
    })

    $('.mobile-menu').on('click', function() {
        $('.primary-menu ul').slideToggle();
    })

}) (jQuery)


function sendEmail(){
    // document.getElementById('modal').style.display = 'block';
    $('.modal-backdrop').addClass('show');
    $('#shadeblack')[0].style.display = 'block';
    $('#spinner').style.display = 'flex';
    var formData = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        job : document.getElementById("job").value,
        fname : document.getElementById("fname").value,
        dob : document.getElementById("dob").value,
        age : document.getElementById("age").value,
        place : document.getElementById("place").value,
        qualification : document.getElementById("qualification").value,
        experience : document.getElementById("experience").value,
        address : document.getElementById("address").value,
        language : document.getElementById("language").value,
        country : document.getElementById("country").value,
        aadhar : document.getElementById("aadhar").value,
        account : document.getElementById("account").value,
        ifsc : document.getElementById("ifsc").value,
        branch : document.getElementById("branch").value,
        phone : document.getElementById("phone").value,

    };
    const serviceId = "service_u2646wr"
    const templateId = "template_r3mc06g"
    emailjs.send(serviceId,templateId,formData).then(
        res => {
            document.getElementById('formID').reset();
            alert("message succesfull");
            $('.modal-backdrop').removeClass('show');
            $('#shade-black')[0].style.display = 'none';
            $('#spinner').style.display = 'none'; 
        }
    ).catch(err => console.log(err));
}