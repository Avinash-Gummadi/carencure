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
// 
var counter = function() {
	
	$('.section-counter').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$(this.element).find('.number-counter').each(function(){
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
				  {
				    number: num,
				    numberStep: comma_separator_number_step
				  }, 
				  {
				  	easing: 'swing',
    				duration: 3000
				  }
				);
			});
			
		}

	} , { offset: '95%' } );
};
counter();
//
var viewlist = 0;
// 
var tempjob = ""
function openform(option) {
    $('#form_div')[0].style.display = 'block';
    $('#succ_rply')[0].style.display = 'none';
    if (parseInt(option) == 1) {
        if (document.getElementById("formID").style.display == "flex" && viewlist == 1) {
            console.log("scripts.js if flex");
            viewlist = 0;
            document.getElementById("formID").style.display = "none"
        }else{
            $('#formID')[0].style.display = 'flex';
            viewlist = 1;
        }
    } 
    else if (parseInt(option) == 2) {
        $('#formID1')[0].style.display = 'block';
        $('#formID')[0].style.display = 'none';        
        tempjob = "Care Taker"     
    }
    else if (parseInt(option) == 3) {
        $('#formID1')[0].style.display = 'block';
        $('#formID')[0].style.display = 'none';
        tempjob = "Physiotheraphy"     
    }
    else if (parseInt(option) == 4) {
        $('#formID1')[0].style.display = 'block';
        $('#formID')[0].style.display = 'none';
        tempjob = "Nursing"       
    }
    else if (parseInt(option) == 5) {
        $('#formID')[0].style.display = 'none';
        // document.getElementById("job").value = "Nursing"        
        // document.getElementById("job").disabled = true        
    }
    else{
        $('#formID1')[0].style.display = 'none';        
    }
    if(tempjob){
        document.getElementById("heading").innerHTML = `${tempjob} Application`
    }
}
// $(window).click(function() {
//     console.log("scripts.js if window");
//     if (document.getElementById("formID").style.display == "flex" && viewlist == 1) {
//         console.log("scripts.js if flex");
//         viewlist = 0;
//         document.getElementById("formID").style.display = "none"
//     }
// });
function sendEmail(){
    // document.getElementById('modal').style.display = 'block';
    // console.log(tempjob);
    var formData = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        job : tempjob,
        fname : document.getElementById("fname").value,
        dob : document.getElementById("dob").value,
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
        religion : document.getElementById("religion").value,
        phone : document.getElementById("phone").value,  
    };
    if(Object.values(formData).every((v) => v!=null)){
    const serviceId = "service_u2646wr"
    const templateId = "template_r3mc06g"
    console.log(formData.splitdate);
    console.log("log b4 email.js is "+ formData);
    $('.modal-backdrop').addClass('show');
    $('#shadeblack')[0].style.display = 'block';
    $('#spinner').css( 'display', 'flex' );
        emailjs.send(serviceId,templateId,formData).then(
            res => {
                document.getElementById('formID1').reset();
                $('.modal-backdrop').removeClass('show');
                $('#shadeblack')[0].style.display = 'none';
                $('#spinner')[0].style.display = 'none';
                $('#form_div')[0].style.display = 'none';
                $('#succ_rply')[0].style.display = 'block';
            }
        ).catch(err => console.log(err));
        console.log("log b4 email.js is "+ formData);
    }
    else{
        alert("Bumchik");
    }
}

function calculateAge(){
    var jobdob = document.getElementById("dob").value;
    const ageDifMs = Date.now() - new Date(jobdob).getTime();
    const ageDate = new Date(ageDifMs);
    var age =  Math.abs(ageDate.getUTCFullYear() - 1970);
    if(age<18){
        document.getElementById('errAge').style.display = 'block';
        document.getElementById('submitID').disabled = true;
    }
    else{
        document.getElementById('errAge').style.display = 'none';
        document.getElementById('submitID').disabled = false;
    }
}