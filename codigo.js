var contenido = ""
var contenido2 = ""
var momento2 = false
var r = 0
const op = 0
haceSuma = false
haceResta = false
haceMulti = false
haceDivi = false


function enviar(id) {
    if(momento2) {
        contenido2 = contenido2 + id
        document.getElementById("res").innerHTML=contenido2
    } else {
        contenido = contenido+id
        document.getElementById("res").innerHTML=contenido
    }
}

function myFunction(op) {
    console.log("entro a funcion operacion")
    switch (op) {
        case 1:
            console.log("entro a suuuuma")
            momento2 = true
            document.getElementById("res").innerHTML=""
            haceSuma = true
            break;
        case 2:
            console.log("entro a resta")
            momento2 = true
            document.getElementById("res").innerHTML=""
            haceResta = true
            break;
        case 3:
            console.log("entro a multi")
            momento2 = true
            document.getElementById("res").innerHTML=""
            haceMulti = true
            break;
        case 4:
            console.log("entro a div")
            momento2 = true
            document.getElementById("res").innerHTML=""
            haceDivi = true
            break;
    }
}


function Igual() {
        if (haceSuma) {
            r = parseInt(contenido) + parseInt(contenido2);
            console.log('entro a sumaaaaa')
        } 
        if (haceResta) {
            r = parseInt(contenido) - parseInt(contenido2);
            console.log('entro a restaaaaa')
        }
        if (haceMulti) {
            r = parseInt(contenido) * parseInt(contenido2);
            console.log('entro a multiiiii')
        } 
        
        if (haceDivi) {
            r = parseInt(contenido) / parseInt(contenido2);
            console.log('entro a diviiiii')
        }
        document.getElementById("res").innerHTML=r
}

function borrar() {
    document.getElementById('res').innerHTML = ""
    contenido = ""
    contenido2 = ""
    momento2 = false
}