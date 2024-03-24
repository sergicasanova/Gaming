# Gaming

Como visualizar el proyecto:

instalar el yarn de forma global - 

            npm install --global yarn

Se ha de instalar de manera global la ultima version recomendada del node, no es necesaria que sea la current

hacer en cada carpeta del proyecto, tanto en eccomerce-strapi como en eccomerce.next

            npm install

iniciar backend - ecommerce-strapi
entrar en la carpeta ecommerce-strapi
comando: 

            yarn develop

- Pueden haber problemas de librerias, es raro pero ha pasado en algunos ordenadores a la hora de iniciar el proyecto.
- En este caso si llega a ocurrir, se recomienda la instalacion de yarn en cada una de las carpetas, tanto la de frontend como la de backend = 

            npm install yarn 

- Dentro de la carpeta de backend una vez introducido el comando, entrar al enlace de localhost expuesto: http://localhost:1337/admin 
- para cada persona que se instale el programa debera crear una cuenta nueva en la base de datos, es decir una base de datos nuevo.
- Para ello solo ha de crear una cuenta y al iniciar sesion introducir nuevamente los datos, lo que es la base de datos ya estara creada, solo se deberan introducir nuevos datos como bien puede ser un juego nuevo con sus imagenes y demas.
  
- Voy a explicar paso a paso como introducir datos en la base de datos, es todo muy intuitivo:
  Primero una vez creada la cuenta se han de introducir los datos en la parte del frontEnd
  deberan ir a la carpetas utils/contants
  dentro de constants deberen cambiar estos parametro si son diferentes, son como he dicho la conexion a la base de datos, esto sera necesario si quieren que les funcionen las imagenes de la pagina web por ejemplo, y todo en general.
  
  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/f781bd90-622b-401c-96ad-b2bf14070401)
  
- Se adjuntara una carpeta con algunas imagenes que se puedan usar para visualizar la pagina.

iniciar frontend - ecommerce-next
entrar en la carpeta ecommerce-next
comando: 

    yarn dev


El punto env no suele ser necesario, pero lo adjunto aqui como lo tengo yo por si a caso:
.env:
HOST=0.0.0.0
PORT=1337
APP_KEYS=JHf3sMqrpO8QZlPgtOC3yQ==,KcS2LTrmC6/9cJewN/9dFA==,cQMvUPJG7tieWfA9rOZbFw==,C6eNqlezlv7qL58YBigu7w==
API_TOKEN_SALT=ZJo10DgVrveXrfXatGMK7w==
ADMIN_JWT_SECRET=fnZs/FLmpmYEaSsO7qtGgw==
TRANSFER_TOKEN_SALT=z3DULK5GS7jbyrEtqUsNmw==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=JZWwFUYjmwzTgmK4IyEXqA==

