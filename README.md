# Gaming

Como visualizar el proyecto:

instalar el yarn de forma global - 

            npm install --global yarn

Se ha de instalar de manera global la ultima version recomendada del node, no es necesaria que sea la current

hacer en cada carpeta del proyecto, tanto en eccomerce-strapi como en eccomerce.next

            npm install

- Pueden haber problemas de librerias, es raro pero ha pasado en algunos ordenadores a la hora de iniciar el proyecto.
- En este caso si llega a ocurrir, se recomienda la instalacion de yarn en cada una de las carpetas, tanto la de frontend como la de backend = 

            npm install yarn 

iniciar backend - ecommerce-strapi
entrar en la carpeta ecommerce-strapi
comando: 

            yarn develop

- Dentro de la carpeta de backend una vez introducido el comando, entrar al enlace de localhost expuesto: http://localhost:1337/admin 
- para cada persona que se instale el programa debera crear una cuenta nueva en la base de datos, es decir una base de datos nuevo.
- Para ello solo ha de crear una cuenta y al iniciar sesion introducir nuevamente los datos, lo que es la base de datos ya estara creada, solo se deberan introducir nuevos datos como bien puede ser un juego nuevo con sus imagenes y demas.
  
- Voy a explicar paso a paso como introducir datos en la base de datos, es todo muy intuitivo:
  Primero una vez creada la cuenta se han de introducir los datos en la parte del frontEnd
  deberan ir a la carpetas utils/contants
  dentro de constants deberen cambiar estos parametro si son diferentes, son como he dicho la conexion a la base de datos, esto sera necesario si quieren que les funcionen las imagenes de la pagina web por ejemplo, y todo en general.
  - En lo que se refiere a la carpeta del backend, no han de tocar nada -
  
  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/f781bd90-622b-401c-96ad-b2bf14070401)

  Siguiente, ahora entraran a strapi, su base de datos, una vez dentro accederan aqui - content Manager

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/a6262e87-0730-42c2-83dd-7b3692ddf9b5)

  Una vez accedan dentro podran ver toda la coleccion de tipos que contiene nuestra base de datos:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/719e7743-1280-4231-9063-6867e2795fd5)

# Platforms

  Primero recomendaria introducir las platforms como las tengo yo a continuacion:
  yo les dejo una carpeta con algunas imagenes de juegos que puedan usar como ejemplo, dentro de gaming en recursos:
  https://drive.google.com/drive/folders/16FLx29ZK9KcSIoCY2rrq0AE1YeM94wol?usp=drive_link

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/f92ad04f-fe55-4dc5-a527-9779d5a348d1)

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/2bcc74a1-dd6c-4fff-821f-f467a88d2141)

  Dentro de cada plataforma podemos observar estos parametros, rellenenlos de la misma manera para que no hayan problemas:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/ce10953a-8477-452b-8fe0-2084d2a40310)
  
  Importante, han de recordar siempre que creen algo en la base de datos, guardarlo y publicarlo, esto seria aqui arriba en la esquina:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/581eb9f0-dfe5-4ee2-a7df-571a382456b7)

  Con esto dicho deberan hacer esto para las cuatro plataformas, es decir crear 4 objetos en total en platforms:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/03aff5d6-cf36-4bf3-bfeb-27b161c8020b)

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/2e69ec7c-d2b7-45c3-81d6-659fcbbae0ea)

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/ed456de2-58e3-42d0-8304-2212bb019c33)

  Esto seria todo, recuerdo que deben darle a guardar y publicar

# Game 

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/88980962-8254-4d04-abcf-787c079d0520)

  Aqui en nuestra base de datos es imprescindible tener al menos un juego para que podamos observar como es debido la pagina web que he creado, para ello se han de introducir los juegos manualmente, precio, nombre, descrpcion, el wallpaper, el cover y las imagenes que se usaran para el slider, por ultimo un enlace a algun video que podra ser sacado de youtube o de   la plataforma que prefieran, en mi caso recomiendo youtube, solo deberan coger la url al video en cuestion.

  Pues bien empezamos, esto es todo lo que tiene un juego:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/4c924b3f-348a-4204-80a7-658c7b12273e)

  Recomiendo ordenar los parametros del juego de la misma manera que lo tengo yo en esta imagen, para ello solo deberan apretar en configurar model:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/b0d3cf9c-c3d5-4265-b065-8c8ca161ecb6)

  Y dentro dejart las cosas de esta manera, solo deberan hacerlo en el primero que creen:

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/f7045850-9ddb-4a28-9455-25a84b551daf)

  Y bien ahora solo deberan introducir los archivos pertinentes, les dejo una carpeta con algunas imagenes de juegos que puedan usar como ejemplo, dentro de gaming en games_data
  https://drive.google.com/drive/folders/16FLx29ZK9KcSIoCY2rrq0AE1YeM94wol?usp=drive_link

  Asegurense que el wallpaper y el cover esten en el hueco que toca para que las imagenes se vean nitidas.

  ![image](https://github.com/sergicasanova/Gaming/assets/130445699/1bde729e-7b22-4f7a-9f8a-2cbc81acdebf)


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

