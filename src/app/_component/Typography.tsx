import { vars } from '@/app/styles/globals.css';
import { ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import { baseTxtStyle, textSize, textWeight, textColor, textLineHeight } from '@/app/styles/component/typography.css'; 

type TitWrapProps = {
  children: ReactNode;
  className?: string;
};

export const TitWrap = ({children, className}:TitWrapProps) => {
  return <div className={className}>{children}</div>
};

interface TxtStyleProps {
  size?: keyof typeof vars.fontSize;
  weight?: keyof typeof vars.fontWeight;
  color?: keyof typeof vars.fontColor;
  lineHeight?: keyof typeof vars.txtHeight;
};

interface TxtProps extends TxtStyleProps{
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export const Typography = ({
  as: Component = 'p',
  size = 'regular',
  weight = 'normal',
  color = 'primary',
  lineHeight = 'normal',
  children,
  className = '',
}:TxtProps) => {
  return (
    <Component
      className={clsx(
        baseTxtStyle,
        textSize[size],
        textWeight[weight],
        textColor[color],
        textLineHeight[lineHeight],
        className
      )}
    >
      {children}
    </Component>
  )
};