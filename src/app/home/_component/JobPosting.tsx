import { Image } from "@/app/_component/ImgWrap";
import { Typography } from "@/app/_component/Typography";
import * as style from "@/app/styles/pages/home.css";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function JobPosting() {
  const jobs = [
    { field: "frontend", persons: 19080 },
    { field: "design", persons: 1999 },
    { field: "backend", persons: 5490 },
  ];
  const users = [
    { name: "milky", profileImg: faker.image.avatar() },
    { name: "shopia", profileImg: faker.image.avatar() },
    { name: "julie", profileImg: faker.image.avatar() },
  ];
  return (
    <>
      <div className={style.ContTitWrap}>
        <Typography as="strong" color="black" size="medium" weight="bold">Job Posting</Typography>
      </div>
      <div className={style.ContWrap}>
        <div className={style.PostingList}>
          {jobs.map((job, idx) => (
            <Link href="#" key={idx}>
              <Typography as="strong" color="black" weight="semiBold">
                {job.field}
              </Typography>
              <div className={style.PostingInfo}>
                <Typography color="black">
                  {job.persons.toLocaleString()} people
                </Typography>
                <div className={style.PostingUsers}>
                  {users.map((user, idx) => (
                    <div key={idx} className={style.UserInfo}>
                      <Image src={user.profileImg} alt={user.name} />
                      {idx === users.length - 1 && (
                        <div className={style.UserPath}>+3</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={style.ContWrapBottom}>
          <Link href="#" className={style.MoreLink}>See all meets ▶</Link>
        </div>
      </div>
    </>
  );
}
