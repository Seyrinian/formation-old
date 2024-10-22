---
title: HTTP
icon: mdi-web
link: http
---

<div id='http'></div>

## Les requêtes HTTP

Avant de continuer notre formation sur NodeJS et sur l'utilisation d'Express il convient de comprendre ce qu'est une requête HTTP (ou Hypertext Transfer Protocol).

A chaque fois que vous tentez d'accéder à une page web vous réalisez une requête HTTP. Cette requête va contacter l'hébergeur de la page que vous ciblez et va attendre une réponse qui permettra l'affichage du site.
Il est important de comprendre que lorsque vous cherchez à accéder à un site, pour chaque fichier requis vous réaliserez une requête HTTP pour obtenir l'information. Les gros sites pouvant rapidement atteindre des masses critiques de requêtes il est important pour eux d'optimiser les appels HTTP au maximum afin de gagner en performance.

Dans le cas d'une API le nombre d'appel HTTP est censé être minime, voir unique.

## Structure d'une requête HTTP

Maintenant que nous comprenons un peu mieux à quoi sert une requête HTTP il est important de voir comment elle est structurée. Il ne s'agit pas ici d'un cours approfondi sur HTTP aussi nous passerons en revue les éléments les plus importants du protocole HTTP.

### Types de requête

Lorsque vous réalisez une requête HTTP elle possède un type. Par défaut il s'agit d'une requête **GET**. Elle permet d'obtenir des informations en les ramenant au client. Mais il existe de nombreux autres types, dont voici une liste des plus fréquemment rencontrés.

- POST : Il s'agit de la requête par défaut lorsque l'on veut envoyer des données au serveur, lors d'une création ou la soumission d'un formulaire par exemple.
- DELETE : La requête utilisée pour indiquer la supression/destruction de données.
- PATCH : Requête utile en cas de modification de données.
- HEAD : permet de ne récupérer que les informations d'en-tête et donc de limiter la taille de la réponse. Utile lorsque l'on souhaite faire des vérifications avant une requête GET par exemple pour connaître la taille de la page en amont.

### Code HTTP

Une fois la réponse reçue elle est souvent accompagnée d'un code qui permet de rapidement savoir la nature de la réponse. Vous connaissez sûrement l'un des plus connus: le code **404**. Les codes HTTP se décomposent d'abord avec leur chiffre de centaine qui correspond chacun à un type. Par exemple le 4 de 400 ici correspond à une **erreur client**. Et ensuite on incrémente un nombre pour avoir du détal, ici 04 pour dire ressource non trouvée (not found).

Vous trouverez le détail des codes HTTP [ici](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP).

---

</div>
