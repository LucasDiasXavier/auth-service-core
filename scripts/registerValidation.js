document.getElementById('register-form').addEventListener('submit', function (event) {

    const fullnameInput = document.getElementById('fullname');
    const errorMessage = document.getElementById('fullname-error');

    fullnameInput.classList.remove('error');
    errorMessage.style.display = 'none';

    if (fullnameInput.value.trim() === "") {
        event.preventDefault();

        fullnameInput.classList.add('error');
        errorMessage.textContent = "Campo obrigatório.";
        errorMessage.style.display = "block";

        fullnameInput.focus();

        setTimeout(function () {
            fullnameInput.classList.remove('error');
            errorMessage.style.display = "none";
        }, 4000); // Cronômetro  UX

        return;
    }
});