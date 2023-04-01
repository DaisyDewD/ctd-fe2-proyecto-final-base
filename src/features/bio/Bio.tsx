import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioDescription,
  BioImage,
  BioName,
  ButtonBio,
  ContainerBio,
  ContainerButtones,
} from "./styles";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (name: NombresSimpsons) => void = (name) =>
    setBioActiva(INFO_SIMPSONS[name]);

  const crearButtones = () => {
    return Object.keys(INFO_SIMPSONS).map((name: string) => (
      <ButtonBio
        aria-label={name}
        isActive={(bioActiva.id === name) as boolean}
        key={name as string}
        onClick={() => onClick(name as NombresSimpsons)}
      >
        {name}
      </ButtonBio>
    ));
  };

  return (
    <ContainerBio>
      <ContainerButtones>{crearButtones()}</ContainerButtones>
      <BioImage src={bioActiva.image} alt={bioActiva.name} />
      <div>
        <BioName>{bioActiva.name}</BioName>
        <BioDescription>{bioActiva.description}</BioDescription>
      </div>
    </ContainerBio>
  );
};

export default Bio;
