import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; //el Provider dispara las acciones. 
import { RootState } from "./app/store";
//import quoteReducer from "./features/quote/quoteSlice";
//import newsReducer from "./features/news/newsSlices";

//1.1 Creamos un customRender agregando el Provider y el store
const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        /* quote: quoteReducer,
        news: newsReducer, */
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>;
  } = {}
) => {
  const Wrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => <Provider store={store}>{children}</Provider>;

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

export * from "@testing-library/react";

export { customRender as render };
