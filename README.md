# Introduction
Le contenu de ce guide vise non pas à enseigner exhaustivement chaque technologie présentée, mais à fournir des directives et des bonnes pratiques pour l'utilisation de ces outils. Pour chacune des technologies ou outils mentionnés dans ce guide, vous trouverez un lien renvoyant vers une description complète pour approfondir vos connaissances sur la mise en œuvre de cet outil.


## <a name="belongs"></a> A qui appartient ce guide
Ce manuel s'adresse aux développeurs de la société Mediabox, visant à approfondir et enrichir leurs compétences dans l'utilisation de React 16. Il est expressément interdit de diffuser le contenu de ce guide à des individus n'appartenant pas à l'entreprise, dans le but de garantir une intégrité optimale.

## <a name="purpose"></a> Objectifs de la Formation
À l'issue de cette formation, l'apprenant sera en mesure de :
- Mettre en place un nouveau projet react grâce vite.js
- Maîtriser les bases de React
- Savoir utiliser efficacement les hooks
- Structurer de manière optimale un projet
- Mettre en place l'internationalisation d'une application
- Savoir utilier redux
- Appliquer les bonnes pratiques pour développer une SPA (Single Page Application)

## <a name="techs"></a> Liste des technologies et outils
Ceci est une liste des principales technologies et outils présentés dans ce guide :
- <a href="https://nodejs.org/en">NodeJs</a> - Permet d'exécuter du code JavaScript côté serveur
- <a href="https://www.npmjs.com/">NPM (Node Package Manager)</a> - Est le gestionnaire de paquets officiel pour l'écosystème Node.js
- <a href="https://vitejs.dev/">ViteJS (v4)</a> -  Outil de construction d'applications web moderne et rapide pour le développement front-end
- <a href="https://redux.js.org/">Redux (4.2.1)</a> - Une bibliothèque JavaScript populaire utilisée principalement pour gérer l'état global de l'application
- <a href="https://primereact.org/">Primereact (10.6.3)</a> -  Une bibliothèque de composants d'interface utilisateur (UI) pour React, conçue pour simplifier et accélérer le développement d'applications web modernes
- <a href="https://reactrouter.com/en/main">React Router (6.4)</a> -  Une bibliothèque de routage pour les applications React

Dans cette formation, nous présentons ces technologies en tenant compte de leurs versions actuelles, telles qu'elles sont mentionnées. Il est toujours recommandé de consulter la documentation de la bibliothèque elle-même afin de s'assurer que les informations fournies dans cette formation restent valables à l'avenir

## <a name="requirements"></a> Prérequis
Pour tirer pleinement profit de cette formation, veuillez vous assurer de disposer des compétences préalables suivantes :
- Avoir une connaissance solide en Javascript (avoir déjà vu les conditions, variable et boucles...)
- Comprenez le concept d'asynchronisme en JavaScript (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">Voir plus</a>)
- Familiarité avec l'utilisation du terminal.
- Une connnaissace solide en HTML5 et CSS3
- Savoir utiliser un éditeur de code (on utilisera ici Visual Studio Code)

## <a name="deroulement"></a> Déroulement de la formation
La formation sera divisée en plusieurs sections. La première partie abordera les fondamentaux de la technologie React. Dans la deuxième partie, nous dresserons la liste des meilleures bibliothèques à utiliser pour développer une application performante et sécurisée. Enfin, nous conclurons par un exemple pratique visant à mettre en application les connaissances acquises.

# <a name="environement"></a> Préparation d'un environnement
Pour créer un nouveau projet avec React:
- Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez télécharger la dernière version depuis le site officiel de Node.js : https://nodejs.org/.
- npm (Node Package Manager) est généralement inclus avec l'installation de Node.js.

Pour vérifier si Node.js et npm (Node Package Manager) sont installés sur votre machine, vous pouvez utiliser le terminal ou l'invite de commandes. Voici comment procéder en fonction de votre système d'exploitation :

Node.js
```
node -v
```
npm
```
npm -v
```

Si Node.js et npm sont installés, les commandes ci-dessus afficheront les versions correspondantes. Si Node.js oui npm ne sont pas installés, vous obtiendrez généralement un message indiquant que la commande n'est pas reconnue.

# <a name="environement"></a> Création d'un nouveau projet
Pour créer un nouveau projet React, vous pouvez utiliser <a href="https://create-react-app.dev/">Create React App</a>, qui est un outil officiel de Facebook pour générer rapidement un projet React configuré avec les outils et les configurations nécessaires. Dans cette formation, nous avons choisi d'utiliser <a href="https://vitejs.dev/">ViteJS</a> en raison de sa compilation ultra-rapide par rapport a Create React App.

Pour créer un nouveau projet avec Vite, veuillez ouvrir votre terminal et naviguer jusqu'à l'emplacement où vous souhaitez placer votre projet. Ensuite, exécutez la commande suivante :
```
npm create vite@latest reactjs -- --template react
```

> Dans cette commande, `reactjs` fait référence au nom que vous souhaitez donner à votre projet. Vous pouvez remplacer "reactjs" par le nom que vous choisissez pour votre projet

Cette commande vous posera quelques questions sur votre projet (par exemple, le nom, la version, la description, le point d'entrée, les tests, le référentiel, les mots-clés, l'auteur, la licence, etc.). Vous pouvez appuyer sur "Enter" pour accepter les valeurs par défaut ou saisir vos propres informations.

