// Acceder al objeto WebApp de Telegram
const WebApp = window.Telegram.WebApp;

// Inicializar la Mini App
WebApp.ready();

// Configurar el botón principal de Telegram (opcional)
WebApp.MainButton.setText("Cerrar Mini App");
WebApp.MainButton.show();
WebApp.MainButton.onClick(() => {
    WebApp.close(); // Cierra la Mini App
});

// Obtener información del usuario
const user = WebApp.initDataUnsafe.user;
if (user) {
    document.querySelector("p").innerText = `Hola, ${user.first_name}! Esta es una Mini App en Telegram.`;
}

// Función para enviar datos al bot
function sendDataToBot() {
    // Enviar un mensaje al bot
    WebApp.sendData("¡Hola desde la Mini App!");
}
