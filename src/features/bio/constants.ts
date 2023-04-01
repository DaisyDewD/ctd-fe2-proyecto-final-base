import {
  BartImage,
  HomerImage,
  LisaImage,
  MaggieImage,
  MargeImage,
} from "../../assets";

export enum SimpsonsNames {
  BART = "BART",
  LISA = "LISA",
  MAGGIE = "MAGGIE",
  MARGE = "MARGE",
  HOMER = "HOMERO",
}

export const INFO_SIMPSONS = {
  [SimpsonsNames.BART]: {
    id: SimpsonsNames.BART,
    name: "Bart Simpson",
    description: `A los diez años, Bart es el hijo mayor y único varón de Homero y Marge,
    y el hermano de Lisa y Maggie.
    Los rasgos de carácter más prominentes y populares de Bart son su picardía,
    rebeldía y falta de respeto a la autoridad.`,
    image: BartImage,
  },
  [SimpsonsNames.HOMER]: {
    id: SimpsonsNames.HOMER,
    name: "Homero Simpson",
    description: `Como jefe de la familia,
    Homero y su esposa Marge tienen tres hijos: Bart, Lisa y Maggie.
    Homero trabaja en la planta de energía nuclear de Springfield como inspector de seguridad.
    Homero encarna muchos estereotipos de la clase trabajadora estadounidense:
    es obeso, inmaduro, franco, agresivo, calvo, perezoso, ignorante,
    poco profesional y adicto a la cerveza, a la comida chatarra y a la televisión`,
    image: HomerImage,
  },
  [SimpsonsNames.LISA]: {
    id: SimpsonsNames.LISA,
    name: "Lisa Simpson",
    description: `Lisa es vegetariana, una fuerte ecologista, feminista y budista.
    El personaje de Lisa se transforma muchas veces a lo largo del programa: se convierte en
    vegetariana en la temporada 7 y se convierte al budismo en la temporada 13.
    Fuerte liberal y activista por la paz, la igualdad y el medio ambiente,
    Lisa aboga por una variedad de causas políticas que generalmente la ponen
    contra la mayoría de la gente en Springfield.`,
    image: LisaImage,
  },
  [SimpsonsNames.MAGGIE]: {
    id: SimpsonsNames.MAGGIE,
    name: "Maggie Simpson",
    description: `Maggie es la hija menor de Homero y Marge, y la hermana menor de Bart.
    y Lisa. A menudo se la ve chupando su chupete rojo y, cuando camina,
    se tropieza con la ropa y se cae de cara. Al ser un bebé, aún no ha aprendido a hablar.`,
    image: MaggieImage,
  },
  [SimpsonsNames.MARGE]: {
    id: SimpsonsNames.MARGE,
    name: "Marge Simpson",
    description: `Marge es la madre de la familia Simpson. Con su marido Homero, tiene tres
    niños: Bart, Lisa y Maggie. Marge es la fuerza moralista en su familia y
    a menudo emplea una voz firme en medio de las travesuras de su familia, tratando de
    mantener el orden en la casa Simpson. A menudo se la representa como la típica
    madre de televisión y a menudo se incluye en las listas de las mejores "mamá de televisión".`,
    image: MargeImage,
  },
};
