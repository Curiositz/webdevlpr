---
title: Implementacija Mocha, Chai i Sinona u projekat
date: 2022-06-22T17:00:00.977Z
author: Marijana Sevo
summary: Kako podesiti Mocha, Chai i Sinon za testiranje zasnovano na pretrazivacu?
tags:
  - testiranje
  - javascript
thumbnail: /static/img/automated-testing.webp
---

<figure> 
  <img src="/static/img/mocha-browser.png" alt="Mocha automated Unit testing in browser. Error message.">
  <figcaption>Mocha automatizovano Unit testiranje u pretrazivacu.</figcaption>
</figure>

## CDN

Uz <a target="_blank" href="https://cdnjs.com/about">cdnjs</a> servis je jednostavno podesiti okruzenje za pisanje testova koji su zasnovani na pretrazivacu. Nije neophodno preuzeti sve fajlove da bi se sluzili bibliotekama jer su mnoge JavaScript i CSS biblioteke pohranjene javno na GitHubu. cdnjs opsluzuje oko 12.5% svih stranica na internetu i nije najbolji izbor za svaku priliku, ali je nekada i vise nego praktican u odnosu na druge.

Za Mochu je potrebno:

```html
<!-- Mocha css stilizuje stranicu sa rezultatima -->
<link href="//cdnjs.cloudflare.com/ajax/libs/mocha/1.13.0/mocha.css" rel="stylesheet" />
<!-- Mocha framework -->
<script src="//cdnjs.cloudflare.com/ajax/libs/mocha/1.13.0/mocha.js"></script>

<script>
  mocha.setup('bdd'); // minimalno podesavanje
</script>

<!-- #mocha div u sebi drzi rezultate testova. -->
<div id="mocha"></div>

<!-- mocha.run(); pokrece testove -->
<script>
  mocha.run();
</script>
```

Za Chai je potrebno:

```html
<!-- Chai -->
<script src="//cdnjs.cloudflare.com/ajax/libs/chai/1.10.0/chai.min.js"></script>

<script>
  let assert = chai.assert; // assert je dostupan globalno
</script>
```
Za Sinon je potrebno:
```html
  <!-- Sinon -->
  <script src="//sinonjs.org/releases/sinon-1.12.2.js"></script>
```
  
I projektne skripte:
```html 
  <!-- Kod koji treba testirati. -->
  <script></script>

  <!-- Testovi. -->
  <script ></script>c
```

+ <span>`<link rel="stylesheet" href="">` mora biti u zaglavlju,</span>
+ <span>`<script></script>` moze biti u zaglavlju ili tijelu.</span>
+ <span>`<div id="mocha"></div>` mora biti u tijelu `.html` dokumenta i</span>
+ <span>`mocha.run();` mora biti nakon `<div id="mocha"></div>`.</span>

Praktican primjer:

<iframe  class="wide-img" frameborder="0" width="100%" height="500px" src="https://replit.com/@srhx/Mocha-Chai-and-Sinon?lite=true"></iframe>

## Mocha Chai i Sinon instalacija

CDN nije jedina opcija. Ako ne zelite ovisiti o linku na koji ne mozete uticati — Mocha, Chai i Sinon se mogu instalirati u sklopu projekta kroz terminal:

```bash
npm init -y
npm install mocha chai sinon --save-dev
```

<p class="tip right-tip" style="--span-row: 2;">Na racunaru je neophodno imati instaliran Node.js da bi <code>npm</code> komande radile.</p>


`.html` dokument je isti ali se putevi razlikuju jer smo kroz instalaciju fajlove pohranili lokalno.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- stylesheets -->
    <link rel="stylesheet" href="./node_modules/mocha/mocha.css">

    <!-- library scripts -->
    <script src="./node_modules/mocha/mocha.js"></script>
    <script src="./node_modules/chai/chai.js"></script>
    <script src="./node_modules/sinon/pkg/sinon.js"></script>
    
    <script>
      mocha.setup('bdd'); 
    </script>

    <script>
      let assert = chai.assert; 
    </script>

    <!-- project scripts -->
    <script src="app.js"></script>
    <script src="test.js"></script>
  </head>

  <body>
    <div id="mocha"></div>

    <script>
      mocha.run();
    </script>
  </body>
</html>
```

## Dodatni linkovi

+ <a href="/posts/mocha-js-testiranje/">Mocha automatizovano Unit testiranje</a>