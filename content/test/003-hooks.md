---
title: Hooks
icon: mdi-hook
link: hooks
---

<div id='hooks'></div>

## Couverture et git hook

### Coverage

Le coverage ou couverture de code est une fonction qui permet de s'assurer que notre code est correctement testée en vérifiant via un pourcentage.

Pour ajouter le coverage dans vos test il suffit d'ajouter le suffixe *coverage* à votre commande `jest --coverage`.

Vous trouverez le résultat du coverage dans le dossier `coverage/index.html`.

#### Seuil de couverture

Vous pouvez ensuite définir la valeur minimale de coverage pour que les tests soient considérés comme réussis dans un fichier **jest.config.js**:

```javascript
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
    }
  }
}
```

*Remarque: Vous pouvez aussi créer un fichier de configuration à part: **config.jest.js***.

### Husky et git hook

Les hooks sont une des fonctionnalités de git qui permettent d'executer des instructions avant certaines actions git (push, pull, commit, ...).

#### Husky

Husky est un package permettant de faciliter la création de hook. Commençons par l'installer avec `npm install husky --save-dev`.
Une fois l'installation réussie il faut activer husky et les hooks avec `npx husky install`.

Vous verrez désormais dans votre projet un dossier **.husky** qui contiendra les différents *hooks*. Créer ensuite le script suivant dans votre **package.json** :

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

Ensuite créer un fichier de hook, ici nous allons chercher un hook qui s'activera avant un commit. Ce dernier vérifiera que lest test passent avant un push: `npx husky add .husky/pre-push "npm run test"`.



---

</div>
