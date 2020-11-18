# Hito número 5. Uso de sistemas serverless.

Cuando hablamos de serverless nos referimos a un modelo de computación en la nube en el cual se virtualiza una unidad mínima de ejecución (**una sola función**). Por defecto, dicha función se ejecutará con una llamada tipo *REST* (*HTTP*), ya que cuando hablamos de *REST* nos referimos a la comunicación o interación entre sistemas independientes y está inspirado en el protocolo *HTTP*.

Serverless al tratarse de la activación de una única función, tiene una activación muy rápida.

Algunos sistemas que ofrecen serverless son los siguientes:
+ AWS Lambda
+ Cloud Functions for Firebase
+ Azure functions

En nuestro caso, nos centraremos y utlizaremos [Vercel](https://vercel.com/) y [Netlyfy](https://www.netlify.com).

Dado que dichas funciones serverless son bastantes limitadas en cuanto a recursos, lenguajes de programación que se pueden utilizar y desacoplamiento del resto de la aplicación, se suelen utilizar para casos de uso muy específicos.

## Ejercicio 1.
### Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.

##### Vercel

![captura-registro](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel1.png)

Para poder trabajar en local, nos deberemos descargar el *CLI*, para ello, he ejecutado `npm i -g vercel` siguiendo la [documentación](https://vercel.com/download).

![captura-cli](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel2.png)

##### Firebase

![captura-registro](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/firebase1.png)

En este caso, el *CLI* lo instalamos con `npm install -g firebase-tools` y para trabajar en local, también deberemos instalar `firebase-admin` y `firebase-functions`. [Documentación](https://firebase.google.com/docs/functions/local-emulator).

## Ejercicio 2.
### Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.

Para ello, he creado un repositorio de prueba, [Testing-Vercel](https://github.com/sergiovp/Testing-Vercel).

Podemos instalar *Vercel* en todos los repositorios de nuestro GitHub, en este caso, únicamente lo instalaremos en el repositorio anteriormente mencionado, que es en el que haremos los ejemplos.

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel4.png)

Las pruebas que haremos serán básicas. Podemos verlas en el repositorio [Testing-Vercel](https://github.com/sergiovp/Testing-Vercel):

+ [hello_test.ts](https://github.com/sergiovp/Testing-Vercel/blob/main/api/hello_test.ts) simplemente imprimirá por pantalla un hola mundo.

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel7.png)

+ [date_test.ts](https://github.com/sergiovp/Testing-Vercel/blob/main/api/date_test.ts) imprimirá la fecha actual.

En este caso, he trabajo en local como podemos comprobar:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel5.png)

Comprobamos el correcto funcionamiento en local:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel6.png)

Tras lo cual, realizamos el commit y lo podemos comprobar con la url que vercel nos asignó para el repositorio:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/vercel8.png)

## Ejercicio 3.
### Tomar alguna de las funciones de prueba de Netlify, y hacer despliegues de prueba con el mismo.

Antes de nada, nos damos de alta en *Netlify*.

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/netlify1.png)

Instalamos la *CLI* con `npm install netlify-cli -g`.

Al igual que en el caso de Vercel, he creado un repositorio de pruebas. [Testing-Netlify](https://github.com/sergiovp/Testing-Netlify).

Tenemos los siguientes ficheros de pruebas:

+ [hello.js](https://github.com/sergiovp/Testing-Netlify/blob/main/funciones/hello.js). Típico hola mundo.

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/netlify2.png)

+ [sort_vector.js](https://github.com/sergiovp/Testing-Netlify/blob/main/funciones/sort_vector.js). Pequeña función que muestra un vector sin ordenar y después lo ordena.

Para este caso trabajaremos en local:

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/netlify3.png)

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/netlify4.png)

Tras comprobar que funciona, hacemos commit y accedemos mediante la url que nos ha proporcionado *Netlify*.

![captura](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/netlify5.png)
