---
title: Sta je closure u racunarskom programiranju
date: 2022-07-14T17:00:00.977Z
author: Marijana Sevo
summary: Zatvorenja su vazna jer kontrolisu sta jeste i nije u opsegu odredjene funkcije, kao i koje varijable se dijele i kako sa funkcijama u istom opsegu.
tags:
  - javascript
thumbnail: static/img/javascript.jpg
---

Zatvorenja su vazna jer kontrolisu sta jeste i nije u opsegu odredjene funkcije, kao i koje varijable se dijele i kako sa funkcijama u istom opsegu. Razumijevanje ovakvih procesa doprinosi razumijevanju JavaScripta i ovladavanju slozenijih scenarija.

Sta je rezultat koda ispod? 

```js
let animal = 'dog'; 

function printAnimal() {
  console.log(animal);  // pristupa vanjskoj varijabli
}

printAnimal(); // poziva funkciju
```

Funkcija `printAnimal()` radi sa varijablom `animal` koja je definisana i nalazi se izvan funkcije. Unutar funkcije vidimo instrukcije za ispisivanje sadrzaja varijable u konzoli sto je i rezultat: `dog`.

Upravo smo vidjeli <i>closure</i> ili <i>zatvorenje</i>. U nekim programskim jezicima funkcija ne moze pristupiti varijablama koje su definisane izvan funkcije ili je funkciju neophodno napisati na poseban nacin da bi se to ostvarilo.

<div class="tip">
Java Script closures su <em>funkcije koje pamte svoje vanjske varijable</em>, tj. takve funkcije imaju referencu na svoje okolno stanje u (leksickom) okruzenju. Drugim rijecima zatvorenje funkciji daje <em>pristup</em> stanjima koje obuhvata vanjska funkcija.
</div>

Sa druge strane, ovako izgleda samostalna funkcija koja ~nije closure i koristi samo lokalne varijable koje su proslijedjene kroz argumente iako tehnicki ona i dalje jeste closure. Zbunjujuce?

```js
function f(a, b) {
  return a / b;
}

f(6, 2); // 3
```

Zavisi od toga koga pitamo, neko ce se izjasniti da ovakvu funkciju smatra "uninteresting closure", neko drugi ce tvrditi da nije zatvorenje uopste jer nema referencu na spoljni opseg (scope).

<div class="tip">
<blockquote cite="https://www.youtube.com/watch?v=cEBkvm0-rg0">
 <p>We don't normally call them closures unless they close over some other context and actually make use of the fact that they do, but at a technical level, they all are closures.
<cite class="by"><a target="_blank" href="https://stackoverflow.com/a/35130537/8368674">stack<i>overflow</i>: T.J. Crowder</a></cite>
 </p>
</blockquote>
</div>




## Ugnijezdene funkcije ili nested functions

Obicno kada se misli na closures, one su u kontekstu ugnijezdenih funkcija. Funkcija je ugnijezdena kada se nalazi unutar druge funkcije sto se moze koristiti za organizovanje koda.

```js
function sayHiBye(firstName, lastName) {

  // pomocna ugnijezdena funkcija
  function getFullName() {
    let fullName = firstName + " " + lastName;
    return fullName;
  }

  console.log( "Zdravo " + getFullName() );
  // Zdravo Marko Doe
  console.log( "Dovidjenja " + fullName );  
  // Error: Uncaught ReferenceError: fullName is not defined
}

sayHiBye('Marko', 'Doe');
```

Iako unutrasnje funkcije imaju referencu na vanjske, vanjska funkcija nema pristup stanju unutrasnje funkcije (osim onome sto funkcija proslijedi po dizajnu). Pristup je ogranicen izvan viticastih zagrada. To znaci da unutrasnja funkcija ima pristup varijablama `firstName` i `lastName`, ali vanjska funkcija nema pristup varijabli `fullName`. Ovakva enkapsulacija podataka moze sprijeciti curenje i izlaganje podataka tamo gdje nije potrebno. 

Umjesto toga mozemo pozvati `getFullName()` u vanjskoj funkciji i vratiti `fullName` kao rezultat kroz kljucnu rijec `return`. 

