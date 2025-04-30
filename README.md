# CSM(코딩을 사랑하는 모임) 게시판
![Image](https://github.com/user-attachments/assets/9e4822aa-adc1-4129-9184-db32b929f491)

- 배포URL: [https://csmboard.vercel.app](https://csmboard.vercel.app)
- Test ID: test
- Test PW: test

<br />

## 📌 프로젝트 소개
- 게시물 업로드 및 소통 가능한 게시판 입니다.
- 게시글에 좋아요를 누르거나 댓글을 작성할 수 있습니다.
    * 사용자가 작성한 게시글은 ***수정/삭제*** 가 가능합니다.
- 캘린더를 통해 개인 스케줄을 관리 할 수 있습니다.


## 🔧 사용 기술 스택
|Tech Stack|기술|
|---|---|
|front|Next.js 14(App Router), React 18, TypeScript|
|markUp|Vanill Extract|
|디자인|Figma| 
|배포|Vercel|
|DB|MongoDB|

## 화면구성
#### 1. 로그인 / 회원가입
|로그인|회원가입|
|---|---|
|![Image](https://github.com/user-attachments/assets/d598b761-1143-4ac3-b8a4-23fd669a791d)|![Image](https://github.com/user-attachments/assets/0e3ce88a-37ea-400e-8374-bb8489b540ad)|

- NextAuth를 이용한 회원가입 및 로그인(github 소셜로그인 가능) 기능 구현
- 로그인 하지 않은 사용자는 게시글 작성/댓글달기/좋아요 접근 시 로그인 페이지로 리다이렉트함.

#### 2. 캘린더 스케줄 관리
|메인화면|등록화면|개인스케줄|
|---|---|---|



