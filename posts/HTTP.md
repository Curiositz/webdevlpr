---
title: Osnove HTTP protokola
date: 2022-02-16T19:33:53.977Z
author: Marijana Sevo
summary: HTTP je temelj Word Wide Weba i komunikacijski protokol pomocu kojeg je moguce povezati se sa serverima sirom svijeta. Ovdje cete se sresti sa HTTP zahtjevima i odgovorima, verzijama, metodama, kolacicima, proksijima, TCP vezom i ostalim slojevima kroz koje putuje HTTP poruka.
tags:
  - teorija
  - koncept
thumbnail: /static/img/http.jpg
---

Hypertext Transfer Protocol je temelj Word Wide Weba i <i>komunikacijski protokol</i> pomocu kojeg je moguce povezati se sa serverima sirom svijeta. 
Primarna funkcija HTTP protokola je da uspostavi vezu sa serverom, trazi sve potrebne informacije za prikaz web stranice i preuzme odgovor od servera. 

<p class="tip right-tip" style="--span-row: 2;">Ovaj post je nastavak teksta <a href="/posts/kako-radi-web/">Kako radi web?</a>.</p>

<figure style="max-width: 400px">
<img src="/static/img/url-http.png" alt="URL adresa sa naglasenim HTTP protokolom prije ostatka adrese."> 
 <figcaption>HTTP protokol u URL adresi.</figcaption>
</figure>

<a target="_blank" href="/posts/kako-rade-internet-i-web#url-adresa">URL adresa</a> identifikuje sa kojim serverom klijent zeli komunicirati, ali ne govori i sta se od njega trazi. Zato web pregledac salje <i>zahtjeve</i> kroz HTTP poruke, a HTTP protokol definise jezik izmedju <a target="_blank" href="/posts/kako-rade-internet-i-web#klijent-i-server">klijenta i servera</a>. 

Kroz HTTP poruku klijent (web pregledac) naglasava kakvu reprezentaciju i u kom obliku zeli sadrzaj, kao i klijentovu namjeru (da cita, modifikuje, brise itd.). HTTP poruka je jednostavna tekstualna poruka koja moze biti zahtjev (request) od klijenta ili odgovor (response) od servera:
<i>Zahtjev</i> sadrzi HTTP metodu (`GET`, `POST`, `Put`, `DELETE`..) koja serveru govori sta klijent zeli da uradi, gdje se nalazi zeljeni sadrzaj i zaglavlja koja daju dodatne podatke o sadrzaju koji se trazi kao i vise informacija o samom klijentu.
<i>Odgovor</i> ukljucuje statusni kod o uspjesnosti realizacije zahtjeva, zaglavlja sa dodatnim korisnim informacijama o odgovoru i sadrzaj odgovora.

<p class="tip right-tip" style="--span-row: 2;">Zvuci apstraktno, ali u nastavku teksta su prikazani prakticni primjeri HTTP poruka i objasnjenje. Ovaj paragraf je samo uvod.</p>

HTTP ima definisan format koji odredjuje strukturu zahtjeva, kao i sve neophodne informacije da bi server shvatio sta se od njega trazi. Zato pri pretrazi naziva domene veb pregledac sam dopuni `http://` protokol u URL adresi ukoliko on nedostaje.


HTTP je i ujedno protokol bez stanja (<i>stateless</i>), odnosno protokol koji ne odrzava konstantnu vezu izmedju klijenta i servera, vec se svaki upuceni zahtjev posmatra odvojeno. To znaci da server ne moze pratiti stanja i informacije o klijentu izvan tog zahtjeva, te da svaki zahtjev mora sadrzavati neophodne informacije potrebne za njegovo izvrsenje.

<p class="tip right-tip" style="--span-row: 2;">Ukoliko je neophodno kontinuirano cuvati podatke o nekom <i>stanju</i> (npr. da je korisnik prijavljen), moguce je koristiti lokalno skladiste (Local Storage), kolacice (Cookies), sesije (Sessions) itd.</p>

3 faze standardne HTTP sesije izgledaju ovako:

+ Klijent uspostavi TCP vezu sa serverom
+ Klijent salje zahtjev i ceka odgovor 
+ Server obradjuje zahtjev i salje odgovor sa statusnim kodom o uspjesnosti obrade

