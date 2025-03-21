import * as style from '@/app/styles/component/header.css';
import Link from 'next/link';
import { LoginButton, LogoutButton, RegisterButton } from '@/app/_component/SingButton';
import { Typography } from '@/app/_component/Typography';
import { ButtonWrap } from '@/app/_component/Button';
import { ImgWrap } from '@/app/_component/ImgWrap';

export default function Header() {
  const user = {
    name: '홍길동'
  };

  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderInner}>
        <Link href="/">
          <ImgWrap src="logo.png" alt="CSM" />
        </Link>
        <div className={style.HeaderInfo}>
          {
            user ? (
              <>
                <Typography as="h4" size="large" weight="medium">
                  <Typography as="strong" size="large" color="secondary" weight="semiBold">{user.name}</Typography>,
                  welcome back!
                </Typography>
                <LogoutButton />
              </>
            ) : (
              <>
                <Typography as="h4" size="large" weight="medium">
                  Hello, welcome <Typography as="strong" size="large" color="secondary" weight="semiBold">CSㆍM</Typography>
                </Typography>
                <ButtonWrap>
                  <LoginButton />
                  <RegisterButton />
                </ButtonWrap>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}