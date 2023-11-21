var listaNumerosEjemplo = [2,4,6,-1,5,-4,0];


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden inverso al que fueron recibidos.
 * 
 * Ejemplos:
 * - invertirLista([2,3,4]) retorna [4,3,2]
 */
function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
  }
  
  const listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];
  console.log("invertirLista([2, 3, 4]): ", invertirLista([2, 3, 4])); 
  console.log("invertirLista(listaNumerosEjemplo): ", invertirLista(listaNumerosEjemplo)); 
  


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor calculado de promedio para los números en la lista recibida.
 * 
 * Ejemplos:
 * - calcularPromedio([2,3,4]) retorna 3
 */
function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) {
      return 0;
    }
  
    const suma = listaDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = suma / listaDeNumeros.length;
    return promedio;
  }
  
  const listaNumerosEjemplo = [2, 3, 4];
  console.log("calcularPromedio([2, 3, 4]): ", calcularPromedio([2, 3, 4])); // Retorna 3
  console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo)); // Retorna 3
  


/**
 * Recibe
 * - `inicio`: un número, con el valor inicial de la lista
 * - `fin`: un número, con el valor final de la lista
 * 
 * Retorna: 
 * - una lista (array) con valores numéricos en secuencia, desde `inicio` hasta `fin`.
 * 
 * Ejemplos:
 * - crearListaDeNumeros(1,5) retorna [1,2,3,4,5]
 * - crearListaDeNumeros(3,6) retorna [3,4,5,6]
 * - crearListaDeNumeros(2,2) retorna [2]
 */
function crearListaDeNumeros(inicio, fin) {
    const lista = [];
    for (let i = inicio; i <= fin; i++) {
      lista.push(i);
    }
    return lista;
  }
  
  // Ejemplo de uso:
  console.log("crearListaDeNumeros(2, 5): ", crearListaDeNumeros(2, 5)); // Retorna [2, 3, 4, 5]
  

/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden decreciente (de mayor a menor).
 * 
 * Ejemplos:
 * - ordenarDeMayorAMenor([2,-1,4]) retorna [4,2,-1]
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.sort((a, b) => b - a);
  }
  
  const listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];
  console.log("ordenarDeMayorAMenor([2, 3, 4]): ", ordenarDeMayorAMenor([2, 3, 4])); // Retorna [4, 3, 2]
  console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo)); // Retorna la lista ordenada de mayor a menor
  


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor del numero más grande contenido en la lista recibida.
 * 
 * Ejemplos:
 * - encontrarNumeroMayor([2,3,4]) retorna 4
 */
function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
  }
  
  const listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];
  console.log("encontrarNumeroMayor([2, 3, 4]): ", encontrarNumeroMayor([2, 3, 4])); // Retorna 4
  console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo)); // Retorna el número más grande en la lista
  


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una lista (array) de palabras (string), con los mismos valores que la lista recibida pero ordenados de manera creciente de acuerdo a su cantidad de caracteres.
 * 
 * Ejemplos:
 * - ordenarPalabrasPorLongitud(['abc', 'a', 'ab']) retorna ['a', 'ab', 'abc']
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.sort((a, b) => a.length - b.length);
  }
  
  console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab'])); // Retorna ['a', 'ab', 'abc']
  


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una palabras (string) que dentro del listado tenga la menor cantidad de caracteres de longitud. En caso de que haya varias palabras con la misma longitud, se puede devolver la primera encontrada.
 * 
 * Ejemplos:
 * - encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c']) retorna 'a'
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    if (listaDePalabras.length === 0) {
      return null; // Retorna null si la lista está vacía.
    }
  
    let palabraMasCorta = listaDePalabras[0];
  
    for (let i = 1; i < listaDePalabras.length; i++) {
      if (listaDePalabras[i].length < palabraMasCorta.length) {
        palabraMasCorta = listaDePalabras[i];
      }
    }
  
    return palabraMasCorta;
  }
  
  // Ejemplo de uso:
  console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c'])); // Retorna 'a'
  


/**
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista (array) de números, conteniendo sólo los valores positivos de la lista de números recibida.
 * 
 * Ejemplos:
 * - filtrarSoloPositivos([1,-1,2]) retorna [1,2]
 */
function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => numero > 0);
  }
  
  const listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];
  console.log("filtrarSoloPositivos([1, -1, 0]): ", filtrarSoloPositivos([1, -1, 0])); // Retorna [1]
  console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo)); // Retorna [2, 4, 6, 5]
  

/**
 * Recibe
 * - `listaDeNotas`: una lista (array) de números con valores entre 1 y 10.
 * 
 * Retorna: 
 * - un numero, con la cantidad de notas que superan el criterio de aprobación.
 * 
 * Ejemplos:
 * - contarAprobados([10,2,9]) retorna 2
 */
function contarAprobados(listaDeNotas) {
    const notasAprobadas = listaDeNotas.filter(nota => nota >= 5);
    return notasAprobadas.length;
  }
  
  console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9])); // Retorna 4
  


/**
 * Recibe
 * - `listaDeValores`: una lista (array) de valores de distintos tipos.
 * 
 * Retorna: 
 * - una lista (array) conteniendo sólo los valores que son considerados 'truthy' por el lenguaje JavaScript
 * 
 * Ejemplos:
 * - filtrarSoloTruthy(["Hola", "", 0, 1]) retorna ["Hola", 1]
 */
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => !!valor);
  }
  
  console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}])); // Retorna ["Hola", 1, -1, [], {}]
  


/**
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (strings).
 * 
 * Retorna: 
 * - Una oración (string), donde se enumeran cada una de las palabras recibidas en la lista.
 * - Bonus: una oración correctamente formada debería empezar en mayúscula, terminar con punto, y además el ultimo elemento de enumeración deberia estar separado con "y".
 * 
 * Ejemplos:
 * - enumerarLista(["Han", "Leia", "Luke", "Yoda"]) "Han, Leia, Luke y Yoda."
 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
      return ""; 
    }
  
    if (listaDePalabras.length === 1) {
      return listaDePalabras[0] + "."; 
    }
  
    const oracion = listaDePalabras.slice(0, -1).join(", ") + " y " + listaDePalabras[listaDePalabras.length - 1] + ".";
    return oracion.charAt(0).toUpperCase() + oracion.slice(1); 
  }
  
  // Ejemplo de uso:
  console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"])); // Retorna "Han, Leia, Luke y Yoda."
  