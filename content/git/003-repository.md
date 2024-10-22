---
title: Fonctionnement d'un dépôt
icon: mdi-source-repository
link: repository
---

<div id='repository'></div>

## Fonctionnement d'un dépôt Git

### Créer un dépôt Git

Il existe deux manières de créer un dépôt Git. La première consiste à démarrer un nouveau dépôt local à partir du nom spécifié : `git init [nom-du-projet]`.

Ensuite, après avoir créé notre dépôt sur GitHub, nous initialisons ce dépôt distant avec son tout premier commit :

```
echo "# MON_PROJET" >> README.md
git add README.md
git commit -m "Initial commit"
git remote add origin [URL du dépôt distant]
git push -u origin master
```

La deuxième façon de créer un dépôt Git est de cloner un dépôt distant déjà existant (et donc non vide). Cloner un dépôt télécharge le projet et tout son historique de versions.

```
git clone [URL du dépôt distant]
```

### Modifier un dépôt Git

chaque fois que l’on souhaite enregistrer une modification de fichier ou un ajout de fichier dans le dépôt Git, on va devoir utiliser ces deux commandes :`git add` et `git commit`.

Attention : le commit (la validation / l’enregistrement) d’un fichier se basera sur l’état de ce fichier au moment du git add. La commande `git commit` vient donc toujours après git add.

**Exemples d’utilisation :**

```
git add [chemin vers mon fichier]
git commit -m "message du commit"
```

Si vous souhaitez retirer un fichier qui sera proposé lors du prochain commit :

```
git reset HEAD [nom du fichier]
```

Tout comme la commande `git add`, il existe une commande qui supprime un fichier du répertoire de travail et de l’index : `git rm [nom du fichier]`.

Pour envoyer ses commits vers le dépôt distant, on utilise la commande `git push`.

De même, pour mettre à jour le dépôt local (si l’on travaille avec plusieurs développeurs par exemple) : `git pull`.

---

</div>
