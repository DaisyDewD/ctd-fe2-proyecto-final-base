/** @jest-environment jsdom */
import { renderHook, screen, waitFor } from "@testing-library/react";
import { store } from "../../../app/store";
import { render } from "../../../test-utils";
import Modal from "./Modal.component";
import { simulateElapsedTime } from "../utils";
import { INews } from "../types";
import { cleanPremiumList } from "../newsSlices";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import useToggle from "../../../hooks/useToggle";

const data: INews[] = [
  {
    id: 1,
    title: "Los Simpson 'predijeron' escasez de combustible",
    description: "La más reciente es una teoría de que un episodio de 2010...",
    image:
      "https://i2-prod.mirror.co.uk/incoming/article25142408.ece/ALTERNATES/s615b/0_SIMPSONSJPG.jpg",
    date: simulateElapsedTime(300000),
    isPremium: false,
    source:
      "https://www.mirror.co.uk/tv/tv-news/simpsons-fans-convinced-show-predicted-25140770",
  },
];

describe("Modal Component", () => {
  const mockOnTogglePremium = jest.fn(() => {
    renderHook(() => useToggle(false));
  });
  beforeEach(() => {
    store.dispatch(cleanPremiumList());
  });
  describe("When rendering a modal", () => {
    test("should render the close button", async () => {
      render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
      expect(await screen.findByAltText("close-button")).toBeVisible();
    });
    test("should render subscribe title when it's not premium", async () => {
      render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
      expect(
        await screen.findByText("Suscríbete a nuestro Newsletter")
      ).toBeVisible();
    });
    describe("When users wants to suscribe", () => {
      test("should render a subscribe button", async () => {
        render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
        expect(screen.getByLabelText("suscribe-button")).toBeInTheDocument();
      });
      test("should subscribe when the button is clicked", async () => {
        render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);

        await userEvent.click(await screen.findByLabelText("suscribe-button"));
        await waitFor(() => {
          expect(
            screen.getByText("Los Simpson 'predijeron' escasez de combustible")
          ).toBeVisible();
        });
        await waitFor(() => {
          expect(
            screen.getByText(
              "La más reciente es una teoría de que un episodio de 2010..."
            )
          ).toBeVisible();
        });
      });
      test("should render alert confirmation", async () => {
        render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
        expect(screen.getByLabelText("suscribe-button")).toBeInTheDocument();
        await userEvent.click(await screen.findByLabelText("suscribe-button"));

        jest.spyOn(window, "alert").mockImplementation(() => {});
        await waitFor(() => {
          expect(window.alert).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe("When users wants to close the modal", () => {
      test("should render a close modal button", async () => {
        render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
        expect(screen.getByLabelText("close-modal")).toBeInTheDocument();
      });
      test("should close modal after button was clicked", async () => {
        render(<Modal news={data[0]} toggle={mockOnTogglePremium} />);
        await userEvent.click(await screen.findByLabelText("close-modal"));
      });
    });
  });
});
