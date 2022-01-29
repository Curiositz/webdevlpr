---
title: Optimizacija sajta za pretrazivace
date: 2022-01-25T19:33:53.977Z
author: Marijana Sevo
summary: SEO vodic za web developere. Osvrt na standarde koji se mogu ispuniti direktno na sajtu, a koje Google odobrava. Fokus nisu teme za marketare.
tags:
  - post
  - SEO
  - HTML
  - semanticni-HTML
  - pristupacnost
  - JavaScript
  - socijalne-mreze
thumbnail: /static/img/seo.jpg
---

SEO ili optimizacija web stranice za internet pretrazivace sluzi za <em>povecanje kvaliteta saobracaja koji je usmjeren prema sajtu</em> preko prirodnih (organskih ili algoritamskih) rezultata pretrage.

<p class="tip right-tip" style="--span-row: 2;">Marketari i <em>SEO strucnjaci</em> se bave optimizacijom web stranice. To uglavnom <em>nisu web developeri</em> i izostavljene su mnoge teme.</p>

Znacaj ovog polja se vidi i u tome da visoko rangiranje na Google-u moze vrijediti milione eura. Sta web stranicu cini efektivnom?


## Kvalitetan sadrzaj ♛ 
Jedna od losih metrika za SEO je ukoliko korisnik odmah po posjeti web stranice izgubi interesovanje da cita sarzaj i vrati se na rezultate pretrage. Ovo se naziva <i>bounce rate</i> — stopa korisnika koji su posjetili sajt, ali nisu pronasli sadrzaj koji ih zanima. 

Zasiceni smo nepotrebnim informacijama i svjetlucavim naslovima, a ono sto korisnik prvo vidi ga treba navesti da zeli procitati vise. Najbolji adut za izbjegavanje visokog bounce rate je sto kvalitetniji sadrzaj.
Takav sadrzaj ce podsticati vrijeme zadrzavanja korisnika na stranici (<i>dwell time</i>) koji je vazniji i od vjerovatnoce da ce korisnik kliknuti link kada se sajt pojavi u rezultatima (<i>click-through rate</i> CTR). 

Druge vazne metrike:
+ <span>prosjecno trajanje sesije (<i>session duration</i>)</span>
+ <span>prosjecan broj pregledanih stranica po sesiji (<i>number of pages viewed per session</i>)</span>

Ove i druge podatke o saobracaju na sajtu je moguce pratiti sa <a target=”_blank” href="https://analytics.google.com/analytics/web/">Google Analitikom</a>. 

### XML Sitemap-a

Botovi pretrazivaca posjecuju linkove i sadrzaj na stranicama da bi se indeksirao sajt. Ukoliko web stranice nisu indeksirane one se nece prikazivati u rezultatima pretrage (<i>search engine results page</i> SERP). Sitemap-a pomaze pretrazivacima, kao sto je Google, da pronadju sve linkove i prepoznaju koje web stranice sajt sadrzi.

Sajtovi koji mogu imati benefit od ovog fajla:

+ Sitemap ne moze imati negativan uticaj — tako da svi?
+ Koji zele bolju vidljivost medju pretrazivacima
+ Sajt sa velikim brojem web stranica jer botovi pretrazivaca mogu propustiti linkove
+ Sajt koji ima web stranice, a koje nisu povezane u mrezu linkova
+ Novi sajt koji zeli podici nivo optimizacije

#### Kako kreirati XML Sitemap-u?

Moguce je generisati je sa <a target="_blank" href="https://www.xml-sitemaps.com/">XML-Sitemaps</a>. Potrebno je kopirati link sajta i preuzeti generisani .xml fajl.  Preuzeti fajl treba smjestiti u glavni (root) folder:  `https://www.example.com/sitemap.xml`. Potom registrovati XML Sitemap-u na <a href="https://www.google.com/webmasters/tools/home">Google Search konzoli</a>.

### Robots.txt

Pomocu dadoteke `robots.txt` je moguce kontrolisati kojim folderima i fajlovima koji botovi mogu pristupiti i koji sadrzaj mogu indeksirati. `robots.txt` moze sadrzati jedno ili vise pravila. Svako pravilo blokira ili dozvoljava pristup odredjenom botu pretrazivaca ka odredjenoj web stranici.

Osim ako je navedeno suprotno, implicitno je dozvoljeno indeksiranje cijelog sadrzaja. U sledecem primjeru su postavljena dva pravila:

