let elLoginForm = document.querySelector(".login-form") 

elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        login:e.target.login.value,
        password:e.target.password.value
    }
    e.target.reset()
    if(data.login.toLowerCase() == "nurkat")
        console.log(data);
})