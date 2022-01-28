---
title: Optimizacija sajta za pretraživače
date: 2022-01-25T19:33:53.977Z
author: Marijana Sevo
summary: SEO vodič za web developere. Osvrt na standarde koji se mogu ispuniti direktno na sajtu, a koje Google odobrava. Fokus nisu teme za marketare.
tags:
  - post
  - SEO
  - semanticni-HTML
  - socijalne-mreze
  - pristupacnost
thumbnail: /static/img/seo.jpg
---

SEO ili optimizacija web stranice za internet pretraživače služi za <em>povećanje kvaliteta saobraćaja koji je usmjeren prema sajtu</em> preko prirodnih (organskih ili algoritamskih) rezultata pretrage.

<p class="tip right-tip" style="--span-row: 2;">Marketari i <em>SEO stručnjaci</em> se bave optimizacijom web stranice. To uglavnom <em>nisu web developeri</em> i izostavljene su mnoge teme.</p>

Značaj ovog polja se vidi i u tome da visoko rangiranje na Google-u može vrijediti milione eura. Šta web stranicu čini efektivnom?


## Kvalitetan sadržaj ♛ 
Jedna od loših metrika za SEO je ukoliko korisnik odmah po posjeti web stranice izgubi interesovanje da čita saržaj i vrati se na rezultate pretrage. Ovo se naziva <i>bounce rate</i> — stopa korisnika koji su posjetili sajt, ali nisu pronašli sadržaj koji ih zanima. 

Zasićeni smo nepotrebnim informacijama i svjetlucavim naslovima, a ono što korisnik prvo vidi ga treba navesti da želi pročitati više. Najbolji adut za izbjegavanje visokog bounce rate je što kvalitetniji sadržaj.
Takav sadržaj će podsticati vrijeme zadržavanja korisnika na stranici (<i>dwell time</i>) koji je važniji i od vjerovatnoće da će korisnik kliknuti link kada se sajt pojavi u rezultatima (<i>click-through rate</i> CTR). 

Druge važne metrike:
+ <span>prosječno trajanje sesije (<i>session duration</i>)</span>
+ <span>prosječan broj pregledanih stranica po sesiji (<i>number of pages viewed per session</i>)</span>

Ove i druge podatke o saobraćaju na sajtu je moguće pratiti sa <a target=”_blank” href="https://analytics.google.com/analytics/web/">Google Analitikom</a>. 

### XML Sitemap-a

Botovi pretraživača posjećuju linkove i sadržaj na stranicama da bi indeksirao sajt. Ukoliko web stranice nisu indeksirane one se neće prikazivati u rezultatima pretrage. Sitemap-a pomaže pretraživačima, kao što je Google, da pronađu sve linkove i prepoznaju koje web stranice sajt sadrži.

Sajtovi koji mogu imati benefit od ovakvog dokumenta:

+ Sitemap ne može imati negativan uticaj — tako da svi?
+ Koji žele bolju vidljivost među pretraživačima
+ Sajt sa velikim brojem web stranica jer botovi pretraživača mogu propustiti linkove
+ Sajt koji ima web stranice, a koje nisu povezane u mrežu linkova
+ Novi sajt koji želi podići nivo optimizacije

#### Kako kreirati XML Sitemap-u?

Moguće je generisati je sa <a target="_blank" href="https://www.xml-sitemaps.com/">XML-Sitemaps</a>. Potrebno je kopirati link sajta i preuzeti generisani .xml fajl.  Preuzeti fajl treba smjestiti u glavni (root) folder:  `https://www.example.com/sitemap.xml`. Potom registrovati XML Sitemap-u na <a href="https://www.google.com/webmasters/tools/home">Google Search konzoli</a>.

### Robots.txt

Pomoću dadoteke `robots.txt` je moguće kontrolisati kojim folderima i fajlovima koji botovi mogu pristupiti i koji sadržaj mogu indeksirati. `robots.txt` može sadržati jedno ili više pravila. Svako pravilo blokira ili dozvoljava pristup određenom botu pretraživača ka određenoj datoteci.

Osim ako je navedeno suprotno, implicitno je dozvoljeno indeksiranje cijelog sadržaja. U sledećem primjeru su postavljena dva pravila:

``` txt
# Googlebot i AdsBot je dozvoljeno sve osim
# http://example.com/nogb/
User-agent: Googlebot
User-agent: AdsBot-Google
Disallow: /nogb/

# Svim drugim korisničkim agentima je dozvoljeno da indeksiraju 
# cijeli sajt. Izostavljanje ovog pravila ima isti rezultat.
User-agent: *
Allow: /

# Link do XML Sitemap-e
Sitemap: http://www.example.com/sitemap.xml
```

Fajl se postavlja u glavni (root) folder `https://www.example.com/robots.txt`. Više o <a target="_blank" href="https://developers.google.com/search/docs/advanced/robots/create-robots-txt">robots.txt</a>.

