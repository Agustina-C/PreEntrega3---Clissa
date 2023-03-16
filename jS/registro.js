
function validarUsuario(user, password) {
    if(user.password === password){
        return true
    } else {
        return false
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const checkAccount = document.querySelector(".main-SignIn--btn")
const formSMS = document.querySelector(".main-Sign__form--sms")
checkAccount.addEventListener("click",function(e){
    e.preventDefault()
    const mail = document.querySelector(".main-Sign__input--email").value
    const password = document.querySelector(".main-Sign__input--password").value
    const existe = usuarios.some(u => u.mail === mail);
    if (existe) {
        const user = usuarios.find(u => u.mail === mail )
        const esValido = validarUsuario(user, password)
        if (esValido) {
            window.location.href = "./home.html"
        } else{
            formSMS.textContent = "Invalid password, try again"
            setTimeout(()=>formSMS.textContent = "", 5000)    
        }
    } else{
        formSMS.textContent = "Invalid user, try again or sign up "
        setTimeout(()=>formSMS.textContent = "", 5000)    
    }
})

