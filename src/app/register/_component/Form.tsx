'use client';
import clsx from "clsx";
import { PwInput, TextInput } from "@/app/_component/Input";
import { Essential, InputLabel, FormGroup, formControls } from "@/app/styles/component/input.css";
import { Typography } from "@/app/_component/Typography";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if(response.ok){
      alert('가입이 완료되었습니다.');
      router.push('/home');
    } else{
      setMessage(data.error);
    }
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/board');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={FormGroup}>
        <TextInput
          id="name"
          name="name"
          children="이름"
          className={clsx(InputLabel, Essential)}
          required={true}
          placeholder="이름을 입력해 주세요."
        />
        <TextInput
          id="email"
          name="email"
          children="이메일"
          className={clsx(InputLabel, Essential)}
          required={true}
          placeholder="이메일을 입력해 주세요."
        />
        <PwInput
          id="password"
          name="password"
          children="비밀번호"
          className={clsx(InputLabel, Essential)}
          required={true}
          placeholder="비밀번호를 입력해 주세요."
        />
      </div>
      <div className={formControls}>
        {message && <Typography weight="semiBold" color="error">{message}</Typography>}
        <ButtonWrap>
          <Button type="submit">가입하기</Button>
          <Button color="secondary" onClick={onClick}>취소</Button>
        </ButtonWrap>
      </div>
    </form>
  )
}