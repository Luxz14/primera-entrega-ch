//Primera pre-entrega CH

//Solicitud de nombre para ingresar al website
let repeat = false; //Utilizamos una variable repeat para poder frenar el bucle en base de la condicion.
let preguntarUser; 

function saludo() {
    while(true) {
        preguntarUser = prompt("Hola! Ingrese su nombre, por favor: ");
        if(preguntarUser == '') { //Verificamos si el usuario no ingresa un string vacio
            alert("Ingrese su nombre, por favor");
        } else {
            alert("Bienvenido " + preguntarUser + " a CapStyle, gracias por elegirnos!!");
            break; //Detenemos el bucle una vez cumplido el else
        }
    }
}






//Compra final.
function comprarGorras() {
    let gorras = '';
    let talles = '';
    let precio = 0;
    let seguirComprando = true; 

    do {
        gorras = prompt('Que tipo de gorra le gustaria comprar: Caps, Sunhats, Beanies o Pilusos?');
        talles = prompt('Que talle prefiere: S, M, L o XL?');

        console.log(gorras)
        console.log(talles)

        switch (gorras) { //Utilizamos una sentencia switch para verificar diferentes opciones del usuario
            case 'Caps':
                precio = 19.29;
                alert('El precio de las Caps es de: $19.29');
                break;
            case 'Sunhats':
                precio = 29.99;
                alert('El precio de los Sunhats es de: $29.99');
                break;
            case 'Beanies':
                precio = 29.99;
                alert('El precio de los Beanies es de: $29.99');
                break;
            case 'Pilusos':
                precio = 19.99;
                alert('El precio de los pilusos es de: $19.99');
                break;
            default:
                precio = 0;
                alert('Haz ingresado algun dato incorrectamente, intentalo de nuevo!');
                break;
        }

        seguirComprando = confirm('Desea seguir comprando? Seleccione aceptar si su respuesta es afirmativa o cancelar si es negativa.'); //Utilizamos el metodo confirm para detener la compra del usuario y poder salirnos del bucle.

    } while (seguirComprando);
}


saludo();

//Presentacion luego del saludo
let alertPresentacion = alert('En CapStyle nos diferenciamos por nuestro detalle y empeño que le ponemos a la customizacion de gorras.');

comprarGorras();
