import { Typography } from '@/app/_component/Typography';
import * as style from '@/app/styles/pages/login.css';
import Form from '@/app/login/_component/Form';

export default function Page() {
  return (
    <main>
      <div className={style.LoginWrap}>
        <div className={style.LoginBackground}>
          <Typography as="h2" lineHeight="medium" className={style.LoginTitle}>Manage your leads<br />in one place</Typography>
        </div>
        <div className={style.LoginContainer}>
          <div className={style.LoginContInfo}>
            <Typography className={style.LoginContTit} size="medium" color="black">
              <Typography as="strong" size="medium" weight="bold" color="black">Sign in</Typography>&nbsp; Registration
            </Typography>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}