Après avoir répondu à ces questions (ou accepté les valeurs par défaut),  un répertoire nommé `reactjs` sera créé avec une structure minimale par défaut d'un projet React

Veuillez exécuter ces trois commandes dans votre terminal pour démarrer l'application que vous venez de créer:
```
cd reactjs
```
```
npm install
```
```
npm run dev
```
- La première commande vous permet de naviguer vers le répertoire "reactjs", correspondant au nom du projet qui vient d'être créé.
- La deuxième commande vous permet d'installer les dépendances qui se trouvent dans le fichier `package.json` créé par Vite.
- La troisième commande sert à démarrer votre application.

Après avoir lancé la troisième commande, votre application démarrera sur le port 5173, qui est le port par défaut de Vite. Veuillez ouvrir votre navigateur et vous rendre à l'adresse <a href="http://localhost:5173/">http://localhost:5173</a>. Vous verrez alors la page par défaut d'un nouveau projet React, comme illustré dans l'image ci-dessous :

![Init new project](https://i.ibb.co/smWbv3p/Screenshot-2024-04-23-142746.png)

# <a name="structure"></a> Structure
Par défaut, Vite crée un projet React avec une structure minimale. Cependant, au cours de cette formation, nous allons améliorer cette structure en ajoutant d'autres sous-dossiers à l'intérieur du dossier "src". Voici à quoi ressemble la structure du projet :
<pre>
- node_modules/
- public/
  ├─ favicon.ico 
  ├─ logo.png
- src/
  ├─ assets/
  ├─ class/
  ├─ components/
  ├─ constants/
  ├─ helpers/
  ├─ hooks/
  ├─ lang/
  ├─ pages/
  ├─ routes/
  ├─ store/
  ├─ styles/
  ├─ utils/
  App.css
  App.jsx
  index.css
  main.jsx
.eslintrc.cjs
.gitignore
package-lock.json
package.json
vite.config.js
  </pre>
  Voici une description détaillée de chaque répertoire et fichier :
- `node_modules/`: Dossier où les dépendances de votre projet sont installées par npm.
- `public/`: Répertoire des ressources statiques accessibles publiquement
- `src/` : Répertoire des sources de l'application React
  - `class/`: Contient des classes qui sont utilisées dans l'application.
- `assets/` : Utilisé dans les projets pour stocker des fichiers statiques tels que des images, des polices, des vidéos, des fichiers audio, des icônes, etc.
- `components/` : Composants réutilisables de l'application
- `constants/`: Dossier contenant des fichiers définissant des constantes pour l'application.
- `hooks/`: Utilisé pour regrouper des hooks personnalisés dans une application React
- `lang/`: Utilisé pour stocker des fichiers de traduction
- `pages/`: Utilisé dans les applications React pour organiser les composants qui correspondent à des pages spécifiques de l'application. Chaque fichier JavaScript ou JSX dans ce dossier représente une page de l'application.
- `routes/`: Utilisé pour stocker les définitions de routes dans une application
- `store/`: Utilisé pour regrouper la logique liée à la gestion de l'état global de l'application (redux)
- `styles/`: Utilisé pour stocker les fichiers de styles CSS ou Sass (ou d'autres préprocesseurs CSS)
- `utils/`: Dossier qui contient des utilitaires, par exemple, des fonctions ou des configurations réutilisables.
- `main.js`: Ce fichier est généralement le point d'entrée JavaScript de votre application React
- `App.jsx`: Ce fichier est généralement le composant principal de votre application React
- `.eslintrc.cjs`: Fichier de configuration ESLint au format CommonJS utilisé pour détecter et signaler les erreurs de syntaxe
- `.gitignore`: Fichier spécifiant les fichiers et répertoires à ignorer lors de la gestion de version avec Git.
- `index.html`: Ce fichier est le fichier principal de votre application web. Il est chargé par le navigateur lorsqu'un utilisateur visite votre site web et sert de point de départ pour votre application React.
- `package-lock.json`: Fichier généré par npm pour fixer les versions exactes des dépendances.
- `package.json`: Fichier de configuration de Node.js listant les métadonnées du projet et les dépendances.
- `vite.config.js`: Ce fichier permet de configurer Vite pour personnaliser le processus de construction du projet

# Les composants
En React, les composants sont les éléments fondamentaux de la construction de l'interface utilisateur. Ils vous permettent de diviser la page en parties indépendantes et réutilisables.

Visualisons cela en regardant un morceau de la page :

![componenrs](https://i.ibb.co/ykHGJDz/00000d2d00000449c71d0000500f0000-components.jpg)

Remarquez que la page peut être divisée en plusieurs parties. Chacune de ces "parties" est un composant. L'en-tête est un composant, le bouton "nouvelle question" est un composant, et la barre de recherche est son propre composant. Cela rend l'organisation de la page beaucoup plus facile, mais encore plus important, les composants nous permettent en tant que développeurs de séparer les préoccupations les unes des autres.

`La séparation des préoccupations` est un principe de programmation qui stipule que chaque préoccupation doit être séparée en pièces individuelles. Par exemple, dans le diagramme ci-dessus, le bouton "nouvelle question" (2) devrait être cliqué si un utilisateur voulait ajouter une nouvelle question, tandis que la barre de recherche (3) serait utilisée si l'utilisateur voulait rechercher les questions existantes.

## Le composant principal (App)
Le composant principal dans une application React, généralement appelé "App", est le point d'entrée de votre application. Il s'agit d'un composant de haut niveau qui englobe et rend tous les autres composants de votre application.

Voici le contenu du composant App.js :
```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

Comme vous pouvez le remarquer, il s'agit simplement d'une fonction ordinaire, mais qui suit la convention de nommage commençant toujours par une majuscule. Cette fonction retourne, à la fin du code, une structure HTML. Dans cette formation, nous allons explorer en détail chaque ligne de ce code pour en comprendre le fonctionnement.

## Un composant fonctionnel
En React, il existe deux types de composants que vous pouvez utiliser : les composants fonctionnels et les composants de classe.
Les composants de classe est une ancienne syntaxe de création de composant react. dans cette formation nous allons utiiser les composants fonctionnels.

Un composant fonctionnel est une simple fonction JavaScript qui retourne toujours un code HTML :
```js
function Hello() {
  return <h1>Hello world.</h1>;
}
```
Le code ci-dessus définit un composant fonctionnel appelé "Hello", qui renvoie un simple élément HTML.
> Remarquez que le nom du composant fonctionnel commence par une lettre majuscule. C'est absolument essentiel. Si nous commençons le nom d'un composant par une lettre minuscule, le navigateur traitera notre composant comme un élément HTML régulier au lieu d'un composant.

## Le rendu des composants
Le rendu des composants se fait généralement en les intégrant dans d'autres composants ou dans l'élément racine de votre application.

Le rendu des composants est le processus par lequel les composants React sont affichés à l'écran. Cela se produit lorsque vous utilisez des composants dans votre application React et que ceux-ci sont transformés en éléments HTML ou en d'autres composants React dans le DOM (Document Object Model) du navigateur.

Par exemple, pour afficher le contenu du composant "Hello", voici a quoi ressemble le code du fichier `src/App.js`:
```js
function Hello() {
     return <h1>Hello world.</h1>;
}
function App() {
     return (
          <Hello />
     )
}

export default App
```
Dans ce code, nous rencontrons deux composants : le composant principal App.js et le tout nouveau composant "Hello". Si vous ouvrez maintenant votre navigateur, vous verrez s'afficher le message "Hello, World".

# La syntaxe JSX
## C'est quoi JSX ?
JSX (JavaScript XML) est une syntaxe utilisée en React qui nous  permet d'écrire du code qui ressemble à du HTML dans des fichiers JavaScript et de les placer dans le DOM sans avoir besoin d'utiliser les méthodes `createElement()` et/ou `appendChild()`.

Dans le module précédent, nous avons utilisé le code suivant pour afficher une sortie en utilisant React :
```js
function Hello() {
     return <h1>Hello world.</h1>;
}
```
Commençons à analyser le code et à comprendre chaque partie.
Nous commencerons par l'élément `<h1>Hello world.</h1>`.

Comme vous pouvez le voir, l'élément n'est pas entre guillemets pour représenter une chaîne de caractères. C'est comme un élément HTML, cependant nous l'utilisons directement dans le code JavaScript !
Cela s'appelle JSX, et c'est une extension de syntaxe de JavaScript. Cela nous permet de construire des éléments d'interface utilisateur directement dans le code JavaScript !

## Un élément de niveau supérieur
Avec JSX, Le code HTML doit être enveloppé dans un seul élément de niveau supérieur.

Ceci va par exemple générer une erreur:
```jsx
const myElement = (
    <p>Je suis une paragraphe.</p>
    <p>Je suis la paragraphe deux</p>
);
```
Donc, si vous souhaitez écrire deux paragraphes, vous devez les placer à l'intérieur d'un élément parent, comme un élément div.
```jsx
const myElement = (
  <div>
    <p>Je suis une paragraphe.</p>
    <p>Je suis la paragraphe deux</p>
  </div>
);
```
Si vous vous trouvez dans une situation où vous n'avez pas d'élément HTML de niveau supérieur à utiliser comme enveloppe pour votre structure, React offre la possibilité d'utiliser des fragments:
```js
const myElement = (
  <>
    <p>Je suis une paragraphe.</p>
    <p>Je suis la paragraphe deux</p>
  </>
);
```
<a href="https://react.dev/reference/react/Fragment">Les fragments</a> en React sont des éléments spéciaux qui permettent de regrouper une liste d'éléments enfants sans avoir besoin d'introduire un élément DOM supplémentaire. Ils permettent de créer une structure d'arborescence plus propre sans ajouter d'élément inutile au DOM.

## Les expressions en JSX
Nous pouvons utiliser n'importe quelle expression JavaScript à l'intérieur de JSX en utilisant des accolades {}.
```js
function Hello() {
     const name = "David";
     const el = <p>Hello, {name}</p>;
     return el
}
```
Dans l'exemple ci-dessus, nous utilisons le nom de la variable dans l'élément JSX.

Comme vous pouvez le constater, JSX peut être utilisé exactement comme des expressions JavaScript. Vous pouvez assigner une expression JSX à une variable, la retourner depuis une fonction, etc.

## Les Conditions - If
React prend en charge les instructions if, mais pas à l'intérieur du JSX.

Pour pouvoir utiliser des instructions conditionnelles dans JSX, vous devez placer les instructions `if` à l'extérieur du JSX, ou vous pouvez utiliser une expression `ternaire` à la place :

1. Utiliser `if` en dehors du code JSX:
```js
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
```

2. Utiliser l'instruction ternaire :
```js
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```
## Les attributs en JSX
Nous pouvons spécifier des attributs en utilisant des guillemets, tout comme en HTML :
```html
<div id="name"></div>
```
Lorsque vous utilisez une expression JavaScript comme valeur d'attribut, les guillemets ne doivent pas être utilisés 
```html
<div id={user.id}></div>
```

React DOM utilise la convention de nommage des propriétés camelCase au lieu des noms d'attributs HTML.
Par exemple, `tab-index` devient tabIndex en JSX mais il y a une  parcticularité avec l'attribute `class`:

L'attribut `class` est un attribut largement utilisé en HTML, mais comme JSX est rendu en tant que JavaScript, et que le mot-clé `class` est un mot réservé en JavaScript, vous n'êtes pas autorisé à l'utiliser dans JSX.
JSX a résolu ce problème en utilisant `className` à la place. Lorsque JSX est rendu, il traduit les attributs className en attributs class.

Utilisez l'attribut `className` au lieu de `class` dans JSX :
```js
const myElement = <h1 className="myclass">Hello World</h1>;
```
# Les propriétés (Props)
Les props sont comme les arguments de fonction en JavaScript et les attributs en HTML.

Pour envoyer des props dans un composant, utilisez la même syntaxe que pour les attributs HTML :
```js
const myElement = <Hello name="Jean" />;
```
Le composant reçoit l'argument sous forme d'objet props :
```js
function Hello(props) {
     const el = <p>Hello, {props.name}</p>;
     return el
}
```
# Affichage d'une liste
## Les listes
Considérez un tableau de chaînes de caractères :
```js
const arr = ["A", "B", "C"];
```
Nous devons rendre un élément `<li>` pour chaque élément dans le tableau.

Nous pouvons définir un composant `MyList` et lui passer le tableau en tant que prop en utilisant un attribut :
```html
<MyList data={arr} />
```
Maintenant, lorsque le tableau est accessible via les props, nous pouvons écrire la logique du composant :
```js
function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
```
Nous prenons le tableau d'entrée des props, parcourons le tableau en utilisant la fonction map de JavaScript et renvoyons un élément `<li>` pour chaque élément.

Le tableau résultant est stocké dans la variable `listItems`.
Ensuite, le composant renvoie le tableau listItems à l'intérieur d'une balise `<ul>`.

Le résultat :

![List](https://i.ibb.co/h1s4FTZ/list.jpg)
> Ce code génère un avertissement, indiquant que chaque élément doit avoir une clé unique. Nous examinerons les clés dans la prochaine partie.

## Les clés
Chaque élément dans une liste doit avoir un attribut clé.
Les clés servent d'identité unique, identifiant chaque élément.
Généralement, ce sont des IDs de vos données, ou peuvent être des indexes auto-générés.

Par exemple:
```jsx
const listItems = arr.map((val, index) =>
  <li key={index}>{val}</li>
);
```
> Les clés sont importantes car elles identifient de manière unique les éléments, aidant React à comprendre quels éléments ont changé, ont été ajoutés ou ont été supprimés.
# Les événements
## Introduction
Gérer les événements en React est très similaire à gérer les événements dans le DOM.

La seule différence est que les noms des événements utilisent la syntaxe camelCase et le gestionnaire d'événements doit être passé entre accolades.
```js
// avec le DOM classique
<button onclick="shoot()">Take the Shot!</button>
```
```js
// avec React
<button onClick={shoot}>Take the Shot!</button>
```

Exemple:
```js
function App() {
     const handleClick = () => {
          alert("Bonjour! vous avez cliquer le bouton")
     }
     return (
          <button onClick={handleClick}>Cliquer moi</button>
     )
}

export default App
```
## Passer les arguments
Pour passer un argument à un gestionnaire d'événements, utilisez une fonction fléchée.
```js
function App() {
     const handleClick = (nom) => {
          alert(`Bonjour ${nom}! vous avez cliquer le bouton`)
     }
     return (
          <button onClick={() => {
               handleClick("Jack")
          }}>Cliquer moi</button>
     )
}

export default App
```
# Les hooks
## C'est quoi un hook ?
Les hooks permettent aux composants fonctionnels d'avoir accès à l'état et à d'autres fonctionnalités de React. En raison de cela, les composants de classe ne sont généralement plus nécessaires.
## useState
Le hook <a href="https://react.dev/reference/react/useState">useState</a> nous permet de suivre l'état dans un composant fonctionnel.

L'état fait généralement référence aux données ou aux propriétés qui doivent être suivies dans une application.
Pour utiliser le Hook useState, nous devons d'abord l'importer dans notre composant.
En haut de votre composant, importez le Hook useState:
```js
import { useState } from "react";
```
### Initialiser un état 
Nous initialisons notre état en appelant `useState` dans notre composant fonctionnel.

`useState` accepte un état initial et renvoie deux valeurs :
- L'état actuel.
- Une fonction qui met à jour l'état.

Exemple: Initialisez l'état en haut du composant fonctionnel:
```js
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```
Remarquez que nous déstructurons les valeurs renvoyées par useState.

La première valeur, `color`, est notre état actuel.

La deuxième valeur, `setColor`, est la fonction qui est utilisée pour mettre à jour notre état.

Ces noms sont des variables qui peuvent être nommées comme vous le souhaitez. mais il y a une convention qui consiste à écrire la premiere valeur en miniscule et la deuxieme valeur en camelCase en commencant par `set` suivis du nom de la première variable

Enfin, nous définissons l'état initial sur une chaîne vide : `useState("")`
### Lire l'état
Nous pouvons maintenant inclure notre état n'importe où dans notre composant.

Exemple:
```js
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("rouge");

  return <h1>Vou couleur préférée est {color}!</h1>
}
function App() {
     return (
          <FavoriteColor />
     )
}

export default App
```
### Mettre à jour l'état
Pour mettre à jour notre état, nous utilisons notre fonction de mise à jour de l'état.

> Nous ne devrions jamais mettre à jour l'état directement. Par exemple, color = "red" n'est pas autorisé.

Exemple:
```js
import { useState } from "react";

function FavoriteColor() {
     const [color, setColor] = useState("rouge");

     return (
          <>
               <h1>Vou couleur préférée est {color}!</h1>
               <button
                    type="button"
                    onClick={() => setColor("blue")}
               >Blue</button>
          </>
     )
}
function App() {
     return (
          <FavoriteColor />
     )
}

export default App
```

### Que peut contenir l'état ?

Le Hook useState peut être utilisé pour suivre des chaînes de caractères, des nombres, des booléens, des tableaux, des objets et toute combinaison de ceux-ci !

Nous pourrions créer plusieurs Hooks d'état pour suivre des valeurs individuelles.

Exemple:
```js
import { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
function App() {
     return (
          <Car />
     )
}

export default App
```
Ou, nous pouvons simplement utiliser un seul état et inclure un objet à la place !

```js
import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}
function App() {
     return (
          <Car />
     )
}

export default App
```

### Mise à jour des objets et des tableaux dans l'état

Lorsque l'état est mis à jour, l'état entier est remplacé.

Que faire si nous voulons seulement mettre à jour la couleur de notre voiture ?

Si nous appelions seulement `setCar({color: "blue"})`, cela supprimerait la marque, le modèle et l'année de notre état.

Nous pouvons utiliser l'opérateur de décomposition (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread operator</a>) de JavaScript pour nous aider.
```js
import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}
function App() {
     return (
          <Car />
     )
}

export default App
```

Comme nous avons besoin de la valeur actuelle de l'état, nous passons une fonction dans notre fonction `setCar`. Cette fonction reçoit la valeur précédente.

Nous retournons ensuite un objet, en utilisant l'opérateur de décomposition pour inclure l'état précédent (`previousState`) et en ne remplaçant que la couleur.

## useEffect
Le Hook useEffect vous permet d'effectuer des effets secondaires dans vos composants.

Quelques exemples d'effets secondaires sont : récupérer des données, mettre à jour directement le DOM et les minuteries.

Prenons un minuteur comme exemple.

Utilisons `setTimeout()` pour compter 1 seconde après le rendu initial :
```js
import { useState, useEffect  } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }), [];

  return <h1>I've rendered {count} times!</h1>;
}

