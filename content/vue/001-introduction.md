---
title: Introduction
icon: mdi-door-open
link: intro
---

<div id='intro'></div>

## Introduction

### Les SPA (Single Page Applications)

Une SPA (application à page unique) est une application qui interagit avec les utilisateurs en réécrivant les pages Web existantes avec de nouvelles données provenant du serveur Web, au lieu d’utiliser la technique par défaut du navigateur qui exécute une toute nouvelle page.

Le cœur d’un SPA est basé sur Ajax, un ensemble de techniques de développement qui permet au client d’envoyer et de récupérer des données du serveur de manière asynchrone (en arrière-plan) sans interférer avec l’affichage et le comportement de la page web. Ajax permet aux pages web et, par extension, aux applications web, de modifier le contenu de manière dynamique sans avoir à recharger la page entière.

Dans un SPA, tout le code HTML, JavaScript et CSS requis est soit récupéré par le navigateur, soit des ressources appropriées qui sont chargées et ajoutées aux pages selon les besoins. Cela se produit généralement en réponse aux actions de l’utilisateur.

La page ne se recharge à aucun moment de la procédure et ne transfère pas le contrôle à une autre page, bien que l’API historique HTML5 ou le hachage de l’emplacement puissent être utilisés pour offrir la navigabilité et la perception de pages logiques distinctes dans l’application Web.

#### Différencier une MPA (Multiple Page Application) d'une SPA ?

Dans une architecture MPA client/serveur traditionnelle, chaque clic de l’utilisateur déclenche une requête HTTP vers le serveur. Le résultat de cette nouvelle requête est un rafraîchissement complet de la page, même si une partie du contenu reste inchangée. C'est le cas d'applications basée sur PHP par exemple.

<article-image src="page-lifecycle.png" alt="page-lifecycle"></article-image>

#### Avantages d'une SPA ?

- Les utilisateurs ne chargent une page web qu'une seule fois.
- Les contenus de la page sont mis à jour de façon distincte plutôt qu'au niveau de la page entière, ce qui permet à l'utilisateur d'interagir de manière beaucoup plus dynamique.
- JavaScript contrôle le lancement de nouvelles pages au sein du même domaine, cela ne nécessite ainsi plus de rafraîchissement complet de la page.

\
Dans le web moderne, les SPA sont le plus souvent construites grâce à des frameworks frontend.

### Le framework Vue

Il existe de nombreux framework frontend. Parmi les plus connus on peut retrouver React, Angular et enfin Vue. Si nous avons choisi de travailler sur Vue c'est parce qu'il est plus facile à appréhender que les autres et sa courbe d'apprentissage se veut plus rapide.

En plus de cela la communauté de Vue est très accessible et possède une documentation de qualité (y compris en français ce qui est assez rare) !

### Tester Vue

Afin de tester Vue, nous allons tout d'abord utiliser le lien CDN. Il s'agit d'un lien vers un script qui permet de charger toutes les fonctionnalités de Vue. Ce n'est pas la méthode optimisée à terme mais pour faire nos premières armes avec ce framework ça sera amplement suffisant.

Plus tard dans le cours nous verrons comment installer un véritable environnement de dév avec Vue JS et Vue-CLI.

On commence par travailler dans l'index.html:

- Créer un bloc html basique auquel on joindra le script cdn de Vue: [Liens CDN de Vue](https://fr.vuejs.org/v2/guide/installation.html#CDN).
- On va ensuite charger notre script personnel qui viendra utiliser les éléments de Vue. Cet appel de script se fera après la définition du body car il nécessitera la html avant. On va l'appeler communément **app.js**. N'oubliez pas de créer le fichier par la même occasion à la racine de votre dossier.
- Enfin pour travailler avec Vue il va falloir travailler avec un élement html que l'on va cibler. Ce sera aussi l'élément avec l'id **app**.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Default page</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

Une fois le travail de l'index.html terminé on s'occupe du fichier **app.js** crée précedemment.

- On initialise l'objet Vue en indiquant l'élément html qu'il doit cibler du côté de l'index.html
- Il ne reste plus qu'à ouvrir notre index.html et nous pouvons désormais tester notre application.

```javascript
new Vue({
  el: '#app',
})
```

**Remarque: Pour le moment la page n'affiche rien d'interessant mais pas de panique nous allons voir dans les prochaines étapes comment alimenter cette instance de Vue.**

### Vue Devtools

Il est aussi recommandé d'installer le plugin Vue Devtools si votre navigateur est compatible avec afin de disposer d'outils de développement plus poussés avec Vue lorsque vout utiliserez votre inspecteur.

[Lien du plugin Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

---

</div>
