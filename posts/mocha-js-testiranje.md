---
title: Mocha — automatizovano JavaScript testiranje
date: 2022-06-15T17:00:00.977Z
author: Marijana Sevo
summary: Mocha je JavaScript framework za testiranje. Bogata je funkcijama i radi na Node.js. Koristi se za komponentno i integraciono testiranje, i odlican je kandidat za BDD (Behavior Driven Development).
tags:
  - testiranje
  - javascript
thumbnail: /static/img/cs50-harvard-theatre-sanders.png
---

Mocha je <i>JavaScript framework za testiranje</i>. Bogata je funkcijama i radi na Node.js. Koristi se za komponentno (eng. unit) i integraciono testiranje (eng. integration testing), i odlican je kandidat za razvoj vodjen ponasanjem (eng. Behavior Driven Development ili BDD).

<p class="tip right-tip" style="--span-row: 2;">Razlika izmedju unit i integracionog testiranja: U unit testiranju se testira komponenta odvojena od ostatka programa - integraciono testiranje testira nekoliko komponenata koje rade zajedno.</p>

## Zasto je testiranje vazno za razvoj softvera

Cilj testiranja softvera je pronalazenje gresaka, propusta i neispunjenih zahtjeva u odnosu na postavljene zahtjeve. <em>Pronalazak ovih gresaka u ranijim fazama cini ispravljanje lakse, brze i jeftinije</em>. Sto se ranije testiranje uvede u projekat - to bolje. 

Osim sto se brine za ispunjavanje zahtjeva i presretanje gresaka prije nego proizvod bude dostupan korisniku, komponentno testiranje obicno uslovljava programera da pise sto modularniji kod. Testovi i modularan kod omogucavaju dodavanje novih funkcija ili izmjenu postojeceg koda bez straha. Ovakvi faktori cine kod, proces i proizvod kvalitetnijim.

### Zasto je automatizovano testiranje vazno

Prilikom manuelnog testiranja lako je propustiti greske jer kroz razvoj necega, na umu imamo razne scenarije upotrebe proizvoda. Tesko je ocekivati od developera da ih sve provjeri nakon svake promjene koda. Ovakve okolnosti su plodno tlo za ispravljanje jedne greske bez svijesti o nastanku druge.

## Razvoj vodjen ponasanjem

Razvoj vodjen ponasanjem ili BDD je agilni pristup za razvoj softvera. Intuitivno je napisati kod i potom ga testirati. Uz BDD se prvo fokusira na plan, tj. prvo se pise test. Kroz test se dokumentuje i <i>definise kako dio programa treba raditi</i> u odredjenim okolnostima.

<p class="tip right-tip" style="--span-row: 2;">Ovi testovi su ujedno testovi, dokumentacija i primjeri ili ocekivanja.</p>

Sledeci korak je pisanje koda dok ne ispuni sva ocekivanja testa. U pocetku ni jedan uslov nece biti ispunjen i kod se usavrsava dok svi uspjesno ne prodju test. 

<!-- Kada sve greske iz testa budu ispravljene, pisu se testovi za sledecu funkciju koju je potrebno implementirati i ponovo se pise kod dok svi zahtjevi novog testa ne budu ispunjeni. -->

```bash
Highlight App
    getHighlights()
      ✔ returns typeof array
    getNumberOfHighlights()
      ✔ returns typeof number
      1) number is above 0


  3 passing (10ms)
  1 failing
```

Isprva nema potrebe brinuti da li je kod efikasan ili izgleda dobro. U tom trenutku je fokus na ispunjavanju zahtjeva testa. Testovi koji prodju bez gresaka ukazuju da kod radi ono sto bi trebao i fokus moze biti na optimizovanju koda i njegovoj citljivosti. Ovaj proces se naziva refaktorisanje koda. U toku refaktorisanja koda, testovi ce istog trenutka pokazati ukoliko neka od funkcija prestane raditi i greska se moze ispraviti.