Dalje u tekstu su detaljnije objasnjene HTTP verzije, HTTP metode, HTTP zahtjev i odgovor, HTTP zaglavlje i podjela, proxy, kesiranje, kolacici, TCP veza, HTTPS, alati za pracenje HTTP saobracaja i HTTP statusni kodovi.

## HTTP verzije

Nekada je za prikaz web stranice bilo dovoljno preuzeti jedan dokument. Danas mnogi sajtovi zahtijevaju vise od jednog fajla za prikaz stranice. Kada bi web pregledaci uspostavili konekciju i cekali da se preuzme jedan fajl da bi poceo preuzimati drugi, proces bi uzimao vise vremena.

+ <span><i>HTTP/2.0</i> omogucava klijentu da zahtjeve salje istovremeno. Ova tehnika je poznata kao multipleksiranje i smanjuje vrijeme potrebno za ucitavanje stranice.</span>
+ <span><i>HTTP/1.1</i> dozvoljava samo jedan istovremeni zahtjev. </span>

<figure>
<img src="/static/img/http1-vs-http2.jpg" alt="HTTP/1.1 and HTTP/2 comparison. HTTP/2 is more efficient."> 
 <figcaption>Poredjenje efikasnosti HTTP/1.1 i HTTP/2 protokola.</figcaption>
</figure>

Na slici iznad vidimo da je klijent prvo trazio `index.html` kroz HTTP zahtjev. Server je poslao `200 OK` i trazeni fajl u odgovoru. Web pregledac potom rasclanjuje kod `index.html` fajla koji ukljucuje `style.css` i `script.js`: 

```html
<link rel="stylesheet" href="/style.css">
<script src="/script.js"></script>
``` 
Sto znaci da su `style.css` i `script.js` potrebni za prikaz stranice, te je klijent u prvom primjeru (primjer rada HTTP 1.1 protokola) poslao zahtjev za preuzimanje `style.css` i nakon sto mu je server dostavio fajl, poslao je jos jedan zahtjev za `scripts.js`. 
U drugom primjeru (primjer rada HTTP 2 protokola) je poslao oba zahtjeva istovremeno, smanjio broj koraka i ubrzao prikazivanje stranice. 

## HTTP metode

Navedene su HTTP metode koje se najcesce primjenjuju, ali nisu ogranicene na njih.

+ <span><i>GET</i> dobija podatke od servera da bi ih klijent citao. U ovakvom zahtjevu URL bi trebao nositi sve informacije koje su potrebne serveru da bi pronasao trazeni sadrzaj. Primjer `https://nekisajt.ba/`<b>`pretraga?trazi=web+development&poredaj=najnovije`</b></span>
+ <span><i>POST</i> salje nove podatke serveru.</span>
+ <span><i>PUT</i> modifikuje vec postojece podatke na serveru.</span>
+ <span><i>DELETE</i> brise postojece podatke sa servera.</span>

## HTTP zahtjev

HTTP zahtjev je ona HTTP poruka koju klijent salje serveru i sastoji se od sledecih dijelova:

+ <span><i>Startna linija</i> opisuje sta klijent trazi - sastoji se od HTTP metode, putanje i HTTP verzije: `GET /blog/index.html HTTP/1.1`</span>
+ <span><i>Zaglavlje zahtjeva</i> je parametar poruke - obicno ih ima vise i oni daju informacije o posiljaocu, nacinu na koji klijent zeli da komunicira i o samoj poruci</span>
+ <span>Prazna linija - naznacuje da je zaglavlje zavrsilo i odvaja ga od tijela poruke.</span>
+ <span><i>Tijelo poruke</i> je sadrzaj poruke - opcionalan. U slucaju jednostavnijih zahtjeva je prazno. Npr. kada klijent trazi staticni sajt. Ukoliko trazi obradu podataka usljed podnosenja forme tijelo ce sadrzati podatke sa forme.</span>

Primjer HTTP zahtjeva koji zeli dobiti (GET HTTP metoda) fajlove staticne stranice i nema potrebe dalje obradjivati bilo kakve podatke. Prva linija je startna linija koju smo pomenuli. Sve ostale su neki od mogucih parametara iz zaglavlja zahtjeva. U ovom slucaju tijelo nije potrebno.

