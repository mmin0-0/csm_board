import * as style from '@/styles/component/nav.css';
import Link from 'next/link';
import { ImgWrap } from '@/component/ImgWrap';
import NavMenu from '@/component/NavMenu';

export default function Nav(){
  return (
    <div className={style.NavWrap}>
      <nav className={style.NavMenu}>
        <NavMenu />
      </nav>
    </div>
  )
}