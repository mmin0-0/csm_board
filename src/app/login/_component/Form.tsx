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

export default function Form() {
  return (
    <form>
      <div className={clsx(FormGroup, LoginFormGroup)}>
        <TextInput
          id="email"
          name="email"
          children="email"
          className={InputLabel}
          placeholder="please your email"
        />
        <PwInput
          id="password"
          name="password"
          children="password"
          className={InputLabel}
          placeholder="Please your password"
        />
      </div>
      <Typography size="large" weight="bold" color="black" className={style.Boundary}>or</Typography>
      <ButtonWrap direction="column" gap="1.2rem">
        <Button size="large" className={LoginButton}>
          <FontAwesomeIcon icon={faGithub} style={{ width: '1.6rem' }} />
          Sign in with Github
        </Button>
        <Button size="large" color="secondary" className={clsx(`${LoginButton} black`)}>Sign in</Button>
      </ButtonWrap>
      <Link href="/register" className={style.RegisterLink}>
        등록된 계정이 없으신가요?<br />
        <b>지금 가입하세요!</b>
      </Link>
    </form>
  )
}