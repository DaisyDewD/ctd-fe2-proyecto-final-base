/** @jest-environment jsdom */
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useToggle from "./useToggle";
import "@testing-library/jest-dom";


describe("Test in useToggle Hook", () => {
  test("Valores por default que debe renderizar el hook", () => {
    const {result} = renderHook(() => useToggle())
    expect(result.current.isOpen).toBeFalsy()
  });

  describe("when set initial value as false", () => {
    test("should be closed by default", async () => {
      const { result } = renderHook(() => useToggle(false));
      expect(result.current.isOpen).toBeFalsy();
    });

    describe("when toggle is executed", () => {
      test("should be opened", async () => {
        const { result } = renderHook(() => useToggle(false));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeTruthy();
      });
    });
  });

  describe("when set initial value as true", () => {
    test("should be open by default", async () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current.isOpen).toBeTruthy();
    });

    describe("when toggle is executed", () => {
      test("should be closed", async () => {
        const { result } = renderHook(() => useToggle(true));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeFalsy();
      });
    });
  });
});