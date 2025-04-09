import MainRouter from "@/app/_component/MainRouter";
import { Suspense } from "react";
import Loading from '@/app/loading';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MainRouter />
    </Suspense>
  )
}
