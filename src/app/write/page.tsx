import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import SignAlert from "@/app/_component/SignAlert";
import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, PageContainer, TitleWrap } from "@/app/styles/component/layout.css";
import Form from "@/app/write/_component/Form";

export default async function Write() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SignAlert />
  }

  return (
    <main>
      <div className={PageContainer}>
        <TitWrap className={TitleWrap}>
          <Typography as="h4" weight="bold" size="xlarge">게시글 작성하기</Typography>
        </TitWrap>
        <div className={ContWrap}>
          <Form session={session} />
        </div>
      </div>
    </main>
  )
}