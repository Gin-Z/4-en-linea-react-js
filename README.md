Proyecto hecho en React + Javascript.
Está basado en el código del tateti de este mismo repositorio. Se refactorizó el código para tener mayor legibilidad y mantenibilidad.
Este proyecto usa useState, useEffect, hooks personalizados y localstorage.
Algunas funciones extras:
* Muestra un flash rojo al actualizar el valor de un Square.
* Resalta en verde a los Square de la combinación ganadora.
* Hace focus en el h2 cuando hay un ganador o empate.
* Se implementó un botón que muestra un modal con las reglas del juego.
* Se arregló un bug que permitía seguir jugando después de darle refresh a la página. Aunque hubiera ganador, igual permitía actualizar el Square. Ahora no se permite actualizar cuando hay un ganador o empate.
Enlace a la aplicación: https://4enlineajs.netlify.app/
