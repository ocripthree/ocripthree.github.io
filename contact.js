function pushDataLayer() {
    var emailElement = document.getElementById("email");
    var email = emailElement.value.trim(); // Remove espaços extras

    // Função para validar o formato do e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Verifica se o e-mail é válido antes de enviar ao DataLayer
    if (!isValidEmail(email)) {
        return;
    }

    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'form_contact_ok',
            'email': email
        });
    }
}
