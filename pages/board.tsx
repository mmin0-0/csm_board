import { TitWrap, Typography } from "@/component/Typography";
import { ContWrap } from "@/styles/component/layout.css";
import PostTable from "@/pages/board/_component/PostTable";

export default async function Board(){
  return(
    <main>
      <TitWrap>
        <Typography as="strong">게시판 리스트</Typography>
      </TitWrap>
      <div className={ContWrap}>
        <PostTable />
      </div>
    </main>
  )
}