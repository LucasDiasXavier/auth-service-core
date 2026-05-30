  // Funcionalidade de toasts com biblioteca
window.showSuccess = function(msg) {
    Swal.fire({ 
        title: 'Sucesso!', 
        text: msg, 
        icon: 'success', 
        confirmButtonColor: '#2563eb' 
    }).then(() => {
        window.location.href = 'login.html';
    });
};