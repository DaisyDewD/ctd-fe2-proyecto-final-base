import { useState } from "react";

type UseToggleType = {
  isOpen: boolean;
  toggle: () => void;
};

const useToggle = (initialValue = false): UseToggleType => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((value) => !value);

  return { isOpen: value, toggle };
};

export default useToggle;
