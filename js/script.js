do {

    const materias = ["matematica", "literatura", "historia", "programacion", "fisica", "quimica", "biologia", "ingles", "taller", "sociales"];
    var continuar = "";
    var ingresarNota;
    let promedio = 0;
    var suma = 0;

    var nombreTutor = prompt("Cual es el nombre del tutor?");

    var nnotas = prompt("Indicar la cantidad de notas que va ingresar de las materias");

    let faltas = prompt("Cuantas veces falto el alumno?"); // si el Alumno falto menos de 8 veces debe recursar

    for (i = 0; i < nnotas; i++) {

        var notas = parseInt(prompt("Las nota que usted ingreso es de la materia llamada: " + materias[i]));
        suma = suma + notas;

    }


    function promedio1(n1, n2) {
        var promedio1 = 0;
        promedio1 = n1 / n2;
        return promedio1;

    }

    var miPromedio = promedio1(suma, nnotas);

    if (faltas < 8 && miPromedio > 6) {

        alert("El alumno Julian Sanchez aprobo y no debe recursar en CoderHouse");

    } else {

        alert("El Alumno Julian Sanchez debe recursar en CoderHouse");

    }

    continuar = prompt("Desea " + nombreTutor + " continuar?");


} while (continuar == "si");









