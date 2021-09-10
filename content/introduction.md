# Programmation orientée côté serveur

## Sites statiques et dynamiques

### Site statique

Un site statique est un site étant principalement réalisé en HTML et CSS. Il convient pour des applications web simples comme des sites vitrines. En effet dès que le code devient plus complexe, évolue souvent ou nécessite d'être régulièrement mis à jour ce genre de site devient rapidement complexe à gérer. Encore plus si on cherche à y ajouter du dynamisme, un accès à une base de données ou une génération automatique de pages.

### Site dynamique

C'est là que les sites dynamiques à bases de langages comme PHP, Javascript, ou même MySQL pour les bases de données interviennent. Dans le cas présent PHP va permettre une gestion du site côté serveur et va venir se coupler avec les langages statiques comme HTML et CSS. Mais avant cela parlons plus en détail du principe de programmation côté serveur.

## Fonctionnement d'un site web

Lorsque vous accédez à un site web via votre navigateur vous utilisez une url. Basiquement, cette url permet une communication entre ordinateurs le votre et celui ou le site est hébergé. On appelle ces deux parties le client et le serveur.

### Côté client

Le client c'est vous. Ce qui est chargé du côté de votre navigateur, comme les interactions avec la page.PHP ne traite pas les informations de ce côté, c'est plutôt du ressort des langages comme Javascript.

### Côté serveur

C'est la partie qui nous intéresse. Les ordinateurs côté serveurs sont différent des ordinateurs que les clients utilisent. Il s'agit d'ordinateur assez puissant, qui tournent nuit et jour et ne servent globalement qu'à stocker et faire tourner des applications sur le web. Dans le cas d'une application web contenant du php, nos différents script php vont s'exécuter de ce côté. Il peut s'agir d'appel à une base de données, de traitements reçus par le client à vérifier ou alors de données à lui renvoyer.

### Fonctionnement

Dans le cas d'un site dynamique, contrairement au statiques ou le site est envoyé en totalité au client et ce sans dynamisme ou rechargement le site dynamique lui va permettre une certaine interaction. En effet lorsque le client va exécuter des actions précises, comme par exemple valider un formulaire d'inscription, ces informations de connexion vont être envoyé au serveur, être vérifié et une réponse va ensuite être renvoyé côté client pour faire un affichage différent en fonction du cas d'une connexion réussie ou non.

![Relation client serveur](/images/client-server.png)
