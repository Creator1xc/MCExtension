function sendEmail(){
    var params = {
        email: document.getElementById("email").value,
        build_id: document.getElementById("build_id").value,
        message: document.getElementById("reason").value,
        
        
    };
    const serviceId = "service_a1yyeis"
    const templateId = "template_wgzbw6m"
    alert(build_id.length)
    if(build_id.length >= 15)
    {
        alert("Erorr");
        return;
    }

    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("email").value = "";
         document.getElementById("build_id").value = "";
         document.getElementById("reason").value = "";
         console.log(res);
         alert("the email has sent successfully!");
     })
     .catch((err) => console.log(err))
}

