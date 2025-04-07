'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainRouter(){
  const router = useRouter();
  useEffect(()=>{
    router.push('/home')
  }, []);
  return null;
}