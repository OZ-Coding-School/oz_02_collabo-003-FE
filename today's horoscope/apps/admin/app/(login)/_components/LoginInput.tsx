'use client';

import React, { useEffect, useRef } from 'react';

interface LoginInputProps {
  type: 'text' | 'password';
  placeholder: '아이디' | '비밀번호';
}

function LoginInput({ type, placeholder }: LoginInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = type === 'text' ? inputRef : undefined;

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <input ref={ref} type={type} placeholder={placeholder} className="h-[55px] px-4 outline-none rounded-lg" />;
}

export default LoginInput;
