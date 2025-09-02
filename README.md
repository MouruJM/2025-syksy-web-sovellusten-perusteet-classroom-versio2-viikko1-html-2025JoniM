# Web-sovellusten perusteet – Viikko 1 (Starter)

Tavoite: Toteuta kolme sivua ja navigaatio. Käytä **semanttisia elementtejä** ja noudata saavutettavuuden perusperiaatteita.

## Vaatimukset

- `index.html` + navigaatio, joka linkittää **table.html**, **form.html**, **image.html**.
- Jokaisella sivulla vain **yksi** `<h1>`.
- Kieli ja merkistö: `<html lang="fi">`, `<meta charset="UTF-8">`.
- **Taulukko**: rakenna datalle, ei layoutiin. Lisää `caption`, käytä `thead`/`tbody` (ja tarvittaessa `tfoot`).
- **Lomake**: `label for` + `id`, järkevät `type`-attribuutit (esim. `email`, `number`), `method` ja `action`, sekä `submit`-painike.
- **Kuva**: merkityksellinen `alt` (tai tyhjä `alt=""` dekoratiiviselle kuvalle).
- Pidä polut suhteellisina (esim. `./assets/...`).

## Kehitys ja testaus
Aja komennot yksitellen:
1. asentaa riippuvuudet täsmälleen package-lock.jsonin mukaan
npm ci

2. varmistaa, että selaimet ovat olemassa (nopea jos jo on aiemmin asennettu)
npx @playwright/test install

3. ajaa kaikki testit /tests -kansiosta
npm test

   

> Vinkkejä:
> - Aja yksittäinen testitiedosto: `npx playwright test tests/form.spec.ts`
> - Aja testejä nimen perusteella: `npx playwright test -g "lomake"`
> - Näytä HTML-raportti ajon jälkeen: `npx playwright show-report`

GitHub Actions ajaa samat testit automaattisesti jokaisesta `git push` -komennosta.

---

## Arviointi (max 10 p)

| Kriteeri | 0 pistettä | 1 piste | 2 pistettä |
|----------|------------|---------|------------|
| **Rakenne ja semantiikka** | Puuttuu oleellisia elementtejä (header/main/footer, h1 useampi tai puuttuu). | Perusrakenne osittain kunnossa. | Kaikki sivut noudattavat semanttista runkoa ja vain yksi `<h1>` per sivu. |
| **Navigaatio** | Navigaatio puuttuu tai ei toimi. | Navigaatio löytyy mutta linkit epätäydellisiä/virheellisiä. | Navigaatio löytyy kaikilta sivuilta ja kaikki linkit toimivat. |
| **Taulukko** | Taulukko puuttuu tai käytetty layoutiin. | Taulukko on olemassa mutta rakenne puutteellinen (ei caption/thead). | Taulukko on rakenteellisesti oikea (caption, thead, tbody). |
| **Lomake** | Lomake puuttuu tai ilman toimivia kenttiä. | Lomake on olemassa mutta puutteita (ei label-for, method/action puuttuu). | Lomake sisältää label–id sidonnat, järkevät type-arvot, method & action, sekä submit-painikkeen. |
| **Kuva & alt-teksti** | Kuva puuttuu tai ilman alt-tekstiä. | Kuva löytyy mutta alt-teksti puutteellinen. | Kuva löytyy ja alt-teksti on merkityksellinen tai tyhjä dekoratiiviselle kuvalle. |

**Pisteytys:** 5 kriteeriä × 2 p = **10 p**.

---

## Mitä palautetaan?

- `site/`-kansiossa olevat sivut (`index.html`, `table.html`, `form.html`, `image.html`, mahdollinen `assets/`).
- Push GitHubiin. CI (GitHub Actions) kertoo testien tilan (vihreä/punainen).

> Testit tarkistavat DOM-rakenteen ja saavutettavuuden perusasiat. Kun yllä olevat kohdat täyttyvät, testit menevät läpi sekä paikallisesti että CI:ssä.
