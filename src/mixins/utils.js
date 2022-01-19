import { useState } from "react";

export const model = (value, setValue) => {
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
};
export const newModel = (initialValue = null) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
};
