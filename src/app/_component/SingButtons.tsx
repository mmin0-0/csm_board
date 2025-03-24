'use client';
import { Button } from "@/app/_component/Button";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
  const onClick = () => {};
  return <Button onClick={onClick}>로그인</Button>
};

export const LogoutButton = () => {
  const onClick = () => {};
  return <Button onClick={onClick}>로그아웃</Button>
};

export const RegisterButton = () => {
  const router = useRouter();
  const onClick = () => {router.push('/register')};
  return <Button onClick={onClick} color="secondary">회원가입</Button>
};