``` txt
# Googlebot i AdsBot je dozvoljeno sve osim
# http://example.com/nogb/
User-agent: Googlebot
User-agent: AdsBot-Google
Disallow: /nogb/

# Svim drugim korisnickim agentima je dozvoljeno da indeksiraju 
# cijeli sajt. Izostavljanje ovog pravila ima isti rezultat.
User-agent: *
Allow: /

# Link do XML Sitemap-e
Sitemap: http://www.example.com/sitemap.xml
```

Fajl se postavlja u glavni (root) folder `https://www.example.com/robots.txt`. Vise o <a target="_blank" href="https://developers.google.com/search/docs/advanced/robots/create-robots-txt">robots.txt</a>.

## Upotreba ispravnog HTML koda
<em>Semanticni HTML</em> je upotreba HTML elemenata koji jacaju semantiku i znacenje informacija na web stranici. Semanticni elementi jasno komuniciraju sa pretrazivacom sta je <em>znacenje stranice i njenog sadrzaja</em>. Ta jasnoca osigurava da na upit pretrazivaci isporuce najbolje rezultate.

Nesemanticni tagovi poput `<div>` i `<span>` ne govore vise o sadrzaju. 

<figure style="max-width: 300px;">
<img src="/static/img/semantic-html.png" alt="Semantic and non-semantic HTML"> 
 <figcaption>Primjer semanticnog HTML koda.</figcaption>
</figure>

Neki od tagova o kojima se cesto govori su tagovi za naslove gdje najveci znacaj ima `<h1>`. Lista semanticnih <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">tagova</a>.



### Meta podaci

Meta elementi nisu vidljivi na stranici i sluze da bi pretrazivacu pruzile <em>vise informacija o web stranici</em>. Pretrazivac koristi ove podatke da bi shvatio o cemu je sajt, kada ga treba ponuditi kao rezultat i kako ga prezentovati na stranici sa rezultatima (SERP).

``` html
<head>
 <title>Naslov treba biti do 60 karaktera</title>
 <meta name="description" 
 content="Optimalna duzina opisa je 160 karaktera">
 <meta name="keywords" content="HTML, CSS, JS">
 <meta name="author" content="John Doe">
 <link href="https://example.com/" rel="canonical">
</head>
```

+ <span>Element `<title>` se prikazuje kao naslov na stranici sa rezultatima (SERP) i u tabu pretrazivaca kada je stranica otvorena.</span>
+ <span>Od `<meta name='description'>` ne ovisi da li ce pretrazivac ponuditi sajt kao rezultat, ali sluzi korisniku pri odabiru web stranice i utice na stopu klikanja (CTR). Prikazuje se na stranici sa rezultatima (SERP).</span>
+ <span>`rel="canonical"` govori pretrazivacu koji link se indeksira kada postoji nekoliko razlicitih URL adresa koje vode ka istoj web stranici poput: `https://www.example.com/` ili `https://example.com/index.html`</span>

### `data nosnippet` atribut

Nekada pretrazivac ignorise opis koji je obezbjedjen kroz `<meta name="description" content="">` tag i umjesto njega postavi sadrzaj sa stranice po svom nahodjenju (algoritmu) po kom bi prikazani tekst mozda vise bio od pomoci korisnikovom upitu.

Iako prikazani isjecak nije faktor rangiranja, on utice na korisnika da odabere odredjeni rezultat sto dalje utice na stopu klikanja (CTR). Da bi sprijecili Google da koristi odredjeni sadrzaj kao isjecak za opis moguce je koristiti `data nosnippet` atribut u sklopu `<span>`, `<div>` ili `<section>` taga.

``` html
<p>
  Sadrzaj u paragrafu moze biti ukljucen u isjecak
  <span data-nosnippet>
    ali ovaj dio ne bi bio prikazan.
  </span>
</p>
```

#### Robots meta

Robots meta element govori pretrazivacima da li da indeksiraju web stranicu:

``` html
<meta name=”robots” content=”noindex,nofollow”>
<!-- or -->
<meta name=”robots” content=”index,follow”>
```

+ <span><i>follow</i> pretrazivac ce pratiti sve linkove na toj web stranici</span>
+ <span><i>index</i> pretrazivac indeksira cijelu web stranicu</span>
+ <span><i>nofollow</i> pretrazivac nece pratiti sve linkove na toj web stranici</span>
+ <span><i>noindex</i> pretrazivac nece indeksirati tu web stranicu</span>

#### Meta socijalne mreze

Ovi meta tagovi omogucavaju sinhronizaciju i kontrolu prikaza web stranice pri dijeljenju na nekoj socijalnoj mrezi.

<figure style="max-width: 450px;">
<img src="/static/img/twitter-card.JPG" alt="How a website looks like when shared on Twitter"> 
 <figcaption>Kako izgleda web stranica kada se podijeli na Twitteru</figcaption>
