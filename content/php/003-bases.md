---
title: Les bases
icon: mdi-language-php
link: bases
---

<div id='bases'></div>

## Les bases de PHP

### Types

Voici les principaux types qui compose les variables PHP:

- Entier (int): Il s'agit des nombres entiers
- Décimaux (float): Les nombres à virgules. Attention on utilise la notation pointée au lieu de la virgule.
- Booléens (bool): Permet de stocker une valeur vraie ou fausse.
- Chaîne de caractères (string): Il s'agit de texte brut.

### Variables

Une variable commence systématiquement par l'identificateur **$**. Par exemple la variable booléenne permettant de savoir si une forme est un carré ou non sera _$carré=true_

Si vous souhaitez afficher votre variable, pour des tests par exemple, vous pouvez utilisez la fonction **echo**.
La fonction **var_dump()** est aussi très utile pour obtenir des informations précises sur votre variable en tête de page.

Les variables ne nécessitent pas de déclarations en php car elles sont capable de changer de type à la volée. Il est cependant recommendé d'utiliser cette capacité le moins possible. En effet cantonner une variable à un rôle reste préférable.

Votre variable sera visible dans le script entier. Si vous l'utilisez dans une fonction sa visiblité sera limitée à cette dernière.

Des mots-clés et utilisations plus poussées des variables peuvent-être fait à travers des mots-clés comme _global_ et _static_. Pour plus d'informations référez-vous à la [documentation](https://www.php.net/manual/fr/language.variables.scope.php).

### Conditions

Comme dans de nombreux langages on retrouve les instructions de bases permettant de gérer les conditions:

#### If... else

Il existe plusieurs moyens d'écrire des conditions en PHP, la plus basique et la plus connue reste le _if... else_

```php
if(true){
    echo "Ceci est vrai";
} else echo "Ceci est faux";

```

#### Switch

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

#### Conditions ternaires

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

### Boucles

Les boucles permettent de répéter des instructions, et sont accessibles aussi en PHP comme dans de nombreux autres langages.

#### While

**While** est la boucle qui permet d'exécuter des instructions du type _Tant que ma condition alors j'exécute_/

```php
while ($condition === true){
    // J'exécute les instructions suivantes
}

```

#### Do-While

La forme Do-While est presque similaire au while avec une légère différence d'écriture. On teste l'expression en fin d'itération plutôt qu'au début. Ce qui implique que quelque soit l'état de la condition testée (vraie ou fausse) on exécutera au moins une fois la boucle.

```php
do {
    // J'exécute les instructions suivantes
} while ($condition === true)

```

#### For

For est un autre type de boucle, qui est similaire à while. Dans la plupart des cas on peut choisir l'un ou l'autre, mais lorsque vous avez besoin d'incrémenter un compteur, ou de savoir exactement le nombre de pas que vous allez faire dans la boucle for est plus indiqué. En effet l'incrémation du compteur est obligatoire et automatique dans le for, ce qui n'est pas le cas du while ou il faut en déclarer un et l'incrémenter.

Le for à une déclaration un peu particulière, il va prendre en paramètre 3 informations:

- L'initialisation de la variable compteur **i**, ici à 0.
- La condition d'arrêt de la boucle, ici lorsque **i** atteint 10.
- La valeur que l'on incrémente à **i** à chaque pas, ici on fait +1.

```php
for ($i=0; $i<10; $i++){
    // J'exécute les instructions suivantes
}

```

#### foreach

Le cas du foreach est une boucle particulière qui est utilisée lors de la manipulation de tableau. Il est détaillée dans la partie Tableaux du cours.

---

</div>
