'use client';
import { useRouter } from "next/navigation";
import * as style from '@/app/styles/pages/board.css';
import { Post as IPost } from "@/model/Post";
import { TableWrap, Th, Td } from "@/app/styles/component/layout.css";
import { Typography } from "@/app/_component/Typography";

type Props = { posts: IPost[] };
export default function BoardTable({ posts }: Props) {
  const router = useRouter();
  const thead = ['No.', '제목', '작성자', 'Date'];
  const sortedData = posts.sort((a, b) => {
    if(a.postType === 'notice' && b.postType !== 'notice'){
      return -1;
    }
    if(a.postType !== 'notice' && b.postType === 'notice'){
      return 1;
    }
    return 0;
  });

  return (
    <div className={TableWrap}>
      <table>
        <caption>게시판 리스트</caption>
        <colgroup>
          {thead.map((col, idx) => {
            const width = col === '제목' ? '*' : '160px';
            return <col key={idx} width={width} />
          })}
        </colgroup>
        <thead>
          <tr>
            {thead.map((th, idx) =>
              <th key={idx}><div className={Th}>{th}</div></th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((post, idx) => (
            <tr key={idx} onClick={() => router.push(`/board/${post._id}`)}>
              <td>
                <div className={Td}>
                  {post.postType === 'general' ? (
                    <>{idx + 1}</>
                  ) : (
                    <Typography color="error">공지</Typography>
                  )}
                </div>
              </td>
              <td><div className={Td}>{post.title}</div></td>
              <td><div className={Td}>관리자</div></td>
              <td><div className={Td}>00-00-00</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}