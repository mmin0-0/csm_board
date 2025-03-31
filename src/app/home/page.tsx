import { ContWrap } from "@/app/styles/component/layout.css";
import EventSchedule from "@/app/home/_component/EventSchedule";
import * as style from '@/app/styles/pages/home.css';

export default function Home() {
  // useEffect(() => {
  //   const fetchPost = async() => {
  //     try {
  //       const response = await fetch('/api/posts');
  //       if(!response.ok){
  //         throw new Error('Failed to fetch post data');
  //       }
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch(error){
  //       console.error("❌ API 요청 실패:", error);
  //     }
  //   };
  //   fetchPost();
  // }, []);

  return (
    <main>
      <div className={ContWrap}>
        <div id="eventList" className={style.EventWrap}>
          <EventSchedule />
        </div>
      </div>
    </main>
  );
}