</figure>

<em>Open graph</em> meta tagovi integrisu web stranicu sa raznim mrezama poput Facebook, LinkedIn, Discord itd. <em>Twitter</em> ima vrijednosti koje funkcionisu na identican nacin. Izgled se moze provjeriti na sajtovima poput: <a target=”_blank” href="https://cards-dev.twitter.com/validator">Twitterov validator kartica</a> a neke druge mreze se mogu provjeriti na <a target=”_blank” href="https://www.opengraph.xyz/">Open Graph</a> 

``` html
<!-- OG ili Open graph-->
<meta property="og:type" content="article">
<meta property="og:title" content="Naziv stranice">
<meta property="og:description" content="Opis sajta">
<meta property="og:image" content="Link do slike">
<meta property="og:url" content="Link stranice">
<meta property="og:site_name" content="Naziv sajta">
<!-- Twitter-->
<meta name="twitter:title" content="Naziv stranice">
<meta name="twitter:description" content="Opis sajta">
<meta name="twitter:image" content="Link do slike">
<meta name="twitter:site" content="@username">
<meta name="twitter:creator" content="@username">
```

### Atributi schema

<a target="_blank" href="https://schema.org/">Schema.org</a> je projekat zajednice sa misijom da stvaraju, odrzavaju i promovisu <em>seme za strukturirane podatake na internetu</em>. Diskutabilno je da li ovi atributi povecavaju rangiranje sajta pri pretrazivanju nekog upita, ali oni omogucavaju definisanje dodatnih meta podataka o sadrzaju na web stranici. Takvi podaci pomazu pretrazivacu da interpretiraju sadrzaj ispravno na stranici sa rezultatima pretrazivanja (SERP).

Jedni od primjetnijih primjena ovih atributa u rezultatima se vide pri pretrazivanju nekog proizvoda, usluge ili recepta koji je ocijenjen.

<figure>
<img src="/static/img/scheme.JPG" alt="How Google interpets schema attributes for a recipe"> 
 <figcaption>Google prikazuje ocjenjen recept u rezultatima</figcaption>
</figure>


Seme su podjeljene u <a target="_blank" href="https://schema.org/docs/schemas.html">tipove</a>, a svaki tip je povezan sa skupom atributa. Neki od njih su za knjige, filmove, muziku, recepte, serije, zdravlje, organizaciju, osobu, mjesto, lokalni posao, restoran, proizvod, ponudu, recenziju itd.

Koncept ovih meta podataka se moze vidjeti u kodu ispod:

``` html
<div itemscope itemtype="https://schema.org/Recipe">
  <span itemprop="name">Mom's Red Lentils</span>
  By <span itemprop="author">John Smith</span>,
  <meta itemprop="datePublished" content="2009-05-08">May 8, 2009
  <img itemprop="image" src="bananabread.jpg"
       alt="Banana bread on a plate">

  <span itemprop="description">This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.</span>

  Prep Time: <meta itemprop="prepTime" content="PT15M">15 minutes
  Cook time: <meta itemprop="cookTime" content="PT1H">1 hour
  Yield: <span itemprop="recipeYield">1 loaf</span>
  Tags: <link itemprop="suitableForDiet" href="https://schema.org/LowFatDiet">Low fat

  <div itemprop="nutrition"
    itemscope itemtype="https://schema.org/NutritionInformation">
    Nutrition facts:
    <span itemprop="calories">240 calories</span>,
    <span itemprop="fatContent">9 grams fat</span>
  </div>

  Ingredients:
  - <span itemprop="recipeIngredient">3 or 4 ripe bananas, smashed</span>
  - <span itemprop="recipeIngredient">1 egg</span>
  - <span itemprop="recipeIngredient">3/4 cup of sugar</span>

  Instructions:
  <span itemprop="recipeInstructions">
  Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add
  the flour last. Pour the mixture into a loaf pan and bake for one hour.
  </span>
</div>
```

Strukturirani podaci se mogu testirati u ovim <a target="_blank" href="https://developers.google.com/search/docs/advanced/structured-data">validatorima</a>.

### Pristupacnost

#### Responzivan i prilagodjen dizajn

Prisustvo `<meta name="viewport" content="...">` linije ukazuje pretrazivacu da je stranica prilagodjena mobilnim uredjajima i kako treba kontrolisati dimenzije i skaliranje stranice. Ovim sajtovima se daje prednost, ali osim ove linije potrebno je definisati ponasanje stranice kroz CSS inace bi sadrzaj mogao izgledati losije sa ovom linijom.

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Slike