```http
GET /blog/index.html HTTP/1.1
Host: nekisajt.ba
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Connection: Keep-Alive
Cache-Control: no-cache
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```
Medjutim ako je korisnik popunio i poslao formu kroz svoj web pregledac, on zapravo salje zahtjev serveru sa startnom linijom koja sadrzi metodu za slanje podataka (poput POST HTTP metode). U ovom primjeru postoji prazna linija i tijelo odvojeno od zaglavlja poruke. U tijelu vidimo informacije poslane kroz formu.

```http
POST /test/demo_form.php HTTP/1.1
Host: nekisajt.ba

name1=John&name2=Doe
```

## HTTP odgovor

Odgovor se sastoji od sledecih dijelova:

+ <span><i>Statusna linija</i> je statusni kod koji pokazuje da li je zahtijev uspjesan (`200 OK`) ili zasto nije. Ona takodje ukljucuje HTTP verziju i kratak opis statusa.</span>
+ <span><i>Zaglavlje odgovora</i> su dodatni podaci o tipu sadrzaja, informacije o serveru itd.</span>
+ <span>Prazna linija - naznacuje da je zaglavlje zavrsilo i odvaja ga od tijela poruke.</span>
+ <span><i>Tijelo poruke</i> je sadrzaj poruke - opcionalan. Na primjer, ovo moze biti HTML sadrzaj trazene web stranice, slika itd.</span>

Sledeci primjer je HTTP odgovor koji prikazuje stanje greske nakon sto server nije uspio pronaci trazenu web stranicu (404).

```http
HTTP/1.1 404 Not Found
Date: Sun, 18 Oct 2012 10:36:20 GMT
Server: Apache/2.2.14 (Win32)
Connection: Closed
Content-Type: text/html; charset=iso-8859-1
```

## HTTP zaglavlje

Svaka informacija u zaglavlju je formatirana kao par koji ima `Ime-Zaglavlja: vrijednost`. Na ovaj nacin HTTP protokol ukljucuje sve vazne informacije koje mogu koristiti klijentu i serveru. Zaglavlja se mogu podijeliti prema njihovom kontekstu:

+ <span><i>Generalna zaglavlja</i> se mogu koristiti za pruzanje informacija o zahtjevu ili odgovoru, ali ne govore o samom sadrzaju poruke</span>
+ <span><i>Zaglavlja zahtjeva</i> pruzaju dodatne podatke o zahtjevu i salje ih klijent</span>
+ <span><i>Zaglavlja odgovora</i> pruzaju dodatne podatke o odgovoru i salje ih server</span>
+ <span><i>Zaglavlja entiteta</i> se koriste da opisu sadrzaj poruke</span>

Mogu se podijeliti i u <i>kategorije</i> po: Authentication, Caching, Client hints, Device client hints, Conditionals, Connection management, Content negotiation, Controls, Cookies, CORS, Downloads, Message body information, Proxies, Redirects, Request context, Response context, Range requests, Security, Server-sent events, Transfer coding, WebSockets HTTP headers.

<p class="tip right-tip" style="--span-row: 2;">Opsirna <i>dokumentacija</i> o zaglavljima po kategorijama na <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication">developer.mozilla.org</a></p>

Hajde da pogledamo kako izgledaju neka od osnovnih zaglavlja. 

### Autentifikacija

`WWW-Authenticate` zaglavlje definise metodu autentifikacije koja se koristi da bi se pristupilo sadrzaju. Ono se salje u zaglavlju odgovora, odnosno server salje klijentu.
`Authorization` zaglavlje sadrzi kredencijale za autentifikaciju korisnickog agenta. Klijent salje u zaglavlju HTTP zahtjeva kako bi dokazao da moze pogledati zasticeni sadrzaj.

### Uslovi

`Last-Modified` zaglavlje predstavlja datum poslednje izmjene.
`ETag` ili entity tag je identifikator verzije sadrzaja. U trenutku promjene sadrzaja `ETag` vrijednost se mijenja. Ukoliko web pregledac uporedi vrijednosti verzije koju ima u kesu i vrijednost verzije sadrzaja koju ima server, moze odluciti da li ima potrebe da zahtijeva i preuzme novi sadrzaj ili ce prikazati onaj koji je sacuvan. 
`If-Match` zaglavlje cini zahtjev uslovnim jer zeli potvrditi da li se poklapa sa drugim entity tagom.
`If-None-Match` zahtjev uslovljava i primjenjuje metodu samo ako se kesirani sadrzaj ne poklapa ni sa jednim entity tagom.

