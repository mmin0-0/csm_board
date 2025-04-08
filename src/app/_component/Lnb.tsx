'use client';
import * as style from '@/app/styles/component/lnb.css';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBookOpen, faPen, faGear, faAddressCard, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button } from '@/app/_component/Button';
import { Bars, BarsIcon } from '@/app/styles/component/button.css';
import clsx from 'clsx';
import { useState } from 'react';

export default function Lnb() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const path = usePathname() || '';
  const [open, setOpen] = useState(false);
  const navMenuList = [
    { title: 'home', path: '/home', icon: faHouse },
    { title: 'board', path: '/board', icon: faBookOpen },
    { title: 'write', path: '/write', icon: faPen },
    { title: 'profile', path: `/user/${session?.user.email}`, icon: faGear },
    { title: 'logout', path: '', icon: faArrowRightFromBracket },
    { title: 'signUp', path: '/register', icon: faAddressCard },
    { title: 'login', path: 'login', icon: faArrowRightFromBracket },
  ];
  const filterMenu = navMenuList.filter(menu =>
    session ? menu.title !== 'signUp' && menu.title !== 'login'
      : menu.title !== 'profile' && menu.title !== 'logout'
  );

  const lnbHandler = () => {
    setOpen((prev) => !prev);
  };

  if (pathname === '/login') {
    return null;
  }

  return (
    <div className={clsx(style.LnbWrap, open ? 'on' : '')}>
      <Button className={clsx(Bars, style.LnbControls, open ? 'on' : '')} color="third" size="auto" blank="space0" onClick={lnbHandler}>
        <div className={BarsIcon} />
      </Button>
      <nav className={style.NavWrap}>
        <div className={style.NavInner}>
          {filterMenu.map((item) => {
            const isActive =
              (item.path === '/board' &&
                (path === '/board' || path.startsWith('/board/') || path.startsWith('/edit'))) || path === item.path;

            return (
              <Link
                key={item.title}
                href={item.path}
                className={isActive ? style.ActiveMenu : style.Menu}
                onClick={item.title === "login" ? () => signIn() : item.title === "logout" ? () => signOut() : undefined}
              >
                <FontAwesomeIcon icon={item.icon} style={{ width: '2rem' }} />
                {item.title}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}