Navedeni razvojni ciklus se naziva `red > green > refactor`:

+ <span>`Red`: Napisati test za novu funkcionalnost komponente. Kao referenca na nesto sto jos ne postoji isprva prikazuje gresku.</span>
+ <span>`Green`: napisati najlaksi kod koji ce ispuniti zahtjev testa.</span>
+ <span>`Refactor`: popraviti kvalitet i optimizovati kod.</span>
+ Ponoviti ciklus.

<p class="tip right-tip" style="--span-row: 2;">Ovo je razvojni ciklus pretka BDD pristupa - Test Driven Development. BDD ima vise koraka, ali su navedeni sustinski za developere. <a target="_blank" href="https://www.baeldung.com/cs/bdd-guide">Vise informacija</a></p>

### BDD benefiti

Cak i kada postane nejasno gdje poceti zbog kompleksnosti komponente, BDD pomaze pri razbijanju problema na manje i jednostavnije dijelove na temelju kojih dalje razvijamo sve slozeniju funkcionalnost. Osim sto BDD pristup vodi kroz jednostavnije pisanje koda, dobijamo i testove kao i pazljivije promisljene funkcije. Ovakvi testovi sami pristojno dokumentuju i objasnjavaju kod drugima jer govore kako funkcije rade i sta se od njih ocekuje.

## Mocha automatizovano testiranje na djelu 🦸

Koristicemo <a target="_blank" href="https://mochajs.org/">Mocha</a> framework sa uobicajnim funkcijama testiranja (poput `describe` i `it` koji se koriste za organizovanje i izvrsenje testova) i biblioteku sa razlicitim tvdnjama i ocekivanjima. Node.js vec ima ugradjenu biblioteku tvrdnji, ali su dostupne opseznije biblioteke poput Chai, Expect.js, Should.js itd. Biramo <a target="_blank" href="https://www.chaijs.com/">Chai</a>. 

<p class="tip right-tip">I Mocha i Chai su pogodni za testiranje u pretrazivacu i za testiranje na strani servera, ali se ovdje bavimo pretrazivacem.</p>

### Kako instalirati i podesiti Mocha i Chai

```bash
mkdir mochatest 
cd mochatest
cat > index.js
npm init -y
npm install mocha chai --save-dev
code put/do/foldera
```

<p class="tip right-tip">6. `code put/do/foldera` komanda otvara projekat u VSC-u.</p>

1) Prvo kreiramo `mochatest` folder kroz terminal. 
2) Druga linija terminalu pokazuje da mijenjamo folder na kom radimo. 
3) Kreiramo fajl `index.js`. 
4) Potom inicijalizujemo `npm` u nasem projektu (Node Package Manager je najveci svjetski softverski registar i developeri ga koriste da dijele softver).  `npm` je instaliran uz Node.js i komanda nece raditi ukoliko Node.js nije instaliran na kompjuteru. 
5) Nakon inicijalizacije instaliramo Mocha i Chai biblioteku u projekat sto se oslikava u `package.json` fajlu:

```json
"devDependencies": {
  "chai": "^4.3.6",
  "mocha": "^10.0.0"
}
```

Mocha ce traziti folder nazvan `test` i unutar testnog foldera bi trebali oponasati strukturu foldera aplikacije koja se testira.

```bash
mkdir test 
cd test
cat > indexTest.js
```

Da bi pokretali testove napravicemo jednu izmjenu u `package.json` fajlu. `"test": "echo \"Error: no test specified\" && exit 1"` cemo zamjeniti sa `"test": "mocha"`.

```json
"scripts": {
  "test": "mocha"
},
```

Ukoliko u terminalu napisemo komandu `npm test`, Mocha ce pokrenuti sve testove u `test` folderu. Kako jos uvijek nemamo napisane testove dobijamo poruku <span style="color: green;">`0 passing (1ms)`</span>.


