//Primera pre-entrega CH

//Solicitud de nombre para ingresar al website
let repeat = false;
let preguntarUser; 

function saludo() {
    while(true) {
        preguntarUser = prompt("Hola! Ingrese su nombre, por favor: ");
        if(preguntarUser == '') {
            alert("Ingrese su nombre, por favor");
        } else {
            alert("Bienvenido " + preguntarUser + " a CapStyle, gracias por elegirnos!!");
            break;
        }
    }
}

saludo();


