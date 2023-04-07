/** @jest-environment jsdom */
import { screen, waitFor, act } from "@testing-library/react";
import { render } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import Bio from "./Bio"; 


describe("Bio component", () => {
  describe("when it mounts", () => {
    beforeEach(() => {
      render(<Bio />);
    });

    test("renders Bart Simpson's bio by default", async () => {
      await waitFor(() => {
        expect(screen.getByAltText("Bart Simpson")).toBeVisible();
        expect(screen.getByText("Bart Simpson")).toBeVisible();
        expect(screen.getByText(
          "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
        )).toBeVisible();
      });
    });

    test("enables Homer's button", () => {
      expect(screen.getByRole("button", { name: "HOMERO" })).toBeEnabled();
    });
  });

  describe("when Homer's button is clicked", () => {
    beforeEach(async () => {
      render(<Bio />);
      await act(async () => {
        await userEvent.click(screen.getByRole("button", { name: "HOMERO" }));
      });
    });

    test("renders Homer Simpson's bio", async () => {
      expect(await screen.findByText("Homero Simpson")).toBeVisible();
    });
  });
});
