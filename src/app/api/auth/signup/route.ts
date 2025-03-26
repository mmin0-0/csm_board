import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req: NextRequest) => {
  try{
    const db = (await connectDB).db('csm_board');
    const formData = await req.formData();
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const password = (formData.get('password') as string) || '';

    // 필수요소 입력(+ 공백x)
    if(!name){
      return NextResponse.json({error: '이름을 입력해주세요.'}, {status: 403});
    } else if(!email){
      return NextResponse.json({error: '이메일을 입력해주세요.'}, {status: 403});
    } else if(!password.trim() || /^\s+$/.test(password)){
      return NextResponse.json({error: '비밀번호을 입력해주세요.'}, {status: 403});
    }

    // 비밀번호 암호화
    const hash = await bcrypt.hash(password.trim(), 10);

    // 이메일 중복검사
    const user = await db.collection('user_cred').findOne({email});
    if(user){
      return NextResponse.json({error: '이미 등록된 이메일 입니다.'}, {status: 403});
    }

    await db.collection('user_cred').insertOne({name, email, password: hash});
    return NextResponse.json('가입완료', {status: 200});
  } catch(error){
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
};