### Upravljanje vezom

`Connection` zahtjev kontrolise hoce li mrezna veza ostati otvorena nakon sto se zavrsi trenutna transakcija izmedju servera i klijenta.
`Keep-Alive` zahtjev kontrolise koliko dugo veza treba ostati otvorena.

### Pregovaranje o sadrzaju (Content Negotiation)

`Accept` zaglavlje obavjestava server o vrstama podataka koji se mogu poslati nazad. 
`Accept-Language` zaglavlje obavjestava server da klijent npr. prihvata spanski jezik. Na serveru je da pokusa ispuniti zahtjev, sto ne znaci da hoce. Mozda posalje sadrzaj na engleskom. 

Ovo se smatra pregovaranjem. Pregovaranje o sadrzaju je nesto za sta tipicni korisnik ne mari, ali za web developere znaci potencijal da linijom koda usavrse uslugu koja ce dostaviti informaciju u idealnom formatu za klijenta ili korisnika.

### Informacije o tijelu poruke

`Content-Length` zaglavlje govori o velicini tijela u bajtovima.
`Content-Type` zaglavlje oznacava tip medija.
`Content-Language` zaglavlje opisuje ljudski jezik koristen u sadrzaju.

### Kontekst zahtjeva

`From`, `Host`, `Referer` i `User-Agent` opisuju detalje o klijentu koji je pokrenuo zahtjev.

## Proxy

Proxy je <i>posrednik izmedju klijenta i zeljenog servera</i>. HTTP poruke ne idu direktno trazenom serveru ili klijentu ukoliko je prisutan posrednik. Proxy server presretne poruke i prosljedjuje ka finalnoj destinaciji. To takodje znaci da proxy moze manipulisati HTTP porukom, izmijeniti je, citati i zapisati sadrzaj.

Proxy se moze koristiti za <u>pracenje saobracaja</u> ili <u>blokiranje pristupa</u> nekim sajtovima (npr. socijalnim mrezama), za <u>kompresiju sadrzaja</u>, <u>anonimnost</u> korisnika tako sto proxy server predstavlja sebe kao klijenta koji je napravio inicijalni HTTP zahtjev itd. 
Proxy moze pomoci pri <u>uravnotezenju opterecenja servera</u> tako sto prosljedjuje nove zahtjeve na onaj koji je najmanje opterecen u tom trenutku. SSL i <u>sifriranje HTTP poruka</u> moze raditi proxy umjesto servera. <u>Proxy za kesiranje</u> pohranjuje kopije sadrzaja kojima se cesto pristupa i moze da odgovara na takve HTTP zahtjeve direktno. 


## Kesiranje (Caching)

Efikasnost web stranica se moze znacajno popraviti <i>ponovnom upotrebnom prethodno preuzetog sadrzaja</i>. To znaci da server ne mora slati sadrzaj koji klijent vec ima. Iz ovog razloga kes smanjuje kasnjenje, potrosnju mreznog protoka i vrijeme za preuzimanje neophodnog sadrzaja za prikaz web stranice. Kada postoji vise zahtjeva za isti sadrzaj, server ga moze iznova i iznova slati. Alternativa je da se sadrzaj kesira na proxy serveru ili u lokalnom skladistu klijenta dok serveru ostaje prostor za bavljenje vaznijim obradama, a vrijeme za prikaz stranice djeluje znatno brze.

### Dvije vrste kesa

<i>Javni</i> ili <i>dijeljeni kes</i> je onaj koji dijeli vise korisnika. Obicno se nalazi u kes memoriji proxy servera. Cesto se koristi za sadrzaj koji je popularan medju korisnicima. Na primjer, dobavljac internet usluga (Internet service provider ili ISP) moze imati proxy server kao dio svoje lokalne mreze da bi brze usluzio mnogobrojne korisnike popularnim sadrzajem bez nepotrebnog gusenja protoka.

<i>Privatni kes</i> je namjenjen jednom specificnom korisniku. Web pregledac uvijek drzi privatni kes (preuzete i privremeno cuvane fajlove) na korisnikovom sistemu. Ona je korisna, izmedju ostalog, pri navigaciji naprijed/nazad kroz posjecene web stranice. Sve sto je web pregledac sacuvao na sistemu se moze pojaviti skoro istog trenutka na ekranu.

