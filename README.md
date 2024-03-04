# Gaming

Como visualizar el proyecto:

instalar el yarn de forma global - npm install --global yarn

Se ha de instalar de manera global la ultima version recomendada del node, no es necesaria que sea la current

hacer en cada carpeta del proyecto, tanto en eccomerce-strapi como en eccomerce.next
npm install

iniciar backend - ecommerce-strapi
entrar en la carpeta ecommerce-strapi
comando: yarn develop

dentro de la carpeta de backend una vez introducido el comando, entrar al enlace de localhost expuesto: http://localhost:1337/admin 
a continuacion se ha de introducir usuario y contraseña para poder acceder a la base de datos de forma local:
email-user: sergicasanova6798@gmail.com
contraseña-password: sergicasanova98

iniciar frontend - ecommerce-next
entrar en la carpeta ecommerce-next
comando: yarn dev

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

