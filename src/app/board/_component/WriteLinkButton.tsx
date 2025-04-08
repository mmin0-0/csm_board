'use client';
import { Button, ButtonWrap } from "@/app/_component/Button";
import { useRouter } from "next/navigation";

export default function WriteLinkButton(){
  const router = useRouter();
  const onClick = () => {router.push('/write')};
  return (
    <ButtonWrap>
      <Button onClick={onClick} size="medium">글 작성하기</Button>
    </ButtonWrap>
  )
}