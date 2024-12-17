import { create } from "zustand";
import Excellence from "../../assets/Excellence.svg";
import Initiative from "../../assets/Initiative.svg";
import Sustainability from "../../assets/Sustainability.svg";
import Integrity from "../../assets/Integrity.svg";
import Focus from "../../assets/Focus.svg";
import Portfolio from "../../assets/Portfolio.svg";
import Corporate from "../../assets/Corporate.svg";
import Julian_Jarvis from "../../assets/Julian_Jarvis.svg";
import Peter_Montegriffo_KC from "../../assets/Peter_Montegriffo_KC.svg";
import Grahame_Jackson from "../../assets/Grahame_Jackson.svg";

export const useStore = create((set) => ({
  title: "Home",
  setTitle: (newTitle) => set({ title: newTitle }),

  HomeRef: null,
  aboutUsRef: null,
  ourTeamRef: null,
  investmentsRef: null,
  footerRef: null,

  setRefs: (refs) => set(refs),
}));

export const AboutusStore = create(() => ({
  aboutus: [
    {
      title: "Excellence",
      content:
        "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
      image: Excellence,
    },
    {
      title: "Initiative",
      content:
        "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
      image: Initiative,
    },
    {
      title: "Sustainability",
      content:
        "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
      image: Sustainability,
    },
    {
      title: "Integrity",
      content:
        "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
      image: Integrity,
    },
  ],
}));

export const InvestmentsStore = create(() => ({
  investments: [
    {
      id: 1,
      title: "Investment focus and strategy",
      image: Focus,
      description1:
        "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.",
      description2:
        "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
    },
    {
      id: 2,
      title: "Portfolio",
      image: Portfolio,
      description1:
        "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
      description2:
        "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
    },
    {
      id: 3,
      title: "Corporate social responsibility",
      image: Corporate,
      description1:
        "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
    },
  ],
}));

export const SlideStore = create(() => ({
 slides : [
    {
      id: 1,
      image: Julian_Jarvis,
      name: "Julian Jarvis",
      title: "Chairman, Founder and CEO",
      description1:
        "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience in the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
      description2: "",
    },
    {
      id: 2,
      image: Peter_Montegriffo_KC,
      name: "Peter Montegriffo KC",
      title: "",
      description1:
        "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.",
      description2:
        "Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.",
    },
    {
      id: 3,
      image: Grahame_Jackson,
      name: "Grahame Jackson",
      title: "",
      description1:
        "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.",
      description2:
        "He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
    },
  ]
}))
