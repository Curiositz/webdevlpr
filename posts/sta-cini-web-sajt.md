---
title: Sta cini web sajt?
date: 2022-02-23T19:33:53.977Z
author: Marijana Sevo
summary: Cilj je prikazati kako moze izgledati struktura jednostavnijeg sajta i koncept sadrzaja koji ga cini (HTML, CSS, JS, slike, organizacija foldera i imenovanje fajlova).
tags:
  - koncept
  - teorija
thumbnail: /static/img/whiteboard-roadmap.jpg
---

Tekst je namjenjen laicima koji otprilike zanima kako izgleda struktura jednostavnijeg sajta i koncept sadrzaja koji ga cini. Sve navedeno u ovom dijelu teksta je jednostavno savladati kroz ucenje HTML, CSS i JavaScript jezika.

<p class="tip right-tip" style="--span-row: 2;">Post je nastao kao dio teksta iz <a target="_blank" href="/posts/frontend-vodic-za-ucenje/">Frontent - vodic za ucenje</a></p>

Sajt je neki broj fajlova sa kodom, stilovima, medijskim sadrzajem itd. Da bi ti fajlovi djelovali kao cjelina neophodno je sastaviti ih u logicnu i povezanu strukturu kako bi bili svjesni ostalog sadrzaja sa kojim treba komunicirati. Proces izgradnje sajta se izvrsava na <i>lokalnom kompjuteru</i> da bi se uvjerili da web stranica izgleda i radi ispravno prije nego se otpremi na server.
Fajlovi koji cine web stranicu bi trebali biti organizovani u zajednickom folderu, a folder moze biti smjesten bilo gdje na lokalnom racunaru (recimo Desktopu da bi ga bilo jednostavno pronaci i pretpostavicemo da je folder nazivan "project").

Pogledacemo pojedinacne segmente koji najcesce cine web stranicu.  

+ <span>`index.html` fajl koji ukljucuje</span> 
+ stilove,
+ skripte i
+ slike.

## `index.html` kao pocetna web stranica

Svaka web stranica na sajtu bi trebala imati .html dokument koji je predstavlja. Recimo, web stranicu "O nama" je moguce nazvati `o-nama.html`, a "Kontakt" `kontakt.html`. Dok se `index.html` dokument najcesce koristi kao ime za pocetnu stranicu (home) i web pregledac je prvu interpretira ukoliko u URL adresi nije naznaceno da klijent trazi neki odredjeni dokument (`nekisajt.ba` ce prikazati index.html, a `nekisajt.ba/kontakt.html` kontakt stranicu).

U pocetnoj (`index.html`) stranici se moze kreirati meni sa vezama koje vode ka `o-nama.html` i `kontakt.html`. Web je ipak mreza HTML dokumenata sa vezama koje dalje vode na druge HTML dokumente i web stranice.

.html ekstenzija govori da se radi o dokumentu koji sadrzi <i>Hypertext Markup Language</i> (HTML), jezik koji se koristi za kodiranje <i>strukture</i> web stranice. "Hypertext" se odnosi na <i>hiperveze</i> i linkove koji se dodaju kroz HTML. "Markup Language" se odnosi na tagove kojim se definise struktura stranice i njen sadrzaj. Tagovi se obicno sami opisuju i intuitivni su. Izgledaju otprilike ovako:

```html
<img src="img/logo.jpg">

<h1>Pocetna stranica</h1>
<p>Ovdje mozete procitati sve o nasoj web stranici.</p>

<a href="o-nama.html">O nama</a>
<a href="kontakt.html">Kontakt</a>
```

<p class="tip right-tip" style="--span-row: 2;">
  Ukoliko ne postoji fajl na koji <i>src</i> ili <i>href</i> atribut vode, ta slika ili veza nece raditi.<br><br>
  <i>h1</i> je naslov ili header najviseg nivoa. <i>p</i> oznacava paragraf. <i>a</i> predstavlja vezu.
