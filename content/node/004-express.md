---
title: Express
icon: mdi-api
link: express
---

<div id='express'></div>

## Express

### Démarrage

Express est un framework qui permet de faciliter la création de serveur http. En effet nous pourrions créer notre propre serveur web de A à Z en redéfinissant chaque méthode HTTP, chaque route possible mais il faut l'avouer Express mâche tellement le travail des développeur qu'il est devenu un incontournable à connaître pour le milieu du backend NodeJS. 

A moins de travailler sur des projets extrêmement spécifique, il y a peu de chances que vous ne passez pas par un framework comme Express, Nest ou autre.

Pour commencer nous allons installer express avec la commande `npm install express`.

Ensuite dans notre fichier main (souvent l'**index.js**) nous allons ajouter les lignes suivantes:

```javascript
const express = require('express');

const app = express();

port = 3000

app.listen(port,()=>{
  console.log(`Mon serveur démarre sur le port ${port}`)
})
```

*Remarque: Cette parte de code est pour le moment très similaire à ce que nous faisions précedemment avec le package http, mais patience c'est après qu'express va révéler son intêret*.


### Middleware

Avant l'écoute sur le port 3000 nous allons ajouter la ligne suivante:

```javascript
app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
  // next() optionnel ici car dernier appel de middleware
});

```

Ces lignes sont des **middlewares** que l'on définit avec la fonction `use(req,res,next)`. Il s'agit de morceau de code qui seront executés lors de **CHAQUE** requête. Le premier middleware envoie une réponse au format JSON, puis ensuite la méthode `next()` appelle le middleware suivant qui va logger dans le terminal un message de succès.

Les middlewares peuvent se révéler utile lorsque vous avez des opérations communes à réaliser avant ou après chaque requête.

---

</div>
