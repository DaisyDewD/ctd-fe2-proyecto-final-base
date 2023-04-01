/** @jest-environment jsdom */
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import { server } from "../../tests/mocks/server";
import "whatwg-fetch";
import Quote from "./Quote";
import "@testing-library/jest-dom";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Quote component", () => {
  describe("When rendering a random quote", () => {
    test("should render the quote component with input and buttons", async () => {
      render(<Quote />);
      expect(
        screen.getByPlaceholderText("Ingresa el nombre del autor")
      ).toBeVisible();
      expect(screen.getByLabelText("Obtener cita aleatoria")).toBeEnabled();
      expect(screen.getByLabelText("Borrar")).toBeEnabled();
    });

    test("should click the random quote button and fetch the data", async () => {
      render(<Quote />);
      await userEvent.click(screen.getByLabelText("Obtener cita aleatoria"));
      expect((await screen.findAllByText("LOADING...")).length).toBeGreaterThan(
        0
      );
    });

    test("should render a random quote", async () => {
      expect(
        screen.queryByText("Hey, I'm the chief here. Bake him away, toys.")
      ).not.toBeInTheDocument();
    });

    test("should not render a random a not found quote message", async () => {
      expect(
        screen.queryByText("No se encontro ninguna cita")
      ).not.toBeInTheDocument();
    });
  });

  describe("When rendering a random quote by character", () => {
    test("should render a quote from the character input", async () => {
      render(<Quote />);
      const input = screen.getByLabelText("Author Quote");
      userEvent.clear(input);
      fireEvent.change(input, { target: { value: "lisa" } });
      expect(input).toHaveDisplayValue("lisa");
      await userEvent.click(screen.getByLabelText("Obtener Cita"));
      expect(
        (
          await screen.findAllByText(
            "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will."
          )
        ).length
      ).toBeGreaterThan(0);
    });
  });

  describe("When clicking the delete button", () => {
    test("should render the placeholder in the input and no quote message", async () => {
      render(<Quote />);
      await userEvent.click(screen.getByLabelText("Borrar"));
      expect(screen.getByLabelText("Author Quote")).toHaveValue("");
      expect(
        (await screen.findAllByText("No se encontro ninguna cita")).length
      ).toBeGreaterThan(0);
    });
  });

  describe("When the user inputs numbers", () => {
    test("should render an error message", async () => {
      render(<Quote />);
      const input = screen.getByLabelText("Author Quote");
      userEvent.clear(input);
      fireEvent.change(input, { target: { value: "1" } });
      expect(input).toHaveDisplayValue("1");
      await userEvent.click(screen.getByLabelText("Obtener Cita"));
      expect(
        (await screen.findAllByText("Por favor ingrese un nombre válido"))
          .length
      ).toBeGreaterThan(0);
    });
  });
});
