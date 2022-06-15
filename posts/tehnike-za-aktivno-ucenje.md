---
title: Tehnike za aktivno ucenje programiranja
date: 2022-03-05T19:33:53.977Z
author: Marijana Sevo
summary: Potrebno je vjezbati na djelotvoran nacin odredjen raspon vremena da bi ono vodilo ka poboljsanju vjestina.
tags:
  - ucenje
thumbnail: /static/img/learning.jpg
---

Balansiranje izmedju pasivnog i aktivnog ucenja je vazno jer gledanje videa ili citanje teksta (pasivno ili konceptualno ucenje) ne znaci da je nesto savladano. Drugim rijecima, posmatranjem utakmica ili kako se rade magicni trikovi kartama ne znaci da je steceno znanje primjenljivo. Sticanje vjestine je najdjelotvornije sa aktivnim metodama ucenja. Zato se vise broji — <em>opsjednutost primjenom nad teorijom</em>. Pokvarite kod, pravite greske, gradite projekte, rjesavajte probleme i u procesu koristite Google i Stack Overflow.

## Djecija radoznalost

Dobra je ideja biti dijete i <em>uzeti par minuta na kraju videa, igrati se sa kodom i izazvati gresku</em>. Na primjer, zapitati se sta napisani kod radi i sta ce se desiti ukoliko se izmijeni neki dio (koji vama mozda ima smisla), potom ga izmijeniti, vidjeti da li ce web pregledac i dalje razumjeti kod ili prikazati neku specificnu gresku. Popravite kod i ponovo pokvarite. Um ce jasnije usvojiti kako kod funkcionise. Ili

1. Pronadjite mali projekat koji je neko drugi napisao i koji je zanimljiv.
2. Rasclaniti ga red po red.
3. Zatim poceti mijenjati kod i posmatrati sta promjene uzrokuju.
4. Kada ne kodirate mozete citati tekstove na temu koja je povezana sa projektom.

## Samostalno rekreiranje projekta

Takodje mozete <em>samostalno rekreirati projekat bez pomoci videa</em> koji ste pratili. Pozeljno je koristiti internet i Stack Overflow. U toku procesa mozda odustanete misleci da niste ni blizu, a falila je jedna linija koda. <em>U redu je ako pokusaj nije uspjesan</em> i normalno je osjetiti frustriranost. Ona je dio procesa ucenja<3 !! Izaberite projekte i izazove koji vode vjestine do same granice i malo izvan nje.

## The Feynman Technique

<em>Kada pokusavate savladati neku materiju, pokusajte to nauciti nekoga drugog</em>. Ova tehnika sprecava da previdimo nedostatak znanja sto je korisno ukoliko je potrebno temeljno razumjeti temu. Osnovni koraci Fejnmanove tehnike ucenja:

1. <b>Uciti</b>.
2. <b>Objasniti nekome jednostavnim izrazima</b>. U toku ovog koraka je neizbjezno pronaci rupe u znanju (sto je i cilj).
3. <b>Popuniti praznine</b>. Pronaci informacije koje nedostaju. Svrha koraka je fokusirati se na slabosti.
4. <b>Pojednostaviti</b>. Nije lako otkloniti nered i visak informacija, te objasniti nesto dovoljno jasno da i mala djeca mogu razumjeti.  4. korak tjera na dublje razmisljanje o temi i razumijevanje kako se dijelovi informacija uklapaju zajedno. 

Ponoviti korake dok proces ne bude uspjesan.

## Biljeske i komentarisanje koda

Vjerovatno cete pisati biljeske i vremenom primjetiti da nemaju znacaj za prisjecanje informacija kao sto su imale kada bi se pripremali za test. U ovom slucaju komentarisanje koda djelotvornije <em>produbljuje razumijevanje materije</em>. U programiranju je puno znacajnije iskonski razumjeti, nego znati kod napamet (ucenje napamet je obicno trosenje vremena koje se moze iskoristiti na usvajanje koncepata) jer se programiranje ne svodi na testove i same alate, koliko na sposobnost primjenjivanja znanja (znati koristiti cekic, ne znaci da znate napraviti kucu). Detalje ce pamtiti Google. Trik je znati gdje pronaci potrebne detalje i kako ih primjeniti, ali to je tema za drugi tekst.


