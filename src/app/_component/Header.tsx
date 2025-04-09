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
            <Typography size="medium">
              Hello <Typography as="strong" color="pink" weight="semiBold" size="medium">{session.user.name}</Typography> ,welcome back!
            </Typography>
          </>
        ) : (
          <>
            <Typography size="medium">
              Hello, welcome <Typography as="strong" weight="semiBold" color="pink" size="medium">CSㆍM</Typography>
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}
