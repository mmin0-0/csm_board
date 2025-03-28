import * as style from '@/app/styles/component/lnb.css';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import NavMenu from '@/app/_component/NavMenu';

export default async function Lnb() {
  const session = await getServerSession(authOptions);

  return (
    <div className={style.LnbWrap}>
      <NavMenu session={session} />
    </div>
  )
}