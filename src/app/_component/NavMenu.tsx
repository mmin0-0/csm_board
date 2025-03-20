'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as style from '@/app/styles/component/nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBookOpen, faPen } from "@fortawesome/free-solid-svg-icons";

export default function NavMenu (){
  const path = usePathname() || '';
  const navMenuList = [
    {title: 'home', path: '/', icon: faHouse},
    {title: 'board', path: '/board', icon: faBookOpen},
    {title: 'write', path: '/write', icon: faPen},
  ]
  return (
    <>
      {navMenuList.map((menu) => {
        const isActive = 
        (menu.path === '/board' && 
          (path === '/board' || path.startsWith('/board/') || path.startsWith('/edit'))) || path === menu.path;

        return (
          <Link 
            key={menu.title}
            href={menu.path}
            className={isActive ? style.ActiveMenu : style.Menu}
          >
            <FontAwesomeIcon icon={menu.icon} />
            {menu.title}
          </Link>
        )
      })}
    </>
  )
}