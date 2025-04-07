'use client';
import { Button } from "@/app/_component/Button";
import { useRouter } from "next/navigation";

export default function WriteLinkButton(){
  const router = useRouter();
  const onClick = () => {router.push('/write')};
  return <Button onClick={onClick} size="medium">글 작성하기</Button>
}