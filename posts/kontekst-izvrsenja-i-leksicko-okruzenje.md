---
title: Kontekst izvrsenja i leksicko okruzenje u JavaScriptu
date: 2022-07-29T17:00:00.977Z
author: Marijana Sevo
summary: Kontekst izvrsenja omogucava JavaScript pokretacu da kontrolise kompleksnost interpretiranja i izvrsavanja koda. Leksicko okruzenje je razlog zasto su zatvorenja moguca u JavaScriptu, a ovi koncepti zajedno objasnjavaju neke od fundamentalnih procesa koji se desavaju u pozadini.
tags:
  - javascript
thumbnail: /static/img/javascript.jpg
---

<!-- Razumijevanje ovakvih stvari je dobro za sveukupno poznavanje JavaScripta i korisno za slozenije scenarije. -->

<blockquote cite="https://www.youtube.com/watch?v=cEBkvm0-rg0">
  <p>Managing complexity is the most important technical topic in software development.
    <cite class="by">Steve McConnell</cite>
  </p>
</blockquote>

Kada pisemo kod obicno ga razdjelimo u smislene cjeline kako bi kontrolisali slozenost pisanja koda uz pomoc funkcija, modula, objekata itd. Tako <i>kontekst izvrsenja</i> omogucava JavaScript pokretacu da kontrolise kompleksnost interpretiranja i izvrsavanja koda.

## Kontekst izvrsenja

JavaScript kod se izvrsava kroz jedan od sledecih konteksta izvrsenja:

- Globalani kontekst
- Kontekst funkcije
- Eval - necemo diskutovati jer nije dovoljno relevantan

JavaScript prevodilac ili interpreter stvara novi kontekst kad god se sprema da izvrsi funkciju `fn{...}` ili skriptu koju smo napisali, a svaka skripta pocinje sa <em>globalnim kontekstom izvrsenja</em> (global execution context). Svaki sledeci put kada pozovemo funkciju interpreter kreira novi kontekst izvrsenja, stavlja kontekst funkcije na vrh <em>pozivnog steka</em> (execution stack) i izvrsava funkciju. Ako u sklopu izvrsenja funkcije pozovemo drugu funkciju, kreira se novi kontekst, dodaje se na vrh pozivnog steka i funkcija se izvrsava. Takav tok akcija se ponavlja dok se funkcija ne izvrsi do kraja i njen kontekst se izbaci iz steka.  Potom kontrolu preuzima kontekst izvrsenja koji je pozvao tu funkciju.

```js
function forward() {
  // code
}

let move = function() {
  forward();
}

move();
```
Pozivni stack LIFO (Last In First Out) za kod iznad se moze predstaviti ovako:

<pre class="basic-pre">
↑ [ Kontekst forward() ] ↓
↑ [ Kontekst move()    ] ↓
↑ [ Globalni kontekst  ] ↓
</pre>

### Struktura konteksta izvrsenja

Kontekst izvrsenja konceptualno ima strukturu koja moze izgledati zbunjujuce ali ce njene komponente biti objasnjene u tekstu.

<pre class="basic-pre">
var executionContext = {
  variableObject: {},
  lexicalEnvironment: {},
  this: {}
}
</pre>

Ono sto treba imati na umu je da svaki kreirani kontekst ima dvije faze: <em>faza kreiranje</em> i <em>faza izvrsenja</em>.

U fazi kreiranja izvrsnog konteksta

1. <span>Pravi se `variableObject` koji sluzi za pocetno skladistenje varijabli, argumenata i deklariranih funkcija.</span>
2. <span>Pravi se `lexicalEnvironment` kao kopija `variableObject` u ovom trenutku.</span>
3. <span>Definise se vrijednost `this` i pokazuje na objekat na koji se funkcija primjenjuje u tom kontekstu.</span>



U fazi izvrsenja izvrsnog konteksta

+ Vrijednosti su dodijeljene
+ Leksicko okruzenje se koristi za razrjesenje veza i identifikatora

#### Pocetno skladistenje varijabli i hoisting

