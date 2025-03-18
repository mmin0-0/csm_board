import * as style from '@/styles/component/header.css';
import { Typography } from '@/component/Typography';
import { Button } from '@/component/Button';
import { LoginButton, LogoutButton, RegisterButton } from '@/component/SingButton';

export default function Header() {
  const user = {
    name: '홍길동'
  };

  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderInner}>
        {
          user ? (
            <Typography as="h4" size="large" weight="medium">
              <Typography as="strong" size="large" color="secondary" weight="semiBold">홍길동</Typography>,
              welcome back!
            </Typography>
          ) : (
            <Typography as="h4" size="large" weight="medium">
              Hello, welcome <Typography as="strong" size="large" color="secondary" weight="semiBold">CSㆍM</Typography>
            </Typography>
          )
        }
        <div>
          {
            user ? (
              <LogoutButton />
            ) : (
              <>
                <LoginButton />
                <RegisterButton />
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}