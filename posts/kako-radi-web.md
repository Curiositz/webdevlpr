---
title: Kako radi web?
date: 2022-02-7T19:33:53.977Z
author: Marijana Sevo
summary: Detalji o tome kako web funkcionise nije nesto o cemu obicno razmisljamo. Medjutim, svaki web developer treba znati dio osnovne teorije. Osnove su kljucne za pisanje boljih web aplikacija.
tags:
  - teorija
  - koncept
thumbnail: /static/img/kako-radi-internet.jpg
---

Cilj teksta je bolje razumijevanje necega sto koristimo svakodnevno. Ucenje osnova webu isprva nije neophodno za pisanje koda, ali na duze staze je kljucno za <i>pisanje boljih web aplikacija</i> i rjesavanje problema pri suocavanju sa greskama. Pogled iz perspektive web developera.


## Klijent i server

Sajt je samo <i>nekolicina fajlova</i> (koji mogu biti kod, slike, pdf dokumenati itd.) koja se nalazi na nekom racunaru. Drugo ime za taj racunar je <em>server</em> i povezan je na internet. Njegova svrha je da <i>usluzuje</i> klijente i odgovara na zahtjeve.
Kada korisnik klikne na neki link, on je zapravo poslao zahtijev odgovarajucem serveru da dobije pristup fajlovima kako bi pogledao sadrzaj kroz web pregledac (poput Chrome, Firefox, Opera ili Safarija). Web pregledac je ovdje <em>klijent</em>.

Trazeni server odgovara na zahtjev sa svim potrebnim fajlovima, te web pregledac (klijent) interpretira kod iz fajlova i voilà: na ekranu vidite ovu stranicu. <em>Internet se temelji na komunikaciji izmedju klijenta i servera.</em>

<figure style="max-width: 500px;">
<img src="/static/img/client-server.png" alt="Klijent i server komuniciraju tako sto klijent salje zahtjev/upit serveru, a server usluzuje klijenta tako sto mu daje povratnu informaciju na taj specificni zahtjev."> 
 <figcaption>Odvijanje komunikacija izmedju klijenta i servera.</figcaption>
</figure>

 Ipak pojednostavljeni opis komunikacije klijenta i servera ne govori cijelu pricu. Ukljuceno je mnogo drugih dijelova.

## IP adrese i domene

Svakom povezanom uredjaju na internetu je dodjeljena jedinstvena IP adresa (Internet Protocol address). Svrha IP adrese je dodijeliti identifikator svakom uredjaju na internetu kako bi se mogao pronaci i komunicirati sa njim. Pomocu nje pristupamo racunaru (serveru) sa zeljenim sadrzajem.

Tipicna IP adresa bi izgledala ovako: `32.248.146.43`. Najosnovniji format ukljucuje jednostavan skup od 4 bloka brojeva sa minimalnom `0.0.0.0` i maksimalnom `255.255.255.255` vrijednosti. Recimo `74.125.128.147/search?q=youtube` vodi na Google stranicu sa rezultatima za kljucnu rijec "youtube" (bar dok `google.com` ne promjeni IP adresu).

Medjutim, ovakvi brojevi nisu prakticni za pamcenje. Ukoliko bi sajt promijenio server dodijelila bi mu se nova IP adresa a korisnik se razocarao sa `This page can’t be found` greskom jednom kada ukuca staru IP adresu i linkovi bi ucestalije prestajali raditi. Iz ovih razloga postoje domene kakve znamo poput `nekisajt.ba` gdje je <i>.ba</i> <i>najvisi nivo internet domene</i> ili Top Level Domain (TLD). 

Ovdje je <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains">spisak</a> internet domena najviseg nivoa. Njih uredjuje i dodaje medjunarodna organizacija <a target="_blank" href="https://www.iana.org/">IANA</a>. IANA potom odredjuje koja organizacija ce dalje biti glavni <a target="_blank" href="https://www.iana.org/domains/root/db">administrator</a> koje domene. Za `.ba` je to <a target="_blank" href="https://nic.ba/">UTIC</a>, za `.hr` je <a target="_blank" href="http://www.dns.hr">CARNet</a>, za `.rs` je <a target="_blank" href="https://www.rnids.rs/">RNIDS</a> itd. 

Da bi firma mogla nuditi uslugu registracije domene — prvo se mora poslati zahtjev organizaciji koja je glavni administrator domene. Ako administrator odobri zahtjev firma ce biti dodana na spisak ovlastenih registara (sto izgleda <a target="_blank" href="https://www.rnids.rs/lat/registri/spisak-ovlascenih-registara-rnids-a">ovako</a>). Administratori i firme su zaduzene za <i>registraciju drugog nivoa domene</i> koja se nalazi prije TLD domene. Drugi nivo domene u `nekisajt.ba` je <i>nekisajt</i>.

Osoba koja je registrovala domenu u jednoj od ovlastenih firmi upravlja sledecim nivoima registrovane domene: `blog.nekisajt.ba` gdje je poddomena <i>blog</i>. Ta ista osoba treba povezati domenu i server na kojoj je pohranila fajlove sajta kako bi domena vodila na odgovarajuci server.

