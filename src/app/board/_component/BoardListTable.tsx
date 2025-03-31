'use client';
import { useRouter } from "next/navigation";
import { Post as IPost } from "@/model/Post";
import { TableWrap, TableEmpty, Th, Td, Tr, TextAlignLeft } from "@/app/styles/component/layout.css";
import { Typography } from "@/app/_component/Typography";
import clsx from "clsx";

type Props = { posts: IPost[]} ;
export default function BoardListTable({ posts }: Props) {
  const router = useRouter();
  const thead = ['No.', 'title', 'author', 'like', 'date'];
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
      {sortedData.length > 0 ? (
      <table>
        <caption>게시판 리스트</caption>
        <colgroup>
          {thead.map((col, idx) => {
            const width = col === 'title' ? '*' : '160px';
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
            <tr key={idx} onClick={() => router.push(`/board/${post._id}`)} className={Tr}>
              <td>
                <div className={Td}>
                  {post.postType === 'general' ? (
                    <>{idx + 1}</>
                  ) : (
                    <Typography color="error">공지</Typography>
                  )}
                </div>
              </td>
              <td><div className={clsx(Td, TextAlignLeft)}>{post.title}</div></td>
              <td><div className={Td}>{post.author}</div></td>
              <td><div className={Td}>{post.likeCount}</div></td>
              <td><div className={Td}>{post.createAt.split(' ')[0]}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
      ): (<div className={TableEmpty}>
        <Typography weight="semiBold">현재 작성된 글이 없습니다.</Typography>
      </div>)}
    </div>
  )
}