function App() {
     return (
    <>
      <h1>Timeur</h1>
      <Timer />
    </>
     )
}

export default App
```

### Syntaxe du Hook useEffect

```js
useEffect(<FUNCTION>, <DEPENDECY>)
```
- FONCTION : contient le code à exécuter lorsque useEffect se déclenche.
- DEPENDECY : est un paramètre facultatif, useEffect se déclenche lorsque la dépendance donnée est modifiée.

### Contrôler les effets secondaires dans useEffect
Ce hook s'exécute à chaque rendu, mais il existe également un moyen d'utiliser un tableau de dépendances pour contrôler l'effet du rendu.

1. Pour exécuter useEffect à chaque rendu, ne passez aucune dépendance.
```js
useEffect(()->{
    // Example Code
})
```
2. Pour exécuter useEffect une seule fois lors du premier rendu, passer un tableau vide comme dépendance.

```js
useEffect(()->{
    // Example Code
}, [] )
```
3. Pour exécuter useEffect lorsqu'une valeur particulière change, passez l'état et les props dans le tableau de dépendances.
```js
useEffect(()->{
    // Example Code
}, [props, state] )
```

## useRef
Le Hook useRef permet de conserver des valeurs entre les rendus.

Il peut être utilisé pour stocker une valeur mutable qui ne provoque pas de re-rendu lorsqu'elle est mise à jour.

Il peut être utilisé pour accéder directement à un élément du DOM.

### Ne provoque pas de re-rendus
Si nous essayions de compter le nombre de fois que notre application se rend en utilisant le Hook useState, nous serions pris dans une boucle infinie puisque ce Hook provoque lui-même un re-rendu.

Pour éviter cela, nous pouvons utiliser le Hook useRef.


Utilisez useRef pour suivre les rendus de l'application :

```js
import { useState, useEffect, useRef } from "react";

