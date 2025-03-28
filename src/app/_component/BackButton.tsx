'use client';
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export default function BackButton(){
  const router = useRouter();
  const onClick:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return <Button onClick={onClick} size="auto"><FontAwesomeIcon icon={faArrowLeft} /></Button>
}