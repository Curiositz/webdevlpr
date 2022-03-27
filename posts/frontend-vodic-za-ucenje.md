---
title: Frontend - vodic za ucenje
date: 2022-01-31T19:33:53.977Z
author: Marijana Sevo
summary: Definisani koraci i siguran, ali ne i jedini put za ucenje web developmenta. Vodic namjenjen pocetnicima.
tags:
  - koncept
  - ucenje
thumbnail: /static/img/whiteboard-roadmap.jpg
---
Na internetu je moguce pronaci velike kolicine informacija o web tehnologijama. One se konstantno razvijaju i njihov broj se povecava, te je vrlo lako izgubiti se u njima. Ukoliko ne isplanirate put i krenete na vise strana odjednom mogao bi vas gusiti osjecaj nesigurnosti i izgubljenosti.
Tekst izlaze osnove i cilj nije uciniti nekoga strucnjakom. Cilj je da se osoba osjeca dovoljno prijatno u ovoj oblasti da nastavi graditi svoj put. 

Poznavanje engleskog jezika je jedan od glavnih uslova jer je materijal za ucenje najcesce na engleskom, tolerantnost ka svakodnevnom sjedenju ispred racunara duze vremena, ali i osnovna kompjuterska pismenost.

Gdje poceti?

## Slijepo kucanje


Ono sto moze znacajno popraviti iskustvo pisanja koda je slijepo kucanje. To znaci da nema potrebe sklanjati oci sa ekrana. Ono ubrzava rad i pomaze pri zadrzavanju fokusa na primarnom zadatku.

Postoje razlicite igre koje pomazu u vjezbanju ove vjestine. Npr. <a target="_blank" href="https://www.ratatype.com/learn/">Ratatype</a>, <a target="_blank" href="https://www.typing.com/student/lessons">Typing</a>, <a target="_blank" href="https://www.typingclub.com/">TypingClub</a>, <a target="_blank" href="https://www.speedtypingonline.com/typing-tutor">Speed Typing Online</a>, Opcija za takmicenje sa drugima: <a target="_blank" href="https://play.typeracer.com/">Typeracer</a>. Navedene su samo neke od njih. Mozete pretraziti vise sa kljucnim rijecima <i>"touch typing"</i> ili <i>"fast typing"</i>.

U ovakvim igrama se uci i vjezba ispravan polozaj prstiju na tastaturi, kao i koji prst treba aktivirati koji karakter. Dobro je izdvojiti 10 - 15 minuta dnevno za vjezbanje slijepog kucanja. Osnove se brzo kupe, ali za mjesec dana ce ova vjestina biti na ozbiljnom nivou.

<figure>
<img src="/static/img/proper-finger-placement-for-keyboarding.png" alt="Keyboard scheme - which finger should trigger which key."> 
 <figcaption>Sema ispravanog kucanja na tastaturi.</figcaption>
</figure>

## Uredjivac izvornog koda

Ono sto takodje moze popraviti iskustvo pisanja koda je uredjivac izvornog koda (source-code editor) ili editor. Izbor glavnog alata za pisanje koda igra znacajnu ulogu u radnom toku i produktivnosti.

<!----------------
TODO: Installing basic software 

[]: <p class="tip right-tip" style="--span-row: 2;">Na temu alata za izradu web stranica vise u <a href="">ovom</a> tekstu.</p> 

---------------->

<i>Navedeni su samo neki od poznatijih besplatnih editora</i> otvorenog koda. Obicno dolaze sa odredjenim integrisanim funkcijama, ali se mogu instalirati dodatne po potrebi. Postoje razliciti stavovi na temu koji je najbolji, ali probajte zeljene editore kroz rad i zadrzati se na onom koji najvise odgovara.

### Sublime Text

Mnogi programeri ga koriste zbog <em>brzine</em> i jednostavnosti. Pri instalaciji ima osnovne integrisane funkcije za programiranje ali postoji veliki broj paketa za prosirivanje ovakvih funkcija koje je napravila zajednica. Potrebno je vrijeme da se zapamte precice i prilagodi sebi, ali jednom kada se ovo savlada moguce je uredjivati i pisati kod na najbrzi moguci nacin.


Od 2021. godine dostupan je <a target="_blank" href="https://www.sublimetext.com/download">Sublime Text 4</a> koji moze biti preuzet i koristen besplatno za evaluaciju. Do sada nije postojalo vremensko ogranicenje za ovu evaluaciju, ali u besplatnoj verziji se povremeno pojavi prozorcic koji pita da kupite licencu.

