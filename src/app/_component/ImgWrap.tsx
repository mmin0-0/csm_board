import { ImageWrap } from "@/app/styles/component/layout.css";
import clsx from "clsx";

type ImgWrapProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImgWrap = ({src, alt, className}:ImgWrapProps) => {
  const getImageSrc = (src:string) => {
    return src.startsWith('https') ? src : `/images/${src}`;
  };

  return (
    <div className={clsx(className, ImageWrap)}>
      <img src={getImageSrc(src)} alt={alt} />
    </div>
  )
};

export const Image = ({src, alt}:ImgWrapProps) => {
  const getImageSrc = (src:string) => {
    return src.startsWith('https') ? src : `/images/${src}`;
  };

  return <img src={getImageSrc(src)} alt={alt} />
};