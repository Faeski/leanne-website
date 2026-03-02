import { Certification } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image?: string;
}

export interface OverOnsContent {
  title: string;
  subtitle: string;
  story: {
    title: string;
    paragraphs: string[];
  };
  philosophy: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  team: {
    title: string;
    members: TeamMember[];
  };
  certifications: Certification[];
  schemaData: {
    name: string;
    description: string;
    url: string;
  };
}

export const overOnsContent: OverOnsContent = {
  title: "Over Instituut Leanne",
  subtitle: "Passie voor huidgezondheid sinds dag één",

  story: {
    title: "Ons Verhaal",
    paragraphs: [
      "Instituut Leanne ontstond vanuit een simpele overtuiging: iedereen verdient een gezonde huid en de kennis om die te onderhouden. Geen verkooppraatjes of dure wondermiddelen, maar eerlijk advies gebaseerd op wetenschap.",
      "Met jarenlange ervaring in de huidverzorging en voortdurende bijscholing blijven we op de hoogte van de nieuwste ontwikkelingen. We werken uitsluitend met merken en apparatuur waarvan de werking wetenschappelijk is bewezen.",
      "Ons instituut in Lanaken is ontworpen als een plek van rust. Hier neem je even afstand van de drukte en focus je volledig op jezelf. Met verwarmde stoelen, een zacht muziekje en een afgeschermde setting maken we van elke behandeling een moment dat helemaal om jou draait."
    ],
  },

  philosophy: {
    title: "Onze Aanpak",
    points: [
      {
        title: "Huidgezondheid, geen quick fixes",
        description:
          "We focussen op het verbeteren van je huidgezondheid van binnenuit. Dat kost tijd, maar levert duurzame resultaten.",
      },
      {
        title: "Eerlijk & transparant",
        description:
          "We zijn eerlijk over wat werkt en wat niet. Soms adviseren we om niets te doen, of verwijzen we door naar een dermatoloog.",
      },
      {
        title: "Wetenschap als basis",
        description:
          "We werken met ingrediënten en technieken waarvan de werking wetenschappelijk is aangetoond. Geen hypes of beloftes die we niet kunnen waarmaken.",
      },
      {
        title: "Persoonlijke aandacht",
        description:
          "Geen lopende band maar tijd en aandacht voor jou. We onthouden je verhaal en stemmen behandelingen af op jouw leven.",
      },
    ],
  },

  team: {
    title: "Het Team",
    members: [
      {
        name: "Leanne",
        role: "Oprichter & Huidspecialist",
        bio: "Met een achtergrond in huidtherapie en jarenlange ervaring is Leanne gespecialiseerd in Environ behandelingen en het opstellen van persoonlijke behandelplannen.",
        specialties: ["Environ", "Me-Line", "Huidanalyse"],
      },
      {
        name: "Sharon",
        role: "Laser Specialist",
        bio: "Sharon is gecertificeerd laser specialist met expertise in permanente ontharing. Zij zorgt voor veilige en effectieve laserbehandelingen voor alle huidtypes.",
        specialties: ["Diode Laser", "Laserontharing"],
      },
    ],
  },

  certifications: [
    {
      name: "Environ Gold Salon",
      issuer: "Environ Skin Care",
      year: 2020,
    },
    {
      name: "Me-Line Gecertificeerd",
      issuer: "Me-Line Professional",
      year: 2021,
    },
    {
      name: "iCoone Treatment Provider",
      issuer: "iCoone",
      year: 2022,
    },
    {
      name: "Laser Safety Certificate",
      issuer: "NVLB",
      year: 2023,
    },
  ],

  schemaData: {
    name: "Over Instituut Leanne",
    description:
      "Leer het team achter Instituut Leanne kennen. Gecertificeerde huidspecialisten in Lanaken.",
    url: `https://www.instituutleanne.be${ROUTES.OVER_ONS}`,
  },
};
