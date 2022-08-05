document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf dodat od strane JavaScript_a";

// Ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo. Cekamo septembar za nesto svezije vreme");

// Tipovi podataka u u JavaScript_u:
//Za proveru tipa varijable (promenljiva) u JavaScript_u se koristi
//typeof operator
//Postoje:
//   1. Primitivni (Primitivne) tipovi podataka:
//   2. Ne Primitivni (Non-Primitivne) tipovi podataka:

// 1.1 String - Niz karaktera koji se upisuje unutar navodnika.
//              On moze biti zapisan unutar obicnih ili duplih navodnika (nije bitno)
//              Strongovi mogu biti bilo koji karakteri A-Z, 0-9
//      Zapisivanje stringa:
// ("Danas je toplo.");
// "Danas je padala kisa."`Danas je padao sneg.`; //Template literals
// String("Danas je duvao jak vetar.");

//1.2 Number - Predstavlja broj u JavaScript_u.
//             On moze biti zapisan sa decimalom ili bez nje.
//             JavaScript ne razlikuje tipove kod brojeva, vez su svi brojevi Number tipa.
//     Zapisivanje brojeva:
10;
0 - 78;
1.14;
0.999978546;
Number(45);

// 1.3 BigInt - Ovaj tip podatka nam sluzi za skladiste brojeva cija vrednost
//              prelazi granicu Number tipa podatka.
//    Zapisivanje velikih brojeva:

BigInt(9451666168498948489899898989489);

// 1.4 Boolean - Predstavlja logicki entitet i on moze imati dve vrednosti:
//              1. true;
//              2. false.
//              Najveca primena ovog tipa podataka se nalazi u kondcionalima,
//              tj. u slucajevima ispitivanja da li je odredjeni uslov zadovoljan ili ne.
//     Zapisivanje Boolean_a:
// Boolean("Odredjeni uslov") => kao izlaz dobijamo true ili false

// 1.5 undefined - Kada odredjenu promenljivu deklarisemo ali joj ne dodelimo vrednost,
///                tada underfined predstavlja i vrednost i tip za tu promenljivu.
// 1.6 null - Tip podatka null se javlja sa nepostojecu ili promenljivu koja
//            nije validna.

// 1.7 Symbol - To je novi tip podatka u JavaScript_u.
//              Koristi se za anonimne i jedinstvene vrednosti.

Symbol("Kko je bilo vreme?");
