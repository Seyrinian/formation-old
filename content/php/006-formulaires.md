<div id="formulaires">

# Transmettre des données par un formulaire

Jusqu'ici PHP a permit de manipuler des données sur une application web de manière plus pratique ou automatisée, mais sa vraie force en tant que langage côté serveur vient justement de cette communication. Nous allons créer de l'**intéractivité** client/serveur à travers un formulaire que notre utilisateur pourra remplir. Les données de ce formulaire seront ensuite envoyée au serveur qui pourra les traiter à travers un script établis.

## Côté HTML

Il faut déjà se concentrer sur la partie HTML. Pour créer un formulaire nous utilisons la balise _**\<form>**_. Cette balise possède deux attributs qui vont être extrêmement important pour définir l'interactivité du formulaire: \_method* et \_action*.

Pour le reste du formulaire vous n'avez qu'à le définir avec les balises habituelles: _select_, _input_, ...

### Action

L'attribut _action_ sert à définir la page que le formulaire va appeler lors de la validation. C'est ce script qui recevra les données et qui devra les traiter. Vous pouvez très bien appeler un autre script.php comme appeler le formulaire lui-même, ce qui implique dans ce cas-là de créer du cdode ré-entrant. Pour débuter il est préférable de séparer le traitement en deux scripts. Dans ce script on pourra accéder aux données du formulaire via les tableaux $\_POST et $\_GET en fonction de ce qui a été défini dans l'attribut _method_.

### Method

Il existe plusieurs moyens pour envoyer des données au formulaire: la méthode **GET** ou la méthode **POST**.

- **get**: Les données du formulaires transiterons par l'URL. C'est une méthode assez peu utilisée avec les formulaires que nous détaillerons plus tard dans des situations plus pratiques. En effet on évite de l'utiliser par formulaire car ces derniers ont souvent beaucoup d'informations et il est préférable de limiter la taille de l'url. Les données seront accessibles dans le script php par le tableau _$\_GET_.

- **post**: il s'agit de la méthode que vous utilisez dans 95% des cas par formulaires. Les données ne transireont pas par l'url et ne seront pas visible par l'utilisateur. Cette méthode permet d'envoyer autant de données que l'on veut, ce qui fait qu'on la privilégie le plus souvent. Les données seront accessibles depuis le script précisé en action par par le tableau _$\_POST_.

## Côté PHP

Maintenant que nous avons vu comment décrire notre formulaire il va falloir utiliser les informations envoyées par ce dernier. Admettons que nous ayons définit un formulaire comme suit:

```html
<form method="post" action="cible.php">
  <input type="text" name="pseudo" />
  <input type="checkbox" name="case" id="case" />
  <label for="case">Ma case à cocher</label>
  <select name="choix">
    <option value="choix1">Choix 1</option>
    <option value="choix2">Choix 2</option>
    <option value="choix3">Choix 3</option>
    <option value="choix4">Choix 4</option>
  </select>
</form>
```

Ce formulaire va envoyer les données sous forme **POST** au script _cible.php_.
Dans ce script nous pourrons donc accéder aux informations des champs du formulaires par la variable tableau _$\_POST_.
_$\_POST_ et _$\_GET_ fonctionnent comme des tableux associatifs dont les indices correspondent à l'attribut name du champs correspondant. C'est pour cela qu'il est capital que vous renseignez l'attribut **name** de vos champs de formulaire.

```php
if (isset($_POST['pseudo'])) { $name = $_POST['pseudo] }
```

## Problèmes de sécurité

Lorsque l'on parle de formulaire, il y a un aspect important à prendre en compte ce sont les failles de sécurités. Il s'agit de notion beaucoup plus avancées de PHP néanmoins il coneitn de retenir certaines règles:

- Ne faîtes pas confiance aux données que vous recevez. En effet, votre formulaire pointe sur un script cible qu'un utilisateur ne pas modifier. En revanche qu'est ce qu'il l'empêche de créer son propre script de formulaire.php et renseigner la valeur action avec l'adresse complète de **VOTRE** script cible.php. Ainsi le formulaire contenu chez le client appelera votre script sauf que ce sera un formulaire totalement modifié qui n'enverra pas forcément les mêmes données au script cible.

```html
<form method="post" action="www.monsite.com/cible.php"></form>
```

- De ce point découle le suivant: vérifiez constemment les données que vous recevez du côté de votre script. Testez chaque champs reçu: est-il du type attendu ? de la forme voulu ? ....
</div>
