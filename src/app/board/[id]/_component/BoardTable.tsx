import { Post as IPost } from "@/model/Post";
import { TableWrap, Th, Td } from "@/app/styles/component/layout.css";
import * as style from '@/app/styles/pages/board.css';

type Props = { post: IPost };
export default function BoardTable({ post }: Props) {
  return (
    <div className={TableWrap}>
      <table className={style.BoardTable}>
        <caption>게시판 조회하기</caption>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <tbody>
          <tr>
            <th><div className={Th}>No.</div></th>
            <td><div className={Td}>{post.postType}</div></td>
            <th><div className={Th}>작성일</div></th>
            <td><div className={Td}>00-00-00</div></td>
          </tr>
          <tr>
            <th><div className={Th}>작성자</div></th>
            <td><div className={Td}>관리자</div></td>
            <th><div className={Th}>조회수</div></th>
            <td><div className={Td}>1</div></td>
          </tr>
          <tr>
            <th><div className={Th}>제목</div></th>
            <td colSpan={24}><div className={Td}>{post.title}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}