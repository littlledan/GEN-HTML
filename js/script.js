let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let feedback = document.querySelector("#feedback")
let nomeOk = false
let emailOk = false
let feedbackOk = false

nome.style.width = "100%"
email.style.width = "100%"
feedback.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")

    if(nome.value.length < 3 && nome.value.length > 0){
        txt.innerHTML = "<h6>Nome Inválido!</h6>"
        txt.style.backgroundColor = "red"
        txtNome.style.display = "block"
    } else if(nome.value.length > 2){
        txt.innerHTML = "<h6>Nome Válido!</h6>"
        txt.style.backgroundColor = "green"
        txtNome.style.display = "block"
        nomeOk = true
    } else{
        txtNome.style.display = "none"
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
    txtEmail.innerHTML = "<h6>E-mail Inválido!</h6>"
    txtEmail.style.backgroundColor = "red"
    } else {
        txtEmail.innerHTML = "<h6>E-mail Válido!</h6>"
        txtEmail.style.backgroundColor = "green"
        emailOk = true
    }
}

function validaFeedback(){
    let txtFeedback = document.querySelector("#txtFeedback")

    if(feedback.value.length >= 100){
        txtFeedback.innerHTML = "<h6>Seu Feedback está muito grande!😭</h6>"
        txtFeedback.style.backgroundColor = "red"
        txtFeedback.style.display = "block"
    } else{
        txtFeedback.style.display = "none"
        feedbackOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && feedbackOk == true){
        alert ("Sett - Cê tá no meu ringue agora!(Feedback entregue com sucesso🔥).")
    } else{
        alert ("Sett - Dizem que se aprende muito apanhando. Se for verdade… Sou um baita professor.(Verifique os campos novamente💢).")
    }
}