# Experiencia Salta - Viajá antes de viajar


## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

 - Sitio web 

 https://experienciasalta-website.herokuapp.com/ 

 - REST API

 https://experienciasalta-api.herokuapp.com/


**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto  de manera local:

 1. Descarga del repo
 2. Instalar módulos en el **/website** y en la  **/api**

    *npm i* 

El servicio que consume el proyecto funciona con una DB deployada en Atlas y Heroku. 

#### Uso de API

1. Se recomienda el uso de Posman para probar el funcionamiento y la conexión con los servicios.
2. Momentaneamente se usan las acciones GET y POST únicamente. 
3. Para realizar el nexo con el servicio usar en postman el siguiente enlace:

    https://experienciasalta-api.herokuapp.com/experience


#### Website

El sitio Web se encuentra deployado en Heroku

https://experienciasalta-website.herokuapp.com

Para uso local, una vez corriendo el servicio, levantar el proyecto **website** con los comandos `npm run start` en la carpeta **/website**


## Descripción

El proyecto cuenta hoy con tres secciones. Se pretende en el corto y mediano plazo desarrollar aún más el sitio web. 
   

#### PROYECTO

Experiencia Salta es un proyecto de sitio web que pretende crecer poco a poco. Surge del proyecto Experiencia Museos de Salta: www.museodesalta.com
El proyecto pretende invitar a viajeros y amantes de la cultura a conocer Salta y sus alrededores de manera virtual, primero, y enamorarlos tanto con toda la riqueza cultural para que nos visiten de manera presencial y cuando estén aquí disfruten cada segundo de su viaje. 

  

#### Perspectiva

El interés es armar una web en donde muestren experiencias culturales/turísticas diversas realizadas en 360º para comenzar a presentar la identidad del crecimiento del proyecto de EXPERIENCIA MUSEOS DE SALTA hacia EXPERIENCIA SALTA. Existe perspectivas de crecimiento y se quiere armar, a largo plazo, una aplicación, un blog y una dinámica de red social en donde muestren las experiencias en 360º con recomendaciones y contenido cultural de valor en otros tipos de formatos.   

## Aspectos Técnicos

Se bocetó el proyecto a futuro y se armó un primer prototipo de diseño de la web realizada.  

### Bootstrap

Al ser un proyecto con perspectiva de crecimiento, se decide utilizar Bootstrap para el desarrollo, dada que esta tecnología es conocida por muchos/as desarrolladores/as y nos permite realizar cambios de manera simple.

  
### Web - App - Blog

Hoy se prensenta una web pequeña, pero la perspectiva de desarrollo apunta a que mañana se genere una App, un Blog y una dinámica cercana a una red social. Se ha armado una REST API que se seguirá desarrollando. 

### Base de Datos

Se alimenta poco a poco la DB. 