### VSCode

<a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a> je kompleksan program koji vise zauzima sto ga cini sporijim. Medjutim on je <em>jednostavniji za koristenje</em> i <em>bogat je funkcijama</em> odmah po instalaciji. Ovakav editor pruza manji otpor da bi se savladao neki editor.

### Brackets

<a target="_blank" href="https://brackets.io/">Brackets</a> je pogodan za web dizajnere i pocetnike front-end developere jer ima integrisane funkcije (poput Live Preview, Quick Edit, Quick View, Quick Docs, Code Hints za JavaScript, HTML i CSS).

Mislim da je <i>Live Preview</i> jedinstvena funkcija na ovom editoru, a koja moze olaksati usvanjanje CSS jezika. Live Preview vizuelno naznacuje elemente na kojima se primjenjuje blok koda na kom radite, a promjene u kodu su vidljive na stranici u pretrazivacu i prije nego se one zapamte. 

## Google i umjetnost pretrazivanja

Pretrazivanje je jedna od najvaznijih vjestina koje programer treba imati. Nemoguce je pamtiti sve o programiranju, a internet je najveća biblioteka koja postoji. Biti u mogucnosti brzo i efikasno pronaci informacije potrebne za rjesenje nekog problema je neprocjenjivo. Iz ovog razloga je pretrazivac takodje jedan od njegovih glavnih alata. 

+ <span><a href="https://www.youtube.com/watch?v=cEBkvm0-rg0">How to "Google It" like a Senior Software Engineer</a></span>
+ <span><a href="https://javascript.plainenglish.io/the-most-important-skill-every-programmer-should-know-googling-9fffd3ce3ddf">The Most Important Skill Every Programmer Should Know: Googling</a></span>
+ <span><a href="https://computers.tutsplus.com/tutorials/how-to-find-anything-online-with-advanced-search-techniques--cms-21154">How to Find Anything Online With Advanced Search Techniques</a></span>
+ <span><a href="http://www.googleguide.com/print/adv_op_ref.pdf">Google Cheat Sheet</a></span>

## Kako radi internet

Kratkorocno ova teorija nije krucijalna za pisanje koda, ali na duze staze je korisno razumijevanje onoga sto se desava u pozadini.

### Klijent i server

Sajt je samo <i>nekolicina fajlova</i> (koji mogu biti kod, slike, pdf dokumenati itd.) koja se nalazi na nekom racunaru. Drugo ime za taj racunar je <em>server</em> i povezan je na internet. Njegova svrha je da <i>usluzuje</i> klijente i odgovara na zahtjeve.
Kada korisnik klikne na neki link, on je zapravo poslao zahtijev odgovarajucem serveru da dobije pristup fajlovima kako bi pogledao sadrzaj kroz web pregledac (poput Chrome, Firefox, Opera ili Safarija). Web pregledac je ovdje <em>klijent</em>.

Trazeni server odgovara na zahtjev sa svim potrebnim fajlovima, te web pregledac (klijent) interpretira kod iz fajlova i voilà: na ekranu vidite ovu stranicu. <em>Internet se temelji na komunikaciji izmedju klijenta i servera.</em>

<figure style="max-width: 500px;">
<img src="/static/img/client-server.png" alt="Semantic and non-semantic HTML"> 
 <figcaption>Klijent i server komunikacija.</figcaption>
</figure>

Ipak opis klijenta i servera ne govori cijelu pricu. Ukljuceno je mnogo drugih dijelova. Ovdje pise vise o tome <a target="_blank" href="/posts/kako-radi-web/#ip-adrese-i-domene">Kako radi web?</a>.

## Struktura sajta

Sve navedeno u ovom dijelu teksta je jednostavno savladati kroz ucenje HTML, CSS i JavaScript jezika. Cilj je samo prikazati kako otprilike izgleda struktura nekog jednostavnog sajta i koncept sadrzaja koji ga cini.

<!----------------
TODO: 
[]: More advanced struktura fajlova i referiraj tamo kroz tip
---------------->

Pomenuli smo da je sajt neki broj fajlova sa kodom, stilovima, medijskim sadrzajem itd. Da bi ti fajlovi djelovali kao cjelina neophodno je sastaviti ih u logicnu i povezanu strukturu kako bi bili svjesni ostalog sadrzaja sa kojim treba komunicirati. Ovaj proces izgradnje web stranica se izvrsava na <i>lokalnom kompjuteru</i> da bi se uvjerili da web stranica izgleda i radi ispravno prije nego se otpremi na server.

