"use client";
import * as style from "@/app/styles/pages/profile.css";
import { Button } from "@/app/_component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { ImgWrap } from "@/app/_component/ImgWrap";
import { Typography } from "@/app/_component/Typography";
import { Session } from "next-auth";

type Props = {session: Session | null};
export default function UserInfo({session}:Props) {
  const ModifyHandler = () => {
    alert('준비 중 입니다:)');
  };
  return (
    <div className={style.UserInfo}>
      {/* <ImgWrap src={nfaker.image.avatar()} alt={session?.user.name as string} className={style.UserImg} /> */}
      <div>
        <Typography as="strong" weight="medium">
          {session?.user.name}
          <Typography as="span" color="gray">@{session?.user.email}</Typography>
        </Typography>
      </div>
      <Button size="auto" color="third" blank="space0" className={style.InfoModifyBtn} onClick={ModifyHandler}><FontAwesomeIcon icon={faPen} /></Button>
    </div>
  );
}
