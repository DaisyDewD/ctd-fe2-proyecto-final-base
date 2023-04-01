import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

//Aquí se define el tipo de la función que se va a usar en los componentes.
//En este caso se usa el tipo de la función que se define en el store.ts

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

