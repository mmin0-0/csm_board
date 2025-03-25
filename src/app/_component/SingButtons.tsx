'use client';
import { Button } from "@/app/_component/Button";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return <Button onClick={() => {signIn()}}>로그인</Button>
};

export const LogoutButton = () => {
  return <Button onClick={() => {signOut()}}>로그아웃</Button>
};

export const RegisterButton = () => {
  const router = useRouter();
  const onClick = () => {router.push('/register')};
  return <Button onClick={onClick} color="secondary">회원가입</Button>
};
