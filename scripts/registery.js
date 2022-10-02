function sendEmail(){
    var params = {
        email: document.getElementById("email").value,
        build_id: document.getElementById("build_id").value,
        message: document.getElementById("reason").value,
        
        
    };
    const serviceId = "service_a1yyeis"
    const templateId = "template_wgzbw6m"
    var button = document.getElementById("subbutton")
    if(params.build_id.length >= 15)
    {
        document.getElementById("error").innerHTML = "Error Sending: The Build-ID is longer than 15 Characters!"
        
        return;
    }
    if(params.email == "")
    {
        document.getElementById("error").innerHTML = "Error Sending: Your E-Mail is required to reply you!"

        return;
    }
    if(params.message == "")
    {
        document.getElementById("error").innerHTML = "Error Sending: You need type in your reason why youre joinign the Closed Beta Team!"

        return;
    }
    if(params.build_id.length <= 0)
    {
        document.getElementById("error").innerHTML = "Error Sending: You need to type in your Build-ID in order to recive your Key!"
        return;
    }
    button.disabled = true;
    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("email").value = "";
         document.getElementById("build_id").value = "";
         document.getElementById("reason").value = "";
         console.log(res);
         document.getElementById("error").innerHTML = "Successfully sending your E-Mail!";
         button.disabled = false;

     })
     .catch((err) => {
        document.getElementById("error").innerHTML = "Error Sending: " + err;
        button.disabled = false;
        
     })
}

