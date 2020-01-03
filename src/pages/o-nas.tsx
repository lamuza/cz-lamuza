import { Layout } from "components/layout"
import { PageHeading } from "components/page-heading"
import { Paragraph } from "components/paragraph"
import { SectionHeading } from "components/section-heading"
import SEO from "components/seo"
import React from "react"

export default () => (
  <Layout>
    <SEO title={"O nás"} />
    <PageHeading>{`O nás`}</PageHeading>
    <SectionHeading>{`KDO JSME`}</SectionHeading>
    <Paragraph>
      {`Jsme firma, která je na trhu v České republice aktivní již od poloviny roku 1998. Zabýváme se komunikací, tj. zejména překladatelstvím a tlumočnictvím do a z anglického jazyka. S anglickým jazykem aktivně pracujeme, aktivně ho učíme a vlastně pro angličtinu i dýcháme. Našimi dalšími pracovními jazyky jsou angličtina, ruština a slovenština (EN-RU-SK).`}
    </Paragraph>
    <Paragraph>
      {`Kromě těchto aktivit jsme rovněž vyhledávaní učitelé a jazykoví lektoři nejen pro oblast obecného anglického jazyka, ale i v jeho dílčích odborných sférách, např. Business English, English for Human Resources, Technical English, English for Presentations, apod. Pracujeme průřezově se všemi věkovými kategoriemi, od dospělých až po děti. Specializujeme se, totiž, na individuální výuku v modelu student x lektor (jeden na jednoho nebo angl. face-to-face, F2F). Po letech zkušeností jsme si vyhodnotili, že metoda F2F je sice stále metoda pasivní výuky cizímu jazyku, avšak student musí zůstat stále v aktivní roli. Je pro lektora cenným sparing partnerem a student se bez „aktivní komunikace“ neobejde.`}
    </Paragraph>
    <Paragraph>
      {`Učíme naše studenty nejenom všem jazykovým dovednostem, tj. klasickým jako je např. gramatika, slovní zásoba, výslovnost, infinitivní vazby sloves, apod., ale učíme je v cizí řeči komunikovat i jinak.`}
    </Paragraph>
    <Paragraph>{`UČÍME JE SE NEBÁT KOMUNIKOVAT S CHYBAMI!`}</Paragraph>
    <Paragraph>{`UČÍME JE BAVIT SE UČENÍM CIZÍCH ŘEČÍ!`}</Paragraph>
    <Paragraph>{`UČÍME JE MYSLET JINAK!`}</Paragraph>
    <Paragraph>{`UČÍME JE, JAK JE DŮLEŽITÉ MÍTI „SILNÉ SEBEVĚDOMÍ“ A I PŘES CHYBY SE NENECHAT ODRADIT!`}</Paragraph>
    <Paragraph>{`UČÍME JE, ŽE JAKÁKOLI CIZÍ ŘEČ JE ZÁBAVA!`}</Paragraph>
    <Paragraph>{`UČÍME JE JINAK V CIZÍ ŘEČI VYSLOVOVAT!`}</Paragraph>
    <Paragraph>{`UČÍME JE OBČAS I LOGOPEDII! 🙂`}</Paragraph>
    <Paragraph>{`UČÍME JE MÍT VŮBEC Z UČENÍ RADOST A NE STRES!`}</Paragraph>
    <Paragraph>
      {`I my sami se, totiž, při učení chceme bavit. Je nám jasné, že bez ohledu na věk, pohlaví, či intelektuální vyspělost jedince je znalost cizích jazyků k nezaplacení. Stále dokola nás to systémově vrací k jednomu jedinému klišé a tj. „KOLIK UMÍŠ JAZYKŮ, TOLIKRÁT JSI ČLOVĚKEM“. Se znalostí byť jen jediného cizího jazyka se ten další prostě vnímá a učí podstatně snáze. Proto jazyk vnímáme komplexně jako globální prostředek komunikace. Učíme se spolu s našimi studenty. Vždyť je to vlastně párová aktivita. Nikdo by na to neměl zůstat sám!`}
    </Paragraph>
  </Layout>
)
