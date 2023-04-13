---
title: Accès BDD
icon: mdi-database
link: bdd
---

<div id='bdd'></div>

## MongoDB et mongoose

Si nous souhaitons stocker un gros volume de données l'accès à une base de donnée va rapidement s'avérer nécessaire. Ici le but n'étant pas de s'intéresser au solution de BDD en elle-même mais plus à leur accès depuis notre api nous allons nous concentrer sur une solution qui peut être rapidement mise en place. Le choix ici de la solution est MongoDB qui est une solution NoSQL facile à mettre en place via un package.

### Configurer la base de donnée

Afin de se connecter à la base MongoDB nous allons utiliser **mongoose**. Il s'agit d'un package permettant de faciliter l'utilisation de MongoDB (une base de donnée NoSQL). Commençons avec `npm install mongoose --save`.

Une fois mongoose installé vous dever initialiser la connection à la base de donnée.

```javascript
const mongoose=require('mongoose')

 mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ac8w2ev.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
```

*Remarque vous pouvez améliorer la gestion de la connexion et des variables d'environnement avec le package **dotenv**.*

### Schéma de base de données

Même si NoSQL permet une certaine flexibilité, dans notre cas nous allons vouloir nous assurer que nous respections un schéma de donnée à minima cohérent. Mongoose fournit un moyen de définir un schéma de donnée pour notre collection et chacun de ces documents sera enregistré en le respectant.


Pour créer un schéma on va utiliser la méthode `Schema` de mongoose. Puis pour créer un modèle à partir de ce schéma nous allons utiliser `model`. Un exemple ci-dessous pour créer le modèle d'un chien

```javascript
const mongoose = require('mongoose');

const dogSchema = mongoose.Schema({
  name: { type: String, required: true },
  race: { type: String },
  idNumber: { type: Number, required: true },
  weight: {type:Number}
});

const dogModel = mongoose.model('Dog', dogSchema);
```

### Inscrire dans la base de données

Nous allons chercher désormais à enregister des éléments dans la base en se basant sur notre modèle. Pour cela nous allons utiliser la méthode `save`.

```javascript
const saveDog= ()=>{
  return new dogModel({
    name:'Rex',
    race:'Malinois',
    idNumber:123,
    weight:25
  }).save()
}
```

Vous pouvez désormais utiliser la méthode saveDog dans vos routes par exemple.
*Attention la méthode renvoie une promesse n'oubliez pas de la traiter.*

### Lire dans la base de donnée

Après la création il serait intéressant de pouvoir récupérer la totalité des documents d'une collection afin de les lire. Cela se fait avec la méthode `find`.

```javascript
const listDogs = ()=>{
  return dogModel.find()
}
```

*Attention la méthode renvoie une promesse n'oubliez pas de la traiter.*

---
</div>
