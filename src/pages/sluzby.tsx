import { Layout } from "components/layout"
import { PageHeading } from "components/page-heading"
import SEO from "components/seo"
import React from "react"

export default () => (
  <Layout>
    <SEO title="Služby" />
    <PageHeading>{`Služby`}</PageHeading>
    <ol>
      <li>SOUDNÍ PŘEKLADY OVĚŘENÉ A NEOVĚŘENÉ DO/Z ANGLICKÉHO JAZYKA</li>
      <p>
        Překlady oficiálních dokumentů se soudním ověřením se provádí na základě jmenování soudním překladatelem, tj.
        soudním znalcem, v souladu se zákonem č. 36/1967 Sb., o znalcích a tlumočnících, Krajským soudem v Českých
        Budějovicích dne 4.12.2018, Spr. č. 1167/2018.:
      </p>
      <p>
        Diplomy, vysvědčení, úřední zprávy/protokoly a prohlášení, potvrzení o pracovní neschopnosti (tzv. neschopenky),
        matriční a rozvodové listiny, plné moci, lékařské zprávy a posudky o zdravotním stavu, oddací list, úmrtní list,
        rodný list, výpis z rejstříku trestů, zprávy auditora, osvědčení, atesty, certifikáty, soudný rozsudky, doklady
        a potvrzení o trvalém bydlišti/účasti na penzijním a nemocenském pojištění, abstrakty bakalářských, diplomových
        a disertačních prací, korektury bakalářských, diplomových a disertačních prací psaných v anglickém jazyce.
      </p>
      <li>TLUMOČENÍ DO/Z ANGLICKÉHO JAZYKA</li>
      <ul>
        <li>Simultánní – tlumočení souběžné s projevem řečníka pomocí tlumočnické techniky (kabina)</li>
        <li>Konsekutivní – tlumočení následné, kdy je projev řečníka tlumočen po úsecích bez doprovodné techniky</li>
        <li>
          Simultánní (tzv. chuchotage) [šošotáž] – tlumočení šeptem, kdy se střídá konsekutivní se simultánním bez
          techniky, max. dva posluchači
        </li>
      </ul>
      <li>PROFESNÍ SPECIALIZACE</li>
      <p>
        Jaderná energetika, stavební výroba - vodohospodářské stavby, elektro (slaboproud, silnoproud), účetní a daňová
        problematika, sportovní terminologie míčových her pro profesionály i amatéry (workshopy a semináře pro trenéry
        míčových her (zejm. volejbal/beach volejbal)
      </p>
      <li>OSTATNÍ</li>
      <ul>
        <li>Individuální příprava na státní závěrečné zkoušky na vysoké škole</li>
        <li>Individuální příprava na přijímací řízení na střední a vysokou školu</li>
        <li>Individuální příprava na maturitní zkoušku</li>
        <li>Individuální eventuelně skupinová výuka jazyků pro děti a dospělé</li>
        <li>Individuální příprava na Cambridge Exams (PET, FCE, CAE)</li>
        <li>Organizace společenských a teambuildingových firemních akcí s tlumočníkem anglického jazyka</li>
        <li>Tlumočení v autoškole a při testech a závěrečných zkouškách</li>
        <li>Průvodcovské služby</li>
        <li>Letní škola angličtiny hrou – příměstský tábor pro děti 6 – 11 let</li>
      </ul>
    </ol>
  </Layout>
)
