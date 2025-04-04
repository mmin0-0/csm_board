'use client';
import * as style from '@/app/styles/pages/login.css';
import { FormGroup, InputLabel, LoginFormGroup } from '@/app/styles/component/input.css';
import { PwInput, TextInput } from '@/app/_component/Input';
import { Button, ButtonWrap } from '@/app/_component/Button';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginButton } from '@/app/styles/component/button.css';
import Link from 'next/link';
import clsx from 'clsx';
import { Typography } from '@/app/_component/Typography';
import { signIn } from 'next-auth/react';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await signIn('credentials', {
      email: email,
      password,
      redirect: false,
    });

    if(response?.error){
      setMessage('※ 아이디 또는 비밀번호가 일치하지 않습니다.');
      return;
    }
    router.replace('/home');
  };
  
  const onChangeId:ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword:ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={clsx(FormGroup, LoginFormGroup)}>
        <TextInput
          id="email"
          name="email"
          children="email"
          className={InputLabel}
          placeholder="please your email"
          required={true}
          onChange={onChangeId}
        />
        <PwInput
          id="password"
          name="password"
          children="password"
          className={InputLabel}
          placeholder="Please your password"
          required={true}
          onChange={onChangePassword}
        />
      </div>
      {message && <Typography color="black" size="small" weight="semiBold" lineHeight="regular" className={style.EmptyMessage}>{message}</Typography>}
      <Button type="submit" size="large" color="secondary" className={clsx(`${LoginButton} black ${style.LoginButtonStyle}`)}>Sign in</Button>
      <Typography size="large" weight="bold" color="black" className={style.Boundary}>or</Typography>
      <ButtonWrap direction="column" gap="1.2rem">
        <Button size="large" className={LoginButton} onClick={() => signIn('github')}>
          <FontAwesomeIcon icon={faGithub} style={{ width: '1.6rem' }}  />
          Sign in with Github
        </Button>
      </ButtonWrap>
      <Link href="/register" className={style.RegisterLink}>
        등록된 계정이 없으신가요?<br />
        <b>지금 가입하세요!</b>
      </Link>
    </form>
  )
}