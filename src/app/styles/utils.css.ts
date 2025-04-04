import { style } from '@vanilla-extract/css';

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
      whiteSpace: 'nowrap',
      wordBreak: 'keep-all'
    })
  } else{
    return style({
      display: '-webkit-box',
      overflow: 'hidden',
      whiteSpace: 'break-word',
      wordBreak: 'keep-all',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: num,
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

type BackgroundProps = {
  folder: string;
  img: string;
  type: string;
  repeat: string;
  size: string;
  x?: string;
  y?: string;
};
export const backgroundProperty = ({folder, img, type, repeat, size, x, y}:BackgroundProps) => style({
  backgroundImage: `url(/images/${folder}/${img}.${type})`,
  backgroundRepeat: repeat,
  backgroundSize: size,
  backgroundPosition: `${x} ${y}`
});

type UnitValue = number | string;
const spacingValue = (property: string, value: UnitValue) => ({
  [property]: typeof value === 'number' ? `${value}rem` :  value
});

export const spacing = {
  mt: (value: UnitValue) => style(spacingValue('marginTop', value)),
  mb: (value: UnitValue) => style(spacingValue('marginBottom', value)),
  ml: (value: UnitValue) => style(spacingValue('marginLeft', value)),
  mr: (value: UnitValue) => style(spacingValue('marginRight', value)),
  my: (top: UnitValue, bottom: UnitValue) => style({
    ...spacingValue('marginTop', top),
    ...spacingValue('marginBottom', bottom),
  }),
  mx: (left: UnitValue, right: UnitValue) => style({
    ...spacingValue('marginLeft', left),
    ...spacingValue('marginRight', right),
  }),
  m: (value: UnitValue) => style(spacingValue('margin', value)),
  mc: style({margin: '0 auto'}),
};

export const blank = {
  pt: (value: UnitValue) => style(spacingValue('paddingTop', value)),
  pb: (value: UnitValue) => style(spacingValue('paddingBottom', value)),
  pl: (value: UnitValue) => style(spacingValue('paddingLeft', value)),
  pr: (value: UnitValue) => style(spacingValue('paddingRight', value)),
  py: (top: UnitValue, bottom: UnitValue) => style({
    ...spacingValue('paddingTop', top),
    ...spacingValue('paddingBottom', bottom),
  }),
  px: (left: UnitValue, right: UnitValue) => style({
    ...spacingValue('paddingLeft', left),
    ...spacingValue('paddingRight', right),
  }),
  p: (value: UnitValue) => style(spacingValue('padding', value)),
};