U ovom <a target="_blank" href="/posts/sta-cini-web-sajt/#index.html-pocetna-web-stranica">tekstu</a> su ukratko predjeni pojedinacni segmenti koji najcesce cine sajt:

+ <span>`index.html` fajl i drugi HTML kod</span> 
+ Fajlovi sa stilovima i CSS kodom,
+ JavaScript,
+ slike i drugi medijski sadrzaj.

## Planiranje prije pisanja koda

<p class="tip right-tip" style="--span-row: 2;">Moze biti korisno kada vodite svoj projekat ili nemate dizajn, samo ideju.</p>
 
Iako su tehnicke vjestine presudne da bi se izgradio sajt, to nije prvi korak. Definisanje onoga sto je potrebno postici sa sajtom i planiranje dizajna se ne bi smjelo previdjeti. Iako naslov zvuci suvisno, mnogi projekti su neuspjesni zbog nedostatka ciljeva i usmjerenja, a ne nedostatka tehnickog znanja. Pitanja koja mogu pomoci pri definisanju cilja:

+ <span>Sta tacno zelim postici? 
Je najvaznije pitanje jer direktno odredjuje ostale odgovore. Napisati listu i poredati stavke po prioritetima.</span>
+ Kako sajt moze pomoci da postignem te ciljeve?
+ Sta je neophodno uraditi i kojim redoslijedom da bi se ti ciljevi ostvarili?

Ova vjezba ce pomoci pri odlucivanju kakav dizajn i koje funkcionalnosti implementirati, a koje izostaviti jer implementacija nije najoptimalnije usmjeravanje energije za postizanje tih ciljeva. Nekada je bolje iskoristiti postojecu tehnologiju ili druge alate. 

Jedna ideja moze kulminirati u beskonacan broj pitanja i dugu listu zadataka, ali nema potrebe odgovoriti na sva pitanja i zavrsiti sve zadatke. Vazno je imati jasnu ideju koja ce onda pojednostaviti odredjivanje prioriteta (20% zadataka daje 80% rezultata: <a target="_blank" href="https://en.wikipedia.org/wiki/Pareto_principle">Paretov princip</a>) i njihovo izvrsavanje. Jedna od vaznih i siroko primjenjivih vjestina je umjeti podijeliti zadatke na manje izvedive korake.

+ <span>Inspirisano sa <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Thinking_before_coding">How do I start to design my website?</a></span>
+ <span><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like">Ovdje</a> mozete pronaci osnove.</span>

<!-- 
TODO: 
[]: smjernice i alati koji olaksavaju dizajnerski dio posla laicima
Prije nego objavim post o osnovnim smjernicama i alatima koji mogu olaksati "dizajnerski" dio posla,
 -->

## Postaviti sajt na internet

<!-- 
TODO: 
[]: kako izabrati domen
 -->

Proces postavljanja sajta na internet najvise ovisi od usluge hosting provajdera, ali su po pravilu obicno potrebne 3 stavke koje su prethodno pomenute:

1. Sajt izradjen na lokalnom racunaru (<a target="_blank" href="/posts/sta-cini-web-sajt/"><i>fajlovi</i></a>).
2. Zakupljen prostor (<i>hosting</i>) je iznajmljen prostor za fajlove na web serveru od hosting kompanije. Na ovaj server se pohranjuju fajlovi, te ih on posluzuje klijentima na HTTP zahtjev (objasnjeni u <a target="_blank" href="/posts/kako-radi-web/">Kako radi web?</a> i <a target="_blank" href="/posts/HTTP/">osnove HTTP protokola</a>).
3. <a target="_blank" href="/posts/kako-radi-web#ip-adrese-i-domene"><i>Domena</i></a> kao jedinstvena adresa na kojoj korisnici mogu pronaci sajt.

Sajt mora biti smjesten na web serveru kako bi mu bilo moguce pristupiti sa bilo kog mjesta na svijetu. Postoji mnogo dobrih hosting provajdera i ne bi trebao biti problem pronaci jedan. Postoje i besplatne opcije sve dok se od njih ne ocekuje mnogo.

