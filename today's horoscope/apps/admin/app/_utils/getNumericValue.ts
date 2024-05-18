import { ChangeEvent, Dispatch, SetStateAction } from 'react';

function getNumericValue(setValue: Dispatch<SetStateAction<string>>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    setValue(numericValue);
  };

  return { handleChange };
}

export default getNumericValue;
