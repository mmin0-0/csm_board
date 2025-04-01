import { Typography } from "@/app/_component/Typography";
import * as style from "@/app/styles/pages/home.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRulerCombined, faPen } from '@fortawesome/free-solid-svg-icons';
import { ImgWrap } from "@/app/_component/ImgWrap";

export default function Outsourcing(){
  const learning = [
    {
      field: 'frontend',
      title: 'Code Reading',
      time: '08:00 AM - 10:00 AM',
      icon: faBook,
    },{
      field: 'backend',
      title: 'Code Reading',
      time: '14:00 AM - 17:00 AM',
      icon: faBook,
    },{
      field: 'design',
      title: 'UI/UX Design',
      time: '03:00 PM - 05:00 PM',
      icon: faRulerCombined,
    },{
      field: 'planning',
      title: 'UI/UX Planning',
      time: '11:00 AM - 01:00 PM',
      icon: faPen,
    }
  ];

  return(
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" color="black" size="medium" weight="bold">Lecture</Typography>
        <Link href="#" className={style.MoreLink}>View All</Link>
      </div>
      <div className={style.ContWrap}>
        <div className={style.LectureList}>
          {learning.map((item, idx) =>
            <Link href="#" key={idx} className={style.LectureItem}>
              <ImgWrap src={`home/${item.field}.jpg`} alt={item.field} className={style.LectureImg} />
              <div className={style.LectureInfo}>
                <Typography as="strong" color="black"><FontAwesomeIcon icon={item.icon} style={{width: '1.6rem'}} /> {item.field}</Typography>
                <Typography color="black" lineHeight="medium">{item.title}</Typography>
                <Typography color="black" size="small">{item.time}</Typography>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}