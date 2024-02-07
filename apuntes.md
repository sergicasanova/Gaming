Para iniciar el backend strapi
utilizar: yarn develop

filtrado simple:
http://localhost:1337/api/wishlists?filters[user][id][$eq]=2
doble filtrado:
http://localhost:1337/api/wishlists?filters[user][id][$eq][0]=1&filters[game][id][$eq][1]=7
filters[user][id][$eq][0]=1
filters[game][id][$eq][1]=7


documentacion de strapi:
https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering