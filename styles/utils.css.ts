import { style, styleVariants } from '@vanilla-extract/css';

type BorderProps = {
  width: string;
  type?: string;
  color: string;
  direction?: 'top' | 'bottom' | 'left' | 'right' | 'all';
};

export const border = ({ width, type='solid', color, direction = 'all' }: BorderProps) => {
  if (direction === 'all') {
    return style({
      border: `${width} ${type} ${color}`,
    });
  }
  return style({
    [`border-${direction}`]: `${width} ${type} ${color}`,
  });
};

export const radius = (radius: string) => style({
  ...(radius && {borderRadius: radius})
});

export const transition = (property: string, duration: string = '.25s', timingFn: string = 'ease') => style({transition: `${property} ${duration} ${timingFn}`});

type FlexBoxProps = {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
};

export const flexBox = ({direction, justify, align, wrap, gap=''}:FlexBoxProps) => style({
  display: 'flex',
  ...(direction && {flexDirection: direction,}),
  ...(justify && {justifyContent: justify}),
  ...(align && {alignItems: align}),
  ...(wrap && {flexWrap: wrap}),
  ...(gap && {gap: gap})
});

export const ellipsis = (num: number = 1) => {
  if(num === 1){
    return style({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    })
  } else{
    return style({
      display: '-webkit-box',
      overflow: 'hidden',
      wordBreak: 'keep-all',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: num
    })
  }
};

type PositionType = 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static'; 
type Values = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
export const position = (type:PositionType, values:Values= {}) => style({
  position: type,
  ...(values.top ? {top: values.top} : {}),
  ...(values.left ? { left: values.left } : {}),
  ...(values.right ? { right: values.right } : {}),
  ...(values.bottom ? { bottom: values.bottom } : {}),
});

type SizeProps = {
  width?: string;
  height?: string;
};
export const size = ({width, height}:SizeProps) => style({
  ...(width ? {width: width} : ''),
  ...(height ? {height: height} : ''),
});

type BackgroundProps