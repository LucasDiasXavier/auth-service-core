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
        fullnameInput.style.border = "2px solid #ef4444";

        fullnameInput.focus();

        setTimeout(function () {
            fullnameInput.classList.remove('error');
            errorMessage.style.display = "none";
        }, 4000); // Cronômetro  UX

        return;
    }
});

document.getElementById('register-form').addEventListener('submit', function (event) {

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('email-error');

    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';

    if (emailInput.value.trim() === "") {

        event.preventDefault();

        emailInput.classList.add('error');
        errorMessage.textContent = 'campo obrigatório.';
        errorMessage.style.display = 'block';
        emailInput.style.border = "2px solid #ef4444";

        emailInput.focus();

        setTimeout(function () {
            emailInput.classList.remove('error');
            errorMessage.style.display = "none";
        }, 4000);

        return;
        
    }
});

document.getElementById('register-form').addEventListener('submit', function (event) {

    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('password-error');

    passwordInput.classList.remove('error');
    errorMessage.style.display = 'none';

    if (passwordInput.value.trim() === "") {

        event.preventDefault();

        passwordInput.classList.add('error');
        errorMessage.textContent = 'campo obrigatório.';
        errorMessage.style.display = 'block';
        passwordInput.style.border = "2px solid #ef4444";

        passwordInput.focus();

        setTimeout(function () {
            passwordInput.classList.remove('error');
            errorMessage.style.display = "none";
        }, 4000);

        return;
    }
});

document.getElementById('register-form').addEventListener('submit', function (event) {

    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('confirm-password-error');

    confirmPasswordInput.classList.remove('error');
    errorMessage. style.display = 'none';

    if(confirmPasswordInput.value.trim() === "") {

        event.preventDefault();

        confirmPasswordInput.classList.add('error');
        errorMessage.textContent = 'campo obrigatório.';
        errorMessage.style.display = 'block'
        confirmPasswordInput.style.border = '2px solid #ef4444';
        
        confirmPasswordInput.focus();

        setTimeout(function () {

            confirmPasswordInput.classList.remove('error');
            errorMessage.style.display = 'none';
        }, 4000);

        return;
    
    
    }


    
});