Kada posaljemo `nekisajt.ba` URL zahtjev, presrece ga internet provajder (kao M:tel, Blic, Telekom, SBB) i prosljedjuje ka svom <i>Domain Name Serveru (DNS)</i> koji domenu pretvara u IP adresu odgovarajuceg servera. DNS je poput adresara sa domenama i IP adresama. Ako DNS nema IP adresu servera na koji vodi trazena domena, zahtjev se onda salje ka administratoru najviseg nivoa domene (u ovom slucaju je to UTIC). Kada administrator posalje IP adresu, ona se cuva na DNS-u internet provajdera da bi se ovaj proces sledeci put izvrsio brze. 

Jednom kada je IP adresa poznata web pregledacu, on serveru salje HTTP poruku u kojoj zahtjeva neku web stranicu ili obradu dinamicnog sadrzaja. Ova poruka i svi ostali podaci izmedju klijenta i servera se salju preko internet mreze koristeci TCP/IP (prevozno sredstvo). Ukoliko je server odobrio zahtjev, klijent dobija "`200 OK`" poruku (sto znaci da ima pristup) i trazeni sadrzaj.

Sve se ovo desava brzo ukoliko server ne mora da izvrsi neku kompleksniju obradu prije slanja podataka klijentu.

## URL adresa

URL ili Uniform Resource Locator je jedinstveni identifikator koji se koristi za lociranje datoteka i fajlova (resursa) na internetu. Ime domene je zapravo samo jedan od dijelova URL adrese.

<figure>
<img src="/static/img/elementi-domene.png" alt="The elements of an URL"> 
 <figcaption>Elementi URL adrese.</figcaption>
</figure>

+ <span><i>Protokol</i>: je uglavnom <i>http</i> ili <i>https</i> koji komunikaciju cini sigurnijom. 
Oba protokola su opsirnije objasnjena u toku teksta.</span>
+ <span><i>Poddomena</i>: je obicno `www` ali je ona opciona.</span>
+ <span><i>Domena</i>: `nekisajt.ba` vodi do servera na kom "zivi" sajt</span>
+ <span><i>Port</i>: Broj porta koji server koristi za slusanje HTTP zahtjeva je najcesce 80. Ovo je razlog zasto ga web pregledac obicno izostavi iz URL adrese. Potrebno ga je navesti samo ako server slusa na broju koji nije 80: `http://nekisajt.ba:1234/`.</span>
<br>
+ <span><i>Put do fajla:</i> vodi na neki fajl na tvrdom disku servera. Npr.:</span>


`/kontakt.html` vodi na kontakt stranicu koja se nalazi u <i>glavnom folderu</i>,
`/kontakt.html#forma` automatski vodi na sekciju koja je u html kodu oznacena sa jedinstvenim identifikatorom `forma`,
`/aseti/knjiga.pdf` vodi na pdf fajl koji je u ovom slucaju <i>pohranjen u folderu 'aseti'</i>, a koji se nalazi u glavnom folderu ili
`/aseti/slike/logo.jpg` voditi na sliku ukoliko na serveru u `/aseti/slike/` folderu postoji slika sa nazivom `logo.jpg`. Ako ne postoji slika sa identicnim nazivom ili naznacena hijerarhija foldera web pregledac ce prikazati gresku `404 Not Found`.

Vecina sadrzaja i izvora mora postojati fizicki u fajl sistemu servera. Ovaj put radi poput fajl sistema na kompjuteru.

<figure style="max-width: 500px">
<img src="/static/img/path.jpg" alt="File Explorer put koji vodi do nekog fajla na Windows operativnom sistemu."> 
 <figcaption>File Explorer put na Windows operativnom sistemu.</figcaption>
</figure>

Ukoliko navedemo samo domenu `nekisajt.ba` ili put ka odredjenom folderu `nekisajt.ba/blog/` bez navodjenja <i>specificnog</i> fajla koji zelimo iz njega, web pretrazivacu ce se usluziti osnovna stranica `/index.html` ukoliko postoji u izabranom folderu.
Drugi moguci nazivi osnovne stranice pored `index.html` su `index.htm`, `default.html`, `default.htm`, `home.html` i `home.htm`. 
Ukoliko ova stranica ne postoji u trazenom folderu, vecina web pretrazivaca ce prikazati strukturu foldera i fajlova, sto nije najoptimalnije iskustvo.

<figure>
<img src="/static/img/folder-structure.JPG" alt="File Explorer put koji vodi do nekog fajla na Windows operativnom sistemu."> 
 <figcaption>Pretrazivac prikazuje sajt koji nema osnovnu stranicu.</figcaption>
</figure>

Medjutim moguce je konfigurisati server da prepozna bilo koji fajl kao osnovnu stranicu iako se najcesce koristi "index".

Sadrzaj moze biti i dinamicne prirode. Zamislite URL adresu koja je dobijena klikom na kategoriju 'laptopi': `https://prodavnica.ba/laptopi` i koja ne mora voditi na postojeci staticni .html dokument sa `prodavnica.ba` servera. Recimo da je u ovom slucaju URL podesen da automatski pokrene web aplikaciju na serveru koja ce uzeti podatke (sve postojece laptope) iz baze podataka i u tom trenutku generisati i servirati .html stranicu prilagodjenu klijentovom zahtjevu. Ovakva web aplikacije se moze kreirati u PHP, Perl, Ruby on Rails ili nekom drugom backend jeziku.

