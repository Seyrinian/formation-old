---
title: Jest
icon: mdi-test-tube
link: jest
---

<div id='jest'></div>

## Jest

Maintenant que la notion de test est plus claire nous allons travailler à réaliser des test unitaire. L'une des forme de test les plus simple. Pour cela nous allons les réaliser en NodeJS en utilisant un package bien connu : **Jest**

Commençons par installer notre package avec un `npm install jest`.

Modifier ensuite votre **package.json** en lui ajoutant un script suppélmentaire: `"test": "jest"`.

Vous pouvez désormais lancer la commande npm run test qui cherchera tout vos fichier de types **\*.spec.js** ou **\*.test.js**.

En effet c'est fichiers définissent des fichiers de test, il est généralement recommandé de créer un fichier spec.js pour chaque fichier que vous posséder. Par exemple si nous avons un fichier **math.js** qui assumera des fonctions mathématique, nous créerons son fichier de test correspondant **math.test.js**.

## Babel

Si vous êtes amenés à tester sur NodeJS il faut savoir que si NodeJS est du javascript, il en est une version plus avancée/évoluée. Mais la plupart des navigateurs fonctionnent avec un moteur javascript très ancien, proche du natif et ce justement pour éviter les problèmes de compréhensions des derniers langages et normes.

Jest subit le même problème il ne comprend que du javascript natif. Afin de palier à ce problème nous pouvons ajouter le package **babel** qui permet de traduire les normes utilisées par Node en javascript natif et ce de manière complètement invisible pour nous.

Installer babel avec `npm install --save-dev babel-jest @babel/core @babel/preset-env` puis créer le fichier **babel.config.js** ci-dessous en y collant le code:

```javascript
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Premiers test

Commençons avec des test très simple. Créer un fichier de test et ajoutez y les lignes suivantes:

```javascript
const sum = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Nous cherchons ici à tester une simple addition. Nous constatons que jest ne revient en fait qu'à l'utilisation d'une lib de fonctions liées au testing.

- **test** indique que nous allons créer un test avec son intitulé puis il prend en second paramètre un callback de ce que le test doit vérifier.
- **expect** correspond à l'attendu. Ici nous nous attendons à ce qu'une fonction *sum()* prenant en paramètre 1 et 2 renvoie leur somme qui sera (*toBe*) 3.

En parallèle coder la fonction sum dans un autre fichier que vous importerez.

Lancez la commande `npm run test` et nous constaterons que les tests sont au vert indiquant que la fonction a bien été testé avec les paramètres donnés.

### Hiérarchisation des tests

Supposons que nous voulons tester plusieurs fonctions différentes et que chaque fonction possèdera sa propre batterie de test. Il est possible de hiérarchier les tests grâce à la fonction **describe**.

```javascript
 describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(divide(2, 2)).toBe(1);
  });

  test('adds 1/0 return undefined', () => {
    expect(divide(1, 0)).toBe(undefined);
  });
  })
```

---

</div>
