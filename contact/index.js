const sendEmail = (e) => {
    e.preventDefault();
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
    console.log("log b4 email.js is "+ formData);
    emailjs.send(serviceId,templateId,formData).then(
        res => {
            // document.getElementById("name").value = "",
            // document.getElementById("email").value = "",
            // document.getElementById("job").value = "",
            document.getElementById('formID').reset();
            alert("message succesfull");
            console.log(formData);
        }
    ).catch(err => console.log(err));
    console.log("log b4 email.js is "+ formData);
}