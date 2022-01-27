---
title: Optimizacija sajta za pretraživače
date: 2022-01-25T19:33:53.977Z
author: Marijana Sevo
summary: SEO vodič za web developere. Tekst se osvrće na neke standarde koji se
  mogu ispuniti direktno na sajtu, a koje Google odobrava kada je u pitanju SEO.
  Fokus nisu teme za marketare.
tags:
  - post
  - SEO
  - semantički HTML
thumbnail: /static/img/seo.jpg
---

SEO ili optimizacija web stranice za internet pretraživače služi za <em>povećanje kvaliteta saobraćaja koji je usmjeren prema sajtu</em> preko prirodnih (organskih ili algoritamskih) rezultata pretrage.

<p class="tip right-tip" style="--span-row: 2;">Marketari i <em>SEO stručnjaci</em> se bave optimizacijom web stranice. To uglavnom <em>nisu web developeri</em> i izostavljene su mnoge teme.</p>

Značaj ovog polja se vidi i u tome da visoko rangiranje na Google-u može vrijediti milione eura. Šta web stranicu čini efektivnom?


## Kvalitetan sadržaj ♛ 
Jedna od loših metrika za SEO je ukoliko korisnik odmah po posjeti web stranice izgubi interesovanje da čita saržaj i vrati se na rezultate pretrage. Ovo se naziva <em>bounce rate</em> — stopa korisnika koji su posjetili sajt, ali nisu pronašli sadržaj koji ih zanima. 

Zasićeni smo nepotrebnim informacijama i svjetlucavim naslovima. Ono što korisnik prvo vidi treba ga navesti da želi pročitati više. Najbolji adut za izbjegavanje visokog bounce rate je što kvalitetniji sadržaj.
Takav sadržaj će podsticati vrijeme zadržavanja korisnika na stranici (<em>dwell time</em>) koji je važniji i od vjerovatnoće da će korisnik kliknuti link kada se sajt pojavi u rezultatima (<em>click-through rate</em> CTR). 

Druge važne metrike:
+ <span>prosječno trajanje sesije (<em>session duration</em>)</span>
+ <span>prosječan broj pregledanih stranica po sesiji (<em>number of pages viewed per session</em>)</span>

Ove i druge podatke o saobraćaju na sajtu je moguće pratiti sa [Google Analitikom](https://analytics.google.com/analytics/web/). 


## Upotreba ispravnog HTML koda
<em>Semantični HTML</em> je upotreba HTML elemenata koji jačaju semantiku i značenje informacija na web stranici. Semantički elementi jasno komuniciraju sa pretraživačom šta je <em>značenje stranice i njenog sadržaja</em>. Ta jasnoća osigurava da na upit pretraživači isporuče najbolje rezultate.

<figure>
<img src="/static/img/semantic-vs-non-semantic-html.JPG" alt="Semantic and non-semantic HTML"> 
 <figcaption>Primjer semantičnog i nesemantičnog HTML koda.</figcaption>
</figure>



### Meta podaci

Meta elementi nisu vidljivi na stranici i služe da bi pretraživaču pružile <em>više informacija o web stranici</em>. Pretraživač koristi ove podatke da bi shvatio o čemu je sajt, kada ga treba ponuditi kao rezultat i kako ga prezentovati na stranici sa rezultatima.

``` html
<head>
 <title>Naslov treba biti do 60 karaktera</title>
 <meta name="description" 
 content="Optimalna dužina opisa je 160 karaktera">
 <meta name="keywords" content="HTML, CSS, JS">
 <meta name="author" content="John Doe">
 <link href="https://example.com/" rel="canonical">
</head>
```

+ <span>Element `<title>` se prikazuje kao naslov na stranici sa rezultatima i u tabu pretraživača kada je stranica otvorena.</span>
+ <span>Od `<meta name='description'>` ne ovisi da li će pretraživač ponuditi sajt kao rezultat, ali služi korisniku pri odabiru web stranice i utiče na stopu klikanja. Prikazuje se na stranici sa rezultatima.</span>
+ <span>`rel="canonical"` govori pretraživaču koji link se indeksira kada postoje identične web stranice sa nekoliko različitih URL adresa poput: `https://www.example.com/` ili `https://example.com/index.html`</span>

Robots meta element govori pretraživačima da li da indeksiraju web stranicu:

``` html
<meta name=”robots” content=”noindex,nofollow”>
<!-- or -->
<meta name=”robots” content=”index,follow”>
```

+ <span><em>follow</em> pretraživač će pratiti sve linkove na toj web stranici</span>
+ <span><em>index</em> pretraživač indeksira cijelu web stranicu</span>
+ <span><em>nofollow</em> pretraživač neće pratiti sve linkove na toj web stranici</span>
+ <span><em>noindex</em> pretraživač neće indeksirati tu web stranicu</span>

### Pristupačnost

Pretraživači ne mogu čitati slike koje čine ključni dio web stranica. Zato slike koriste <em>alt</em> atribut za pristupačnost. U pretrazi za slikama pretraživač se vodi alternativnim tekstom.

``` html
<img alt="Opis fotografije" src="">
```

Pretraživač će pratiti linkove na sajtu da bi zaključio da li web stranica nudi kvalitetan sadržaj. Ako linkovi vode ka sajtovima sa kredibilitetom to je plus. Sa <em>rel</em> atributom je moguće naglasiti pretraživaču da ne treba pratiti određeni link. 

``` html
<a href="#" alt="nofollow"></a>
```

+ <span>Koristiti <em>nofollow</em> za linkove u koje nemamo povjerenja</span>
+ <span><em>sponsored</em> za sponzorisane</span>
+ <span><em>ugc</em> za one koje su generisali korisnici (user generated content)</span>


## Brzo učitavanje sadržaja 🗲

Brzina učitavanja stranice igra još značajniji faktor rangiranja od kada su pametni telefoni preuzeli većinu saobraćaja na internetu. Oni mogu sporije učitavati sadržaj jer koriste mobilne podatke ili jer kod sajta nije ispravno prilagođen manjim ekranima. 

Brzina je samo još jedan od faktora kvalitetnog korisničkog iskustva i Google preporučuje da bi ovo vrijeme trebalo biti <em>ispod dvije sekunde</em>, ali da cilj treba biti ispod pola sekunde.

<p class="tip right-tip" style="--span-row: 1;">Može se testirati na: <a href="http://developers.google.com/speed/pagespeed/insights">PageSpeed Insights</a>, <a href="http://developers.google.com/web/tools/lighthouse">Lighthouse</a>, <a href="http://gtmetrix.com/">GTmetrix</a>, <a href="https://tools.pingdom.com/">Pingdom</a></p>


### Optimizacija koda

+ Kompresija i minimizacija koda 
+ Upotreba CDN
+ Upotrebiti caching pretraživača
+ Skloniti JavaScript koji blokira učitavanje sadržaja (render blocking Javascript)
+ Što manje preusmjeravnja stranica

### Optimizacija slika

+ Kompresovanje fotografija
+ Navođenje veličine fotografije kroz width i height
+ Primjena lijenog učitavanja (lazy loading)
+ Korištenje SRCSET atributa za različite veličine ekrana


