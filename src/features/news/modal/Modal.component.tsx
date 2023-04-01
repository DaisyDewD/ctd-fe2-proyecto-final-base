import { FC } from "react";
import { useAppSelector } from "../../../app/hooks";
import SubscriptionButton from "../button/SubscribeButton.component";
import { INews } from "../types";
import {
  Card,
  Container,
  ContainerText,
  Description,
  Image,
  Title,
  CloseButton,
} from "./styled";
import { SubscribeImage, CloseButton as Close } from "../../../assets";

//Aquí el modal recibe las props de la noticia y el toggle
interface IProps {
  news: INews;
  toggle: () => void;
}

const Modal: FC<IProps> = ({ news, toggle }) => {
  const modalData = {
    title: "Suscríbete a nuestro Newsletter",
    image: SubscribeImage,
    description:
      "Suscríbete a nuestro newsletter y recibe noticias de nuestros characters favoritos.",
  };

  const { premiumIdList } = useAppSelector((state) => state.news);
  const isPremium = premiumIdList.some((id) => id === news.id);

  const src = isPremium ? news.image : modalData.image;
  const alt = isPremium ? "news-image" : "mr-burns-excelent";
  const title = isPremium ? news.title : modalData.title;
  const description = isPremium ? news.description : modalData.description;

  return (
    <Container>
      <Card>
        <CloseButton aria-label="close-modal" onClick={() => toggle()}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <Image src={src} alt={alt} />
        <ContainerText>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <SubscriptionButton news={news} />
        </ContainerText>
      </Card>
    </Container>
  );
};

export default Modal;
