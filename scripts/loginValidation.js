const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {

        errorMessage.textContent = "Campo obrigatório.";
        errorMessage.style.display = "block";

        emailInput.style.border = "2px solid #ef4444";

        setTimeout(function () {
            emailInput.classList.remove('error');
            errorMessage.style.display = "none";
        }, 4000);

        return;
    }

    if (!emailInput.validity.valid) {

        errorMessage.textContent = "Insira um e-mail válido.";
        errorMessage.style.display = "block";

        emailInput.style.border = "2px solid #ef4444";

        return;
    }


    errorMessage.style.display = "none";

    emailInput.style.border = "2px solid #2563eb";

    console.log("Formulário enviado com sucesso!");



        return;
});

const formpassword = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error"); 

passwordInput.addEventListener("blur", (event) => { 

    event.preventDefault();

    const password = passwordInput.value.trim(); 

    if (password === "") {
        passwordError.textContent = "Campo obrigatório.";
        passwordError.style.display = "block";
        passwordInput.style.border = "2px solid #ef4444";

        setTimeout(function () {
            passwordInput.classList.remove('error');
            passwordError.style.display = "none";
        }, 4000);
        
        return;
    }

    if (!passwordInput.validity.valid) {
        passwordError.textContent = "Insira uma senha válida.";
        passwordError.style.display = "block";
        passwordInput.style.border = "2px solid #ef4444";
        return;
    }

    passwordError.style.display = "none";
    passwordInput.style.border = "2px solid #2563eb";

    console.log("Formulário enviado com sucesso!");

  

        return;
});