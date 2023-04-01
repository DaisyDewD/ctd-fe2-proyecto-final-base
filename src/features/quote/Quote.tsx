import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Button, Input, AuthorQuote, ContantainerQuote, TextQuote } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getStateQuote, cleanQuote, getStateOfRequest, getQuoteFromAPI } from "./quoteSlice";
import { getMessage } from "./utils";

function Quote() {
  const [inputValue, setInputValue] = useState("");
  const { quote = "", character = "" } =
    useAppSelector(getStateQuote, shallowEqual) || {};
  const requestState = useAppSelector(getStateOfRequest);

  const dispatch = useAppDispatch();

  const onClickGetQuote = () => dispatch(getQuoteFromAPI(inputValue));

  const onClickDelete = () => {
    dispatch(cleanQuote());
    setInputValue("");
  };

  return (
    <ContantainerQuote>
      <TextQuote>{getMessage(quote, requestState)}</TextQuote>
      <AuthorQuote>{character}</AuthorQuote>
      <Input
        aria-label="Author Quote"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      <Button
        aria-label={inputValue ? "Obtener Cita" : "Obtener cita aleatoria"}
        onClick={onClickGetQuote}
      >
        {inputValue ? "Obtener Cita" : "Obtener cita aleatoria"}
      </Button>
      <Button aria-label="Borrar" onClick={onClickDelete} secondary={true}>
        Borrar
      </Button>
    </ContantainerQuote>
  );
}
export default Quote;