function App() {
     const [inputValue, setInputValue] = useState("");
     const count = useRef(0);

     return (
          <>
               <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
               />
               <h1>Render Count: {count.current}</h1>
          </>
     )
}

export default App
```
`useRef()` ne renvoie qu'un seul élément. Il renvoie un objet appelé `current`.

Lorsque nous initialisons useRef, nous définissons la valeur initiale : `useRef(0)`.

Exécutez ceci sur votre ordinateur et essayez de taper dans l'entrée pour voir le nombre de rendus de l'application augmenter.

### Accéder aux éléments du DOM
En général, nous voulons laisser React gérer toute la manipulation du DOM.

Mais il y a certains cas où useRef peut être utilisé sans causer de problèmes.

Dans React, nous pouvons ajouter un attribut `ref` à un élément pour y accéder directement dans le DOM.

Utilisez `useRef` pour focaliser l'entrée :
```js
import { useRef } from "react";

function App() {
     const inputElement = useRef()

     const focusInput = () => {
          inputElement.current.focus();
     };

     return (
          <>
               <input type="text" ref={inputElement} />
               <button onClick={focusInput}>Focus Input</button>
          </>
     )
}

export default App
```

## useCallback

Le Hook <a href="https://react.dev/reference/react/useCallback">useCallback</a> de React renvoie une fonction de rappel mémoïsée.

> Pensez à la mémorisation comme à la mise en cache d'une valeur afin qu'elle n'ait pas besoin d'être recalculée.

> Les hooks `useCallback` et `useMemo` sont similaires. La principale différence est que useMemo renvoie une valeur mémorisée et useCallback renvoie une fonction mémorisée.

Cela nous permet d'isoler les fonctions gourmandes en ressources afin qu'elles ne s'exécutent pas automatiquement à chaque rendu.

Le Hook useCallback ne s'exécute que lorsqu'une de ses dépendances est mise à jour.

Cela peut améliorer les performances.

### Problem
Une raison d'utiliser useCallback est d'empêcher un composant de se rendre à nouveau à moins que ses props aient changé.

Dans cet exemple, vous pourriez penser que le composant `Todos` ne se rendra pas à nouveau à moins que les todos ne changent :
```js
// App.js
import { useState } from "react";
import Todos from "./Todos";

