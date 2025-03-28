'use client';
import * as style from '@/app/styles/component/header.css';
import { Typography } from '@/app/_component/Typography';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import BackButton from './BackButton';
import { useEffect, useState } from 'react';

export default function Header() {
  const session = useSession();
  const path = usePathname();
  const [title, setTitle] = useState<string>('');

  useEffect(()=>{
    const formattedTitle = path.replace('/', '');
    setTitle(formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1));
  }, [path]);

  if(path === '/home'){
    return (
      <div className={style.HeaderWrap}>
        <div className={style.HeaderTitle}>
          <Typography>{session.user.name}</Typography>
        </div>
      </div>
    )
  }
  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderTitle}>
        <BackButton />
        <Typography size="xlarge" weight="semiBold">{title}</Typography>
      </div>
    </div>
  )
}