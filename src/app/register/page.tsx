import { TitWrap, Typography } from "@/app/_component/Typography";
import { ContWrap, PageContainer, TitleWrap } from "@/app/styles/component/layout.css";
import Form from "@/app/register/_component/Form";

export default function Register() {
  return (
    <main>
      <div className={PageContainer}>
        <TitWrap className={TitleWrap}>
          <Typography as="h4" weight="bold" size="xlarge">회원가입</Typography>
        </TitWrap>
        <div className={ContWrap}>
          <Form />
        </div>
      </div>
    </main>
  )
}