+ <span><i>GET parametri</i>: primjer `https://nekisajt.ba/pretraga?trazi=web+development&poredaj=najnovije`
Sve nakon `?` je poznato kao upit i sadrzi prosljedjene vrijednosti (<i>query string</i>) u zahtjevu. Ne postoji standard kako query string treba izgledati jer ovisi od toga kako je web aplikacija programirana da interpretira vrijednosti koje dobije.</span>


## Hypertext Transfer Protocol (HTTP)

URL adresa usmjerava i identifikuje sa kim klijent zeli komunicirati, ali ne govori serveru sta se zahtjeva od njega. Web pregledac salje <i>zahtjeve</i> koristeci HTTP poruke. Primarna funkcija HTTP protokola je da nakon uspostavljanja veze sa serverom trazi sve potrebne informacije za prikaz web stranice i preuzme podatke koje je server proslijedio kao odgovor.

Kroz HTTP poruku klijent naglasava kakvu reprezentaciju sadrzaja zeli i njegovu namjeru. HTTP poruka je jednostavna tekstualna poruka, a koncept zahtjeva i odgovora je lako usvojiti jer se nazivi u potpunosti opisuju.
<i>Zahtjev</i> sadrzi HTTP metodu koja serveru govori sta klijent zeli da radi (cita, modifikuje, brise itd.), putanju do sadrzaja i zaglavlja koja daju dodatne podatke o sadrzaju koji se trazi.
<i>Odgovor</i> ukljucuje statusni kod o uspjesnosti realizacije zahtjeva, zaglavlja sa dodatnim korisnim informacijama o odgovoru i sadrzaj.

HTTP ima definisan format kojim oblikuje zahtjev i salje sve neophodne informacije da bi klijent dobio trazeni sadrzaj, te World Wide Web ne bi radio bez njega. Zato ukoliko se domen ukuca u pretrazivac i pritisne enter — `http` se automatski pojavavljuje ispred naziva domena.

<figure style="max-width: 400px">
<img src="/static/img/url-http.png" alt="URL adresa sa naglasenim HTTP protokolom prije ostatka adrese."> 
 <figcaption>HTTP protokol u URL adresi.</figcaption>
</figure>


HTTP je i ujedno protokol bez stanja (<i>stateless</i>), odnosno protokol koji ne odrzava konstantnu vezu izmedju klijenta i servera, vec se svaki upuceni zahtjev posmatra odvojeno. To znaci da server ne moze pratiti stanja i informacije o klijentu izvan tog zahtjeva i da svaki zahtjev mora sadrzati sve informacije potrebne za njegovo izvrsenje. Ove podatke sadrzi <em>zaglavlje</em> HTTP poruke.

<p class="tip right-tip" style="--span-row: 2;">Ukoliko je neophodno kontinuirano cuvati podatke o nekom <i>stanju</i> (npr. da je korisnik prijavljen), moguce je koristiti lokalno skladiste (Local Storage), kolacice (Cookies), sesije (Sessions) itd.</p>

#### 3 faze standardne HTTP sesije

+ Klijent uspostavi TCP vezu sa serverom
+ Klijent salje HTTP zahtjev i ceka HTTP odgovor 
+ Server obradjuje zahtjev i salje svoj odgovor sa statusnim kodom o uspjesnosti obrade


<i>Internet konekcija</i> omogucava slanje i primanje podataka na internetu. Ona je poput puta izmedju klijenta i servera ili ulica izmedju nas i marketa.
<i>TCP/IP</i> ili Transmission Control Protocol i Internet Protocol jesu transportni protokoli koji definisu kako podaci trebaju putovati internetom. Moze se zamisliti kao <i>prevozno sredstvo</i> do marketa (recimo ako definisemo da je to hod ili biciklo).
<i>HTTP</i> je komunikacijski protokol koji definise jezik izmedju klijenta i servera kako bi se razumijeli i kako bi klijent dobio ono sto trazi od servera. HTTP je poput <i>jezika koji koristimo za komunikaciju</i> sa prodavcem da bi dobili ono sto zelimo.

Drugi dio teksta i vise o HTTP verzijama, metodama, porukama, zaglavljima, kesiranju, kolacicima, TCP vezama, HTTPS protokolu, statusnim kodovima, alatima za pracenje HTTP saobracaja u postu o <a target="_target" href="/posts/HTTP/">osnovama HTTP protokola</a>.


## Dodatni izvori

+ <span><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works">How the Web works</a> (tekst)</span>
+ <span><a target="_blank" href="https://www.youtube.com/watch?v=hJHvdBlSxug">How The Web Works - The Big Picture</a> (youtube)</span>
+ <span><a target="_blank" href="https://www.youtube.com/watch?v=e4S8zfLdLgQ">How the Internet Works for Developers - Pt 1 - Overview & Frontend</a> (youtube)</span>