<figure> 
  <img src="/static/img/closure.jpg" alt="Closure funkcija demonstrira pristupacnost varijabli u opsegu odredjene funkcije.">
  <figcaption>Closure funkcija demonstrira pristupacnost varijabli u opsegu odredjene funkcije.</figcaption>
</figure>

<p class="tip right-tip">U JavaScriptu ono sto je unutra ima pristup onome sto je napolju. Kao kod jednosmjernog stakla, mozes vidjeti sta se nalazi napolju, ali ljudi napolju ne mogu vidjeti tebe.</p>

Ono sto je takodje vrijedno pomena, <em style="font-style: normal">ugnijezdenu funkciju mozemo dodijeliti varijabli kao samu funkciju ili njen rezultat</em>, sto kasnije mozemo koristiti negdje drugo. Bez obzira gdje bi je koristili, ona i dalje ima pristup istim vanjskim varijablama.

U sledecem primjeru, pozivom vanjske funkcije sa argumentom, varijabli dodjeljujemo sadrzaj ugnijezdene.

```js
function vanjskaF(vanjskaV) {
  
  function unutrasnjaF(unutrasnjaV) {
    console.log('Vanjska varijabla: ' + vanjskaV);
    console.log('Unutrasnja varijabla: ' + unutrasnjaV);
  }

  return unutrasnjaF;

  // ili mozemo napisati
  // return function unutrasnjaF(unutrasnjaV) {...}
}

let funkcija = vanjskaF('vanjska');

console.log(funkcija);
```

Sadrzaj `funkcija` varijable sada je:

<pre class="basic-pre">
function unutrasnjaF(unutrasnjaV) {
   console.log('Vanjska varijabla: ' + vanjskaV);
   console.log('Unutrasnja varijabla: ' + unutrasnjaV);
 }
</pre>

Treba imati u vidu da ona takodje ostaje svjesna `vanjskaV` lokalne varijable vanjske funkcije ciju vrijednost smo proslijedili kroz argument.

Sada cemo kreiranu varijablu pozvati kao funkciju sa argumentom i na ovaj nacin zapravo pozvati ugnijezdenu funkciju. Ono sto vrijedi ponovo napomenuti — <em style="font-style: normal">ugnijezdena funkcija pamti stanje vanjske funkcije bez obzira gdje je pozvana</em> i ima pristup vanjskim varijablama. 

To mozemo vidjeti u rezultatu gdje proslijedjen argument vanjskoj funkciji zadrzava vrijednost u oba primjera jer je unutrasnja funkcija pamti.

```js
function vanjskaF(vanjskaV) {
  let brojanje = 0;

  return function unutrasnjaF(unutrasnjaV) {
    console.log(++brojanje);
    console.log('Vanjska varijabla: ' + vanjskaV);
    console.log('Unutrasnja varijabla: ' + unutrasnjaV);
  };
}

let funkcija = vanjskaF('vanjska');
funkcija('unutrasnja'); 
funkcija('druga unutrasnja');
```

U konzoli izgleda ovako: 

<pre class="basic-pre">
1
Vanjska varijabla: vanjska
Unutrasnja varijabla: unutrasnja
2
Vanjska varijabla: vanjska
Unutrasnja varijabla: druga unutrasnja
</pre>

Closures se najcesce koristi da bi varijabli, koja je proslijedjena jednoj funkciji, kasnije mogli pristupiti u drugoj funkciji.

U poslednjem primjeru se moze primjetiti da je ugnijezdena funkcija pamtila stanje varijable vanjske funkcije `vanjskaV` i `brojanje` koja se povecavala svakim pozivom ugnijezdene funkcije. Razlog je leksicko okruzenje, ali da ne bi napravili prevelik korak, udubicemo se u tehnicke detalje koji omogucavaju funkcijama u JavaScriptu da budu zatvorenja.
U clanku — <a target="_blank" href="/posts/kontekst-izvrsenja-i-leksicko-okruzenje/">Kontekst izvrsenja i leksicko okruzenje u JavaScriptu</a> je objasnjeno kako ti procesi rade u pozadini. 

