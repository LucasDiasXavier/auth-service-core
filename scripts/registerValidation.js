// registerValidation.js
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const indicators = document.querySelectorAll('.step-indicator');
    let currentStep = 0;

    const updateUI = (index) => {
        indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
    };

    const validateStep = (index) => {
        const inputs = steps[index].querySelectorAll('input[required]');
        let isValid = true;
        inputs.forEach(input => {
            const error = document.getElementById(`${input.id}-error`);
            if (!input.value.trim()) {
                input.classList.add('input-error');
                if (error) error.style.display = 'block';
                isValid = false;
                setTimeout(() => {
                    input.classList.remove('input-error');
                    if (error) error.style.display = 'none';
                }, 4000);
            }
        });
        return isValid;
    };

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-next')) {
            if (validateStep(currentStep)) {
                steps[currentStep].classList.remove('active');
                currentStep++;
                steps[currentStep].classList.add('active');
                updateUI(currentStep);
            }
        }
        if (e.target.classList.contains('btn-prev')) {
            steps[currentStep].classList.remove('active');
            currentStep--;
            steps[currentStep].classList.add('active');
            updateUI(currentStep);
        }
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // Chama a função global definida em notifications.js
            window.showSuccess("Conta criada com sucesso!");
        }
    });
});