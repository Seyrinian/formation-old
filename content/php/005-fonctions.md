---
title: Fonctions
icon: mdi-function
link: functions
---

<div id='functions'></div>

## Fonctions

Comme le langage C, PHP ne distingue pas les fonctions et les procédures. Une procédure est un cas particulier de fonction qui ne retourne aucun paramètre. Le mot clef « function » est nécessaire dans la déclaration. Les arguments de la fonction sont passés entre parenthèse. La valeur de retour est unique et déclenchée par un « return ».

### Déclaration

function nom_fonction([$argument[=val_defaut]][,...]){
instruction ;
...
[return valeur ;]
}

_Exemple_

```php
// Déclaration
function somme($a,$b){
return $a+$b;
}

//Utilisation
$v=5 ;
$result=somme($v,8) ;
echo $result ; //Affiche 13
```

### Caractéristiques

La principale innovation est la possibilité d'utiliser des valeurs d'arguments par défaut. Lorsqu'ils sont utilisées, les arguments avec une valeur par défaut doivent être situés en fin de liste. Si un argument en fin de liste doit être spécifié, ceux qui le précèdent ne pourront pas utiliser la valeur par défaut.

_Exemple_

```php
function somme($a,$b=1,$c=0){
return $a+$b+$c ;
}
$v=5 ;
echo somme($v,8,3); //Affiche 16
echo somme($v,3); //Affiche 8
echo somme($v); //Affiche 6
```

### Inclusion de script

Afin d'aérer notre code et aussi pour créer des bibliothèques de fonctions il peut être utile de séparer nos scripts en plusieurs. Un script donné pourrait par exemple servir à stocker toutes nos fonctions, et un autre les utiliserait. On appele généralement les scripts stockant des fonctions des bibliothèques.

Si vous avez écris un script lib.php et que vous souhaitez utiliser les fonctions contenues dedans dans votre script run.php alors il faut inclure dans ce dernier le script lib.php de la manière suivante:

```php
require('lib.php');
```

---

</div>
