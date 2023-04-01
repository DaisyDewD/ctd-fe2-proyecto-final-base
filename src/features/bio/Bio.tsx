import { useState } from "react";
import { SimpsonsNames, INFO_SIMPSONS } from "./constants";
import { BioDescription, BioImage, BioName, BioButton, BioContainer, ContainerButtons } from "./styles"; //Estilos dinámicos


const Bio = () => {
  const [bioActive, setBioActive] = useState(
    INFO_SIMPSONS[SimpsonsNames.BART]
  );

  const onClick: (name: SimpsonsNames) => void = (name) =>
    setBioActive(INFO_SIMPSONS[name]);

  const createButtons = () => {
    return Object.keys(INFO_SIMPSONS).map((name: string) => (
      <BioButton
        aria-label={name}
        isActive={(bioActive.id === name) as boolean}
        key={name as string}
        onClick={() => onClick(name as SimpsonsNames)}
      >
        {name}
      </BioButton>
    ));
  };

  return (
    <BioContainer>
      <ContainerButtons>{createButtons()}</ContainerButtons>
      <BioImage src={bioActive.image} alt={bioActive.name} />
      <div>
        <BioName>{bioActive.name}</BioName>
        <BioDescription>{bioActive.description}</BioDescription>
      </div>
    </BioContainer>
  );
};

export default Bio;
