let tarde

class alumnos {
    constructor(turno, año, curso, cantidad, nombres, calificacion,) {
        this.turno = turno;
        this.año = año;
        this.curso = curso;
        this.cantidad = cantidad,
        this.nombres = nombres,
        this.calificacion = parseFloat(calificacion);
    }
}    




function mostrarCuadrito() {
    for (let i = 0; i <= 5; i+=1){
        let calificacion = prompt("digita la calificacion a evaluar");
    
    
        if(Number(calificacion) == calificacion){
        
            if(calificacion > 0 && calificacion <= 10){
                if(calificacion < 3){
                        alert("recursar el modulo");
                }
                else if(calificacion <= 6){
                    alert("calificacion reprobada");
                }
                else if(calificacion == 7){
                    alert("calificacion suficiente");
                }
                else if(calificacion >= 8){
                    alert("calificacion excelente");
                }
            }
            else{
                alert("No es una calificacion dentro de el rango de 0 -10");
            }
        }
        //si la calificacion no es un numero mandamos el mensaje
        else{
            //si el usuario no coloca un valor dentro de la caja de el prompt
            if(calificacion != undefined){
                alert("introduce un valor numerico valido");
            }
        }
    }

}


mostrarCuadrito();        










