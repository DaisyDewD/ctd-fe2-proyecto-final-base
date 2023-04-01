import { FC } from "react";
import useToggle from "../../../hooks/useToggle";
import Modal from "../modal/Modal.component";
import { INews } from "../types";
import { toUpperCaseFirstLetterText } from "../utils";
import {
  ButtonReadMore,
  Container,
  Description,
  Image,
  Time,
  Title,
} from "./styled";

interface IProps {
  news: INews;
}
//separamos el card en un componente aparte
const NewsCard: FC<IProps> = ({ news }) => {
  const { isOpen, toggle } = useToggle();
  const title = toUpperCaseFirstLetterText(news.title);
  const shortDescription = news.description.substring(0, 100);

  return (
    <>
      <Container>
        <Image src={news.image} />
        <Title aria-label="modal-title">{title}</Title>
        <Time>Hace {news.date} minutos</Time>
        <Description aria-label="description">{shortDescription}</Description>
        <ButtonReadMore aria-label="read-more" onClick={() => toggle()}>
          Ver más
        </ButtonReadMore>
      </Container>
      {isOpen && <Modal news={news} toggle={toggle} />}
    </>
  );
};

export default NewsCard;
