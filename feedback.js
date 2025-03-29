function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").ariaValueMax,
        email_id : document.getElementById("email_id").ariaValueMax,
        message : document.getElementById("message").value
    }
    emailjs.send("service_yqtsufp", "template_reaj6p8", params).then(function (res) {
        alert("Sucess! " + res.status);
        window.location.href="dash.html";
    })
}