Pretrazivaci ne mogu citati slike koje cine kljucni dio web stranica. Zato slike koriste <em>alt</em> atribut za pristupacnost. U pretrazi za slikama pretrazivac se vodi alternativnim tekstom.

``` html
<img alt="Opis fotografije" src="">
```

#### Linkovi i veze

Pretrazivac ce pratiti izlazne linkove na sajtu da bi zakljucio da li web stranica nudi kvalitetan sadrzaj i o cemu se na njoj radi. Ako linkovi vode ka sajtovima sa kredibilitetom to je plus. Sa <em>rel</em> atributom je moguce naglasiti pretrazivacu da ne treba pratiti odredjeni link. 

``` html
<a href="#" rel="nofollow"></a>
```

+ <span>Koristiti <i>nofollow</i> za linkove u koje nemamo povjerenja</span>
+ <span><i>Sponsored</i> za sponzorisane</span>
+ <span><i>Ugc</i> za one koje su generisali korisnici (user generated content)</span>


## Brzo ucitavanje sadrzaja <i role="img" aria-label="JavaScript" title="JavaScript" class="fas fa-bolt"></i>

Brzina ucitavanja stranice igra jos znacajniji faktor u rangiranju od kada su pametni telefoni preuzeli vecinu saobracaja na internetu. Oni mogu sporije ucitavati sadrzaj jer koriste mobilne podatke ili jer kod sajta nije ispravno prilagodjen manjim ekranima. 

Brzina je samo jos jedan od faktora kvalitetnog korisnickog iskustva i Google preporucuje da ovo vrijeme bude <em>ispod dvije sekunde</em>, ali da cilj treba biti ispod pola sekunde.

<p class="tip right-tip" style="--span-row: 1;">Brzina se moze testirati na: <a target=”_blank” href="http://developers.google.com/speed/pagespeed/insights">PageSpeed Insights</a>, <a target=”_blank” href="http://developers.google.com/web/tools/lighthouse">Lighthouse</a>, <a target=”_blank” href="http://gtmetrix.com/">GTmetrix</a>, <a target=”_blank” href="https://tools.pingdom.com/">Pingdom</a></p>


### Optimizacija koda

+ Kompresija i minimizacija koda 
+ Upotreba hostinga sa CDN-om (content delivery network)
+ <span>Upotreba generatora statickog sajta (static site generator) kao <a target="_blank" href="https://www.11ty.dev/">11ty</a></span>
+ Upotreba caching pretrazivaca
+ Skloniti JavaScript koji blokira ucitavanje sadrzaja (render blocking Javascript)
+ Izbjegavanje preusmjeravnja stranica

### Smanjiti JavaScript koji blokira ucitavanje sadrzaja

Prije nego pretrazivac prikaze stranicu on mora napraviti DOM stablo rasclanjivanjem HTML elemenata. Tokom procesa, kad god se pojavi skripta, pretrazivac mora sacekati da se preuzme i izvrsi, potom nastaviti kreiranje DOM stabla.

Preporucuje se smanjiti upotrebu JavaScripta, posebno eksternih skripti koji se moraju preuzeti prije izvrsavanja. One koje su neophodne je:

+ <span>Moguce staviti <i>inline</i> u sam dokument unutar `<script>` taga, ali ovaj sarzaj treba biti kratak i brzo se izvrsavati</span>
+ <span>Skripte koje nisu kljucne za inicijalno prikazivanje bi trebale biti asinhrone (<i>asynchronoasius</i>) ili odlozene (<i>deferred</i>)</span>

``` html
<script type="text/javascript">
  /* ono sto bi bio sadrzaj manje JavaScript datoteke */
</script>

<script async src="my.js"></script>
<!-- Skripta ce biti preuzeta paralelno sa rasclanjivanjem stranice i izvrsena cim bude dostupna -->
<script defer src="my.js"></script>
<!-- Skripta ce biti preuzeta paralelno sa rasclanjivanjem stranice i izvrsena nakon sto stranica zavrsi rasclanjivanje -->
```

### Optimizacija slika

+ <span>Kompresija fotografija: <a target=”_blank” href="https://shortpixel.com/">Shortpixel</a>, <a target="_blank" href="https://imageresizer.com/">Image Resizer</a>, <a target="_blank" href="https://compressjpeg.com/">Compress JPEG</a></span>
+ Navodjenje velicine fotografije kroz width i height
+ Primjena lijenog ucitavanja (lazy loading)
+ <span>Koristenje `srcset` atributa za razlicite velicine ekrana</span>

### Dodatni linkovi

<a target="_blank" href="https://moz.com/learn/seo/seo-cheat-sheet">SEO Cheat Sheet za Web Developere</a>