<div class="tip right-tip" style="--span-row: 2;">
<blockquote cite="https://www.youtube.com/watch?v=cEBkvm0-rg0">
 <p>Some people say a software engineer is just a professional Google searcher 💼. Some developers are smart enough to know that memorizing every piece of information can be a waste of time. It's more efficient to just google the information you need on demand.
 <a target="_blank" href="https://www.youtube.com/watch?v=cEBkvm0-rg0"><cite class="by">Fireship</cite></a>
 </p>
</blockquote>
</div>

Da se vratimo na komentarisanje koda. Komentari su dijelovi teksta koje racunar ignorise prilikom interpretiranja koda. Oni sluze programerima i prikazani su samo unutar programskog okruzenja, ali ne i na web stranici. Komentarisanje nije neophodno, medjutim  postoji vise razloga zasto bi neko komentarisao kod. Komentari su inace temelj dobre <em>komunikacije i dokumentacije</em>. Oni olaksavaju radni tok medju programerima koji rade na istom projektu i objasnjavaju dijelove koda. Mogu koristiti i kao pocetna osnova za pravu dokumentaciju koja ce sluziti krajnjim korisnicima. 

Sa druge strane, upotreba komentara ne mora biti vrijedna samo u profesionalnom smislu iskusnim programerima. <!-- Programer moze sebi ostaviti podsjetnik sta je potrebno uraditi naknadno ili koji kod izaziva gresku, moze blize objasniti i rasclaniti zadatak na manje korake. TODO: more about commenting code : https://en.wikipedia.org/wiki/Comment_(computer_programming)--> 
Kroz odgovaranje na pitanja poput "Sta rade ove instrukcije?" ili "Zasto je vazan ovaj korak?" se daje jasniji kontekst kako radi kod. Komentari dobijaju ulogu biljezaka na marginama. Ovakva primjena komentara uslovljava pocetnika da razumije i usvaja materijal. To je najveci poticaj da komentarisete od pocetka. Kada osjetite da pretjerano komentarisete, vjerovatno ne komentarisete dovoljno. <strong>Pretjerujte. Objasnite svaku linija koda i sta one rade.</strong> Nije vazno da li ste vi napisali tu liniju ili je kopirali sa Stack Overflowa.

Sticanjem iskustva ce se ovo smanjiti jer cete prirodno prepoznati sta jeste potrebno komentarisati i dalje, a sta nije. U toku stvaranja ove navike izgradicete jednu od vaznih vrlina kvalitetnog programera i nauciti jasnije komunicirati kroz komentare.

```js
/*
'document' object lets 
JavaScript access any element 
in an HTML page.
'getElementById(id)' method 
finds an element by element id.
'innerHTML' sets or returns the 
HTML content of an element.
*/

// Will change the heading with id = "h"
document.getElementById("h").innerHTML = "Novi naslov";
// Will change the paragraph with id = "p"
document.getElementById("p").innerHTML = "Ovo je tekst paragrafa.";
```

Jos jedna aktivnost koja moze odmjeniti klasicne biljeske je <em>pisanje dokumentacije</em> i `README.md` fajla u sklopu svakog projekta. `README.md` je uvodni tekst kroz koji korisnici upoznaju projekat. To je tekstualni fajl sa informacijama o aplikaciji ili kodu. Moze sadrzavati kratko objasnjenje motivacije iza stvaranja i odrzavanja projekta, odnosno zasto on postoji, instrukcije kako pokrenuti isti projekat na svom racunaru, kako koristiti aplikaciju, detalje o azuriranjima i sve ono sto bi korisnik trebao znati. 

Pocetnici obicno ne rade kompleksnije projekte i ne trebaju mnogo toga objasniti, sto je i razlog zasto je tada jednostavnije poceti. Mozete objasniti svrhu aplikacije, postaviti snimak ekrana kako ona izgleda, navesti koje tehnologije ste koristili, integrisane funkcionalnosti itd. Za inspiraciju procitajte druge dokumentacije ili clanak sa smjernicama koji je namjenjen pocetnicima.

<figure class="wide-img">
<img src="/static/img/readme.jpg" alt="Keyboard scheme - which finger should trigger which key."> 
 <figcaption>`README.md` fajl za <a target="_blank" href="https://github.com/danurbanowicz/eleventy-netlify-boilerplate#readme">Eleventy Netlify Boilerplate</a> na GitHubu.</figcaption>
</figure>

`.md` esktenzija u nazivu fajla oznacava "Markdown documentation". To je jednostavan jezik za oznacavanje sadrzaja koji se lako pretvara u tekst. Za pisanje `README.md` fajla je potrebno nauciti Markdown sto se moze izvesti za sat ili dva. Potrazite tutorijal ili <a target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a>.

