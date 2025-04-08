import * as style from '@/app/styles/component/layout.css';
import { Typography } from '@/app/_component/Typography';

export default function Loading(){
  return (
    <main>
      <div className={style.PageContainer}>
        <div className={style.LoadingWrap}>
          <Typography as="strong" weight="semiBold" size="medium">Loading ...</Typography>
          <div className={style.LoadingLines}>
            <div className={style.LoadingLine} />
            <div className={style.LoadingLine} />
            <div className={style.LoadingLine} />
          </div>
        </div>
      </div>
    </main>
  )
}