</p> 

Sto web pregledac interpretira ovako:

<figure style="max-width: 400px;">
<img src="/static/img/html-osnove.jpg" alt="Web stranica izradjena samo sa HTML elementima">  
 <!-- <figcaption>Web stranica izradjena samo sa HTML elementima.</figcaption> -->
</figure>

<p class="tip right-tip" style="--span-row: 2;">Ne izgleda magicno, ali <i>HTML definise samo strukturu i znacenje sadrzaja</i>.</p>

## Folder sa stilovima

Je folder sa CSS (<i>Cascading Style Sheets</i>) fajlovima koji sadrze CSS kod za <i>stilizovanje sadrzaja</i> (poput izbora fonta i velicine slova, boja, razmaka, animacija, pozicije elementa itd.). Sledeci primjer prikazuje kako naslov `<h1>Pocetna stranica</h1>` iz prikazanog `index.html` koda obojiti u ljubicasto. 

```css
h1 {
  color: purple;
}
```

Sada je potrebno `index.html` dokumentu pokazati gdje se nalazi CSS kod kako bi se on primjenio na toj stranici. Recimo da je ovaj CSS kod sacuvan u fajlu sa nazivom `style.css`, da se folder sa stilovima naziva `styles` i da smo ih ovako organizovali:

<figure style="max-width: 400px;">
  <img src="/static/img/struktura-1.png" alt="Struktura fajlova. Folder 'projekat' sadrzi index.html i jos jedan folder sa nazivom 'styles' u kom se nalazi style.css."> 
 <figcaption>Raspored foldera i fajlova unutar glavnog foldera "project".</figcaption>
</figure>

Sa `<link>` elementom u zaglavlju HTML stranice se moze naznaciti put do `style.css` kroz `href` atribut :

```html
<link href="styles/style.css" rel="stylesheet">
```

```html
<html>
  <head>
    <link href="styles/style.css" rel="stylesheet">
  </head>

  <body>
    <!-- Sadrzaj <h1> <p> <img> -->
  </body>
</html>
```

<p class="tip right-tip" style="--span-row: 2;">
  <i>html</i> tagovi oznacavaju pocetak i kraj HTML koda, odnosno on sadrzi sve ostale HTML elemente.
  Sadrzaj izmedju <i>head</i> tagova opisuje HTML dokument i ne prikazuje se na web stranici.
  Unutar <i>body</i> tagova se nalazi sav prikazani sadrzaj na web stranici (naslovi, paragrafi, slike, veze, tabele, liste itd.).
</p> 

HTML i CSS nisu programski jezici i lako je savladati osnove.

## Folder sa skriptama

Ovaj folder je namjenjen fajlovima sa skriptnim kodom poput JavaScripta i najcesce koristi se za dodavanje interaktivnog aspekta web stranici (dodavanje HTML elemenata, izmjenu postojeceg sadrzaja, promjenu stilova, reagovanje na radnje korisnika poput pomjeranje misa, klik, pritisak tipke na tastaturi, slanje zahtjeva serveru, upravljanje kolacicima, postavljanje pitanja korisniku, pamcenje podataka u lokalnom skladistu itd.). Medjutim, JavaScript omogucava i kreiranje servera, mobilnih aplikacija itd.

JavaScript kao najpopularniji programski jezik weba otkljucava nove dimenzije kreativnosti i moci, ali je i izazovniji za savladati. Medjutim, karakteristike JavaScripta su slicne drugim programskim jezicima i poznavanje njegovih osnova olaksava ucenje drugih. Ono sto JavaScript cini jedinstvenom je:

+ Potpuna integracija sa HTML/CSS
+ Proste stvari je jednostavno izvesti
+ Podrzavaju je svi bolji pretrazivaci - sto je razlog jer je najrasprostranjeniji alat na webu

