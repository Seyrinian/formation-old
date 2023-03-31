---
title: Introduction
icon: mdi-door-open
link: intro
---

<div id='intro'></div>

## Programmation côté serveur avec Javascript

### Le Backend

Javascript permet à la base la création de site web dynamique. NodeJS est une bibliothèque se basant sur javascript mais offrant la possibilité de gérer un backend. 
Bien que Node possède ses propres caractéristiques il peut-être en partie comparée à des langages tel que PHP ou Ruby.

NodeJS permet principalement de gérer des intéractions backend (côté serveur). Et l'une de ses spécificités et notamment de gérer très bien les requêtes multiples asynchrones (qui n'ont pas lieu en même temps).

### Fonctionnement d'un site web

Lorsque vous accédez à un site web via votre navigateur vous utilisez une url. Basiquement, cette url permet une communication entre ordinateurs le votre et celui ou le site est hébergé. On appelle ces deux parties le client et le serveur.

#### Côté client

Le client c'est vous. Ce qui est chargé du côté de votre navigateur, comme les interactions avec la page.PHP ne traite pas les informations de ce côté, c'est plutôt du ressort des langages comme Javascript.

#### Côté serveur

C'est la partie qui nous intéresse. Les ordinateurs côté serveurs sont différent des ordinateurs que les clients utilisent. Il s'agit d'ordinateur assez puissant, qui tournent nuit et jour et ne servent globalement qu'à stocker et faire tourner des applications sur le web. Dans le cas d'une application web elle va appeler via des requêtes API différents script qui vont s'exécuter de ce côté. Il peut s'agir d'appel à une base de données, de traitements reçus par le client à vérifier ou alors de données à lui renvoyer.

#### Fonctionnement

Dans le cas d'un site dynamique, contrairement au statiques ou le site est envoyé en totalité au client et ce sans dynamisme ou rechargement le site dynamique lui va permettre une certaine interaction. En effet lorsque le client va exécuter des actions précises, comme par exemple valider un formulaire d'inscription, ces informations de connexion vont être envoyé au serveur, être vérifié et une réponse va ensuite être renvoyé côté client pour faire un affichage différent en fonction du cas d'une connexion réussie ou non.

### API

Dans ce cours le but final sera de réaliser une API. L'API est une interface gérée par le backend qui va mettre en relation la base de donnée avec l'utilisateur de l'API. Les consommateurs de cet APi seront généralement des applications Front, ou d'autres applications backend.

---

</div>
