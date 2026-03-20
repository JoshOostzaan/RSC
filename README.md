# RealEstateCare - Inspectie Applicatie

## Over dit project

Dit project is een webapplicatie voor inspecteurs van RealEstateCare.
Met deze applicatie kunnen inspecteurs hun toegewezen inspecties bekijken, uitgevoerde inspecties terugzien en gebruik maken van een kennisbase met documenten.

Je kunt inloggen met admin (ww: admin123) of inspector1 (demo123)
De 2FA is gesimuleerd en elke zes cijfers zouden het moeten doen.
---

## Functionaliteiten

De applicatie bevat de volgende onderdelen:

* Login systeem
  Inloggen met gebruikersnaam, wachtwoord en een 2FA-code (simulatie)

* Dashboard
  Overzichtspagina met navigatie naar de verschillende onderdelen

* Toegewezen inspecties
  Overzicht van inspecties die nog uitgevoerd moeten worden

* Uitgevoerde inspecties
  Overzicht van afgeronde inspecties

* Kennisbase
  Documenten en handleidingen met een zoekfunctie

* Instellingen
  Basispagina voor gebruikersinstellingen

---

## Techniek

De applicatie is gebouwd met:

* Vue 3
* Vue Router
* Pinia (state management)
* JavaScript (ES6)
* CSS

---

## Data en API

De applicatie maakt gebruik van JSON-data.

* De data staat in een JSON-bestand
* Deze wordt opgehaald met fetch() (simulatie van een API)
* De logica voor het ophalen van data zit in een aparte service file

---

## Ontwerpkeuzes

Er is gekozen voor een vrij simpele en overzichtelijke structuur.

* Componenten zijn zo eenvoudig mogelijk gehouden
* Logica en data zijn gescheiden (service en componenten)
* De applicatie is redelijk makkelijk uit te breiden

---

## Vormgeving

De vormgeving is gebaseerd op de huisstijl van RealEstateCare.

* Hoofdkleur: #00aaa2
* Donkere tekstkleur: #141b1f
* Secundaire kleur: #475e6c

De interface is bewust vrij simpel gehouden zodat alles duidelijk blijft.

---

## Security

* Login is een simulatie en heeft geen echte backend
* Er wordt geen echte gebruikersdata opgeslagen
* Data wordt lokaal opgeslagen in de browser (localStorage)

---

## Usability en toegankelijkheid

Er is geprobeerd om de applicatie zo duidelijk mogelijk te houden:

* Logische navigatie
* Leesbare teksten
* Consistente layout
* Geen onnodig ingewikkelde interacties

---

## Installatie en gebruik

Om het project lokaal te draaien:

1. Installeer dependencies:
   npm install

2. Start de applicatie:
   npm run dev

3. Open in de browser:
   http://localhost:5173

---

## Live versie
