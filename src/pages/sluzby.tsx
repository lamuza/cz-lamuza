import { Layout } from "components/layout"
import { PageHeading } from "components/page-heading"
import { Paragraph } from "components/paragraph"
import { SectionHeading } from "components/section-heading"
import SEO from "components/seo"
import React from "react"

export default () => (
  <Layout>
    <SEO title="Služby" />
    <PageHeading>{`Služby`}</PageHeading>

    <SectionHeading>{`SOUDNÍ PŘEKLADY OVĚŘENÉ A NEOVĚŘENÉ DO/Z ANGLICKÉHO JAZYKA`}</SectionHeading>
    <Paragraph>
      {`Překlady oficiálních dokumentů se soudním ověřením se provádí na základě jmenování soudním překladatelem, tj.
        soudním znalcem, v souladu se zákonem č. 36/1967 Sb., o znalcích a tlumočnících, Krajským soudem v Českých
        Budějovicích dne 4.12.2018, Spr. č. 1167/2018.:`}
    </Paragraph>
    <Paragraph>
      {`Diplomy, vysvědčení, úřední zprávy/protokoly a prohlášení, potvrzení o pracovní neschopnosti (tzv. neschopenky),
        matriční a rozvodové listiny, plné moci, lékařské zprávy a posudky o zdravotním stavu, oddací list, úmrtní list,
        rodný list, výpis z rejstříku trestů, zprávy auditora, osvědčení, atesty, certifikáty, soudný rozsudky, doklady
        a potvrzení o trvalém bydlišti/účasti na penzijním a nemocenském pojištění, abstrakty bakalářských, diplomových
        a disertačních prací, korektury bakalářských, diplomových a disertačních prací psaných v anglickém jazyce.`}
    </Paragraph>

    <SectionHeading>{`TLUMOČENÍ DO/Z ANGLICKÉHO JAZYKA`}</SectionHeading>
    <Paragraph>{`Simultánní – tlumočení souběžné s projevem řečníka pomocí tlumočnické techniky (kabina)`}</Paragraph>
    <Paragraph>
      {`Konsekutivní – tlumočení následné, kdy je projev řečníka tlumočen po úsecích bez doprovodné techniky`}
    </Paragraph>
    <Paragraph>
      {`Simultánní (tzv. chuchotage) [šošotáž] – tlumočení šeptem, kdy se střídá konsekutivní se simultánním bez
      techniky, max. dva posluchači`}
    </Paragraph>

    <SectionHeading>{`PROFESNÍ SPECIALIZACE`}</SectionHeading>
    <Paragraph>
      {`Jaderná energetika, stavební výroba - vodohospodářské stavby, elektro (slaboproud, silnoproud), účetní a daňová
        problematika, sportovní terminologie míčových her pro profesionály i amatéry (workshopy a semináře pro trenéry
        míčových her (zejm. volejbal/beach volejbal)`}
    </Paragraph>

    <SectionHeading>{`OSTATNÍ`}</SectionHeading>
    <Paragraph>{`Individuální příprava na státní závěrečné zkoušky na vysoké škole`}</Paragraph>
    <Paragraph>{`Individuální příprava na přijímací řízení na střední a vysokou školu`}</Paragraph>
    <Paragraph>{`Individuální příprava na maturitní zkoušku`}</Paragraph>
    <Paragraph>{`Individuální eventuelně skupinová výuka jazyků pro děti a dospělé`}</Paragraph>
    <Paragraph>{`Individuální příprava na Cambridge Exams (PET, FCE, CAE)`}</Paragraph>
    <Paragraph>{`Organizace společenských a teambuildingových firemních akcí s tlumočníkem anglického jazyka`}</Paragraph>
    <Paragraph>{`Tlumočení v autoškole a při testech a závěrečných zkouškách`}</Paragraph>
    <Paragraph>{`Průvodcovské služby`}</Paragraph>
    <Paragraph>{`Letní škola angličtiny hrou – příměstský tábor pro děti 6 – 11 let`}</Paragraph>
  </Layout>
)