### Describe i it

```js
describe('Calculator', () => {
  describe('Addition', () => {
    it('should sum two numbers', () => {
        // Chai tvrdnja
      });
  });

  describe('Division', () => {
   it('should divide two numbers', () => {
       // Chai tvrdnja
    });

   it('should return NaN if the denominator is 0', () => {
        // Chai tvrdnja
      });
  });
});
```

`it` poziv identifikuje svaki pojedinacni test, ali ne govori kako Mocha treba strukturirati test suite ili paket. To radi `describe`. Testni paket opisuje i sadrzi set ciljeva ili tvrdnji koji zajedno sluze vecem slicnom cilju. Testni paket "Calculator" moze imati unutrasnje pakete sabiranja, oduzimanja, mnozenja i dijeljenja. Unutar testnog paketa "Division" su definisana dva testa koji trebaju utvrditi da li su brojevi ispravno podijeljeni i da li funkcija moze ispravno iznjeti dijeljenje ako je djelitelj 0.

### Chai tvrdnje ili ocekivanja

Mozda je Chai najlakse shvatiti iz primjera. Prvo cemo predstaviti Chai biblioteku i ocekivanja na pocetku testnog fajla, ali i gdje ce se nalaziti kod aplikacije.

```js
var expect     = require("chai").expect;
var calculator = require("../index");

expect(calculator.someFunction(Infinity)).to.be.NaN;
```

Poslednja linija je tvrdnja i izgleda kao recenica na engleskom jeziku: ocekujem da `someFunction(Infinity)` iz fajla `index.js` vrati vrijednost `NaN`



### Uvod u Mocha i Chai automatizovano testiranje

<span style="color: #aa0000">`Red`</span> faza ciklusa. Imajte na umu da nas implementacijski kod u ovom trenutku ne postoji, ali to nas ne sprecava da pisemo testove kao da implementacija postoji. Znamo da cemo funkciju za sabiranje nazvati `add()`.

Chai tvrdnja za sabiranje ocekuje da funkcija `add(50, 39)` vrati vrijednost 89 i da `add(4, 2)` bude jednaka 6:

```js
expect(calculator.add(50, 39)).to.equal(89);
expect(calculator.add(4, 2)).to.equal(6);
```

I nas `indexTest.js` bi sada trebao izgledati ovako:

```js
var expect     = require("chai").expect;
var calculator = require("../index");

describe('Calculator', () => {
  describe('Addition', () => {
    it('should sum two numbers', () => {
        expect(calculator.add(4, 2)).to.equal(6);
        expect(calculator.add(50, 39)).to.equal(89);
      });
  });
});
```

Dovoljno je da samo jedna tvrdnja ne prodje da rezultat `it` testa bude negativan bez detaljnijih informacija sta je poslo krivo. Iz ovog razloga nije preporucljivo pod istim `it` testom provjeravati nekoliko razlicitih tvrdnji. 

Pokrenucemo testove sa komandom `npm run test` u terminalu da bi vidjeli sta ce se desiti. Test ne bi trebao proci jer ne postoji implementacijski kod za sabiranje.

```bash
put\do\projektnog\foldera> npm test

> mochatest@1.0.0 test
> mocha

  Calculator
    Addition
      1) should sum two numbers

  0 passing (5ms)
  1 failing
```

<span style="color: green">Green</span> faza ciklusa. Recimo da smo nakon toga napisali kod koji ce ispuniti zahtjeve testa u `index.js` fajlu i ponovo pokrecemo testove.

```js
const add = (a, b) => a + b;

module.exports = {
  add,
};
```

```bash
put\do\projektnog\foldera> npm test

  Calculator
    Addition
      ✔ should sum two numbers

  1 passing (5ms)
```