Sa sledecim kodom mozemo izmijeniti sadrzaj `<h1>` naslova iz teksta "Pocetna stranica" u "Dobrodosli!": 

```js
var naslov = document.querySelector('h1');
naslov.textContent = 'Dobrodosli!';
```

`querySelector()` u ovom slucaju "selektuje" `<h1>` element, sto je slicno onome sto je uradjeno u CSS kodu. Prvo je izabran element na koji treba primjeniti kod i potom su navedene instrukcije. 

`<h1>` element je smjesten u varijablu pod nazivom "naslov" da ne bi svaki put ponavljali isti dio koda. Varijabla je nadovezana na `textContent` koji predstavlja sadrzaj naslova, te je znakom jednakosti odredjena nova vrijednost sadrzaja iako u HTML dokumentu pise nesto potpuno drugo.

Medjutim, HTML dokument nije svjestan ovog koda. Da bi ga pronasao trebamo mu ukazati na to da postoji JavaScript fajl (sa .js ekstenzijom) i gdje. Recimo da je naziv fajla `main.js`, a naziv foldera sa skriptama `scripts`. 

<figure style="max-width: 400px;">
  <img src="/static/img/struktura-2.png" alt="Struktura fajlova. Folder 'projekat' sadrzi index.html i jos jedan folder sa nazivom 'styles' u kom se nalazi style.css."> 
 <figcaption>Raspored foldera i fajlova unutar glavnog foldera "project".</figcaption>
</figure>

Kroz `<scripts>` tag mozemo HTML dokumentu reci da se radi o skriptnom jeziku, a kroz `src` atribut gdje je smjesten kod koji treba primjeniti na web stranicu. 

```html
<script src="scripts/main.js"></script>
```
`<scripts>` moze biti smjesten i u zaglavlju (unutar `<head>` taga) i u tijelu (unutar `<body>` elementa). Cesto se postavlja tik prije zatvaranja `</body>` taga.

## Folder sa slikama

Ovaj folder je namijenjen za slike koje se koriste na sajtu. Vec smo ukljucili sliku i folder u primjerima iznad. Slike se u HTML jeziku dodaju sa tagom `<img>` a put do slike u `src` atribut:

```html
<img src="img/logo.jpg">
```

<figure style="max-width: 400px;">
  <img src="/static/img/struktura-3.png" alt="Struktura fajlova. Folder 'projekat' sadrzi index.html i jos jedan folder sa nazivom 'styles' u kom se nalazi style.css."> 
 <figcaption>Raspored foldera i fajlova unutar glavnog foldera "project".</figcaption>
</figure>

Nije neophodno podijeliti fajlove kao u iznad prikazanom primjeru, ali su projekti obicno kompleksniji i preporucljivo je organizovati fajlove. Nacin na koji se ti fajlovi uvrstavaju u HTML dokument je definisan i nije proizvoljan. Neophodno je uvrstiti tacan tag, atribut i put do fajla. 

## Imenovanje fajlova i foldera

Foldere i fajlove je preporucljivo imenovati <i>malim slovima</i> jer su mnogi racunari i serveri osjetljivi na velika i mala slova. To znaci da prave razliku izmedju njih i da `index.html` i `InDeX.html` za njih nije isti fajl.

Najbolja praksa je <i>razdvajati rijeci sa crticom (-)</i> umjesto razmaka jer ih web pregledaci, serveri i programski jezici ne interpretiraju dosljedno. Neki sistemi ovaj razmak tretiraju kao da se radi o dva razlicita fajla, a vecina servera ce na mjesto razmaka staviti "%20" (kod za razmak: <a target="_blank" href="https://www.w3schools.com/tags/ref_urlencode.asp">URL Encoding</a>) ili "+" znak. Google crticu vidi kao karakter koji razdvaja rijeci sto je razlog vise da se koristi umjesto donje crte (_).

Dobar primjer: `o-nama.html`.

<!-- ## Dodatni izvori -->
