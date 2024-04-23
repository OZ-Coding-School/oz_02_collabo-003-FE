'use client';

import React from 'react';
import useFunctionStore from '../../../../_stores/useFucntionStore';

function ShortcutsButton() {
  const { isOpenedFunction, setIsOpenedFunction } = useFunctionStore();
  return (
    <button
      onClick={() => setIsOpenedFunction(!isOpenedFunction)}
      className="absolute bottom-4 right-4 w-24 h-8 flex justify-center items-center bg-blue-500 text-white rounded-md">
      바로가기
    </button>
  );
}

export default ShortcutsButton;
