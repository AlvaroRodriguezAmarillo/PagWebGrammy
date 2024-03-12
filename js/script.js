document.addEventListener('DOMContentLoaded', function() {
    // Solicitamos la edad al usuario mediante un cuadro de diálogo
    var age = prompt('Por favor, ingresa tu edad:');
    
    // Verificamos si la edad es válida y si el usuario puede ingresar a la web
    if (age >= 18) {
        // Si la edad es mayor o igual a 18, le damos la bienvenida 
        alert('¡Bienvenido a la web oficial de "En busca del Grammy"! ¿Serás capaz de ayudar a Anuel con sus Grammys?');
    } else {
        // Si la edad es menor de 18, enviamos al usuario a una web según su rango de edad
        if (age >= 0 && age <= 3) {
            window.location.href = 'https://www.dodot.es/';
        } else if (age >= 4 && age <= 6) {
            window.location.href = 'https://www.pocoyo.com/';
        } else if (age >= 7 && age <= 12) {
            window.location.href = 'https://www.wizardingworld.com/';
        } else if (age >= 13 && age <= 17) {
            window.location.href = 'https://www.lego.com/';
        } else {
            // Mensaje de error
            alert('La edad ingresada no es válida. Por favor, ingresa una edad válida.');
        }
    }
});