function App() {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState([]);

     const increment = () => {
          setCount((c) => c + 1);
     };
     const addTodo = () => {
          setTodos((t) => [...t, "New Todo"]);
     };

     return (
          <>
               <Todos todos={todos} addTodo={addTodo} />
               <hr />
               <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
               </div>
          </>
     )
}

export default App
```

```js
// Todos.js
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
```

Essayez d'exécuter ceci et cliquez sur le bouton d'incrémentation du compteur.

Vous remarquerez que le composant `Todos` se rend à nouveau même lorsque les `todos` ne changent pas.

Pourquoi cela ne fonctionne-t-il pas ? Nous utilisons <a href="https://react.dev/reference/react/memo">memo</a>, donc le composant `Todos` ne devrait pas se rendre à nouveau puisque ni l'état des `todos` ni la fonction `addTodo` ne changent lorsque le compteur est incrémenté.

Cela est dû à quelque chose appelé "égalité référentielle".

À chaque fois qu'un composant se rend à nouveau, ses fonctions sont recréées. En raison de cela, la fonction `addTodo` a effectivement changé.

### Solution
Pour résoudre ce problème, nous pouvons utiliser le hook `useCallback` pour éviter que la fonction ne soit recréée inutilement.

Utilisez le hook `useCallback` pour empêcher le composant Todos de se rendre inutilement à nouveau :

```js
// App.js
import { useState } from "react";
import Todos from "./Todos";

