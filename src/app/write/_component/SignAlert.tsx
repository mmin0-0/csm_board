'use client';
import { useEffect, useState } from "react";

export default function SignAlert(){
  const [hasAlert, setHasAlert] = useState<boolean>(false);
  useEffect(()=>{
    if(!hasAlert){
      alert('로그인 후 이용 가능합니다:)');
      setHasAlert(true);

      setTimeout(()=>{
        window.location.href = '/api/auth/signin'
      }, 500);
    }
  }, [hasAlert]);
  return null;
}