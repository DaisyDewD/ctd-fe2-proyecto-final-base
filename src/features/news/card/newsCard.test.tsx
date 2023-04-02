/** @jest-environment jsdom */
import { screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import NewsCard from "./News-card.component";
import { simulateElapsedTime } from "../utils";

const data = [
  {
    id: 1,
    title: "Los Simpson 'predijeron' escasez de combustible",
    description:
      "La más reciente es una teoría de que un episodio de 2010 del programa...",
    image:
      "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
    date: simulateElapsedTime(300000),
    isPremium: false,
    source:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
  },
];
describe("News component", () => {
  describe("When renders news section", () => {
    test("should render cards content", async () => {
      render(<NewsCard news={data[0]} />);
      expect(
        await screen.findByText(
          "Los Simpson 'predijeron' Escasez De Combustible"
        )
      ).toBeVisible();
      expect(
        await screen.findByText(
          "La más reciente es una teoría de que un episodio de 2010 del programa..."
        )
      ).toBeVisible();
      expect(await screen.findByText("Ver más")).toBeVisible();
    });
  });
  describe("When the user click on button 'ver mas'", () => {
    test("should open a modal", async () => {
      render(<NewsCard news={data[0]} />);
      await userEvent.click(await screen.findByText("Ver más"));
      expect(await screen.findByLabelText("modal-title")).toBeInTheDocument();
    });
  });
});