function App() {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState([]);

     const increment = () => {
          setCount((c) => c + 1);
     };
     const addTodo = useCallback(() => {
          setTodos((t) => [...t, "New Todo"]);
     }, [todos]);

     return (
          <>
               <Todos todos={todos} addTodo={addTodo} />
               <hr />
               <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
               </div>
          </>
     )
}

export default App
```

Maintenant, le composant `Todos` se rendra uniquement lorsque la prop `todos` changera.

## useMemo

Le Hook <a href="https://react.dev/reference/react/useMemo">useMemo</a> de React renvoie une valeur mémorisée.

> Pensez à la mémorisation comme à la mise en cache d'une valeur afin qu'elle n'ait pas besoin d'être recalculée.

Le Hook useMemo ne s'exécute que lorsque l'une de ses dépendances est mise à jour.

Cela peut améliorer les performances.

> Les hooks `useMemo` et `useCallback` sont similaires. La principale différence est que useMemo renvoie une valeur mémorisée et useCallback renvoie une fonction mémorisée.

### Performance
Le Hook useMemo peut être utilisé pour éviter l'exécution inutile de fonctions coûteuses en ressources.

Dans cet exemple, nous avons une fonction coûteuse qui s'exécute à chaque rendu.

En changeant le compteur ou en ajoutant une tâche, vous remarquerez un retard dans l'exécution.

Une fonction peu performante. La fonction expensiveCalculation s'exécute à chaque rendu :

```js
import { useState } from "react";