## Upotreba ispravnog HTML koda
<em>Semantični HTML</em> je upotreba HTML elemenata koji jačaju semantiku i značenje informacija na web stranici. Semantički elementi jasno komuniciraju sa pretraživačom šta je <em>značenje stranice i njenog sadržaja</em>. Ta jasnoća osigurava da na upit pretraživači isporuče najbolje rezultate.

Nesemantični tagovi poput `<div>` i `<span>` ne govore više o sadržaju. 

<figure style="max-width: 300px;">
<img src="/static/img/semantic-html.png" alt="Semantic and non-semantic HTML"> 
 <figcaption>Primjer semantičnog HTML koda.</figcaption>
</figure>

Neki od tagova o kojima se često govori su tagovi za naslove gdje najveći značaj ima `<h1>`. Lista semantičnih <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">tagova</a>.



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
+ <span>`rel="canonical"` govori pretraživaču koji link se indeksira kada postoji nekoliko različitih URL adresa koje vode ka istoj web stranici poput: `https://www.example.com/` ili `https://example.com/index.html`</span>

### `data nosnippet` atribut

Nekada pretraživač ignoriše opis koji je obezbjeđen kroz `<meta name="description" content="">` tag i umjesto njega postavi sadržaj sa stranice po svom nahođenju (algoritmu) po kom bi prikazani tekst možda više bio od pomoći korisnikovom upitu.

Iako prikazani isječak nije faktor rangiranja, on utiče na korisnika da odabere određeni rezultat što dalje utiče na stopu klikanja (<i>click-through rate</i> CTR). Da bi spriječili Google da koristi određeni sadržaj kao isječak za opis moguće je koristiti `data nosnippet` atribut u sklopu `<span>`, `<div>` ili `<section>` taga.

``` html
<p>
  Sadržaj u paragrafu može biti uključen u isječak
  <span data-nosnippet>
    ali ovaj dio ne bi bio prikazan.
  </span>
</p>
```

#### Robots meta

Robots meta element govori pretraživačima da li da indeksiraju web stranicu:

``` html
<meta name=”robots” content=”noindex,nofollow”>
<!-- or -->
<meta name=”robots” content=”index,follow”>
```

+ <span><i>follow</i> pretraživač će pratiti sve linkove na toj web stranici</span>
+ <span><i>index</i> pretraživač indeksira cijelu web stranicu</span>
+ <span><i>nofollow</i> pretraživač neće pratiti sve linkove na toj web stranici</span>
+ <span><i>noindex</i> pretraživač neće indeksirati tu web stranicu</span>

#### Meta socijalne mreže

Ovi meta tagovi omogućavaju sinhronizaciju i kontrolu prikaza web stranice pri dijeljenju na nekoj socijalnoj mreži.

<figure style="max-width: 450px;">
<img src="/static/img/twitter-card.JPG" alt="How a website looks like when shared on Twitter"> 
 <figcaption>Kako izgleda web stranica kada se podijeli na Twitteru</figcaption>
</figure>

<em>Open graph</em> meta tagovi integrišu web stranicu sa raznim mrežama poput Facebook, LinkedIn, Discord. <em>Twitter</em> ima vrijednosti koje funkcionišu na identičan način. Izgled se može provjeriti na sajtovima poput: <a target=”_blank” href="https://cards-dev.twitter.com/validator">Twitterov validator kartica</a> i druge mreže se mogu provjeriti na <a target=”_blank” href="https://www.opengraph.xyz/">Open Graph</a> 

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

<a target="_blank" href="https://schema.org/">Schema.org</a> je projekat zajednice sa misijom da stvaraju, održavaju i promovišu <em>šeme za strukturirane podatake na internetu</em>. Diskutabilno je da li ovi atributi povećavaju rangiranje sajta pri pretraživanju nekog upita, ali oni omogućavaju definisanje dodatnih meta podataka o sadržaju na web stranici. Takvi podaci pomažu pretraživaču da interpretiraju sadržaj ispravno na stranici sa rezultatima pretraživanja (<i>search engine results page</i> SERP).

Jedni od primjetnijih rezultata se prikazuju pri pretraživanju nekog proizvoda, usluge ili recepta.

<figure>
<img src="/static/img/scheme.JPG" alt="How Google interpets schema attributes for a recipe"> 
 <figcaption>Google prikazuje ocjenjen recept u rezultatima</figcaption>
</figure>


Šeme su podjeljene u <a target="_blank" href="https://schema.org/docs/schemas.html">tipove</a>, a svaki tip je povezan sa skupom atributa. Neki od njih su za knjige, filmove, muziku, recepte, serije, zdravlje, organizaciju, osobu, mjesto, lokalni postao, restoran, proizvod, ponudu, recenziju itd.

Koncept takvih meta podataka se može vidjeti u kodu ispod:

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

### Pristupačnost

#### Responzivan i prilagođen dizajn

