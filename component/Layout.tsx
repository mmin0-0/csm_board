import * as style from '@/styles/component/layout.css';
import React from "react";
import Header from "@/component/Header";
import Nav from '@/component/Nav';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={style.Wrapper}>
      <Header />
      <Nav />
      <div className={style.Container}>{children}</div>
    </div>
  )
}