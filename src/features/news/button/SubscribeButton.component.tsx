import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addPremiumSubscription } from "../newsSlices";
import { INews } from "../types";
import { SubscriptionButton } from "./styled";

//separamos el botón de suscripción en un componente aparte

const SubscribeButton: FC<{ news: INews }> = ({ news }) => {
  const dispatch = useAppDispatch();
  const { premiumIdList } = useAppSelector((state) => state.news);

  const onClickSubscribe = () => {
    dispatch(addPremiumSubscription(news.id));
    setTimeout(() => {
      alert("¡Suscrito!");
    }, 1000);
  };

  return (
    <>
      {!premiumIdList.some((id) => id === news.id) && (
        <SubscriptionButton aria-label="suscribe-button" onClick={onClickSubscribe}>
          Suscríbete
        </SubscriptionButton>
      )}
    </>
  );
};

export default SubscribeButton;