Ovi podaci su predstavljeni u obliku objekta. U fazi kreiranja u tom objektu `var` varijable su inicijalizovane i imaju vrijednost `undefined`, a svaka deklaracija funkcije u globalnom kontekstu se dodaje kao svojstvo koje pokazuje na tu funkciju i ona se automatski pohranjuje u memoriju. Ovo znaci da su deklarisane funkcije globalnog konteksta dostupne i prije nego se skripta pocne izvrsavati, ali ako pristupimo `var` varijabli prije nego je definisana za rezultat cemo dobiti `undefined`. Ovaj proces pohranjivanja varijabli i deklarisanih funkcija (function declaration) se naziva <em>hoisting</em>.

```js
console.log(hello); // undefined
var hello = 'Hello. Pleasure to meet you.';

sayHi(); // Hello. Pleasure to meet you.
function sayHi() {
  console.log('Hello. Pleasure to meet you.');
}
```

Funkcija izraz (function expression) koja se pozove prije nego joj je dodijeljena vrijednost se tretira kao varijabla, a ukoliko varijablu koja ne sadrzi funkciju pozovemo kao funkciju dobicemo gresku koja naglasava da varijabla nije funkcija:

```js
sayHi(); 
// Uncaught TypeError: sayHi is not a function
var sayHi = function() {
  console.log('Hello. Pleasure to meet you.');
};
```

Ukoliko varijablu inicijalizujemo sa kljucnim rijecima `let` ili `const` hoisting nece raditi na isti nacin jer iako je dio objekta ona ima "neinicijalizovano" stanje — gotovo isto kao da varijabla ne postoji.

```js
console.log(word); 
// Uncaught ReferenceError: 
// Cannot access 'word' before initialization
let word = 'Oui.'; 

console.log(nonExistingVariable);
// Uncaught ReferenceError: 
// nonExistingVariable is not defined
```

### Leksicko okruzenje

Svaka skripta i funkcija `fn{...}` koju smo napisali ima skriveni objekat `variableObject` o kom smo maloprije govorili. Taj objekat se u fazi kreiranja kopira u `lexicalEnvironment` objekat i predstavlja <i>leksicko okruzenje</i>. Ovaj objekat se sastoji od 

1) Zapisanog stanja lokalnog okruzenja ukljucujuci argumente, deklaracije funkcija i varijable (kopija `variableObject`). 
2) Referencu na vanjsko leksicko okruzenje, odnosno roditeljski blok koda. Globalni kontekst nema roditeljski opseg i u tom slucaju je vrijednost reference `null`.

Zato funkcija definisana unutar druge funkcije ima pristup roditeljskim varijablama, ne i obrnuto. Ovo ponasanje se naziva <em>leksicki opseg</em> (lexical scoping) koji je kljucan za <a target="_blank" href="#">zatvorenja (closures)</a>. 

```js
var phrase = 'Pleasure to meet you';

function sayHi() {
  var name = 'Summer';
  console.log(phrase + ' ' + name + '.'); 
  // Pleasure to meet you Summer.
}

sayHi();

// Okruzenje globalnog konteksta u fazi izvrsenja
globalEnvironment = {
  environmentRecord: {
    phrase: 'Pleasure to meet you',
    sayHi: fn()
  },
  outer: null // nema roditeljskog bloka
};

// Okruzenje sayHi funkcije
sayHiEnvironment = {
  environmentRecord: {
    name: 'Summer'
  },
  outer: globalEnvironment
};
```

<p class="tip right-tip">Koje vrijednosti su varijable <code>phrase</code> i <code>name</code> imale u fazi kreiranja a koju <code>sayHi</code>?<br>Hint: <span class="spoiler">hoisting</span>.</p>

Kako identifikator `phrase` ne postoji u `sayHi` kontekstu moramo pogledati u roditeljski blok koji je naznacen u leksickom okruzenju. Ovaj proces se ponavlja dok se identifikataor ne razrjesi. Ako identifikator nije pronadjen ni u globalnom kontekstu dobicemo `ReferenceError`. Ovaj postupak se naziva <em>razrjesenje identifikatora</em>.

### Zatvorenja

Zatvorenja su funkcije koje imaju referencu ka varijablama u vanjskom opsegu iz svog unutrasnjeg opsega i ako niste dosli sa tog clanka — vise o njima se moze pronaci u <a target="_blank" href="/posts/closure-u-racunarskom-programiranju/">Sta je closure u racunarskom programiranju?</a>

#### Vizuelni prikaz zatvorenja

<div class="iframe-container">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/Nt-qa_LlUH0?start=1141" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>