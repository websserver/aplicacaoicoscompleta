document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o navegador suporta acesso à câmera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("Câmera suportada!");
    } else {
        alert("O seu navegador não suporta acesso à câmera. Por favor, tente usar um navegador diferente como Chrome ou Firefox.");
    }
    
    // Monitoriza eventos do AR.js
    const marker = document.querySelector('a-marker');
    const instructions = document.querySelector('.instructions p');
    
    marker.addEventListener('markerFound', function() {
        console.log('Marcador HiLo detectado!');
        instructions.textContent = "HiLo Card detectado! Observe o modelo 3D.";
    });
    
    marker.addEventListener('markerLost', function() {
        console.log('Marcador HiLo perdido!');
        instructions.textContent = "Aponte a câmera para um cartão HiLo para ver o modelo 3D";
    });

    // Função para lidar com erros
    function handleError(error) {
        console.error('Erro ao aceder à câmera: ', error);
        alert('Ocorreu um erro ao aceder à câmera. Certifique-se de que concedeu as permissões necessárias.');
    }
}); 