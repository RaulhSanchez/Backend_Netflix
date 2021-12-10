# Backend Netflix

## Tecnologías

<img width="60px" height="60" src="https://github.com/RaulhSanchez/RaulhSanchez/blob/main/GIT.png"></img>
<img width="60px" height="60" src="https://github.com/RaulhSanchez/RaulhSanchez/blob/main/JS.png"></img>
<img width="60px" height="60" src="https://github.com/RaulhSanchez/RaulhSanchez/blob/main/MONGO.png"></img>
<img width="60px" height="60" src="https://github.com/RaulhSanchez/RaulhSanchez/blob/main/MONGOOSE.png"></img>


## Descripción


Este es el primer proyecto Full Stack que desarrollamos, en el que un usuario puede registrarse, y acceder a un catálogo
de películas que puede comprar. En este caso la compra de películas se realiza de forma individual, 
ya que para evitar hacer una compra no deseada, se limita la búsqueda a una única  película.

Para el desarrollo de este proyecto hemos creado un backend con una base de datos NOSQL con Mongo, en la que se almacenan
los datos del usuario, las películas y las compras de cada usuario para que pueda tener un acceso personal a sus pedidos.

Esta relación entre usuarios y pedidos es una relación 1 (usuario) n (pedidos), en cambio un pedido solo pertenece a un usuario. 


## Planteamiento

Con el patrón de MVC en mente he procedido a ordenar las carpetas internas en una aplicación principal, que enlaza 
todos los demás componentes y dividir en dos carpetas principales, películas (movie) y usuarios (user).
Ambas contienen su propia carpeta de controller, model y router, para así ajustarse al patrón mencionado.


## Backend

Como ya se ha mencionado, en el desarrollo del Backend, para la base de datos hemos utilizado Mongo, con el ORM Mongoose,
y Robo 3T como herramienta visual para poder contrastar los datos añadidos con el Schema realizado desde el modelo. 
Ademas para la colocación de los archivos hemos utilizado el patrón MVC como mostramos a continuación para mantener un orden,
en el que tenemos una carpeta para los usuarios, películas y pedidos, con sus respectivas subcarpetas que constan de Model,
donde creamos el modelo a seguir , Route, donde añadimos las posteriores rutas para la URL y Controller,
donde se encuentra la lógica de cada elemento.

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/1240e0c40b65e49765da9af7f4e41d0f0c439519/MVC.png)

Cabe destacar de este punto la relación entre usuario y el alquiler que añadimos en este proyecto, donde utilizamos 
un modelo en el que hay que añadir el ID del usuario y el ID de la película que queremos adquirir, para establecer 
la relación entre ambos como mostramos a continuación.

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/1240e0c40b65e49765da9af7f4e41d0f0c439519/Model.png)


Para hacer la lógica y establecer esta relación, requerimos estos dos ID, y nos devolverá en el Body de Postman
un objeto que nos relaciona ambas tablas.

 
De esta forma creamos una constante llamada newRent que va a ser lo que requerimos del modelo, es decir los ID de usuario 
y de la película, seguidamente decimos al modelo que cree un modelo nuevo a través de esta constante y 
nos devuelva en caso de que ambos campos correctamente añadido una respuesta con la confirmación de esta relación. 
En caso de estar algún campo mal se envía un error.

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/1240e0c40b65e49765da9af7f4e41d0f0c439519/Create_Rent.png)

Una vez creada esta función, y debido al module.exports se exporta a la carpeta de Router, donde establecemos 
la ruta que va a tener la URL, que en el caso de crear una compra será la siguiente:

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/1240e0c40b65e49765da9af7f4e41d0f0c439519/Router.png)

Así obtenemos, en nuestras pruebas realizadas en Postman, con el servidor local la siguiente respuesta que indica un ID 
de la compra y dentro del objeto ambos ID añadidos y ya relacionados. Toda la información se almacena en la base de datos y con Robo 3T podemos ver así toda la información:

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/2afbe7c889d484d1c21e5446ae82d71135618a2a/Captura%20de%20pantalla%202021-11-20%20a%20las%2017.20.54.png)

De esta forma al buscar un usuario sus compras, nos muestra este objeto.

![Image text](https://github.com/gricosm/netflix-wannabe-react/blob/2afbe7c889d484d1c21e5446ae82d71135618a2a/Captura%20de%20pantalla%202021-11-20%20a%20las%2017.21.13.png)

Para que todo esto funcione y hacer segura la aplicación hemos encriptado la contraseña de usuario gracias a **Bcrypt**, herramienta que nos permite hasear la contraseña al registrarse el usuario. Al hacer un login, comparamos el hash craeado y si coincide con la base de datos el usuario puede acceder a la aplicación.

Una vez hecho este login el usuario recibe un token de autenticación que le permite comprar peliculas, este token se genera con **JWT** y persiste hasta que el usuario finaliza la sesión.




