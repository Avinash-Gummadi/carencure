function sendEmail(){
    var formData = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        job : document.getElementById("job").value,
    };
    const serviceId = "service_u2646wr"
    const templateId = "template_r3mc06g"
    console.log("log b4 email.js is "+ formData);
    emailjs.send(serviceId,templateId,formData).then(
        res => {
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("job").value = "",
            alert("message succesfull");
            console.log(formData);
        }
    ).catch(err => console.log(err));
    console.log("log b4 email.js is "+ formData);
}