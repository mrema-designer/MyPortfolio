document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o formulário de enviar normalmente
            
    var formData = new FormData(this); // Obter os dados do formulário
    var data = { // Preparar os dados para enviar por email
        service_id: 'portfolio', // ID do serviço de email
        template_id: 'portfolio', // ID do modelo de email
        user_id: 'aczszmjufe5T2IMtn', // ID do usuário
        template_params: { // Parâmetros do modelo de email
            'username': formData.get('name'), // Nome do remetente
            'email': formData.get('email'), // Email do remetente
            'message': formData.get('message') // Mensagem do remetente
        }
    };
            
    fetch('https://api.emailjs.com/api/v1.0/email/send', { // Enviar os dados para a API do EmailJS
        method: 'POST', // Método da requisição
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo da requisição
        },
        body: JSON.stringify(data) // Converter os dados para JSON
    })
    .then(function(response) { // Lidar com a resposta da requisição
        if (response.ok) { // Se a resposta for bem-sucedida
            alert('Your mail is sent!'); // Alerta de sucesso
        } else {
            alert('Oops... ' + response.statusText); // Alerta de erro com a mensagem de erro da resposta
        }
    })
    .catch(function(error) { // Capturar erros de requisição
        alert('Oops... ' + error); // Alerta de erro com a mensagem de erro
    });
});