Prisustvo `<meta name="viewport" content="...">` linije ukazuje pretraživaču da je stranica prilagođena mobilnim uređajima i kako treba kontrolisati dimenzije i skaliranje stranice. Ovim sajtovima se daje prednost, ali osim ove linije potrebno je definisati ponašanje stranice kroz CSS inače bi sadržaj mogao izgledati lošije sa ovom linijom.

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Slike

Pretraživači ne mogu čitati slike koje čine ključni dio web stranica. Zato slike koriste <em>alt</em> atribut za pristupačnost. U pretrazi za slikama pretraživač se vodi alternativnim tekstom.

``` html
<img alt="Opis fotografije" src="">
```

#### Linkovi i veze

Pretraživač će pratiti izlazne linkove na sajtu da bi zaključio da li web stranica nudi kvalitetan sadržaj i o čemu se na njoj radi. Ako linkovi vode ka sajtovima sa kredibilitetom to je plus. Sa <em>rel</em> atributom je moguće naglasiti pretraživaču da ne treba pratiti određeni link. 

``` html
<a href="#" rel="nofollow"></a>
```

+ <span>Koristiti <i>nofollow</i> za linkove u koje nemamo povjerenja</span>
+ <span><i>Sponsored</i> za sponzorisane</span>
+ <span><i>Ugc</i> za one koje su generisali korisnici (user generated content)</span>


## Brzo učitavanje sadržaja <i role="img" aria-label="JavaScript" title="JavaScript" class="fas fa-bolt"></i>

Brzina učitavanja stranice igra još značajniji faktor u rangiranju od kada su pametni telefoni preuzeli većinu saobraćaja na internetu. Oni mogu sporije učitavati sadržaj jer koriste mobilne podatke ili jer kod sajta nije ispravno prilagođen manjim ekranima. 

Brzina je samo još jedan od faktora kvalitetnog korisničkog iskustva i Google preporučuje da ovo vrijeme bude <em>ispod dvije sekunde</em>, ali da cilj treba biti ispod pola sekunde.

<p class="tip right-tip" style="--span-row: 1;">Brzina se može testirati na: <a target=”_blank” href="http://developers.google.com/speed/pagespeed/insights">PageSpeed Insights</a>, <a target=”_blank” href="http://developers.google.com/web/tools/lighthouse">Lighthouse</a>, <a target=”_blank” href="http://gtmetrix.com/">GTmetrix</a>, <a target=”_blank” href="https://tools.pingdom.com/">Pingdom</a></p>


### Optimizacija koda

+ Kompresija i minimizacija koda 
+ Upotreba hostinga sa CDN-om (content delivery network)
+ <span>Upotreba generatora statičkog sajta (static site generator) kao <a target="_blank" href="https://www.11ty.dev/">11ty</a></span>
+ Upotreba caching pretraživača
+ Skloniti JavaScript koji blokira učitavanje sadržaja (render blocking Javascript)
+ Izbjegavanje preusmjeravnja stranica

### Smanjiti JavaScript koji blokira učitavanje sadržaja

Prije nego pretraživač prikaže stranicu on mora napraviti DOM stablo rasčlanjivanjem HTML elemenata. Tokom procesa, kad god se pojavi skripta, pretraživač mora sačekati da se preuzme i izvrši, potom nastaviti kreiranje DOM stabla.

Preporučuje se smanjiti upotrebu JavaScripta, posebno eksternih skripti koji se moraju preuzeti prije izvršavanja. One koje su neophodne je:

+ <span>Moguće staviti <i>inline</i> u sam dokument unutar `<script>` taga, ali ovaj saržaj treba biti kratak i brzo se izvršavati</span>
+ <span>Skripte koje nisu ključne za inicijalno prikazivanje bi trebale biti asinhrone (<i>asynchronoasius</i>) ili odložene (<i>deferred</i>)</span>

``` html
<script type="text/javascript">
  /* ono što bi bio sadržaj manje JavaScript datoteke */
</script>

<script async src="my.js"></script>
<!-- Skripta će biti preuzeta paralelno sa raščlanjivanjem stranice i izvršena čim bude dostupna -->
<script defer src="my.js"></script>
<!-- Skripta će biti preuzeta paralelno sa raščlanjivanjem stranice i izvršena nakon što stranica završi raščlanjivanje -->
```

### Optimizacija slika

+ <span>Kompresija fotografija: <a target=”_blank” href="https://shortpixel.com/">Shortpixel</a>, <a target="_blank" href="https://imageresizer.com/">Image Resizer</a>, <a target="_blank" href="https://compressjpeg.com/">Compress JPEG</a></span>
+ Navođenje veličine fotografije kroz width i height
+ Primjena lijenog učitavanja (lazy loading)
+ <span>Korištenje `srcset` atributa za različite veličine ekrana</span>

### Dodatni linkovi

<a target="_blank" href="https://moz.com/learn/seo/seo-cheat-sheet">SEO Cheat Sheet za Web Developere</a>


