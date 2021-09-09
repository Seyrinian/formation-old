# Les tableaux

La manipulation des tableaux en PHP est grandement facilité par la souplesse d’utilisation des variables : pas de déclaration, type non figé et déterminé automatiquement.

## Tableaux numérotés

**Exemple de tableau réalisable**
| indices | $tab |
| ------- | :--: |
| 0 | 'A' |
| 1 | 123 |
| 2 | 3.14 |

L'accès utilise très classiquement le nom de la variable accompagné de l'index entre crochet:

```php
$tab[2] // pour l'accès à l'élément 2=>3.14
$tab[i] // pour l'accès à l'élément i (dans une boucle par exemple)
```

Dans l'exemple ci-dessus nous avons affaire à un tableau numérotés. C'est à dire que chacune de ces cases va avoir un _indice (ou clé)_ égal à un chiffre, qui est généralement déterminé automatiquement (en commençant par 0). On accèdera donc à la case voulu en passant par son indice.

Pour créer un tableau numérotés il existe plusieurs manières:

### Manuellement

```php
$tab[0] = 'Valentin'
$tab[1] = 'François'
$tab[2] = 'Marine'
```

Si vous ne souhaitez pas préciser le numéros d'indice et laissez PHP le déterminer automatiquement et successivement:

```php
$tab[] = 'Valentin' // [0]
$tab[] = 'François' // [1]
$tab[] = 'Marine' // [2]
```

### Fonction array

La meilleure manière reste cependant la fonction array:

```php
$tab= array('Valentin','François','Marine')
```

## Tableaux associatifs

Nous avons parlé de tableaux numérotés pour faciliter la compréhension, cependant en réalités tous les tableaux en PHP sont dis associatifs. C'est à dire que leurs index (numériques par défaut) peuvent aussi être remplacés par des chaînes de caractères:

**Exemple de tableau réalisable**
| indices | $tab |
| ------- | :--: |
| chien | 'Caniche' |
| chat | 'Persan' |
| oiseau | Canari |

Les tableaux associatifs sont créés et manipulés comme les tableaux numériques:

Par fonction:

```php
$animaux = array ( 'chien' => 'Caniche' ,
'chat' => 'Persan' ,
'oiseau' => 'Canari' );
```

ou manuellement:

```php
$ventes['janvier']=1020
$ventes['février']=1230
$ventes['mars']=3140
```

## Parcourir les tableaux

Dans le cas de tableaux numérotés on peut le parcourir facilement avec des boucles for ou while comme dans la plupart des autres langages similaires.

```php
// On crée notre array $prenoms
$prenoms = array ('François', 'Michel', 'Nicole', 'Véronique', 'Benoît');

// Puis on fait une boucle pour tout afficher :
for ($numero = 0; $numero < 5; $numero++)
{
    echo $prenoms[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.
}
```

Mais le problème devient plus complexe avec les tableaux associatifs. En effet ces derniers n'ayant pas d'indices numérotés il peut sembler difficile voire impossible d'itérer sur chacun de leurs indices.
Ce problème est réglé avec l'instruction **_foreach_**.

### Forme simplifiée

**foreach** dans sa forme la plus simple permet d'accéder à la variable contenu dans chaque indice du tableau: _foreach ( var_tableau as var_element_du tableau){...}_.
On passe en paramètre le tableau et on associe à une variable le pas de chaque tableau afin d'y accéder.

```php
foreach ($annee as $mois){
echo $mois. ',' ;
}
```

### Forme complète

La forme complète permet aussi d'accéder à l'indice (ou clé) de chaque élément: _foreach ( var_tableau as var_index => var_element_du tableau){...}_.
Prenons notre tableau deu début:
| indices | valeur |
| ------- | :--: |
| chien | 'Caniche' |
| chat | 'Persan' |
| oiseau | Canari |

Ici l'indice représente l'espèce et la valeur correspond à la race.

```php
foreach ($animaux as $espece => $race){
echo "<tr><th>$espece</th><td>$race</td></tr>";
}
```

## Quelques fonctions utiles:

**count($tab)**: Permet de connaître le nombre d'éléments d'un tableau.
**print_r**: Permet d'afficher rapidement et efficacement un tableau à la manière d'_echo_ ou _var_dump_.
**in_array($valeur, $tableau)**: Indique si la valeur renseignée et contenu dans le tableau.
**array_key_exists($key, $tableau)**: Indique si l'indice renseignée et contenu dans le tableau.
