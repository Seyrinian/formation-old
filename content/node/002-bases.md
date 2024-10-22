---
title: Les Bases
icon: mdi-nodejs
link: bases
---

<div id='bases'></div>

## Les bases de NodeJS

### NPM

Lorsque vous installez NodeJS sur votre machine, vous installez automatiquement un utilitaire de commande associé: **NPM**. Ce dernier va permettre la gestion de notre projet node JS, à commencer par sa création. Rendez-vous dans votre dossier de travail et utilisez la commande suivante:

```javascript
// Créer un projet nodejs et initialise son package.json
npm init

// Variante permettant de passer la phase interactive
npm init -y
```

Cela va vous créer un fichier très important: le **package.json**. Qui sera de cette forme:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Il faut voir le package.json comme la carte d'identité de votre projet NodeJS. Ce fichier JSON va contenir des clés précises qui détiendront chacune une information sur une partie du projet. Par exemple son nom, à quelle version en est ce projet, son ou ses auteur(s), son fichire de point d'entrée, ...

Il y en a deux qui vont être particulièrement intéressantes: les **depedencies** et les **scripts**. Nous détaillerons ces deux clés un peu plus tard.

### Démarrer un serveur

Nous venons de créer la carte d'identité de notre projet mais ce dernier ne fait pas grand chose. Nous allons désormais essayer d'executer un fichier JS. Comme nous essayons de travailler sur du backend, nous allons créer un serveur local qui poura éventuellement communiquer.

Créer un fichier index.js et collez-y le code suivant:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Serveur disponible sur le port 3100')
    res.end('Serveur disponible sur le port 3100');
});

server.listen(3100);
```

Executez ensuite la commande suivante:

```bash
node index.js
```

La commande node execute le fichier précisé à la suite, qui va rendre un serveur sur le port 3100: [http://localhost:3100/](http://localhost:3100/)
En vous rendant à l'url vous vous rendez compte qu'on peut voir la réponse du serveur. On note aussi dans le code l'utilisation d'un **require** ce qui semble être une fonction externe.

### Package et dependencies

L'un des intêret d'utiliser NodeJS est la gestion des paquets. Ces paquets sont des bibliothèques de différentes utilités que les développeur vont pouvoir installer dans un projet NodeJS pour éviter d'avoir eux-même à réecrire des parties entières de code.

A terme votre application que vous développer peut elle-même être un package que vous mettrez à disposition sur le web pour d'autres utilisateurs. Comme exemple de packages on peut retrouver les suivants:

- Lodash: bilbiothèque de fonction permettant de faciliter l'utilisation de tableau
- Jest: bibliothèque contenant de nombreuses fonctions de testing
- EsLint: permettant d'apporter du contrôle et de la qualité de code
- nodemon: qui permet d'avoir des fonctions de hotreload

Nous parlions plus tôt de NPM comme utilitaire de commande, il faut dire qu'en réalité NPM est plutôt un gestionnaire de paquet. En efet outre les commandes de création et gestion d'un projet Node vue plutôt il permet aussi la gestion des paquets. 
Pour installer un paquet nous allons utiliser la commande suivante:

```javascript
npm install nom_du_paquet
```

Cette commande va installer les fichier clés du paquet dans un dossier appelé **node_modules**. Vous n'avez pas nécessairement besoin de fouiller ce fichier, dites vous juste qu'il sert à stocker vos packages externes installés. Par ailleurs on peut remarquer dans le **package.json** que la clé *depedencies* est désormais alimentée avec le nom de notre paquet suivi de sa version. La liste de tout les paquets installés par votre projet seront donc désormais indiquée dans cette clé dependencies. 

Vous pourrez désormais utiliser vos paquets dans vos futurs fichier en important ces dernier directement dans le fichier(vu plus tard dans le cours)

**Attention: Dans notre exemple ci-dessus, on utilise le paquet http sans qu'il soit présent dans le dependencies et qu'on ai eut à l'installer. C'est parce qu'il s'agit d'un paquet natif de NodeJS toujours disponible.**

### Paquets globaux et locaux

Il y a une différence à faire entre ces deux états. Un paquet installé avec `npm install` est installé localement. C'est à dire qu'il n'est accessible que dans le scope de notre projet. Et c'est uniquement une fois notre serveur node démarré que ce dernier pourra accéder aux différents package. Il faut comprendre par la que si vous cherchez à utiliser une fonction de package dans votre terminal (comme par exemple pour nodemon) elle ne sera pas accessible car votre terminal n'a pas accès au serveur tant qu'il n'est pas lancé.

Pour utiliser un package dans votre terminal, il faut l'installer sur votre système d'exploitation directement et non pas dans un projet. Ce peut-être utile dans le cas ou vous avez besoin d'un package commun à plusieurs projets. Pour ce faire nous allons ajouter le suffixe -g à la commande d'installation : `npm install -g nom_du_package`.

Vous pouvez ensuite vérifier la liste des package globaux installés grâce à la commande `npm list -g --depth-0`.

### Scripts

Dans la section précedente nous disions que si nous voulions executer des package au lancement de notre application nous ne pouvions pas le faire localement. En effet si le terminal ne reconnait pas les package locaux, admettons qu'avant que mon serveur ne démarre je souhaiterai réaliser un formatage de fichier, ou justement utiliser le package nodemon pour le hotreaload mais uniquement dans mon projet.

Il y a en réalité une autre manière de contourner ce problème, il s'agit de la clé **scripts** du **package.json**. Dans cet objet, vous allez indiquer autant de clés que vous souhaitez de scripts. Vous pouvez par exemple créer un script *dev* qui correspondra à votre environnement de développement et un script *build* qui cherchera à publier votre application.

Quelque soit le nom que vous donnez à votre script, sa valeur sera l'équivalent de ce que vous pourriez indiquer dans votre terminal. Par exemple si je souhaite que mon script *dev* utilise le package *nodemon* sur le fichier *index.js* alors j'aurai le script suivant:

```json
{
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

Pour executer votre script dans votre terminal vous utiliserez désormais la commande `npm run nom_du_script`.

**Les scripts ont en réalité de nombreux autres intêrets que de simplement executer des packages locaux, ils peuvent définir des variables d'environnement par exemple, réaliser une suite d'instructions avant l'execution et permettent aussi de générer des environnements différents (test, dev, build).**

---

</div>