Neki hosting provajderi nude uslugu kupovine domene preko njih, ali je obicno isplativije kupiti je zasebno. Cesto se preporucuje <a target="_blank" href="https://www.namecheap.com/">Namecheap</a> kao jedna od povoljnijih opcija. Ukoliko najvisi nivo domene nije vazan, <a target="_blank" href="https://www.freenom.com/">Freenom</a> nudi besplatnu registraciju nekih (u ovom trenutku .tk, .ml, .ga, .cf, .gp). Bolje je registrovati poznatiju domenu najviseg nivoa (poput .com, .co, .org, .edu, .ba, .rs, .hr itd.) ukoliko se radi o ozbiljnijem sajtu. 

### Netlify 

Ako zelite jednostavnost — <a target="_blank" href="https://www.netlify.com/">Netlify</a> je jedan od odlicnih hostinga za licne staticne sajtove i pocetnike. Pocetni paket je besplatan i pri pohranjivanju fajlova prvi put na server, Netlify ce automatski podesiti nasumicnu domenu poput `awesome-muse-r78.netlify.com`. Moguce je promijeniti poddomenu u bilo koju koja je slobodna ili podesiti da sajt koristi onu koju ste kupili. Sledeci video ukratko vodi kroz smjesno jednostavne korake objavljivanja sajta na internet pomocu Netlify servisa:

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://www.youtube-nocookie.com/embed/tIZC8F9BZaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="tip right-tip" style="--span-row: 2;">Moguce je povezati Nelify sa vasim skladistem na GitHubu tako da svaka promjena koda u skladistu automatski predstavlja okidac za Netlify da azurira sajt sa novim kodom. Ukoliko je kod svakako smjesten u ovakvom skladistu, web developer ne mora ulaziti na Netlify stranicu i rucno prebacivati fajlove na server.</p>

Tema za neki drugi post 📝: Ovaj tip hostinga moze sluziti i sajtove koji su dinamicni, ali kroz JAMstack (JAMstack objedinjuje JavaScript, API-je, Markup) i serverless funkcije.

## Optimalan pristup ucenju

Znam da se tekst oduzio, ali se priblizava konkretnom dijelu gdje ceka najvise posla. <!-- Najkraci je jer na internetu vec postoji beskonacna kolicina kreiranog sadrzaja koji uci web tehnologije.--> Navedene teme mogu sacuvati vrijeme i ne mora sve biti nauceno iz licnih gresaka. Zato sada pricamo o tome kako pojednostaviti proces ucenja, sacuvati vrijeme i o konceptima kojih je dobro biti svjestan:

+ <span>Web development je ogroman labirint. Postoji mnogo vjestina koje je moguce nauciti, ali je vazno <em>fokusirati se na jednu vjestinu u odredjenom periodu</em>.</span>
+ <span>Medju prvim koracima je vazno <em>upoznati osnove</em>. One obicno pocetnika uce sintaksu i pravila tog jezika, ali i kako razmisljati kao programer. Precice su kontraproduktivne za vecinu (kao ucenje bootstrapa prije CSS-a ili Reacta prije JavaScripta). One znace brz pocetak, ali i naknadnu izgubljenost, ogranicene mogucnosti i trosenje vremenja.</span>
+ <span>Obratite paznju na svoj zivotni stil i kako on utice na nivo energije. <em>Primjeniti zdravije navike i nacin zivota moze ucenje uciniti znacajno optimalnijim</em> ali i popraviti kvalitet zivota. Obratite paznju na ishranu, fizicku aktivnost, spavanje, redovne pauze i vrijeme za sebe.</span><!-- TODO:[]: Potencijalna tema https://youtu.be/mw0LGzIKvoo?t=591 -->
+ <span>Lako je izgubiti se u tutorijalima i prelaziti sa teme na temu. Umjesto prelazenja svakog izvora po malo i prebacivanje na drugi ispocetka, <em>izabrati medij i ispratiti ga do kraja</em>. Ovako je jednostavnije izbjeci razvodnjenu paznju, duze zadrzati fokus i brze organizovano preci osnove. U redu je potraziti opsirnije objasnjenje negdje drugo (video, blog, dokumentacija, kurs, projekti).</span>
+ <span>Mnoge informacije necete nauciti napamet jer ih necete koristiti svakodnevno i to je u redu. Za razliku od onoga kako se uci u skoli, u programiranju je ucenje napamet beskorisno trosenje vremena. <em>Vazno je shvatiti koncept naucenog i biti svjestan da je nesto moguce</em>. Iz ovog razloga je korisno umjeti koristiti pretrazivac. Trik je znati kako pronaci potrebnu informaciju i kako je primjeniti.</span><!-- + <span>Jedna od vaznijih karakteristika za brzo usvajanje materije je <i>potpuni fokus</i>, medjutim izgradnja fokusa je proces i najbolje je poceti pomalo. U pocetku mozete odrediti male intervale fokusiranog rada i praviti <i>redovne pauze</i> te postepeno povecavati intervale (na najduze 60 - 90 minuta).</span> -->
+ <span>Programiranje je tesko i kada se um suoci sa preprekom, suzdrzite se od prebrzo donesenih zakljucaka o vlastitim sposobnostima. Odmorite se i radite nesto potpuno drugo. <i>Biranje aktivnosti koja ne zahtjeva mentalni napor</i> moze vise koristiti od forsiranja jer u toku difuznog rada mozak pravi veze izmedju detalja. Zato se nerijetko desi klik i pojave ideje u vezi potencijalnog rjesenja u toku pauze. Cak i kada to nije slucaj, um ce biti svjeziji i spremniji da se suoci sa preprekom.</span>
+ <span><em>Kultura transparentnosti i poniznosti</em> kroz iskrenost prema sebi i drugima u vezi svojih vjestina omogucuje otvorenost ka povratnim informacijama ukoliko nesto ili neko ukazuje na gresku. Internalizovanje povratnih informacija je prilika za napredak i ucenje.</span>

