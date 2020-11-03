# Hito número 4. Integración continua.

La integración continua es algún tipo de acción que se ejecuta cuando sucede algún evento en un repositorio. Normalmente, estos eventos son ejecutar los tests oportunos al código cada vez que se quiera añadir algo a la rama máster. Una vez que los tests pasan con éxito, el código añadido podrá pasar a producción.

Como vemos, la integración continua es un proceso muy importante en el desarrollo de software, más en concreto, al trabajar en la nube. De esta forma, se pueden detectar errores antes de ser añadidos a producción, aumentando la fiabilidad y calidad del código. La integración continua también nos ahorrará tiempo a la larga, ya que en caso de no realizar un sistema de tests, dichos tests los tendremos que hacer nosotros implícita y manualmente antes de integrar código nuevo. Sin embargo, de haber realizado un buen sistema de tests, estos se ejecutarán automáticamente tantas veces como cambios hagamos sin necesidad de preocuparnos.

Los ejercicios propuestos para este hito son los siguientes:

### 1. Darse de alta en algún sistema de integración continua. Muchos están conectados con GitHub por lo que puedes autentificarte directamente desde ahí. A través de un proceso de autorización, puedes acceder al contenido e incluso informar del resultado de los tests a GitHub.

En mi caso, voy a utilizar Travis como sistema de integración continua. Para dejar constancia de mi registro en la plataforma, adjunto las siguientes capturas de pantalla:

![captura_travis1](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis1.png)
![captura_travis2](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis2.png)

### 2. Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

De manera muy cómoda Travis permite especificar los repositorios a los que les quieres aplicar la integración continua, en mi caso, seleccionaré únicamente el repositorio de la asignatura.

![captura_travis3](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis3.png)

### 3. Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

Para este caso, al usar Travis, deberemos crear un fichero `.travis.yml` en nuestro repositorio.

~~~
vela@vela-PC:~/IV-OrganizeAndGo$ ls -l .travis.yml 
-rw-rw-r-- 1 vela vela 84 nov  3 10:39 .travis.yml
~~~

### 4. Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.

En este caso y a modo de prueba, se contigurará de forma sencilla el fichero:
~~~
language: node_js
node_js:
  - "14"
before_install:
  - npm install
script: npm test
~~~

Obteniendo los siguientes resultados:

![captura_travis4](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis4.png)
![captura_travis5](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis5.png)

Y como podemos observar, los tests han sido ejecutados correctamente:
![captura_travis6](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis6.png)
