document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-pedidos");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
   
            console.log("Iniciando envío...");
            

            const destino = "Gracias.html"; 

   
            setTimeout(function() {
                window.location.href = destino;
            }, 1000); 
        });
    } else {
        console.error("No se encontró el formulario con id 'formulario-pedidos'");
    }
});