import * as style from '@/styles/component/header.css';
import { Typography } from './Typography';
import { Button } from './Button';

export default function Header(){
  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderInner}>
        <Typography as="strong" weight='bold'>test</Typography>
      </div>
    </div>
  )
}