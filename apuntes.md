Para iniciar el backend strapi
utilizar: yarn develop
http://localhost:1337/admin

iniciar cliente:
yarn dev
http://localhost:3000

filtrado simple:
http://localhost:1337/api/wishlists?filters[user][id][$eq]=2
doble filtrado:
http://localhost:1337/api/wishlists?filters[user][id][$eq][0]=1&filters[game][id][$eq][1]=7
filters[user][id][$eq][0]=1
filters[game][id][$eq][1]=7


documentacion de strapi:
https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering

