"use client";
import { Button } from '@/app/_component/Button';
import { DateInput, TextInput } from '@/app/_component/Input';
import { Typography } from '@/app/_component/Typography';
import * as style from '@/app/styles/component/modal.css';

type Props = { modalHandler: () => void };
export default function TodoModal({ modalHandler }: Props) {
  return (
    <div className={style.ModalWrap}>
      <div className={style.ModalContainer}>
        <form onClick={(e) => e.stopPropagation()}>
          <div className={style.ModalTitle}>
            <Typography as="strong">일정 추가하기</Typography>
          </div>
          <div className={style.ModalContent}>
            <TextInput 
              id="title"
              name="title"
              children="title"
              placeholder="일정 제목을 입력해주세요."
            />
            <DateInput 
              id='date'
              name='date'
              children='date'
            />
          </div>
          <div className={style.ModalBottom}>
            <Button type='submit'>추가</Button>
            <Button onClick={modalHandler}>취소</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
