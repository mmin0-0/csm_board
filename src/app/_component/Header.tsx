import * as style from '@/app/styles/component/header.css';
import Link from 'next/link';
import { LoginButton, LogoutButton, RegisterButton } from '@/app/_component/SingButtons';
import { Typography } from '@/app/_component/Typography';
import { ButtonWrap } from '@/app/_component/Button';
import { ImgWrap } from '@/app/_component/ImgWrap';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderInner}>
        <Link href="/">
          <ImgWrap src="logo.png" alt="CSM" />
        </Link>
        <div className={style.HeaderInfo}>
          {
            session ? (
              <>
                <Typography as="h4" size="medium" weight="medium">
                  <Typography as="strong" size="medium" color="secondary" weight="semiBold">{session.user?.name}</Typography>,
                  welcome back!
                </Typography>
                <LogoutButton />
              </>
            ) : (
              <>
                <Typography as="h4" size="medium" weight="medium">
                  Hello, welcome <Typography as="strong" size="medium" color="secondary" weight="semiBold">CSㆍM</Typography>
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