const App = () => {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState([]);
     const calculation = expensiveCalculation(count);

     const increment = () => {
          setCount((c) => c + 1);
     };
     const addTodo = () => {
          setTodos((t) => [...t, "New Todo"]);
     };

     return (
          <div>
               <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                         return <p key={index}>{todo}</p>;
                    })}
                    <button onClick={addTodo}>Add Todo</button>
               </div>
               <hr />
               <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
               </div>
          </div>
     );
};

const expensiveCalculation = (num) => {
     console.log("Calculating...");
     for (let i = 0; i < 1000000000; i++) {
          num += 1;
     }
     return num;
};

export default App
```
### Utilisattion de useMemo

Pour résoudre ce problème de performance, nous pouvons utiliser le Hook `useMemo` pour mémoriser la fonction `expensiveCalculation`. Cela fera en sorte que la fonction ne s'exécute que lorsque cela est nécessaire.

Nous pouvons envelopper l'appel de la fonction coûteuse avec `useMemo`.

Le Hook `useMemo` accepte un deuxième paramètre pour déclarer les dépendances. La fonction coûteuse ne s'exécutera que lorsque ses dépendances auront changé.

Dans l'exemple suivant, la fonction coûteuse ne s'exécutera que lorsque `count` sera modifié et non lorsque des todos sont ajoutés.

Exemple de performance utilisant le Hook useMemo :

```js
import { useState, useMemo } from "react";
const App = () => {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState([]);
     const calculation = useMemo(() => expensiveCalculation(count), [count]);

     const increment = () => {
          setCount((c) => c + 1);
     };
     const addTodo = () => {
          setTodos((t) => [...t, "New Todo"]);
     };

     return (
          <div>
               <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                         return <p key={index}>{todo}</p>;
                    })}
                    <button onClick={addTodo}>Add Todo</button>
               </div>
               <hr />
               <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                    <h2>Expensive Calculation</h2>
                    {calculation}
               </div>
          </div>
     );
};

const expensiveCalculation = (num) => {
     console.log("Calculating...");
     for (let i = 0; i < 1000000000; i++) {
          num += 1;
     }
     return num;
};

export default App
```

## Les hooks personnalisés

Les hooks sont des fonctions réutilisables.

Lorsque vous avez une logique de composant qui doit être utilisée par plusieurs composants, nous pouvons extraire cette logique vers un hook personnalisé.

Les hooks personnalisés commencent par "use". Par exemple : `useFetch`.

### Créer un hook 
Dans le code suivant, nous récupérons des données dans notre composant Accueil et les affichons.

Nous utiliserons le service <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a> pour récupérer des données fictives. Ce service est idéal pour tester les applications lorsqu'il n'existe pas de données réelles.

Pour en savoir plus, consultez la section sur l'API Fetch en JavaScript.

Utilisez le service <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a> pour récupérer des "todo" fictifs et afficher les titres sur la page.

```js
import { useState, useEffect } from "react"

const App = () => {
     const [data, setData] = useState(null);

     useEffect(() => {
          (async () => {
               const res = await fetch("https://jsonplaceholder.typicode.com/todos")
               const resData = await res.json()
               setData(resData)
          })()
     }, []);

     return (
          <>
               {data &&
                    data.map((item) => {
                         return <p key={item.id}>{item.title}</p>;
                    })}
          </>
     );
};

export default App
```

La logique de récupération (`fetch`) peut également être nécessaire dans d'autres composants, nous allons donc l'extraire dans un Hook personnalisé.

Déplacez la logique de récupération (fetch) dans un nouveau fichier pour l'utiliser en tant que Hook personnalisé.

```js
// hooks/useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
     const [data, setData] = useState(null);

     useEffect(() => {
          (async () => {
               const res = await fetch("https://jsonplaceholder.typicode.com/todos")
               const resData = await res.json()
               setData(resData)
          })()
     }, [url]);

     return [data];
};

export default useFetch;
```

```js
// App.js
import { useState, useEffect } from "react"
import useFetch from "./hooks/useFetch";

const App = () => {
     const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

     return (
          <>
               {data &&
                    data.map((item) => {
                         return <p key={item.id}>{item.title}</p>;
                    })}
          </>
     );
};

export default App
```

### Explication de l'exemple
Nous avons créé un nouveau fichier appelé `useFetch.js `contenant une fonction appelée `useFetch` qui contient toute la logique nécessaire pour récupérer nos données.

Nous avons supprimé l'URL codée en dur et l'avons remplacée par une variable url qui peut être passée au Hook personnalisé.

Enfin, nous retournons nos données à partir de notre Hook.

Dans `App.js`, nous importons notre Hook `useFetch` et l'utilisons comme n'importe quel autre Hook. C'est là que nous passons l'URL pour récupérer des données.

Maintenant, nous pouvons réutiliser ce Hook personnalisé dans n'importe quel composant pour récupérer des données à partir de n'importe quelle URL.

# Les formulaires
Tout comme en HTML, React utilise des formulaires pour permettre aux utilisateurs d'interagir avec la page web.
### Ajout de formulaires en React

Vous ajoutez un formulaire avec React comme tout autre élément

Ajoutez un formulaire permettant aux utilisateurs de saisir leur nom :

```js
function MyForm() {
     return (
          <form>
               <label>Enter your name:
                    <input type="text" />
               </label>
          </form>
     )
}
const App = () => {

     return (
          <>
          <MyForm />
          </>
     );
};