### Aktivno ucenje

Gledanje videa ne znaci da je nesto savladano. Drugim rijecima, posmatranjem utakmica ili kako se rade trikovi kartama ne znaci da je steceno znanje primjenljivo. Ucenje je djelotvornije sto je primijenjena metoda ucenja aktivnija. Zato je ono sto se najvise racuna — <em>opsjednutost primjenom nad teorijom</em>. Pokvarite kod, pravite greske, gradite projekte, rjesavajte probleme i u procesu koristite Google i Stack Overflow.<!-- Deliberate Practice-->

+ Dobra je ideja biti dijete igrati se sa kodom i izazvati gresku. 
+ Samostalno rekreirati projekat bez pomoci videa ili originalnog izvora. 
+ Kada pokusavate shvatiti i savladati nesto, pokusajte to objasniti/nauciti nekoga drugog (The Feynman Technique). 
+ Objasnjavanje svake linije koda kroz komentar je djelotvornije od pisanja biljeski na koje se najcesce necete ponovo vracati. 

Ove tehnike prisiljavaju dublje razmisljanje o temi i razumijevanje kako se dijelovi informacija uklapaju. Zabiljezite slabosti koje prepoznate i fokusirajte se na unaprijedjenje tih vjestina. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Don&#39;t practice until you get it right. Practice until you can&#39;t get it wrong.<a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/100daysofcode?src=hash&amp;ref_src=twsrc%5Etfw">#100daysofcode</a></p>&mdash; Palash (@palashv2) <a href="https://twitter.com/palashv2/status/1289797104072679426?ref_src=twsrc%5Etfw">August 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Ako vas zanima vise o tehnikama koje mozete koristiti za aktivnije ucenje, provjerite ovu <a target="_blank" href="/posts/tehnike-za-aktivno-ucenje/">vezu</a>. 

