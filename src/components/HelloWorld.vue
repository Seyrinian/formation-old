<template>
  <v-container>
    <body class="is-boxed has-animations">
      <div class="body-wrap">
        <header class="site-header">
          <div class="container">
            <div class="site-header-inner">
              <div class="brand header-brand">
                <h1 class="m-0"></h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section class="hero">
            <div class="container">
              <div class="hero-inner">
                <div class="hero-copy">
                  <h1 class="hero-title mt-0">
                    Programmation orientée côté serveur
                  </h1>
                  <h5 class="hero-title mt-0">FOURNY Valentin</h5>
                  <p class="hero-paragraph">
                    Pages de synthèses des connaissances utiles au TP ainsi que
                    quelques liens supplémentaires pour approfondir ses
                    connaissances en PHP.
                  </p>
                  <div class="hero-cta">
                    <a
                      class="button button-primary"
                      href="mailto:fourny.valentin@gmail.com"
                      >Contacter l'enseignant</a
                    >
                  </div>
                </div>
                <div class="hero-figure anime-element">
                  <svg
                    class="placeholder"
                    width="528"
                    height="396"
                    viewBox="0 0 528 396"
                  >
                    <rect width="528" height="396" style="fill: transparent" />
                  </svg>
                  <div
                    class="hero-figure-box hero-figure-box-01"
                    data-rotation="45deg"
                  ></div>
                  <div
                    class="hero-figure-box hero-figure-box-02"
                    data-rotation="-45deg"
                  ></div>
                  <div
                    class="hero-figure-box hero-figure-box-03"
                    data-rotation="0deg"
                  ></div>
                  <div
                    class="hero-figure-box hero-figure-box-04"
                    data-rotation="-135deg"
                  ></div>
                  <div class="hero-figure-box hero-figure-box-05"></div>
                  <div class="hero-figure-box hero-figure-box-06"></div>
                  <div class="hero-figure-box hero-figure-box-07"></div>
                  <div
                    class="hero-figure-box hero-figure-box-08"
                    data-rotation="-22deg"
                  ></div>
                  <div
                    class="hero-figure-box hero-figure-box-09"
                    data-rotation="-52deg"
                  ></div>
                  <div
                    class="hero-figure-box hero-figure-box-10"
                    data-rotation="-50deg"
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <section class="features section">
            <div class="container">
              <div class="features-inner section-inner has-bottom-divider">
                <div class="features-wrap">
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <a href="https://www.php.net/docs.php">
                        <h4 class="feature-title mt-24">PHP</h4>
                        <p class="text-sm mb-0">
                          Documentation officielle du langage PHP
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <a href="#synthese">
                        <h4 class="feature-title mt-24">Synthèse de cours</h4>
                        <p class="text-sm mb-0">
                          Un rapide résumé des connaissances nécessaires à la
                          compréhension du module.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="feature text-center is-revealing">
                    <div class="feature-inner">
                      <a href="#tools">
                        <h4 class="feature-title mt-24">Outils pour TP</h4>
                        <p class="text-sm mb-0">
                          Quelques aides et fonctions afin de faciliter la
                          compréhension du TP
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="pricing section">
            <div class="container-sm">
              <div class="pricing-inner section-inner">
                <div class="pricing-header text-center">
                  <h1 id="synthese" class="section-title mt-0">
                    Synthèse de cours
                  </h1>
                  <ul>
                    <li><a href="#mvc">MVC</a></li>
                    <li><a href="#requete-preparee">Requête préparées</a></li>
                  </ul>
                  <div>
                    <h2 id="mvc">MVC</h2>
                    <p>
                      MVC est un modèle de conception d'application web. Le but
                      principal étant de découper la logique de l'application en
                      3 modules distincts:
                    </p>
                    <ul>
                      <li>Le Modèle</li>
                      <li>Le Vue</li>
                      <li>Le Controlleur</li>
                    </ul>
                    <p>
                      <strong>Le Contrôleur: </strong>L'utilisateur effectue une
                      requête HTTP classique vers un serveur (Apache par
                      exemple). L'url ainsi entrée dans le navigateur va être
                      interprété par le contrôleur et ce dernier adoptera un
                      comportement différent en fonction de ce qu'il a reçu.
                      <em
                        >Exemple: La requête
                        <u
                          >http://mon-site-de-ticket&controller=liste-des-tickets</u
                        >
                        va pousser l'index du site sur le contrôleur:
                        liste-des-tickets</em
                      >
                    </p>
                    <p>
                      <strong>Le Modèle: </strong>Ce dernier gère l'accès aux
                      données. Il peut s'agir d'une connexion à une base de
                      donnée, de la lecture d'un fichier xml ou de n'importe
                      quel autre moyen d'écriture/lecture de données.
                      <em
                        >Exemple: Le contrôleur liste-des-tickets va appeler le
                        modèle liste-des-tickets. Ce dernier va alors se
                        connecter à ma base de donnée MySQL et chercher dans la
                        table des tickets tous les tickets m'appartenants et les
                        renvoyer au controlleur.</em
                      >
                    </p>
                    <p>
                      <strong>La Vue: </strong>Une fois les données récupérées
                      par le contrôleur ce dernier va appeler la vue
                      correspondante. Le travail de cette dernière sera de
                      renvoyer au client l'information de manière visible et
                      compréhensible. Généralement il s'agira d'un template
                      HTML/CSS généré et affiché sur le navigateur. Il faut donc
                      comprendre que les informations récupérées par le modèle
                      seront utilisée ici pour alimenter des variables du
                      template. Enfin le tout est envoyé du côté du client.
                      <em
                        >Exemple: Je récupère mes données de tickets, et à
                        l'aide d'une simple boucle je vais afficher chacun des
                        tickets avec leur champs libellé dans une simple liste
                        ul html.</em
                      >
                    </p>
                    <h6>Attention</h6>
                    <p>
                      Il est de concention de nommer chacun de ces couples
                      contrôleur,modèle et vue de la même manière mais chacun
                      organisé dans des dossiers séparés. En gardant les mêmes
                      noms de fichier on permet de garder une cohérence et une
                      lisiblité dans notre arborescence de fichier. Ainsi tous
                      les fichiers de type liste-des-tickets agissent selon la
                      même logique.
                    </p>
                  </div>
                  <div>
                    <h2 id="requete-preparee">Requêtes préparées</h2>
                    <h4>PDO et Pourquoi ?</h4>
                    <p>
                      Lorsque l'on souhaite procéder à des requêtes SQL le choix
                      de la base de donnée est important. Et même si la
                      comparaison des différentes solutions existantes ne nous
                      intéresse pas, il faut savoir que chacun de ces systèmes
                      peut proposer de subtiles différentes. Mais admettons que
                      nous devions procéder tout à coup à un changement de
                      système par exemple nous passons de PostgreSQL à MySQL,
                      cela signifie t-il que toute la partie Modèle de notre
                      application doit être revu pour coller à notre nouveau
                      système ? Bien évidemment que non et heureusement on peut
                      se prémunir de ce genre de situation. Ce moyen c'est
                      <span
                        ><a href="https://www.php.net/manual/fr/class.pdo.php"
                          ><u>PDO</u></a
                        ></span
                      >. PDO est une classe PHP qui permet d'unifier la
                      connexion et les requêtes à une base de donnée SQL.
                    </p>
                    <p>
                      L'utilisation de PDO n'a rien de bien compliquée il s'agit
                      principalement d'instancier une classe en y passant les
                      paramètres: de la base de données
                    </p>
                    <code lang="php"
                      >$PDO=new PDO("$DBDRIVER:host=$DBHOST;dbname=$DBNAME",
                      $DBUSER, $DBPASSWORD);</code
                    >
                    <p>
                      Il suffit ensuite d'appeler sa variable PDO, qui
                      représente maintenant notre BDD. On peut effectuer sur
                      cette variable de nombreuses fonctions comme une requête
                      par exemple avec query():
                    </p>
                    <code lang="php"
                      >$PDO->query($sql); // Exécute la requête SQL passée en
                      paramètre
                    </code>
                    <h6>Attention</h6>
                    <p>
                      Il est préférable de n'instancier qu'une fois votre base
                      de données, procéder constamment à des
                      connexion/déconnexion risque de ralentir votre
                      application. Trouvez un moyen de rendre cette variable
                      globale !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section class="pricing section">
            <div class="container-sm">
              <div class="pricing-inner section-inner">
                <div class="pricing-header text-center">
                  <h1 id="tools" class="section-title mt-0">Outils de TP</h1>
                  <ul>
                    <li><a href="#tp1">TP1</a></li>
                    <li><a href="#tp2">TP2</a></li>
                  </ul>
                  <div>
                    <h2 id="tp1">TP1</h2>
                    <p>
                      <strong>Les superglobales:</strong> Lorsqu'il s'agit de
                      traiter les informations d'une URL
                      <span
                        ><a
                          href="https://www.php.net/manual/fr/language.variables.superglobals.php"
                          ><u>les superglobales</u></a
                        ></span
                      >
                      sont très pratiques. Elles sont accessibles n'importe-où
                      sur votre application PHP. On peut notamment trouver des
                      variables qui permettent de récupérer un paramètre passé
                      en URL.
                    </p>
                    <p>
                      <strong>Structure de l'application: </strong>Inutile de
                      vous précipiter dans le code. La notion de MVC est
                      présente pour vous facilitez la tâche en tant que
                      développeur et organiser proprement votre code tout en
                      renforçant sa qualité. Pensez à bien vérifier que la
                      logique vous implémentez appartient au bon module MVC
                      (Contrôleur, Vue ou Modèle)
                    </p>
                  </div>
                  <div>
                    <h2 id="tp2">TP2</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer class="site-footer">
          <div class="container">
            <div class="site-footer-inner">
              <div class="brand footer-brand"></div>
              <div class="footer-copyright">
                &copy; 2019 Solid, all rights reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    </body>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
