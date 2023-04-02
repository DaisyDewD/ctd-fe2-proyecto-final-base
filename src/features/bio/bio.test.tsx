/** @jest-environment jsdom */
import { screen } from "@testing-library/react";
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

    it("renders Bart Simpson's bio by default", async () => {
      expect(await screen.findByAltText("Bart Simpson")).toBeVisible();
      expect(await screen.findByText("Bart Simpson")).toBeVisible();
      expect(await screen.findByText(
          "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad."
        )
      ).toBeVisible();
    });

    it("enables Homer's button", () => {
      expect(screen.getByLabelText("HOMERO")).toBeEnabled();
    });
  });

  describe("when Homer's button is clicked", () => {
    beforeEach(async () => {
      render(<Bio />);
      await userEvent.click(screen.getByLabelText("HOMERO"));
    });

    it("renders Homer Simpson's bio", async () => {
      expect(await screen.findByText("Homero Simpson")).toBeVisible();
    });
  });
});