### Kada kesirati i brisati privremeno pohranjen sadrzaj?

Ukoliko web pregledac ili proxy server dobije nov sadrzaj kao odgovor od servera, taj sadrzaj se automatski moze pohraniti. Medjutim, moguce je naglasiti da se nesto ne treba cuvati kroz HTTP zaglavlje `Cache-Control` koje smo nesto prije pomenuli. `Expires` i `Pragma` su zaglavlja koja takodje kontrolisu istek nekog kesa iako su zvanicno zastarjela do HTTP 1.1. Ova zaglavlja su dostupna da bi bila kompatibilna sa starijim verzijama (backward compatibility).

`public`, `private`, `no-cache`, `no-store`, `max-age` su samo <em>neke</em> od vrijednosti `Cache-control` zaglavlja.

`public`: sadrzaj <i>kesira proxy server</i>.
`private`: <i>web pregledac kesira</i> sadrzaj.
`no-cache`: sadrzaj ce se <i>pohraniti samo za validaciju</i> sadrzaja. Klijent salje serveru sadrzaj za provjeru validnosti prije nego ga obrise.
`no-store`: <i>ne treba pohranjivati</i> HTTP poruku. Zahtjev i odgovor se salju iznova svaki put.
`max-age`: <i>kontrolise istek kesa</i> sto izgleda ovako `max-age=<sekunde>` i definise kolicinu vremena kojom se sadrzaj smatra novim (fresh), odnosno koliko dugo web pregledac moze koristiti ovaj kesirani sadrzaj.

Sadrzaj koji je obicno statican je preporucljivo kesirati na proxy serveru, kao slika logotipa pocetne stranice. Kesirati privatno je preporucljivo ukoliko postoji prilagodjeni prikaz. Na primjer, ukoliko web stranica sadrzi ime korisnika. 

U sledecem primjeru vidimo HTTP odgovor gdje `Cache-Control` dozvoljava javni i privatni kes, a moze se zadrzati 157,784,760 sekundi ili pet godina. `Expires` se koristi za starije verzije.

```http
HTTP/1.1 200 OK
Last-Modified: Tue, 10 Oct 2019 22:38:58 GMT
Expires: Sat, 10 Oct 2024 22:38:58 GMT
Cache-Control: max-age=157784760,public
```

Ukoliko klijent posalje HTTP zahtjev koji ukljucuje i uslovno zaglavlje kao `If-Modified-Since: Wed, 25 Jan 2020 14:27:01 GMT`. Server odgovara sa `304 Not Modified` ako sadrzaj nije modifikovan od dana preuzimanja i klijent moze slobodno koristiti vec pohranjen sadrzaj.

Jos jedan primjer validiranja je `ETag`. On nema drugog znacenja i generisan je tako sto je sadrzaj provucen kroz algoritam za hesiranje. Promjena i jednog slova u sadrzaju rezultira generisanjem drugacijeg ETaga. Poredjenjem dva ETaga se moze utvrditi da li se desila promjena. Ukoliko su `ETag` vrijednosti iste — kes fajlovi koje ima klijent su validni. Klijent preuzima sadrzaj ponovo ukoliko su vrijednosti razlicite.

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Kada server odgovori sa zaglavljem  `Clear-Site-Data` brisu se podaci pretrazivanja (npr. kolacici, skladiste, kes memorija).

## Kolacici

Pomenuto je da je HTTP protokol <i>bez stanja</i> i da to znaci da je svaka transakcija zahtjev-odgovor nezavisna od bilo koje prosle ili buduce transakcije. Sa druge strane, mnoge web aplikacije i usluge imaju razna stanja. Jedan od uobicajnih je kada Facebook zna da smo prijavljeni na nalog iako iznova saljemo nove zahtjeve, a prosli su davno zaboravljeni.

Web stranice koje imaju potrebu pratiti korisnike ce se obicno okrenuti kolacicima. Kolacic je mali <i>tekstualni fajl koji web pregledac dobije od web stranice</i> pri posjeti. Kolacic sluzi da podsjeti sajt o korisnikovim prethodnim posjetama i prilagodi prikaz u skladu sa njim. Kolacic u sebi moze imati informacije poput korisnickog imena i lozinke ili identifikacionog broja za identifikaciju sesije. 

