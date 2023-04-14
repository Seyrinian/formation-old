---
title: Promesses
icon: mdi-handshake
link: promises
---

<div id='promises'></div>

## Les promesses

Les promesses sont une fonctionnalité de Javascript, et par extension de Node permettant de gérer l'asynchronicité. Mais avant de développer les promesses il convient d'expliquer ce qu'est l'asynchronicité.

### Opération synchrone et asynchrone

La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'exécution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche, de pouvoir continuer à réagir aux autres évènements pendant l'exécution de cette tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

Basiquement nous codons en synchrone c'est à dire que chaque opération s'execute à la suite de l'autre. Mais dans le cas ou une instruction viendrait à être trop longue à exécuter nous souhaiterions peut-être attendre ce résultat avant de continuer le code.

```javascript
let name=''
setTimeout(()=>name='Valentin',5000)
console.log(name)
// affichera name: ''
```

Dans l'exemple ci-dessus il se passe 5 secondes avant que la varaible `name` soit modifiée. Entraînant un console.log() vide. Si nous avions attendu le résultat du timeOut nous n'aurions pas eu ce problème.

Lorsque notre code nécessite le résultat d'une fonction qui s'avère longue à s'éxecuter soit à cause d'un nombre d'opération extrêmement long ou complexe, ou parce que celà peut dépendre d'un environnement extérieur (comme un serveur) alors il faut généralement se tourner vers de l'asynchrone.

### Promesses

Pour résoudre l'asynchrone nous pourrions enchaîner des appels de callback, cependant cela devient très vite illisible et complexe à lire. Les promesses permettent une gestion plus claire de cet état.

Avec les promesses vous avez la possibilité de chaîner les opérations asynchrones. Ca permet de les écrire les unes en dessous des autres et de les exécuter les unes après les autres. Comprenez bien que c'est dans le traitement de la réussite d'une opération asynchrone que la suivante est lancée. 

Une promesse est un objet qui représente la complétion ou l'échec d'une opération asynchrone. Pour déclarer une promesse il faut que la fonction que vous souhaitez être asynchrone renvoie un objet de type `Promesse`. Cette promesse prend en paramètre une fonction callback qui elle même peut prendre plusieurs paramètres donc les principaux sont `resolve` et `reject`. Lorsque toutes les actions de notre callback sont terminés on effectue `resolve()` ou `reject()` dans lequel on peut passer en paramètre une variable.

Si vous observez la promesse elle peut avoir plusieurs états:

- pending : en cours
- fullfiled : réussie
- rejected : rejetée

Pour gérer l'état `fullfiled` de votre promesse vous devez utiliser le chaînage avec `then`. Pour gérer l'état `rejected` vous devez utiliser `catch`.

```javascript
const promesse = new Promise((resolve,reject)=>{
  const random = Math.trunc(Math.random()*10)
  if(random <=> 5) resolve("Entre 0 et 5)
  else reject("Entre 6 et 9")
})

promesse
  .then((txt)=>{
  console.log(txt)
  })
  .catch((err)=>{
    console.log(err)
  })

// Renvoie un entier aléatoire tronqué allant de 0 à 9.
console.log(Math.trunc(Math.random()*10))
```

---
</div>
