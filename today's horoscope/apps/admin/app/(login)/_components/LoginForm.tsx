'use client';
import React from 'react';
import LoginInput from './LoginInput';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const router = useRouter();

  return (
    <form className="w-[100%] flex flex-col mt-[50px]">
      <section className="flex flex-col gap-[10px]">
        <LoginInput type="text" placeholder="아이디" />
        <LoginInput type="password" placeholder="비밀번호" />
      </section>
      <button
        type="submit"
        onClick={() => router.push('/home')}
        className="bg-blue-400 text-white h-[55px] mt-4 rounded-lg">
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
