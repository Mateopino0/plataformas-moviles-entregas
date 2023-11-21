var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};
var personaEjemplo = {
    "apellido": "Pino",
    "nombre": "Franco",
    "edad": 17,
};
/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre
 * - `apellido`: string, con el apellido
 * - `edad`: numero entero, con la edad de la persona
 * - `documento`: numero entero, con el documento de la persona
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    let personaNueva = {
      "nombre": nombre,
      "apellido": apellido,
      "edad": edad,
      "documento": documento
    };
    return personaNueva;
  }
  
  console.log("crearPersona():", crearPersona("Juan", "Pérez", 20, 123456));
  


/**
 * 02 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    return persona.apellido + ", " + persona.nombre;
  }
  
  console.log("nombreCompletoDePersona():", nombreCompletoDePersona(personaEjemplo)); // Retorna "Perez, Juan"
  

/**
 * 03 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    const personaConUnAñoMas = { ...persona, edad: persona.edad + 1 };
    return personaConUnAñoMas;
  }
  
  console.log("felizCumpleaños():", felizCumpleaños(personaEjemplo));
  

/**
 * 04 - sinDocumento
 * 
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
    const { documento, ...personaSinDocumento } = persona;
    return personaSinDocumento;
  }
  
  console.log("sinDocumento():", sinDocumento(personaEjemplo));
