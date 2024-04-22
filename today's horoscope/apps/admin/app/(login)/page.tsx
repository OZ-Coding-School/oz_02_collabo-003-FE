import LoginForm from './_components/LoginForm';

export default function Login() {
  return (
    <div className="bg-[#f8f8f8] min-h-[calc(100vh-150px)] flex justify-center items-center">
      <div className="w-[384px] flex flex-col justify-center items-center mb-24">
        <h1 className="text-black text-[28px] font-semibold">관리자 로그인</h1>
        <LoginForm />
      </div>
    </div>
  );
}
