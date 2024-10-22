---
title: Routage
icon: mdi-routes
link: route
---

<div id='route'></div>

## Routage

Comme dit au départ de notre module, le but final est de créer une API. Pour le moment Express nous a permis de créer un serveur, ce que le package **HTTP** pouvait déjà faire. Mais pour créer réellement une API il va falloir gérer des cas de lecture, écriture, modification, suppression, ...

Afin de gérer ces cas nous allons passer par des requêtes HTTP, dont chacune correspondra à un de nos besoins. Lorsque je voudrai accéder à une donnée je réaliserai une requête GET sur mon API (c'est à dire mon serveur NodeJS). De même si je souhaite supprimer une donnée en particulier je ferai une requête DELETE en précisant la donnée que je veux supprimer.

C'est là qu'Express prend toute sa valeur, car le framework possède déjà une liste de fonction permettant de gérer ces cas. Prenons un exemple avec la lecture

### Demander à notre serveur de nous donner une information via GET

Admettons que je travaille sur une API permettant de gérer une liste d'élèves. Mon application front à besoin d'accéder à cette liste d'élèves et va donc demander une requête GET à mon API(notre serveur hebergé sur localhost:3000) et ce dernier devra lui rendre la fameuse liste. Mais je vais aussi parfois avoir besoin d'obtenir seulement un seul élève. Et dans les deux cas il s'agit d'une requête GET. Afin de différencier ces cas nous allons créer des **routes**, qui sont en fait des url supplémentaires.

Pour définir une route GET nous allons utiliser la méthode du même nom d'express.

```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user', function (req, res) {
  res.send('Liste des utilisateurs');
});

```

*Le raisonnement reste similaire avec les autres type de requête mais chacun avec sa propre fonction que vous pouvez retrouver en détail dans la doc d'Express*

---

</div>
