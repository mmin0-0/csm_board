'use client';
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import clsx from "clsx";
import { BackButtonStyle } from "@/app/styles/component/layout.css";

type Props = {className?: string};
export default function BackButton({className}:Props){
  const router = useRouter();
  const onClick:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return <Button onClick={onClick} className={clsx(BackButtonStyle, className)}><FontAwesomeIcon icon={faArrowLeft} /></Button>
}