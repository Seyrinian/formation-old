# Les bases de PHP
## Types
Voici les principaux types qui compose les variables PHP:
* Entier (int): Il s'agit des nombres entiers
* Décimaux (float): Les nombres à virgules. Attention on utilise la notation pointée au lieu de la virgule.
* Booléens (bool): Permet de stocker une valeur vraie ou fausse.
* Chaîne de caractères (string): Il s'agit de texte brut.

## Variables
Une variable commence systématiquement par l'identificateur **$**. Par exemple la variable booléenne permettant de savoir si une forme est un carré ou non sera *$carré=true*

Si vous souhaitez afficher votre variable, pour des tests par exemple, vous pouvez utilisez la fonction **echo**.

## Conditions
Comme dans de nombreux langages on retrouve les instructions de bases permettant de gérer les conditions:
## If... else
Il existe plusieurs moyens d'écrire des conditions en PHP, la plus basique et la plus connue reste le *if... else*

```php
if(true){
    echo "Ceci est vrai";
} else echo "Ceci est faux";

```
## Switch
Le switch permet de gérer des cas précis d'utilisations ainsi qu'un cas par défaut. Son principal avantage consiste à éviter l'imbrication de if en chaîne.

```php
switch($maVariable){
    case 1: echo "ma variable vaut 1";
    break;
    case 2: echo "ma variable vaut 2";
    break;
    default: echo "ma variable vaut autre chose";
} 

```

### Conditions ternaires
La condition ternaire est une syntaxe de condition particulière qui permet de raccourcir la manière dont on l'écrit. Elle est moins courante que les deux autres syntaxes mais il reste intéressant de savoir l'utiliser:

Si notre condition est la suivante:
```php
if($maVariable === true){
    $resultat = "Ceci est vrai";
} else $resultat =  "Ceci est faux";

```

On peut l'écrire en ternaire de la façon suivante:
```php
$resultat = $maVariable ? "Ceci est vrai" : "Ceci est faux"

```

La structure est donc la suivante: 
CONDITION ? ALORS : SINON

