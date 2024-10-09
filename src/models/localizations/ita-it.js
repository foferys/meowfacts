const facts = [
  "Nel 1987 i gatti hanno superato i cani come primo animale domestico in America.",
  "I gatti che vivono insieme a volte si strofinano la testa a vicenda per dimostrare che non hanno intenzione di litigare. I gatti giovani lo fanno più spesso, specialmente quando sono eccitati.",
  "Le mamme gatte insegnano ai loro cuccioli ad usare la lettiera.",
  "Il modo in cui tratti i gattini nelle prime fasi della sua vita renderà i tratti della sua personalità più avanti nella vita.",
  "Contrariamente alla credenza popolare, il gatto è un animale sociale. Un gatto domestico reagirà e risponderà alla parola e sembra godi della compagnia umana.",
  "Se ben trattato, un gatto può vivere venti o più anni, sebbene la vita media di un gatto domestico è di 14 anni.",
  "La sterilizzazione di un gatto prolunga la sua vita di due o tre anni.",
  "I gatti, specialmente i gatti più anziani, si ammalano di cancro. Molte volte questa malattia può essere trattata con successo.",
  "I gatti non possono assaggiare i dolci.",
  "I gatti devono avere grassi nella loro dieta perché non possono produrli da soli.",
  "Alcune piante d'appartamento comuni velenose per i gatti includono: edera inglese, iris, vischio, filodendro e tasso.",
  "Tylenol e cioccolato sono entrambi velenosi per i gatti.",
  "Molti gatti non riescono a digerire correttamente il latte di mucca. Il latte e i latticini danno loro la diarrea.",
  "Il pasto medio di cibo per gatti è l'equivalente di circa cinque topi.",
  "I gatti possono contrarre la tenia mangiando le pulci. Questi vermi vivono all'interno del gatto per sempre o fino a quando non vengono rimossi con i farmaci. Si riproducono perdendo un legame dall'estremità dei loro lunghi corpi. Questo collegamento striscia fuori dall'ano del gatto e fa cadere centinaia di uova. Queste uova vengono ingerite dalle larve delle pulci e il ciclo continua. Anche gli esseri umani possono contrarre queste tenie, ma solo se mangiano pulci infette. I gatti con la tenia dovrebbero essere sverminati da un veterinario.",
  "I gatti possono contrarre la tenia mangiando i topi. Se il tuo gatto cattura un topo, è meglio togliergli il premio.",
  "Esiste una forma di AIDS nei gatti.",
  "Il colore dei punti nei gatti siamesi è legato al calore. Le aree fredde sono più scure.",
  "I gattini siamesi nascono bianchi a causa del calore all'interno dell'utero della madre prima della nascita. Questo calore impedisce al pelo dei gattini di scurirsi sulle punte.",
  "Le persone allergiche ai gatti sono in realtà allergiche alla saliva del gatto o al pelo di gatto. Se il gatto residente viene lavato regolarmente, le persone allergiche lo tollerano meglio.",
  "Gli studi ora dimostrano che l'allergene nei gatti è correlato alle loro ghiandole odorose. I gatti hanno ghiandole odorifere sul viso e alla base della coda. I gatti maschi interi generano più profumo. Se questa secrezione dalle ghiandole odorose è l'allergene, le persone allergiche dovrebbero tollerare al meglio le gatte sterilizzate.",
  "I gatti non pensano di essere piccole persone. Pensano che siamo grandi felini. Questo influenza il loro comportamento in molti modi.",
  "I gatti sono soggetti a malattie gengivali e alla carie dentale. Dovrebbero farsi pulire i denti dal veterinario o dal dentista per gatti una volta all'anno.",
  "Molte persone temono di contrarre una malattia protozoaria, la toxoplasmosi, dai gatti. Questa malattia può causare malattie nell'essere umano, ma, cosa più grave, può causare difetti alla nascita nel nascituro. La toxoplasmosi è una malattia comune, a volte diffusa attraverso le feci dei gatti. è causato più spesso dal consumo di carne cruda o al sangue. Le donne incinte e le persone con un sistema immunitario depresso non dovrebbero toccare la lettiera del gatto. A parte questo, non c'è motivo per cui queste persone debbano evitare i gatti.",
  "L'antenato di tutti i gatti domestici è il gatto selvatico africano che esiste ancora oggi.",
  "Nell'antico Egitto, uccidere un gatto era un crimine punibile con la morte.",
  "Nell'antico Egitto, le mummie erano fatte di gatti e topi imbalsamati venivano posti con loro nelle loro tombe. In un'antica città sono state trovate oltre 300.000 mummie di gatti.",
  "Nel Medioevo, durante la Festa di San Giovanni, i gatti venivano bruciati vivi nelle piazze.",
  "La prima mostra felina fu nel 1871 al Crystal Palace di Londra.",
  "Oggi ci sono circa 100 razze distinte del gatto domestico.",
  "Come gli uccelli, i gatti hanno una capacità di ricerca della casa che utilizza il suo orologio biologico, l'angolo del sole e il campo magnetico terrestre. Un gatto portato lontano dalla sua casa può farvi ritorno. Ma se i proprietari di un gatto si spostano lontano dalla sua casa, il gatto non riesce a trovarli.",
  "I gatti seppelliscono le loro feci per coprire le loro tracce dai predatori.",
  "I gatti dormono dalle 16 alle 18 ore al giorno. Quando i gatti dormono, sono ancora attenti agli stimoli in arrivo. Se colpisci la coda di un gatto addormentato, risponderà di conseguenza.",
  "Oltre ad annusare con il naso, i gatti possono annusare con un organo aggiuntivo chiamato organo di Jacobson, situato nella superficie superiore della bocca.",
  "Il cloro nell'acqua fresca del rubinetto irrita le parti sensibili del naso del gatto. Lascia riposare l'acqua del rubinetto per 24 ore prima di darla a un gatto.",
  "Abraham Lincoln amava i gatti. Ne aveva quattro mentre viveva alla Casa Bianca.",
  "Giulio Cesare, Enrico II, Carlo III e Napoleone avevano tutti paura dei gatti.",
  "I gatti hanno una media di 24 baffi, disposti in quattro file orizzontali su ciascun lato.",
  "La parola 'gatto' in varie lingue: francese: chat; tedesco: katze; italiano: gatto; spagnolo/portoghese: gato; yiddish: kats; maltese: qattus; svedese/norvegese: katt; olandese: kat; islandese: kottur; greco: catta; indù: katas; giapponese: neko; polacco: kot; ucraino: kotuk; hawiiano: popoki; russo: koshka; latino: cattus; egiziano: mau; turco: kedi; armeno: gatz; cinese: mao; arabo: biss; indonesiano: qitta; bulgaro: kotka; malese: kucing; tailandese/vietnamita: meo; rumeno: pisica; lituano: katinas; ceco: kocka; slovacco: macka; armeno: gatz; basco: catua; estone: kass; finlandese: kissa; swahili: paka.",
  "Le statistiche indicano che gli amanti degli animali negli ultimi anni hanno mostrato una preferenza per i gatti rispetto ai cani!",
  "Si può insegnare ai gatti a camminare al guinzaglio, ma ci vogliono molto tempo e pazienza per insegnarglielo. Più giovane è il gatto, più facile sarà per loro imparare.",
  "Fare le fusa non sempre significa felicità. Fare le fusa potrebbe significare che un gatto sta soffrendo terribilmente, come durante il parto. Il gattino fa le fusa alla madre per farle sapere che sta ricevendo abbastanza latte durante l'allattamento. Le fusa sono un processo di inspirazione ed espirazione, solitamente eseguito mentre la bocca è chiusa. Ma non preoccuparti, se il tuo gatto fa le fusa mentre lo accarezzi dolcemente e lo tieni vicino a te, quello è un gatto felice!",
  "La pianta dell'erba gatta contiene un olio chiamato epetalactone che fa per i gatti quello che fa la marijuana per alcune persone. Non tutti i gatti reagiscono ad esso, quelli che sembrano entrare in uno stato di trance. Una reazione positiva assume la forma del gatto che annusa l'erba gatta, quindi leccandolo, mordendolo, masticandolo, strofinandolo e rotolandolo ripetutamente, facendo le fusa, miagolando e persino saltando in aria.",
  "Di tutte le specie di gatti, il gatto domestico è l'unica specie in grado di tenere la coda verticalmente mentre cammina. Tutte le specie di gatti selvatici parlano orizzontalmente o infilata tra le gambe mentre camminano.",
  "Un gatto felice tiene la coda alta e ferma.",
  "Quasi il 10% delle ossa di un gatto si trova nella sua coda, e la coda è usata per mantenere l'equilibrio.",
  "Le famiglie di gatti di solito giocano meglio in numero pari. Gatti e gattini dovrebbero essere acquisiti in coppia quando possibile.",
  "Il cioccolato da forno è il cioccolato più pericoloso per il tuo gatto.",
  "Controlli le pulsazioni del tuo gatto all'interno della parte posteriore della coscia, dove la gamba si unisce al corpo. Normale per i gatti: 110-170 battiti al minuto.",
  "I giaguari sono gli unici grandi felini che non ruggiscono.",
  "Il campo visivo di un gatto è di circa 185 gradi.",
  "I gatti hanno preferenze individuali per graffiare superfici e angoli. Alcuni sono graffi orizzontali mentre altri esercitano i loro artigli verticalmente.",
  "Il Maine Coone è l'unica razza nativa americana a pelo lungo.",
  "Il Maine Coon è da 4 a 5 volte più grande del Singapura, la razza di gatto più piccola.",
  "Si pensa che i gatti soriani prendano il loro nome da Attab, un distretto di Baghdad, ora capitale dell'Iraq.",
  "Gli artigli retrattili sono un fenomeno fisico che distingue i gatti dal resto del regno animale. Nella famiglia dei felini, solo i ghepardi non possono ritrarre gli artigli.",
  "Non tutti i gatti si 'sballano' dall'erba gatta. La risposta o meno di un gatto dipende da un gene recessivo: n gene, nessuna gioia.",
  "Un gatto può correre a circa trentuno miglia all'ora.",
  "Nell'antico Egitto, quando un gatto di famiglia moriva, tutti i membri della famiglia si radevano le sopracciglia in segno di lutto.",
  "I gatti sono stati addomesticati per la metà del tempo in cui lo sono stati i cani.",
  "Si pensa che i baffi di un gatto siano una specie di radar, che aiuta un gatto a valutare lo spazio che intende attraversare.",
  "Un gatto può passare cinque o più ore al giorno a pulirsi da solo.",
  "Tutti i gatti hanno tre serie di peli lunghi sensibili alla pressione: baffi, sopracciglia e i peli tra i cuscinetti delle zampe.",
  "Sia gli umani che i gatti hanno regioni identiche nel cervello responsabili delle emozioni.",
  "Il cervello di un gatto è più simile al cervello di un uomo che a quello di un cane.",
  "Un gatto ha più ossa di un essere umano; gli umani ne hanno 206 e il gatto - 230.",
  "I gatti hanno 30 vertebre, 5 in più rispetto agli umani.",
  "I gatti sono l'animale domestico più popolare negli Stati Uniti: ci sono 88 milioni di gatti domestici e 74 milioni di cani.",
  "I gatti hanno più di 20 muscoli che controllano le loro orecchie.",
  "Un gruppo di gatti si chiama clowder.",
  "Ci sono gatti che sono sopravvissuti a cadute da oltre 32 piani (320 metri) sul cemento.",
  "I gatti dormono il 70% della loro vita.",
  "Un gatto è stato sindaco di Talkeetna, in Alaska, per 15 anni. Si chiama Stubbs.",
  "Un gatto si è candidato a sindaco di Città del Messico nel 2013.",
  "Nelle tigri e nei soriani, la parte centrale della lingua è ricoperta da spine rivolte all'indietro, usate per staccare e afferrare la carne.",
  "Quando i gatti fanno smorfie, di solito sono 'profumati'. Hanno un organo in più che, con un po' di controllo della respirazione, permette ai gatti di sentire il gusto dell'aria.",
  "I gatti non possono gustare la dolcezza.",
  "Possedere un gatto può ridurre di un terzo il rischio di ictus e infarto.",
  "Wikipedia ha una registrazione di un gatto che miagola perché perché no?",
  "Il gatto più grande del mondo misurava 48,5 pollici di lunghezza. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "Le prove suggeriscono che i gatti domestici esistono dal 3600 a.C., 2000 anni prima dei faraoni egizi.",
  "Le fusa di un gatto possono essere una forma di autoguarigione, in quanto possono essere un segno di nervosismo oltre che di appagamento.",
  "Allo stesso modo, la frequenza delle fusa di un gatto domestico è la stessa con cui i muscoli e le ossa si riparano.",
  "I gatti adulti miagolano solo per comunicare con gli umani.",
  "Il gatto più ricco del mondo vale 13 milioni di dollari dopo che il suo essere umano è morto e gli ha lasciato la sua fortuna.",
  "Il tuo gatto riconosce la tua voce ma si comporta in modo troppo figo per preoccuparsene (probabilmente perché lo sono).",
  "I gatti sono spesso intolleranti al lattosio, quindi smettila di dar loro il latte!",
  "I gatti possono saltare fino a sei volte la loro lunghezza.",
  "I gatti hanno contribuito all'estinzione di 33 specie diverse.",
  "I gatti possono bere l'acqua di mare per sopravvivere.",
];

const langName = "Italian",
  langISO = "ita",
  langLocale = "it",
  langLocaleName = "Italy";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