Kada klijent posalje zahtjev da vidi sadrzaj web stranice, server u odgovoru moze ukljuciti kolacic kroz HTTP zaglavlje. Onda web pregledac u svakom sledecem zahtjevu salje i sadrzaj kolacica u HTTP zaglavlju.

### Kako se postavlja kolacic?

Za postavljanje kolacica kroz HTTP odgovor se koristi `Set-Cookie` HTTP zaglavlje. Za slanje vise kolacica je potrebno postaviti vise `Set-Cookie: <ime-kolacica>=<vrijednost-kolacica>` zaglavlja u istom odgovoru.

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
```

Svakim narednim zahtjevom web pregledac salje prethodno dobijene kolacice kroz HTTP zaglavlje `Cookie`.

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```    

Ovaj tekstualni fajl ne moze imati vise od 4 KB.

## TCP veza i HTTP 

Vidjeli smo kako HTTP omogucava web pregledacu da zahtjeva sadrzaj od servera, ali HTTP specifikacija ne govori o tome kako zahtjev ili odgovor putuju preko mreze do servera ili klijenta. Iz ovog razloga je potrebno zaviriti u slojeve ispod HTTP protokola. Mrezna komunikacija se sastoji od <i>vise slojeva</i> i svaki od njih ima odredjene odgovornosti.

HTTP se jos zove i <i>aplikacijski sloj</i> jer predstavlja jezik kojim dvije aplikacije komuniciraju preko mreze (npr. klijent i server).

<figure>
<img src="/static/img/slojevi.png" alt="HTTP zahtjev putuje kroz mrezne slojeve."> 
 <figcaption>Putovanje HTTP zahtjeva kroz slojeve.</figcaption>
</figure>

HTTP poruka od web pregledaca mora putovati kroz seriju slojeva da bi stigla na destinaciju. Ispod aplikacijskog sloja se nalazi <em>protokol transportnog sloja</em>. HTTP obicno putuje kroz TCP (Transmission Control Protocol) i pri biranju URL adrese web pregledac uspostavlja TCP vezu sa serverom, tipicno na portu 80. TCP veza se brine o tome da se poruka dostavi serveru bez gubitka ili dupliranja. Ukoliko se neki paket izgubi TCP ce ga poslati ponovo. Takodje, TCP prilagodjava brzinu slanja brzini kojoj prijemnik obradjuje podatke.

Nakon transportnog sloja je IP (Internet protocol) ili <em>mrezni / internet sloj</em>. TCP i IP nisu isto, ali su besmisleni jedno bez drugog i cesto se pominju zajedno. Oni stavljaju veliki znacaj na tacnost. IP zahtjeva od servera da imaju IP adresu kako bi mogao kontrolisati kretanje paketa kroz rutere i druge mrezne uredjaje do njihove destinacije sirom svijeta. 
IP je takodje odgovoran i za <i>razbijanje podataka u pakete</i>. Kada bi se cijela poruka slala odjednom u slucaju greske se ponovo mora poslati komplentna poruka. Zbog prakticnosti se svaka poruka dijeli u manje pakete koji se na destinaciji ponovo sastavljaju u cjelinu. Ovim svaki paket moze izabrati drugu rutu ukoliko je prva zagusena ili nedostupna.

Svi navedeni protokoli i slojevi se desavaju unutar racunara. Medjutim, da bi ovi paketi putovali mrezom potreban je hardver poput optickih kablova, bezicne mreze, satelitske veze itd. Za ovaj dio je odgovoran <em>sloj veze</em> (Data Link Layer). Ethernet odredjuje kako podaci trebaju izgledati u obliku elektricnih signalala (jedinica i nula).

Zatim se prolazi kroz ove iste slojeve obrnutim redoslijedom da bi se paketi ponovo sastavili u format koji odgovara klijentu. Ethernet prenosi podatke IP sloju. IP ih prenosi TCP transportnom sloju nakon kojeg dobijamo HTTP poruku koju je poslao klijent. HTTP poruka se onda obradjuje na serveru.

Medjutim, da li su ovi paketi sigurni i privatni?

## HTTPS

Da bi klijent i server mogli komunicirati, izmedju njih mora biti uspostavljena veza. Kao sto je vec pomenuto, HTTP poruke se salju kroz transportni TCP protokol i web saobracaj obicno koristi 80 port. TCP garantuje da ce podaci biti dostavljeni ukoliko je "sagovornik" dostupan, ali ne garantuje bilo kakav nivo sigurnosti.