export default App
```

Cela fonctionnera normalement, le formulaire se soumettra et la page se rafraîchira.

Mais généralement, ce n'est pas ce que nous voulons se produire en React.

Nous voulons empêcher ce comportement par défaut et laisser React contrôler le formulaire

### Traitement des formulaires
Gérer les formulaires consiste à gérer les données lorsqu'elles changent de valeur ou lorsqu'elles sont soumises.

En HTML, les données du formulaire sont généralement gérées par le DOM.

En React, les données du formulaire sont généralement gérées par les composants.

Lorsque les données sont gérées par les composants, toutes les données sont stockées dans l'état du composant.

Vous pouvez contrôler les changements en ajoutant des gestionnaires d'événements dans l'attribut `onChange`.

Nous pouvons utiliser le Hook `useState` pour suivre la valeur de chaque entrée et fournir une "source unique de vérité" pour l'ensemble de l'application.

Utiliser le Hook useState pour gérer l'entrée :

```js
// App.js
import { useState } from 'react';

function MyForm() {
     const [name, setName] = useState("");

     return (
          <form>
               <label>Enter your name:
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
               </label>
          </form>
     )
}
const App = () => {

     return (
          <>
               <MyForm />
          </>
     );
};

export default App
```

### Soumission de formulaires
Vous pouvez contrôler l'action de soumission en ajoutant un gestionnaire d'événements dans l'attribut `onSubmit` pour le `<form> `

Ajoutez un bouton de soumission et un gestionnaire d'événements dans l'attribut onSubmit :

```js
// App.js
import { useState } from 'react';

function MyForm() {
     const [name, setName] = useState("");

     const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
     }
     return (
          <form onSubmit={handleSubmit}>
               <label>Enter your name:
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
               </label>
          </form>
     )
}
const App = () => {

     return (
          <>
               <MyForm />
          </>
     );
};

export default App
```

### Champs de saisie multiples

Vous pouvez contrôler les valeurs de plus d'un champ de saisie en ajoutant un attribut `name` à chaque élément.

Nous initialiserons notre état avec un objet vide.

Pour accéder aux champs dans le gestionnaire d'événements, utilisez la syntaxe `event.target.name` et `event.target.value`.

Pour mettre à jour l'état, utilisez des crochets [notation entre crochets] autour du nom de la propriété.

Exemple :
Écrivez un formulaire avec deux champs de saisie :

```js
// App.js
import { useState } from 'react';

function MyForm() {
     const [inputs, setInputs] = useState({});

     const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({ ...values, [name]: value }))
     }

     const handleSubmit = (event) => {
          event.preventDefault();
          alert(inputs);
     }
     return (
          <form onSubmit={handleSubmit}>
               <label>Enter your name:
                    <input
                         type="text"
                         name="username"
                         value={inputs.username || ""}
                         onChange={handleChange}
                    />
               </label>
               <label>Enter your age:
                    <input
                         type="number"
                         name="age"
                         value={inputs.age || ""}
                         onChange={handleChange}
                    />
               </label>
               <input type="submit" />
          </form>
     )
}
const App = () => {

     return (
          <>
               <MyForm />
          </>
     );
};

export default App
```

> ous utilisons la même fonction de gestionnaire d'événements pour les deux champs de saisie. Nous pourrions écrire un gestionnaire d'événements pour chacun, mais cela donne un code beaucoup plus propre et est la manière préférée en React.

### Textarea
L'élément textarea en React est légèrement différent de l'HTML ordinaire.

En HTML, la valeur d'un textarea était le texte entre la balise de début `<textarea>` et la balise de fin `</textarea>`.

```html
<textarea>
  Content of the textarea.
</textarea>
```

En React, la valeur d'un textarea est placée dans un attribut value. Nous utiliserons le Hook useState pour gérer la valeur du textarea :

Exemple : Un simple textarea avec du contenu :

```js
// App.js
import { useState } from 'react';

function MyForm() {
     const [textarea, setTextarea] = useState(
          "The content of a textarea goes in the value attribute"
     );

     const handleChange = (event) => {
          setTextarea(event.target.value)
     }

     return (
          <form>
               <textarea value={textarea} onChange={handleChange} />
          </form>
     )
}
const App = () => {

     return (
          <>
               <MyForm />
          </>
     );
};

export default App
```

### Select
Dans React, une liste déroulante, ou une boîte de sélection, est également un peu différente de l'HTML.

En HTML, la valeur sélectionnée dans la liste déroulante était définie avec l'attribut `selected` :

```html
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>
```

En React, la valeur sélectionnée est définie avec un attribut value sur la balise select :

Exemple : Une simple boîte de sélection, où la valeur sélectionnée "Volvo" est initialisée dans le constructeur :

```js
// App.js
import { useState } from 'react';

function MyForm() {
     const [myCar, setMyCar] = useState("Volvo");

     const handleChange = (event) => {
          setMyCar(event.target.value)
     }

     return (
          <form>
               <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
               </select>
          </form>
     )
}
const App = () => {

     return (
          <>
               <MyForm />
          </>
     );
};

export default App
```

En apportant ces légères modifications à `<textarea>` et `<select>`, React est capable de gérer tous les éléments de saisie de la même manière.