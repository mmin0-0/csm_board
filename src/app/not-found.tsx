import {NextPage} from "next";
import * as style from '@/app/styles/component/layout.css';
import { ImgWrap } from "@/app/_component/ImgWrap";
import { Typography } from "@/app/_component/Typography";
import Link from "next/link";

const NotFound:NextPage = () => {
  return(
    <main>
      <div className={style.PageContainer}>
        <ImgWrap src="icon/empty_icon.svg" alt="404 Not Found" className={style.EmptyImgWrap} />
        <div className={style.EmptyInfo}>
          <Typography as="h4" size="large" weight="semiBold">페이지를 찾을 수 없습니다.</Typography>
          <Typography lineHeight="medium">
            요청하신 주소가 잘못되었거나<br />
            변경 또는 삭제되었을 수 있습니다.<br />
            주소를 다시 한번 확인 부탁드립니다.
          </Typography>
          <Link href="/home">메인페이지 바로가기</Link>
        </div>
      </div>
    </main>
  )
};

export default NotFound;