<!-- Sastoji se od nekoliko koraka 1 Ucenje. 2 Pokusati objasniti (djetetu) jednostavnim izrazima. U toku ovog koraka je neizbjezno pronaci rupe u znanju ali to je cilj. 3 Popuniti praznine. Pronaci informacije koje nedostaju i povezati ih sa ostalim znanjem. Svrha ovog koraka je fokusirati se na slabosti. 4 Pojednostaviti. Nije lako otkloniti nered i visak informacija, te objasniti nesto dovoljno jasno da i mala djeca mogu razumjeti.  4. korak prisiljava dublje razmisljanje o temi, razumijevanje kako se dijelovi informacija uklapaju i sprecava da previdimo praznine u znanju. Umjesto pukog kopiranja koda dobro je <em>kucati kod</em> kada pratite instrukcije: ovako vise obracamo paznju na detalje, sintaksu, kako se pise funkcija, kako se koriste parametri unutar funkcije, gdje ide tacka i zarez itd. Kroz prepisivanje se dobija uvid u to kako izgleda i kako se pise dobar kod. Korak dalje je probati <em>napisati kod rukom na papir</em>? Moguce je da cete pisati biljeske, ali vjerovatno cete primjetiti da nemaju znacaj za prisjecanje informacija kao sto su imale kada ste se pripremali za testove. U ovom slucaju <em>komentarisanje koda</em> je djelotvornije. Kada osjetite da pretjerano komentarisete, vjerovatno ne komentarisete dovoljno. <em>Pretjerujte</em>. Objasnite svaku linija koda i sta one rade. Nije vazno da li ste vi napisali tu liniju ili prepisali sa interneta. TODO:[]: Napisati clanak o tome zasto komentarisati kod []: Most people think the comments are there to explain the code to other coders, but it's the code that's there to explain the comments to the computer. Drugi razlog je to sto cete graditi sjajnu naviku od pocetka. Jedna od vaznih vrlina dobrog programera je komunicirati kroz komentare sto je moguce jasnije. Sa razvijanjem vjestina cete prepoznati sta je potrebno, a sta nije potrebno komentarisati. Pisanje dokumentacije (poput `README.md` dokumenta na GitHubu) ce takodje mnogo vise doprinjeti od biljeski. Pricamo o navikama koje i mnogi iskusniji programeri previde. One obezbjedjuju solidniji pocetak i naknadno laksi put pred sobom. Znacajno doprinose usvajanju i utemeljenju znanja (pored toga sto su vrlo privlacne poslodavcima i imate sta pokazati). Razlika izmedju komentara i dokumentacije je ta sto sa komentarima objasnjavate sta radi dio koda, a sa dokumentacijom, sa kojim tehnologijama, kako, sta radi vasa aplikacija, sta je njena svrha itd. naucite markdown TODO: []: napisi clanak o markdown-u []:izazovi za oblast koja se obradjuje--> 

## Kako poceti sa web tehnologijama

<i>Minimalni zahtjevi za solidnu pocetnu bazu je jasno razumijevanje HTML</i> (za definisanje strukture sadrzaja), <i>CSS</i> (za manipulisanje prikaza i stilizovanje sadrzaja) <i>i JavaScript jezika</i> (za programiranje web stranice i dodavanje dinamickih funckionalnosti).

### Balansiranje pasivnog i aktivnog ucenja

Medjutim, postoji nesto cega je dobro biti svjestan prije pocetka ucenja i zove se <i>tutorial hell</i>. Odnosi se na <em>beskrajnu</em> fazu u kom novi developeri prelaze tutorijale/kurseve/knjige, replikuju korake i kod radi ✨. Najcesce zbog osjecaja da je neophodno znati sve prije pocetka svog projekta, ali je u redu poceti ga i guglati sve nejasnoce. 

Problem nastaje u tome sto je instruktor prosao kroz otklanjanje gresaka, rjesavanje problema i prikazuje radnu verziju, te izostaje povratna informacija i svjest o znanju koje nedostaje. Lako je provesti mnogo vremena u ovoj fazi jer je jednostavnija, stice se osjecaj napretka iako se znanje povrsno usvaja i informacije brzo zaboravljaju. Nikada necete biti spremni i znati sve sto zaista treba dok ne uradite taj projekat.


Ograniciti fazu tako sto cete:

1. <span class="i">Kroz nju nauciti samo osnove</span>. U redu je preci neciji kurs ili drugi sadrzaj sa strukturom za pocetnike i tako ih usvojiti. Moguce je i odrediti vremenski period trajanja koji je otprilike potreban za ucenja osnova.

<span>

2. <span class="i">Nakon toga prestati gledati tutorijale</span> i uciti samo (po potrebi iz dokumentacija, clanaka, tutorijala, kurseva itd.) ako pokusavate da napravite nesto sa tim znanjem. </span>

Magija u tome je sto bi pri izgradnji vlastitog projekta trazili rjesenja na internetu, ona nekada ne bi radiila jer je vas kontekst drugaciji i to rjesenje ne razumijete dovoljno da bi ga prilagodili sebi. Zbog ovakve frustrirajuce, <i>nesrecne ali i tragicne</i> 💩 okolnosti ce biti neophodno citati dosadne dokumentacije ili potraziti neki drugi izvor za vise informacija da bi uspjesno implementirali rjesenje. U procesu se stice praksa i iskustvo koje izgradjuje razumijevanje kako odredjena tehnologija radi i kako je primjeniti u razlicitim uslovima. Na ovaj nacin se informacije bolje usvajaju i duze pamte sto ima znacajnu prednost nad oponasanjem gotovih koraka koje je instruktor pripremio za svoj projekat.

