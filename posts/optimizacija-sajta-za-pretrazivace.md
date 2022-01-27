---
title: Optimizacija sajta za pretraživače
date: 2022-01-25T19:33:53.977Z
author: Marijana Sevo
summary: SEO vodič za web developere. Osvrt na standarde koji se mogu ispuniti direktno na sajtu, a koje Google odobrava. Fokus nisu teme za marketare.
tags:
  - post
  - SEO
  - semanticki-HTML
thumbnail: /static/img/seo.jpg
---

SEO ili optimizacija web stranice za internet pretraživače služi za <em>povećanje kvaliteta saobraćaja koji je usmjeren prema sajtu</em> preko prirodnih (organskih ili algoritamskih) rezultata pretrage.

<p class="tip right-tip" style="--span-row: 2;">Marketari i <em>SEO stručnjaci</em> se bave optimizacijom web stranice. To uglavnom <em>nisu web developeri</em> i izostavljene su mnoge teme.</p>

Značaj ovog polja se vidi i u tome da visoko rangiranje na Google-u može vrijediti milione eura. Šta web stranicu čini efektivnom?


## Kvalitetan sadržaj ♛ 
Jedna od loših metrika za SEO je ukoliko korisnik odmah po posjeti web stranice izgubi interesovanje da čita saržaj i vrati se na rezultate pretrage. Ovo se naziva <i>bounce rate</i> — stopa korisnika koji su posjetili sajt, ali nisu pronašli sadržaj koji ih zanima. 

Zasićeni smo nepotrebnim informacijama i svjetlucavim naslovima. Ono što korisnik prvo vidi treba ga navesti da želi pročitati više. Najbolji adut za izbjegavanje visokog bounce rate je što kvalitetniji sadržaj.
Takav sadržaj će podsticati vrijeme zadržavanja korisnika na stranici (<i>dwell time</i>) koji je važniji i od vjerovatnoće da će korisnik kliknuti link kada se sajt pojavi u rezultatima (<i>click-through rate</i> CTR). 

Druge važne metrike:
+ <span>prosječno trajanje sesije (<i>session duration</i>)</span>
+ <span>prosječan broj pregledanih stranica po sesiji (<i>number of pages viewed per session</i>)</span>

Ove i druge podatke o saobraćaju na sajtu je moguće pratiti sa <a target=”_blank” href="https://analytics.google.com/analytics/web/">Google Analitikom</a>. 

### XML Sitemap-a

Botovi pretraživača posjećuju linkove i sadržaj na stranicama da bi indeksirao sajt. Ukoliko web stranice nisu indeksirane one se neće prikazivati u rezultatima pretrage. Sitemap-a pomaže pretraživačima, kao što je Google, da pronađe sve linkove i prepozna od kojih web stranica se sastoji sajt.

Sajtovi koji mogu imati benefit od ovakvog dokumenta:

+ Sitemap ne može imati negativan uticaj — tako da svi?
+ Koji žele bolju vidljivost među pretraživačima
+ Sajt sa velikim brojem web stranica jer botovi pretraživača mogu propustiti linkove
+ Sajt koji ima web stranice koje nisu povezane u mrežu linkova
+ Novi sajt koji žele podići nivo optimizacije

#### Kako kreirati XML Sitemap-u?

Najlakše je generisati je sa <a target="_blank" href="https://www.xml-sitemaps.com/">XML-Sitemaps</a>. Potrebno je kopirati link sajta i preuzeti generisanu .xml datoteku.  Preuzetu datoteku treba smjestiti u glavni (root) direktorijum. Potom registrovati XML Sitemap-u na <a href="https://www.google.com/webmasters/tools/home">Google Search konzoli</a>.

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

Ovi meta tagovi omogućavaju sinhronizaciju i kontrolu prikaza web stranice kada se dijeli na nekoj socijalnoj mreži.

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

### Pristupačnost

Pretraživači ne mogu čitati slike koje čine ključni dio web stranica. Zato slike koriste <em>alt</em> atribut za pristupačnost. U pretrazi za slikama pretraživač se vodi alternativnim tekstom.

``` html
<img alt="Opis fotografije" src="">
```

Pretraživač će pratiti izlazne linkove na sajtu da bi zaključio da li web stranica nudi kvalitetan sadržaj. Ako linkovi vode ka sajtovima sa kredibilitetom to je plus. Sa <em>rel</em> atributom je moguće naglasiti pretraživaču da ne treba pratiti određeni link. 

``` html
<a href="#" alt="nofollow"></a>
```

+ <span>Koristiti <i>nofollow</i> za linkove u koje nemamo povjerenja</span>
+ <span><i>Sponsored</i> za sponzorisane</span>
+ <span><i>Ugc</i> za one koje su generisali korisnici (user generated content)</span>


## Brzo učitavanje sadržaja <i role="img" aria-label="JavaScript" title="JavaScript" class="fas fa-bolt"></i>

Brzina učitavanja stranice igra još značajniji faktor rangiranja od kada su pametni telefoni preuzeli većinu saobraćaja na internetu. Oni mogu sporije učitavati sadržaj jer koriste mobilne podatke ili jer kod sajta nije ispravno prilagođen manjim ekranima. 

Brzina je samo još jedan od faktora kvalitetnog korisničkog iskustva i Google preporučuje da bi ovo vrijeme trebalo biti <em>ispod dvije sekunde</em>, ali da cilj treba biti ispod pola sekunde.

<p class="tip right-tip" style="--span-row: 1;">Može se testirati na: <a target=”_blank” href="http://developers.google.com/speed/pagespeed/insights">PageSpeed Insights</a>, <a target=”_blank” href="http://developers.google.com/web/tools/lighthouse">Lighthouse</a>, <a target=”_blank” href="http://gtmetrix.com/">GTmetrix</a>, <a target=”_blank” href="https://tools.pingdom.com/">Pingdom</a></p>


### Optimizacija koda

+ Kompresija i minimizacija koda 
+ Upotreba hostinga sa CDN-om (content delivery network)
+ <span>Upotreba generatora statičkog sajta (static site generator) kao <a target="_blank" href="https://www.11ty.dev/">11ty</a></span>
+ Upotreba caching pretraživača
+ Skloniti JavaScript koji blokira učitavanje sadržaja (render blocking Javascript)
+ Izbjegavanje preusmjeravnja stranica

### Optimizacija slika

+ <span>Kompresija fotografija: <a target=”_blank” href="https://shortpixel.com/">Shortpixel</a>, <a target="_blank" href="https://imageresizer.com/">Image Resizer</a>, <a target="_blank" href="https://compressjpeg.com/">Compress JPEG</a></span>
+ Navođenje veličine fotografije kroz width i height
+ Primjena lijenog učitavanja (lazy loading)
+ <span>Korištenje `srcset` atributa za različite veličine ekrana</span>


