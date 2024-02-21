# Autobazár Aplikácia

Autobazár Aplikácia je webová aplikácia navrhnutá na prezeranie, filtrovanie, nákup a požičanie áut. Táto aplikácia kombinuje backend napísaný v jazyku Java pomocou Spring Boot a frontend vytvorený pomocou React.

## Spustenie aplikácie

1. **Nastavenie databázy:** Pred spustením aplikácie si nainštalujte a spustite MySQL server. Uistite sa, že databázové pripojenie je nakonfigurované správne v súbore `application.yaml`.

2. **Spustenie backendu:** Otvorte backendový projekt vo vašom vývojovom prostredí a spustite ho na porte `8080`. Backend je postavený na Spring Boot frameworku.

3. **Spustenie frontendu:** Otvorte frontendový projekt vo vašom vývojovom prostredí a spustite ho na porte `3000`. Frontend je postavený na React frameworku.

4. **Pripojenie k databáze:** Backend sa pripojí k MySQL databáze, kde sú uložené informácie o autách a komentároch.

## Funkcionality

- **Prezeranie áut:** Používatelia môžu prezerať zoznam áut dostupných na platforme.
- **Filtrovanie áut:** Používatelia môžu filtrovať autá podľa rôznych kritérií, ako sú značka, rok vydania atď.
- **Detaily auta:** Každé auto má vlastné detaily, kde používatelia môžu získať viac informácií a zobraziť komentáre od ostatných používateľov.
- **Pridávanie a editovanie áut:** Používatelia môžu pridávať a upravovať informácie o autách.
- **Pridávanie komentárov:** Používatelia môžu pridávať komentáre k jednotlivým autám a tiež ich mazať.
- **Registrácia a prihlásenie:** Aplikácia poskytuje možnosť registrácie a prihlásenia pre používateľov, aby mohli pridávať komentáre a upravovať informácie o autách.
  
## Bezpečnosť

- Heslá používateľov sú chránené pomocou hashovania pomocou `BCryptPasswordEncoder`.

## Branch "databaza"

V branchi "databaza" sa nachádza skript, ktorý naplní databázu testovacími údajmi. Tento skript môžete spustiť v MySQL serveri na inicializáciu databázy s preddefinovanými údajmi.

## Snippet 

### Prehľad áut
![IndexPage](https://github.com/marekpng/CarDealership/assets/76039661/e70dd42a-4eb9-4aa7-9c15-4f0193201f1f)

### Filtrovanie
![IndexPageFiltrovanie2](https://github.com/marekpng/CarDealership/assets/76039661/9a4aea95-051f-4600-8492-70f12dbd57ee)

### Detail auta
![CarDetail](https://github.com/marekpng/CarDealership/assets/76039661/bb449e27-6c0f-43a9-b5e4-e71f7736c476)

### Recenzie
![Recenzie](https://github.com/marekpng/CarDealership/assets/76039661/c6fe08e3-28c6-4c90-b63a-dd177e44655a)


### Toto bol krátky snippet, pre plnohodnotný používateľský zážitok si stiahnite celý projekt, verím že sa Vám bude páčiť ;)








