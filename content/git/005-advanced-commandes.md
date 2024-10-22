---
title: Commandes avancées
icon: mdi-apple-keyboard-caps
link: advanced-commands
---

<div id='advanced-commands'></div>

## Commandes avancées

Ces commandes seront utiles pour un usage plus avancé de Git.

### Exclure du suivi de version

Exclure des fichiers et chemins temporaires :

- `git ls-files --other --ignored --exclude-standard` : Liste tous les fichiers exclus du suivi de version dans ce projet

On peut aussi utiliser un fichier texte nommé `.gitignore` permet d'éviter le suivi de version accidentel pour les fichiers et chemins correspondant aux patterns spécifiés. Voici un exemple de ce que l'on peut trouver dans ce genre de fichier:

```gitignore
*.log
build/
temp-*
```

### Changement au niveau des noms de fichiers

Déplacer et supprimer des fichiers sous suivi de version :

- `git rm [fichier]` : Supprime le fichier du répertoire de travail et met à jour l'index
- `git rm --cached [fichier]` : Supprime le fichier du système de suivi de version mais le préserve localement
- `git mv [fichier-nom] [fichier-nouveau-nom]` : Renomme le fichier et prépare le changement pour un commit

### Enregistrer des fragments

Mettre en suspens des modifications non finies pour y revenir plus tard :

- `git stash` : Enregistre de manière temporaire tous les fichiers sous suivi de version qui ont été modifiés ("remiser son travail")
- `git stash list` : Liste toutes les remises
- `git stash pop`: Applique une remise et la supprime immédiatement
- `git stash drop` : Supprime la remise la plus récente

### Vérifier l'historique des versions

Suivre et inspecter l'évolution des fichiers du projet:

- `git log` : Montre l'historique des versions pour la branche courante
- `git log --follow [fichier]` : Montre l'historique des versions, y compris les actions de renommage, pour le fichier spécifié
- `git diff [premiere-branche]...[deuxieme-branche]` : Montre les différences de contenu entre deux branches
- `git show [commit]` : Montre les modifications de métadonnées et de contenu inclues dans le commit spécifié

### Refaire des commits

Corriger des erreurs et gérer l'historique des corrections

- `git reset [commit]` : Annule tous les commits après `[commit]`, en conservant les
  modifications localement
- `git reset --hard [commit]` : Supprime tout l'historique et les modifications effectuées après le commit spécifié

---

</div>
