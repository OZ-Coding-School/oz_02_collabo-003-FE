'use client';
import React, { FormEvent } from 'react';
import LoginInput from './LoginInput';
import { useRouter } from 'next/navigation';
import routes from '../../_constants/routes';

function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(routes.HOME);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[100%] flex flex-col mt-[50px]">
      <section className="flex flex-col gap-[10px]">
        <LoginInput type="text" placeholder="아이디" />
        <LoginInput type="password" placeholder="비밀번호" />
      </section>
      <button type="submit" className="bg-blue-400 text-white h-[55px] mt-4 rounded-lg text-lg">
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
