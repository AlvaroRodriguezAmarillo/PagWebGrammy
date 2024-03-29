document.addEventListener('DOMContentLoaded', function() {
    var age;
    var validAge = false;

    // Mientras la edad no sea válida o el usuario cancele, seguir solicitando al usuario que ingrese su edad
    while (!validAge) {
        // Solicitamos la edad al usuario mediante un cuadro de diálogo
        age = prompt('Por favor, ingresa tu edad:');

        // Verificamos si el valor ingresado es un número
        if (age === null) {
            // Si el usuario pulsa cancelar, redirigimos a la página de Dodot y salimos del bucle
            window.location.href = 'https://www.dodot.es/';
            break;
        } else if (!isNaN(age)) {
            validAge = true; // La edad es válida, salimos del bucle
        } else {
            // Mostramos un mensaje de error y permitimos que el usuario ingrese de nuevo
            var retry = confirm('El valor ingresado no es un número. ¿Deseas intentarlo de nuevo?');
            if (!retry) {
                // Si el usuario elige no intentarlo de nuevo, redirigimos a la página de Dodot y salimos del bucle
                window.location.href = 'https://www.dodot.es/';
                break;
            }
        }
    }

    // Verificamos si la edad es válida y si el usuario puede ingresar a la web
    if (validAge) {
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
                alert('La edad ingresada no es válida.');
            }
        }
    }
});

