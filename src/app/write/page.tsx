import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignAlert from "@/app/write/_component/SignAlert";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, TitleWrap } from "@/app/styles/component/layout.css";
import Form from "@/app/write/_component/Form";

export default async function Write() {
  const session = await getServerSession(authOptions);

  if(!session){
    return <SignAlert />
  }

  return (
    <main>
      <TitWrap className={TitleWrap}>
        <Typography as="h4" weight="bold" size="xlarge">게시글 작성하기</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <Form />
      </div>
    </main>
  )
}