<span class="i">Poenta</span>: potrebno je znati zasto se neki izvor koristi, odnosno sta se pokusava izvesti sa tom informacijom i ne uciti cinjenice radi pukog ucenja kako bi one pocetnika odvele na visi nivo. Gdje je to primjenjivo u onom sto radis? Ako nemas odgovor, izmisli projekat za koji ce koristiti i voilà. <strong>Projekti ce zacementirati znanje</strong>.

### Izvori za ucenje

U ucenju vam mogu pomoci razni oblici sadrzaja. Izmedju ostalog i:

+ <span>Interaktivni sajtovi za ucenje web programiranja (<a target="_blank" href="https://www.freecodecamp.org/">freeCodeCamp.org</a> i <a target="_blank" href="https://www.w3schools.com/html/default.asp">w3schools</a> su besplatni, <a target="_blank" href="https://www.codecademy.com/catalog">codecademy</a> i <a target="_blank" href="https://scrimba.com/allcourses">scrimba</a> su freemium) koji sistematicno uvode nove tehnologije.</span>
+ <span>Kursevi i</span>
+ <span>Knjige cesto mogu biti fokusirane na jednu tehnologiju (kao <a target="_blank" href="https://eloquentjavascript.net/">Eloquent JavaScript</a> ili Head First HTML and CSS).</span>
+ <span>'Bootcamp' je brz i intenzivan program/kurs. Osmisljen je da pripremi pocetnike za prakticni rad i obuhvata obradjivanje osnova nekoliko tehnologija. Ali se cini da su najcesce usmjereni ka full stack developmentu). Jedan od popularnih koje cesto preporucuju je "The Complete 2022 Web Development Bootcamp", objavljen na Udemy platformi ili <a target="_blank" href="https://www.youtube.com/watch?v=Xm4BObh4MhI">ovaj</a> YouTube bootcamp od svega 12 sati od Ania Kubow. Oba usmjerena ka full stack developmentu.</span>

<a target="_blank" href="https://goalkicker.com/">Goalkicker</a> je izvor koji objavljuje <em>odlicne</em> besplatne biljeske za web tehnologije. 
<a target="_blank" href="https://ebookfoundation.github.io/free-programming-books/">free-programming-books</a> je jedan od najpopularnijih GitHub repozitorija. Na njemu cete pronaci knjige i druge oblike izvora o programiranju. Projekat je preuzeo Free Ebook Foundation, a poceo je sa listom besplatnih knjiga o programiranju na Stack Overflow platformi.
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn#where_to_start">MDN Web Docs</a> je dokumentacija koja ce vas voditi od pocetka kroz osnove web developmenta. <a href="https://htmlreference.io/">htmlreference.io</a> i <a href="_blank" href="https://cssreference.io/">cssreference.io</a> su vizuelni vodici i web stranice sa HTML i CSS referencama. <a href="https://javascript.info/" href="_blank">javascript.info</a> objasnjava JavaScript od osnovnih do naprednih tema sa jednostavnim i detaljnim objasnjenjima. 

<a target="_blank" href="https://www.frontendmentor.io/resources">Ovdje</a> mozete pronaci mnogo vise korisnih izvora, ali je nemoguce sve obuhvatiti. Svrha je prikazati razlicitost medija koji se mogu pronaci na internetu. Ne morate se ograniciti navedenim. Izaberite ono sto vam odgovara i ispratite do kraja.

<!-- TODO: resources and tools for frontend 
[]: search https://www.google.com/search?q=free+sources+to+learn+front+end&oq=free+sources+to+learn+front+end&aqs=chrome..69i57j69i64.5494j0j4&sourceid=chrome&ie=UTF-8
[]: https://javascript.plainenglish.io/7-useful-free-resources-for-front-end-developers-f427cf5d5392
 -->



Poslije teorije i osnova uprljati ruke sa:

### Projekti i izazovi

Uradite <em>projekat</em> sa tehnologijama u kojim zelite postati bolji. Nadjite nesto sto je vama zanimljivo ili zabavno i napravite uz pomoc interneta. Osim neprocjenjivog iskustva koje ce rastegnuti vjestine i utemeljiti znanje, ovo je prilika za popuniti portfolio. 

