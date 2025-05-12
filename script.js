/*              MÃ‰TODO .forEach()        

El primer mÃ©todo de iteraciÃ³n que vamos a aprender es .forEach().

Acertadamente nombrado, .forEach() ejecutarÃ¡ el mismo cÃ³digo para cada 
elemento de una matriz.*/

const groceries = ["brown sugar", "salt", "cranberries", "walnuts"];

groceries.forEach(function (groceryItem) {
  //callback function
  //groceryItem es el parÃ¡metro de la funciÃ³n de devoluciÃ³n de llamada.
  console.log(" - " + groceryItem);
});

/*El cÃ³digo anterior registrarÃ¡ una lista de compras con un formato correcto
en la consola.  Exploremos la sintaxis para invocar a .forEach().

    + groceries.forEach() llama al mÃ©todo forEach en la matriz groceries.
    + .forEach() toma un argumento de una funciÃ³n de devoluciÃ³n de llamada.
      Recuerde que una funciÃ³n de devoluciÃ³n de llamada es una funciÃ³n
      que se pasa como argumento a otra funciÃ³n.
    + El bucle .forEach() recorre las matriz y ejecuta la funciÃ³n de 
      devoluciÃ³n de llamada para cada elemento.
      Durante cada ejecuciÃ³n, el elemento actual se pasa como
      argumento a la funciÃ³n de devoluciÃ³n de llamada.
    + El valor de retorno para .forEach() siempre serÃ¡ undefined.
    
Otra forma de pasar una devoluciÃ³n de llamada .forEach() es utilizar la
sintaxis de funciÃ³n de flecha.*/

groceries.forEach((groceryItem) => console.log(groceryItem));

/*Tambien podemos definir una funciÃ³n de antemano para utilizarla
como funciÃ³n de devoluciÃ³n de llamada */

function printGrocery(element) {
  console.log(element);
}

groceries.forEach(printGrocery);

/*El ejemplo anterior utiliza una declaraciÃ³n de funciÃ³n, pero tambiÃ©n
  puedes utilizar una expresiÃ³n de funciÃ³n o una funciÃ³n de flecha.
  
  Los tres fragmentos de cÃ³digo hacen los mismo.  En cada mÃ©todo de 
  iteraciÃ³n de array, podemos usar cualquiera de los tres ejemplos
  para proporcionar una funciÃ³n de devoluciÃ³n de llamada como 
  argumento del iterador.  Es importante conocer las diferentes maneras
  de pasar una funciÃ³n de devoluciÃ³n de  llamada (callback) como argumentos
  de iteradores.  Debido a que los desarrolladores tienen diferentes 
  preferencias estilÃ­sticas, no obstante, debido a la fuerte adopciÃ³n de
  ES6, utilizaremos la sintaxis de funciones de flecha en los ejercicios
  posteriores. 
  */

/*Ejercicio: 
    Itera sobre la matriz fruits para registrar 'I want to eat a ' el nombre
    de cada fruta en la consola.  Por ejemplo, 'I want to eat a banana'.
  */
const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruitItem) => console.log(`I want to eat a ${fruitItem}`));
