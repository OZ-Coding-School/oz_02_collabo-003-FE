import { ChangeEvent, Dispatch, SetStateAction } from 'react';

function getNumericValue<T>(setValue: Dispatch<SetStateAction<T>>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    setValue(prev => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  return handleChange;
}

export default getNumericValue;
