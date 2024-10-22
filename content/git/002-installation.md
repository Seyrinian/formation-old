---
title: Installation de Git
icon: mdi-cog
link: installation
---

<div id='installation'></div>

## Installation de Git

### Installation de Git en ligne de commande

On peut utiliser différents types d’interfaces pour installer et pour utiliser Git. Dans ce cours, nous allons utiliser la console et donc un langage en lignes de commande plutôt qu’une interface graphique (cette méthode est la seule permettant d’avoir accès à toutes les commandes Git).

Dans un premier temps, il faut installer Git sur le poste : `sudo apt install git`

Pour savoir si Git est installé, il suffit de taper `git --version` dans la console : la console doit normalement vous sortir la version de Git installée.

_Si vous ne souhaiter pas passer par l'installateur de paquets vous pouvez directement télécharger Git via le lien dans la parties [Liens utiles](/git#useful-links)_

### Paramétrage de Git

Une fois Git installé, nous allons paramétrer le logiciel afin d’enregistrer certaines données pour ne pas avoir à les fournir à nouveau plus tard.

Dans notre cas nous allons renseigner un nom d’utilisateur et une adresse mail que Git devra utiliser ensuite.

La commande `git config` permet du voir et de modifier les variables de configuration qui contrôlent tous les aspects de comportement de Git.

Nous allons également passer une option `--global`à notre commande. Celle-ci va nous permettre d’indiquer à Git que le nom d’utilisateur et l’adresse mail renseignés doivent être utiliser globalement (c’est-à-dire pour tout projet Git).
Nous allons donc taper les commandes suivantes :

- `git config --global user.name "gabcaron"` (remplacez « gabcaron » par votre nom d’utilisateur Git)
- `git config --global user.email hello@gabincaron.com` (remplacez « hello@gabincaron.com » par votre adresse email)

Pour vous assurer que vos informations ont bien été enregistrées, vous pouvez taper `git config user.name` et `git config user.email`. Les informations entrées devraient être renvoyées.

</div>
