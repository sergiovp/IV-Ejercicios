# Hito número 4. Integración continua.

La integración continua es algún tipo de acción que se ejecuta cuando sucede algún evento en un repositorio. Normalmente, estos eventos son ejecutar los tests oportunos al código cada vez que se quiera añadir algo a la rama máster. Una vez que los tests pasan con éxito, el código añadido podrá pasar a producción.

Como vemos, la integración continua es un proceso muy importante en el desarrollo de software, más en concreto, al trabajar en la nube. De esta forma, se pueden detectar errores antes de ser añadidos a producción, aumentando la fiabilidad y calidad del código. La integración continua también nos ahorrará tiempo a la larga, ya que en caso de no realizar un sistema de tests, dichos tests los tendremos que hacer nosotros implícita y manualmente antes de integrar código nuevo. Sin embargo, de haber realizado un buen sistema de tests, estos se ejecutarán automáticamente tantas veces como cambios hagamos sin necesidad de preocuparnos.

Los ejercicios propuestos para este hito son los siguientes:

### 1. Darse de alta en algún sistema de integración continua. Muchos están conectados con GitHub por lo que puedes autentificarte directamente desde ahí. A través de un proceso de autorización, puedes acceder al contenido e incluso informar del resultado de los tests a GitHub.

En mi caso, voy a utilizar Travis como sistema de integración continua. Para dejar constancia de mi registro en la plataforma, adjunto las siguientes capturas de pantalla:

![captura_travis1](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis1.png)
![captura_travis2](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/images/travis2.png)

### 2. Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

### 3. Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

### 4. Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.