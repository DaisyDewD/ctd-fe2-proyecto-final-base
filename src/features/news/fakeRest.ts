import { simulateElapsedTime } from "./utils";

export const data = [
  {
    id: 1,
    title: "Los Simpson 'predijeron' escasez de combustible",
    description: `La más reciente es una teoría de que un episodio de 2010 del programa,
    titulado "Lisa Simpson, esta no es tu vida", predijo la crisis de combustible en el Reino Unido.
    Tras los informes de escasez de más de 100.000 vehículos, muchos conductores han estado comprando
    gasolina por pánico, lo que ha llevado a estaciones vacías apenas unas horas después de abiertas.
    Esto ha sido comparado con la escena de Los Simpson en la que se puede ver a Homero llenando el 
    maletero de su coche con 1,000 galones de combustible para ganar un juguete promocional para su hija Maggie.`,
    image:
      "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
    date: simulateElapsedTime(300000),
    isPremium: false,
    source:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
  },
  {
    id: 2,
    title: "Los Simpsons se asocian con Marvel",
    description: `Los Simpson se han asociado con Marvel para lanzar un nuevo corto exclusivo de Disney+. 
    "The Good, The Bart y The Loki" estará disponible exclusivamente para ver por aquellos que están registrados 
    en el servicio de suscripción.`,
    image:
      "https://i2-prod.mirror.co.uk/incoming/article24436503.ece/ALTERNATES/n310p/0_DISNEY.jpg",
    date: simulateElapsedTime(1200000),
    isPremium: false,
    source:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-teams-up-marvel-exciting-24435616",
  },
  {
    id: 3,
    title:
      "Los Simpson mostraron a Richard Branson en el espacio en un episodio de 2014",
    description: `En un capítulo que se emitió por primera vez en 2014, un Richard
    Branson animado se reclinó y sonrió mientras flotaba en una nave espacial y admiraba algunas
    obras de arte. Naturalmente, los fanáticos de Los Simpson no tardaron mucho en
    expresar su sorpresa ya que la serie había previsto otro gran evento.`,
    image:
      "https://i2-prod.mirror.co.uk/incoming/article24547200.ece/ALTERNATES/s615b/0_EHP_CHP_160721The-Simpsons_53631JPG.jpg",
    date: simulateElapsedTime(1200000),
    isPremium: true,
    source:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-correctly-predicts-future-again-24547074",
  },
];
