import * as style from "@/app/styles/component/header.css";
import { Typography } from "@/app/_component/Typography";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className={style.HeaderWrap}>
      <div className={style.HeaderTitle}>
        {session ? (
          <>
            <Typography>
              Hello <Typography as="strong" color="pink">{session.user.name}</Typography> ,welcome back!
            </Typography>
          </>
        ) : (
          <>
            <Typography>
              Hello, welcome <Typography as="strong">CSㆍM</Typography>
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}
