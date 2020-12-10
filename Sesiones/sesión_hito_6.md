# Hito número 6. Microservicios.

Un microservicio es una aplicación capaz de trabajar de forma autónoma con una parte del dominio del problema. Los diferentes microservicios trabajrán con diferentes estructuras de datos y se comunicarán entre sí usando distintas interfaces, como por ejemplo peticiones *REST* o *SOCKETS*.

En este caso, trabajaremos con interfaces *REST*.

A la hora de desarrollar un microservicio, podemos usar *microframeworks* teniendo en cuenta aspectos como *configuración*, *rutas* y *middleware*.

Un microservicio se organiza alrededor del concepto de ruta. Las rutas describen objetos, no acciones. Las acciones se van a expresar mediante HTTP.

Las rutas llaman a funciones. Pero entre una ruta y una función a la que se llama puede se puede insertar un *middleware*, que no son más que llamadas o *hooks* que se producen antes o después de la activación de la ruta. Estos *middleware* se pueden usar para autentificación o registro de logs, por ejemplo.

## Ejercicio 1.
### Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

En este ejercicio, haremos un pequeño ejemplo en el que probaremos la *configuración externa*. *etcd* simplemente es un servidor de configuración distribuida. Deberemos de establecer la configuración antes de lanzarlo (en nuestro caso la configuración será establecer una clave) y después la deberemos leer (en nuestro caso, desde el fichero [test_etcd.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/test_etcd.js).

Para instalar etcd, en mi caso, al usar una distribución basada en Debian, tan solo debo ejecutar `apt install etcd`.
Para comprobar que la instalación ha ido bien, podemos comprobar la versión:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/etcd_version.png)

En cuanto a las bibliotecas, le podemos echar un vistazo a [este enlace](https://etcd.io/docs/v3.3.12/integrations/) en el que veremos bibliotecas para Node, el lenguaje escogido para realizar el ejemplo. En mi caso, me he decantado por usar [etcd3](https://github.com/mixer/etcd3).

El fichero de ejemplo con el código lo encontramos en este mismo repositorio, [test_etcd.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/test_etcd.js).

Como podemos ver en el repositorio de [etcd3](https://github.com/mixer/etcd3), lo podemos instalar en nuestro proyecto con `npm install --save etcd3`, tras haber iniciado el proyecto en node con `npm init`.

También se ha seguido el ejemplo propuesto en el repositorio de github de *etcd3* para elaborar nuestro ejemplo.

En cuanto a la documentación de *etcdctl* he seguido su [repositorio de github](https://github.com/etcd-io/etcd/tree/master/etcdctl).

Siguiendo la recomendación de los apuntes de teoría, escribimos `export ETCDCTL_API=3` para que funcione correctamente el cliente.

Para almecenar la clave, ejecutamos `etcdctl put <key> <valor>`:
~~~
vela@vela-PC:~/IV-Ejercicios/Sesiones/ficheros_hito_6$ etcdctl put "clave" "Funciona bien jaja"
OK
~~~

A continuación podemos obtener dicha clave haciendo uso del CLI *etcdctl*:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/get_clave.png)

Pero la gracia del ejercicio es sacar dicha clave haciendo uso del pequeño programa implementado, para ello, he introducido un script en el `package.json` para ejecutar el programa. El comando es `npm run ejercicio1` y como resultado obetenemos lo siguiente:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/funciona_bien.png)

Como vemos, hemos recuperado la clave con nuestro programa de ejemplo.

## Ejercicio 2.
### Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso. 

Para instalar express, podemos seguir el guión de teoría o [este tutorial](https://expressjs.com/es/starter/installing.html).

Hay montones de ejemplos básicos para implementar una pequeña aplicación con express. En este caso, me he basado en [este turorial](https://expressjs.com/es/starter/hello-world.html) para realizar el ejercicio.

Como se nos propone que devolvamos alguna estructura de datos de nuestro proyecto, he copiado el archivo [empleado.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/empleado.js) del repositorio de mi proyecto en el directorio sobre el que estamos trabajando para realizar estos ejercicios [src](https://github.com/sergiovp/IV-Ejercicios/tree/main/Sesiones/ficheros_hito_6/src).

He creado el fichero [express_app.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/express_app.js) para correr la aplicación. En este fichero defino un objeto de mi clase Empleado y lo devuelvo.

Para ejecutarlo, podemos ejecutar el comando `npm run express`, obteniendo el siguiente resultado:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/express1.png)

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/express2.png)

## Ejercicio 3.
### Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

En este caso, seguiremos la 'filosofía' del ejercicio anterior. Tendremos la página 'index' (/) en la cual mostraremos los datos de un empleado creado previamente (como en el anterior ejercicio). Para este caso, incorporaremos una nueva URL (/empleado) la cual deberá recibir 4 parámetros (id, nombre, apellido y email).
En caso de no introducir los 4 parámetros, mostraremos un mensaje de error. Si los 4 parámetros han sido introducidos, mostraremos dichos datos como veremos a continuación.

El fichero en cuestión es [express_variables.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/express_variables.js). 

Para ejecutarlo, ejecutamos `npm run express_var`.

Si no introducimos parámetros:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/express_ejer3_1.png)

Si introducimos los parámetros correctos:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/express_ejer3_2.png)

## Ejercicio 4.
### Crear pruebas para las diferentes rutas de la aplicación.

Como para nuestro proyecto estamos utilizando Mocha + Chai para los tests, usaremos dichos módulos en este caso también para realizar los tests.

El fichero en cuestión en el que encontramos los tests es [test_app.js](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/ficheros_hito_6/src/test/test_app.js).

Como resultado, podemos ver la siguiente captura:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/tests1.png)

Para correr los tests ejecutamos `npm test`.