Znamo da kod radi ono sto bi trebalo! Recimo da nema potrebe za refaktorizacijom i idemo dalje. Pisemo test za dijeljenje dva broja i znamo da ce se funkcija koja dijeli dva broja zvati `divide()`. Chai ocekuje da ce funkcija `divide(50, 5)` vratiti vrijednost 10, ali test ne moze proci kako funkcija jos ne postoji.

```js
var expect     = require("chai").expect;
var calculator = require("../index");

describe('Calculator', () => {
  describe('Addition', () => {
    it('should sum two numbers', () => {
        expect(calculator.add(4, 2)).to.equal(6);
        expect(calculator.add(50, 39)).to.equal(89);
      });
  });

  describe('Division', () => {
   it('should divide two numbers', () => {
       expect(calculator.divide(50, 5)).to.equal(10);
    });
  });
});
```

```bash
put\do\projektnog\foldera> npm test

  Calculator
    Addition
      ✔ should sum two numbers
    Division
      1) should divide two numbers


  1 passing (6ms)
  1 failing
```

Potom dodajemo `divide()` funkciju u `index.js` fajlu koja ce dijeliti dva broja.

```js
const add = (a, b) => a + b;
const divide = (a, b) => a / b;
module.exports = {
  add,
  divide,
};
```

```bash
put\do\projektnog\foldera> npm test

  Calculator
    Addition
      ✔ should sum two numbers
    Division
      ✔ should divide two numbers


  2 passing (5ms)
```

Medjutim, dijeljenje sa nulom u JavaScriptu daje beskonacno. Ono sto nam vise odgovara je `NaN` (Not a Number). Pisemo test koji ce potvrditi da bilo koje dijeljenje sa nulom vraca `NaN`.

```js
var expect     = require("chai").expect;
var calculator = require("../index");

describe('Calculator', () => {
  describe('Addition', () => {
    it('should sum two numbers', () => {
        expect(calculator.add(4, 2)).to.equal(6);
        expect(calculator.add(50, 39)).to.equal(89);
      });
  });

  describe('Division', () => {
   it('should divide two numbers', () => {
       expect(calculator.divide(50, 5)).to.equal(10);
    });

    it('should return NaN if the denominator is 0', () => {
      expect(calculator.divide(7, 0)).to.be.NaN;
    });
  });
});
```

```bash
put\do\projektnog\foldera> npm test

  Calculator
    Addition
      ✔ should sum two numbers
    Division
      ✔ should divide two numbers
      1) should return NaN if the denominator is zero


  2 passing (7ms)
  1 failing
```

Test nam govori da funkcija `divide()` ne radi bas kako zelimo i reci cemo joj da prvo provjeri da li je djelilac 0 i ako jeste da vrati vrijednost `NaN`, ako djelilac nije 0 - da podijeli dva ponudjena broja. Na ovaj nacin mozemo ispuniti i prvi i drugi zahtjev.

```js
const add = (a, b) => a + b;
const divide = (a, b) => b !== 0 ? a / b : NaN;
module.exports = {
  add,
  divide,
};
```

```bash
put\do\projektnog\foldera> npm test

  Calculator
    Addition
      ✔ should sum two numbers
    Division
      ✔ should divide two numbers
      ✔ should return NaN if the denominator is zero


  3 passing (6ms)
  ```

Kod za oduzimanje i mnozenje je dovoljno jednostavan i mozete ga sami dodati. Ovaj tekst je za sada samo uvod. Istrazite dokumentacije i eksperimentisite sa kompleksnijim problemima.


## Dodatni linkovi

+ <a target="_blank" href="https://javascript.info/testing-mocha#the-spec-in-action">Automated testing with Mocha</a>
+ <a target="_blank" href="https://youtu.be/u5cLK1UrFyQ">Intro To JavaScript Unit Testing & BDD (2 Hour+ Course)</a>
+ <a target="_blank" href="https://mochajs.org/">Mocha.js</a>
+ <a target="_blank" href="https://www.chaijs.com/">Chai.js</a>