var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lanzone",
        "nombre": "Candela",
        "edad": 19,
        "documento": 23456
    },
    {
        "apellido": "Ramos",
        "nombre": "Micaela",
        "edad": 18,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Lucas",
        "edad": 21,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort((a,b) => {
        return a.apellido.localeCompare(b.apellido);
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    let listaNombres = [];

    for (let i=0; i<listaDePersonas.length; i++) {
        let nombreDePersona = listaDePersonas[i].nombre;
        listaNombres.push(nombreDePersona);
    }

    return listaNombres;

    // return listaDePersonas.map(p => p.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    let total = 0;
    for(let i=0; i<listaDePersonas.length; i++) {
        total += listaDePersonas[i].edad;
    }
    return total / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    
        return listaDePersonas.filter(persona => persona.edad > 18);
    }
    
    

console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function lapersonaMayor(listaDePersonas) {
    if (listaDePersonas.length === 0) {
        // Si la lista está vacía, no hay persona mayor
        return null;
    }

    // Inicializamos la persona mayor con la primera persona de la lista
    let lapersonaMayor = listaDePersonas[0];

    // Iteramos sobre las demás personas para encontrar a la mayor
    for (let i = 1; i < listaDePersonas.length; i++) {
        if (listaDePersonas[i].edad > lapersonaMayor.edad) {
            lapersonaMayor = listaDePersonas[i];
        }
    }

    return lapersonaMayor;
}
console.log("laPersonaMayor()", lapersonaMayor(listaPersonasEjemplo));