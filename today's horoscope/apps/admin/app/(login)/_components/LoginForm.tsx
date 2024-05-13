'use client';
import React, { FormEvent } from 'react';
import LoginInput from './LoginInput';
import routes from '../../_constants/routes';
import Link from 'next/link';

function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-[100%] flex flex-col mt-[50px]">
      <section className="flex flex-col gap-[10px]">
        <LoginInput type="text" placeholder="아이디" />
        <LoginInput type="password" placeholder="비밀번호" />
      </section>
      <Link
        href={routes.HOME}
        type="submit"
        className="flex justify-center items-center bg-blue-400 text-white h-[55px] mt-4 rounded-lg text-lg">
        로그인
      </Link>
    </form>
  );
}

export default LoginForm;