Iz ovog razloga se dodaje jedan sigurnosni sloj izmedju HTTP-a i TCP-a. Taj sloj je <i>SSL</i> (Secure Socket Layers) ili njegova novija i sigurnija verzija <i>TLS</i> (Transport Layer Security). TLS i SSL su kriptografski protokoli dizajnirani da obezbjede sigurnost komunikacije na mrezi. Na ovaj nacin dobijamo HTTPS (<i>Hypertext Transfer Protocol Secure</i>) i <i>tuneliranje</i>. HTTP poruka prolazi kroz SSL tunel. SSL prima HTTP poruke, sifrira ih, salje preko TCP veze i ponovo ih desifruje na destinaciji. Enkripcija stiti od prisluskivanja i izmjene HTTP poruka.

<figure style="max-width: 400px">
<img src="/static/img/https.jpg" alt="The beginning of a secure https URL shown in an web browser's address bar"> 
 <figcaption>Pocetak sigurne HTTPS URL adrese.</figcaption>
</figure>

SSL je termin koji preovladava na internetu i koji se cesto koristi iako se misli na TLS. SSL nije siguran i odavno je zastario. Vremenska linija razvoja SSL i TLS protokola:

1. <span><b>SSL v1.0</b> je 90ih razvio Netscape i nikada nije bio objavljen zbog sigurnosnih problema</span>
2. <span><b>SSL v2.0</b> je pusten 1995. godine, ali i dalje ima mane</span>
3. <span><b>SSL v3.0</b> je objavljen 1996. godine i znacajno mijenja nivo sigurnosti. Medjutim, SSL 3.0 i prethodne verzije su zastarjele od 2015. godine.</span>
4. <span><b>TLS v1.0</b> je razvio IETF 1999. godine kao bolju verziju SSL-a</span>
5. <span><b>TLS v1.1</b> je izasao 2006. godine i 2008 je zamijenjen sa <b>TLS v1.2</b></span>
6. <span><b>TLS v1.3</b> je objavljen 2018. godine. TLS v1.0 i TLS v1.1 se od 3.2020. godine smatraju zastarjelim verzijama. Dostupne su samo TLS v1.2 i TLS v1.3.</span>

Da bi sajt imao HTTPS neophodno je da ima funkcionalan <em>digitalni SSL certifikat</em> na serveru. On potvrdjuje identitet servera (poput licne karte koja dokazuje identitet osobe) i omogucava kriptovanu vezu. Obicno sadrzi informacije poput

+ Naziv domene za koji je izdan certifikat
+ Osoba, organizacija ili uredjaj kom je certifikat izdan
+ <span>Izdavac certifikata (<i>Certificate Authority</i> ili CA)</span>
+ Digitalni potpis CA
+ Datum izdavanja i isteka certifikata
+ Algoritam koji se koristi za certifikat
+ Javni kljuc (privatni kljuc se ne otkriva)
+ itd.

Kada klijent isprva uputi HTTP zahtjev, on pokusava naci certifikat na serveru, a potom provjerava izdavaca certifikata u listi poznatih autorizovanih izdavaca. Ukoliko ga ne moze naci u CA listi ili certifikat ne postoji, web pregledac upozorava korisnika o tome. Nakon sto je certifikat potvrdjen izvrsava se SSL inicijalizacija i rukovanje (<i>SSL handshake</i>), te je moguce ostvariti sigurno slanje podataka. 

## Alati za pracenje HTTP saobracaja

Web developeri najcesce koriste <a target="_blank" href="https://developer.chrome.com/docs/devtools/">Chrome DevTools</a> koji se moze aktivirati na web stranici sa F12 ili desni klik > Inspect. Potrebno je izabrati karticu Network i ponovo ucitati stranicu. Klikom na neku od prikazanih stranica mogu se vidjeti detalji o tom specificnom HTTP zahtjevu i odgovoru.

<figure>
<img src="/static/img/HTTP-zahtjevi.JPG" alt="Chrome DevTools and HTTP saobracaj."> 
 <figcaption>Chrome DevTools i pracenje HTTP saobracaja.</figcaption>
</figure>

Takodje se pominju <a target="_blank" href="https://www.wireshark.org/">Wireshark</a> i <a target="_blank" href="https://www.telerik.com/download/fiddler">Fiddler</a>.

