import type { Metadata } from "next";
import '@/app/styles/globals.css';
import * as style from '@/app/styles/component/layout.css';
import Lnb from "@/app/_component/Lnb";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AuthProvider from "@/app/_lib/nextauth/index";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "CSM",
  description: "코딩을 사랑하는 모임",
};

type Props = { children: React.ReactNode };
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <div className={style.Wrapper}>
            <Lnb />
            <div className={style.Container}>{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
