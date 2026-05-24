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
});