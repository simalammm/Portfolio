function onFormSubmit(e) {
    e.preventDefault
    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const message = $("#inp-message")

    if (!$(email).val()) {
        alert("Email is Required")
    } else if (!$(subject).val()) {
        alert("Subject is Required")
    } else if (!$(message).val()){
        alert("Message is Required")
    } else {
        alert("Form submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }

}