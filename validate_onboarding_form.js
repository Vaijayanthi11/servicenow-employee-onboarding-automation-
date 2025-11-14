function onSubmit() {
    var email = g_form.getValue('email');
    if (!email.includes("@")) {
        alert("Enter a valid email!");
        return false;
    }
}