Raditi <em>izazove</em> kodiranja je korisno za sticanje iskustva, aktivno usvajanje naucenog i prosirivanje postojece baze znanja. Neki od sajtova sa zadacima i izazovima su <a target="_blank" href="https://www.frontendmentor.io/challenges">Frontend Mentor</a>, <a target="_blank" href="https://www.codementor.io/">codementor</a>, <a target="_blank" href="https://100dayscss.com/">100 Days of CSS</a>, <a target="_blank" href="https://javascript30.com/">30 Day Vanilla JS coding challenge</a>, <a target="_blank" href="https://tevko.github.io/practice/">Tevko Practice</a>, <a target="_blank" href="https://www.dailyui.co/">Daily UI</a>, <a target="_blank" href="https://www.codewell.cc/">Codewell</a>, <a target="_blank" href="https://devchallenges.io/">Dev Challenges</a>,  <a target="_blank" href="https://piccalil.li/category/front-end-challenges-club/?ref=blog.moeminmamdouh.com">Piccalilli</a>, <a target="_blank" href="https://www.hackerrank.com/">HackerRank</a>, <a target="_blank" href="https://www.codewars.com/">Codewars</a> itd. <a target="_blank" href="https://dribbble.com/">Dribble</a> ima veliku kolekciju dizajniranih web stranica koje mozete klonirati kroz kod. <a target="_blank" href="https://onepagelove.com/templates/html-templates">Onepagelove</a> je sajt sa razlicitim temama i sablonima web stranica kojih je moguce skinuti ili koristiti za inspiraciju. Potrazite "coding challenges" ili "coding wars". 

<p class="tip right-tip" style="--span-row: 2;"><a target="_blank" href="https://www.100daysofcode.com/">#100daysofcode</a> ce mozda zvucati kao zanimljiv trend.</p>

Preuzimanje jednostavnih <em>honorarnih projekata</em> (na platformama poput <a target="_blank" href="https://www.upwork.com/">Upwork</a>) znaci da cete biti prisiljeni dostaviti proizvod za novac i prisiljeni da ucite. 

<!-- TODO: https://frontloops.io/ not worth paying so:
[]:Frontloops challenges : https://github.com/zathio/frontloops-challenges
[]:CSS Zen Garden http://www.csszengarden.com/ 
[]: Interview questions: https://www.quora.com/What-is-required-to-learn-to-get-an-entry-level-Front-End-Development-Job-->


## Sirenje vjestina i posao

Sta nakon savladanih osnova kroz praktican rad? Na ovoj tacki mozete preuzeti neki jednostavniji honorarni posao ili aplicirati za poslove na puno radno vrijeme i kada jos uvijek ne ispunjavate sve navedene uslove oglasa. Neka mudrost kaze "<em>ako ispunjavate sve zahtjeve posla, mozda aplicirate za pogresan posao</em>". Pozicija bi trebala biti izazov za trenutne vjestine i na duze staze prosiriti sposobnosti aplikanta. 

Pokazite volju da ucite, pozitivan stav, prizemnost i svjesnost svojih ogranicenja. Budite iskreni u vezi onoga sto ne znate, pokazite da umijete shvatiti kako rijesiti problem, ali i da znate kada je problem prekomplikovan za vase mogucnosti. U takvim okolnostima se vise cijeni sposobnost da osoba trazi pomoc umjesto provede previse vremena na problemu.

Ukoliko ne dobijete posao, dobicete iskustvo intervjuisanja i povratnu informaciju iz kojih mozete zakljuciti na cemu poraditi. U toku potrage za poslom nastaviti unaprijedjivati vjestine kroz licne projekte, dodavati ih u portfolio i siriti bazu vjestina: <em><a target="_blank" href="https://roadmap.sh/frontend">Mapa puta</a></em> je dijagram za usmjeravanje programera koji nisu sigurni sta sledece savladati.

📝: Stranica je u razvoju.

<!-- ## Dodatni linkovi
[]:https://youtu.be/LTwFX-hitQo?t=255 : This is ALL you NEED to Become a Web Developer Today (2021)

[]:https://www.youtube.com/watch?v=n7JhRDRK3Gg : Stop Watching Coding Tutorials in 2021

[]:https://www.scribd.com/document/351240772/Vodi%C4%8D-Za-U%C4%8Denje-Web-Programiranja
or
https://web.archive.org/web/20170405201023/https://blog.petrovic.gr/2016/12/frontend-development-a-learning-guide/

[]: Path and videos: https://frontendmasters.com/learn/
 -->                                                                                                                                    