### HTTP statusni kodovi

Svaki odgovor od servera ima statusni kod. Ovaj kod govori klijentu kako da tumaci odgovor servera. Navedeni su neki znacajni kodovi.

### 1xx: Informativne poruke

### 2xx: Uspjeh
 
+ <span>Najcesci kod je `200 OK`. Zahtjev je uspjesno obradjen i server kao odgovor salje trazeni sadrzaj.</span>
+ <span>`201 Created`. Zahtjev je zavrsen i kreiran je novi sadrzaj.</span>
+ <span>`202 Accepted`. Zahtjev je prihvacen za obradu, ali obrada nije zavrsena.</span>
+ <span>`204 No Content`. U odgovoru nema tijela poruke.</span>
+ <span>`206 Partial Content`. Oznacava da odgovor sadrzi samo djelimican sadrzaj.</span>

### 3xx: Preusmjeravanje

Ovaj kod zahtijeva od klijenta da preduzme dodatne korake. Najcesci slucaj upotrebe je promjena URL kako bi klijent dosao do sadrzaja.

+ <span>`301 Moved Permanently`. Sadrzaj se sada nalazi na novoj URL adresi.</span>
+ <span>`303 See Other`. Trazena stranica se moze pronaci na drugoj URL adresi.</span>
+ <span>`304 Not Modified`. Server je utvrdio da se sadrzaj nije promjenio i da klijent moze koristiti njegovu kesiranu kopiju. Ovo radi uz pomoc HTTP zaglavlja kao `If-Modified-Since` i `If-None-Match`, gdje se utvrdjuje da li je sadrzaj mijenjan nakon datuma kesiranja sadrzaja.</span>
+ <span>`307 Temporary Redirect`. Sadrzaj se privremeno nalazi na novom URL.</span>

### 4xx: Greska klijenta

Ovi kodovi se koriste kada server misli da je klijent kriv, da li zbog zahtijevanja nepostojeceg sadrzaja ili kreiranja loseg zahtjeva. Najpoznatiji statusni kod u ovoj klasi je `404 Not Found`.

+ <span>`400 Bad Request`. Zahtjev pogresno formiran i server nije shvatio zahtjev.</span>
+ <span>`401 Unauthorized`. Za izvrsavanje zahtjeva klijent mora uraditi autentifikaciju (npr. podnosenjem korisnickog imena i sifre).</span>
+ <span>`402 Payment Required`. Ovaj statusni kod jos uvijek nije dostupan. Namjenjen je za sisteme digitalnog placanja.</span>
+ <span>`403 Forbidden`. Server je odbio pristup sadrzaju.</span>
+ <span>`404 Not Found`. Oznacava da server ne moze pronaci zahtjevani sadrzaj.</span>
+ <span>`405 Method Not Allowed`. Koristi se nevazeci HTTP metod u startnoj liniji ili server ne podrzava metod.</span>
+ <span>`408 Request Timeout`. Zahtjev je trajao duze nego je server bio spreman da ceka.</span>
+ <span>`409 Conflict`. Zahtjev nije mogao biti dovrsen zbog konflikta.</span>
+ <span>`410 Gone`. Zahtjevana stranica vise nije dostupna.</span>
+ <span>`415 Unsupported Media Type`. Server ne prihvata zahtjev jer tip medija nije podrzan.</span>

### 5xx: Greska servera

Ova klasa kodova se koristi za oznacavanje greske servera tokom obrade zahtijeva.

+ <span>`500 Internal Server Error`. Server ima internu gresku koja ga je sprijecila da ispuni zahtjev.</span>
+ <span>`501 Not Implemented`. Zahtjev nije zavrsen. Server ne podrzava trazenu funkcionalnost.</span>
+ <span>`503 Service Unavailable`. Server je privremeno preopterecen ili ne radi. Obicno server nece ni odgovoriti i zahtjev ce isteci.</span>

## Dodatni izvori

+ <span><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP">HTTP — MDN Web Docs</a></span>
+ <span><a target="_blank" href="https://code.tutsplus.com/series/http-succinctly--net-33683">HTTP sazeto</a></span>


<!-- Sire objasnjenje o tome <a href="https://www.youtube.com/watch?v=zN8YNNHcaZc">How does the internet work? (Full Course)</a> je kurs koji mogu pratiti i oni koji nemaju prethodno znanje o temi. -->

