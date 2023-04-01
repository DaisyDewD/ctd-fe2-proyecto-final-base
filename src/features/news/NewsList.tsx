import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NewsCard from "./card/News-card.component";
import { getNewsList } from "./newsSlices";
import { Container, List, Title } from "./styled";

const NewsList = () => {
  const dispatch = useAppDispatch();
  const { newsList } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);

  return (
    <Container>
      <Title>Noticias de los Simpsons</Title>
      <List>
        {newsList?.map((news) => (
          <NewsCard key={`key_notice_${news.id}`} news={news} />
        ))}
      </List>
    </Container>
  );
};

export default NewsList;
