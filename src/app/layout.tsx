import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import '@/app/styles/globals.css';
import * as style from '@/app/styles/component/layout.css';
import Lnb from "@/app/_component/Lnb";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AuthProvider from "@/app/_lib/nextauth/index";
config.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "CSM",
  description: "코딩을 사랑하는 모임",
};

type Props = { children: React.ReactNode };
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={montserrat.className}>
        <AuthProvider>
          <div className={style.Wrapper}>
            {/* <Lnb /> */}
            <div className={style.Container}>{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