Komentarisanje koda i pisanje dokumentacije su navike na kojima cete biti zahvalni, a cijenice ih buduce kolege i poslodavci. I (ako smijem da sugerisem) <strong>nemojte ih zaboraviti u projektima u porfoliju!</strong> Dokumentacija objasnjava vas projekat, a komentari linije koda.

Biljeske i dalje mogu biti korisne u <i>specificnim</i> situacijama. Na primjer, ukoliko ne mozete usvojiti nesto sto vam uporno zatreba ili za organizaciju zadataka. Ako se nesto moze lako pronaci na internetu obicno nije vrijedno zapisivanja jer te biljeske vjerovatno nece biti ponovo koristene. 

## Pauze

Za optimalniji efekat ne treba podcjeniti vaznost redovnih pauza kako bi se mozak oporavio. Cilj je raditi pametnije umjesto teze. 

Aktivno ucenje bez pauza gubi ucinak jer kognitivne mogucnosti opadaju, fokus se ne moze odrzati duzi vremenski period i <em>kvalitet sesije ucenja se smanjuje</em>. Ucenje programiranja nije sprint, vec maraton i vazno je uvjeriti se da je sistem usvajanja vjestine odrziv na duzi period. Sa druge strane, mozak radi i kada se odmara. Znanje i materijal na koji je do skoro bio fokusiran se u ovoj fazi utemeljuje. 

Kvalitet sesija se moze povecati kroz flow stanje u kojim pauze igraju znacajnu ulogu.

### Flow

Flow je <em>izrazito prijatno i optimalno psiholosko stanje</em> koje ljudi postizu kada su potpuno zaokupljeni nekim zadatkom. U toku ovog stanja zaboravljaju na sve osim zadatka i aktivnost je prilicno ispunjavajuca, sto znaci da ce osoba biti sklona ponavljanju aktivnosti.

Nije ga lako postici u pocetku, posebno tokom pasivnog nacina ucenja. Obicno se postize u toku aktivne primjene znjanja (npr. pisanje koda). Potreban je unaprijed ulozen napor i desice se sa vremenom, ali to ne znaci da flow stanje treba biti krajnji cilj. Previse ulozenog napora i forsiranje ce paradoksalno uciniti postizanje flowa tezim.

Dobra strategija je uciti kroz kratke sesije sa intenzivnim fokusom i pauzama izmedju, naspram dugih sesija slabijeg intenziteta. Neke okvirne smjernice za postizanje ovog stanja: 

<span>

  1. <strong>Ukloniti sve sto moze ugroziti stanje dubokog fokusa</strong>. Npr. raditi u prostoriji koja sluzi samo za ucenje i maksimalno minimizuje distrakcije, biti nedostupan za druge, ugasiti sva nepotrebna obavjestenja itd.
  2. <span class="i">Postaviti tajmer za pocetak i kraj sesije.</span>
  + Sesije od 25 - 90 minuta u kojima je strogo zabranjen multitasking. Fokus je na jednom zadatku.
  + Pauze u ovisnosti od sistema i duzine sesije (npr. sesija 25 - pauza 5, sesija 50 - pauza 10 minuta). Slusajte tijelo i prilagodite sistem sebi. Fizicka promjena lokacije, setnja, uzivanje u suncu, razgovor sa nekim u toku pauze djelotvornije puni baterije od koristenja elektricnih uredjaja.
  3. <span class="i">Odrediti izrazito specifican rezultat ili ishod za svaku sesiju</span>, recimo kreiranje jednog malog dijela funkcionalnosti. Dobro razmislite sta zelite postici u toku kako bi optimalno iskoristili vrijeme i sprijecili da um odluta. Odredjivanje cilja omogucava pracenje i osjecaj napredovanja.
  4. <span class="i">Vjezba, vjezba, vjezba</span>. Sto vise vjezbate aktivnost, to ce ona donositi vise zadovoljstva. <b>Sa dozom zadovoljstva, izazova i zanimljivosti se povecava i vjerovatnoca postizanja flow stanja</b>.
</span>

Tekst na temu <a href="/posts/promisljeno-vjezbanje/">promisljenog/namjernog vjezbanja</a> ima poveznice. Post je odvojen jer radi kao cjelina, ali u njemu pise i vise o efektnijem vjezbanju, fokusu, oporavku itd.
