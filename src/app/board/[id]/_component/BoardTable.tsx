import { Post as IPost } from "@/model/Post";
import { TableWrap, Th, Td } from "@/app/styles/component/layout.css";
import * as style from '@/app/styles/pages/board.css';

type Props = { post: IPost };
export default function BoardTable({ post }: Props) {
  return (
    <div className={TableWrap}>
      <table className={style.BoardTable}>
        <caption>게시판 조회하기</caption>
        <tbody>
          <tr>
            <th><div className={style.Th}>No.</div></th>
            <td><div className={style.Td}>{post.idx}</div></td>
            <th><div className={style.Th}>Date</div></th>
            <td><div className={style.Td}>{post.createAt.split(' ')[0]}</div></td>
          </tr>
          <tr>
            <th><div className={style.Th}>Author</div></th>
            <td><div className={style.Td}>{post.author}</div></td>
            <th><div className={style.Th}>Like</div></th>
            <td><div className={style.Td}>{post.likeCount}</div></td>
          </tr>
          <tr>
            <th><div className={style.Th}>Title</div></th>
            <td colSpan={24}><div className={style.Td}>{post.title}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}