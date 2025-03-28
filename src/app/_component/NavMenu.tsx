'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import * as style from '@/app/styles/component/lnb.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBookOpen, faPen, faGear, faAddressCard, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Session } from "next-auth";

type Props = { session: Session | null };
export default function NavMenu({ session }: Props) {
  const router = useRouter();
  const path = usePathname() || '';
  const navMenuList = [
    { title: 'home', path: '/home', icon: faHouse },
    { title: 'board', path: '/board', icon: faBookOpen },
    { title: 'write', path: '/write', icon: faPen },
    { title: 'profile', path: '/profile', icon: faGear },
    { title: 'logout', path: '', icon: faArrowRightFromBracket },
    { title: 'signUp', path: '/register', icon: faAddressCard },
    { title: 'login', path: 'login', icon: faArrowRightFromBracket },
  ];
  const filterMenu = navMenuList.filter(menu => 
    session ? menu.title !== 'signUp' && menu.title !== 'login'
    : menu.title !== 'profile' && menu.title !== 'logout'
  );

  return (
    <nav>
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
              <FontAwesomeIcon icon={item.icon} style={{width: '2rem'}} />
              {item.title}
            </Link>
          )
        })}
        {/* {navMenuList.map((menu) => {
          const isActive =
            (menu.path === '/board' &&
              (path === '/board' || path.startsWith('/board/') || path.startsWith('/edit'))) || path === menu.path;

          return (
            <Link
              key={menu.title}
              href={menu.path}
              className={isActive ? style.ActiveMenu : style.Menu}
            >
              <FontAwesomeIcon icon={menu.icon} style={{width: '2rem'}} />
              {menu.title}
            </Link>
          )
        })} */}
      </div>
      {/* <ButtonWrap direction="column" className={style.SignButtons}>
        {session ?
          (
            <>
              <Button size="large">Profile</Button>
              <Button size="large">LogOut</Button>
            </>
          ) : (
            <>
              <Button size="large">Sign Up</Button>
              <Button size="large">Login</Button>
            </>
          )}
      </ButtonWrap> */}
    </nav>
  )
}