import * as style from '@/app/styles/component/nav.css';
import NavMenu from '@/app/_component/NavMenu';

export default function Nav(){
  return (
    <div className={style.NavWrap}>
      <nav className={style.NavMenu}>
        <NavMenu />
      </nav>
    </div>
  )
}