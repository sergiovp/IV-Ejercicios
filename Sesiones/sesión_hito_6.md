# Hito número 6. Microservicios.

Un microservicio es una aplicación capaz de trabajar de forma autónoma con una parte del dominio del problema. Los diferentes microservicios trabajrán con diferentes estructuras de datos y se comunicarán entre sí usando distintas interfaces, como por ejemplo peticiones *REST* o *SOCKETS*.

En este caso, trabajaremos con interfaces *REST*.

A la hora de desarrollar un microservicio, podemos usar *microframeworks* teniendo en cuenta aspectos como *configuración*, *rutas* y *middleware*.

## Ejercicio 1.
### Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

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
### 