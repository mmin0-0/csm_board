"use client";
import { Button, ButtonWrap } from "@/app/_component/Button";
import { DateInput, TextInput } from "@/app/_component/Input";
import { Typography } from "@/app/_component/Typography";
import * as style from "@/app/styles/component/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BackButtonStyle } from "@/app/styles/component/layout.css";
import { FormGroup, InputLabel } from "@/app/styles/component/input.css";
import { useEffect, useState } from "react";

type Props = { modalHandler: () => void };
export default function TodoModal({ modalHandler }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const data = new FormData(e.currentTarget);
    setFormData(data);
  };

  useEffect(() => {
    const submitData = async () => {
      if(formData){
        const response = await fetch('/api/todos', {
          method: 'POST',
          body: formData
        });

        if(!response.ok){
          const data = await response.json();
          setMessage(data.error);
        } else{
          window.location.href = '/home';
        }
      }
    };

    if (formData) {
      submitData();
    }
  }, [formData]);

  return (
    <div className={style.ModalWrap}>
      <div className={style.ModalContainer}>
        <form onSubmit={onSubmit}>
          <div className={style.ModalTitle}>
            <Typography
              as="strong"
              color="black"
              weight="semiBold"
              size="medium"
            >
              일정 추가하기
            </Typography>
            <Button onClick={modalHandler} className={BackButtonStyle}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
          <div className={style.ModalContent}>
            <div className={FormGroup}>
              <TextInput
                id="title"
                name="title"
                children="title"
                className={InputLabel}
                placeholder="일정 제목을 입력해주세요."
              />
              <DateInput
                id="date"
                name="date"
                className={InputLabel}
                children="date"
                dataPlaceholder="날짜선택"
                areaRequired={true}
              />
            </div>
          </div>
          <div className={style.ModalBottom}>
            {message && <Typography weight="semiBold" color="error">{message}</Typography>}
            <ButtonWrap align="center">
              <Button type="submit" size="medium">추가</Button>
            </ButtonWrap>
          </div>
        </form>
      </div>
    </div>
  );
}
