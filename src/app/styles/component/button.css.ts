import { vars } from "@/app/styles/globals.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { border, position, radius, transition } from '@/app/styles/utils.css';
import { globalStyle, style } from "@vanilla-extract/css";

const blank = {
  'space-1': '.8rem 1.2rem',
  'space-0': '0'
};
const size = {
  'auto': 'auto',
  'small': '10rem',
  'medium': '20rem',
  'large': '100%'
};
const cursor = {
  'active': 'pointer',
  'no-drop': 'no-drop'
};

const blankProperty = defineProperties({
  properties: {padding: blank}
});
const sizeProperty = defineProperties({
  properties: {width: size}
});
const cursorProperty = defineProperties({
  properties: {cursor: cursor}
});

const sprinkles = createSprinkles(blankProperty, sizeProperty, cursorProperty);

const colorVariants = {
  primary: {
    backgroundColor: vars.colors.white,
    color: vars.colors.black,
    borderColor: vars.colors.gray01,
    selectors: {
      "&:hover": { 
        backgroundColor: vars.colors.pink, 
        color: vars.colors.white, 
        borderColor: vars.colors.pink,
      },
    },
  },
  secondary: {
    backgroundColor: vars.colors.darkgray,
    color: vars.colors.white,
    borderColor: vars.colors.darkgray,
    selectors: {
      "&:hover": { 
        backgroundColor: vars.colors.pink, 
        borderColor: vars.colors.pink,
      },
    },
  },
  third: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  disabled: {
    backgroundColor: vars.colors.gray01,
    color: vars.colors.gray02,
    borderColor: vars.colors.gray01,
    selectors: {
      "&:hover": { cursor: 'no-drop' },
    },
  }
}; 

export const button = recipe({
  base: [
    transition('all'),
    border({
      width: '1px',
      type: 'solid',
      color: vars.colors.gray01,
    }),
    radius('2rem'),
    {textAlign: 'center'},
    sprinkles({
      cursor: 'active',
    })
  ],
  variants: {
    color: colorVariants,
    size: {
      auto: sprinkles({width: 'auto'}),
      small: sprinkles({width: 'small'}),
      medium: sprinkles({width: 'medium'}),
      large: sprinkles({width: 'large'})
    },
    blank: {
      space0: sprinkles({padding: 'space-0'}),
      space1: sprinkles({padding: 'space-1'}),
    }
  }, 
  defaultVariants: {color: 'primary', size: 'small', blank: 'space1'}
});

export const btnWrap = recipe({
  base: {
    display: 'flex'
  },
  variants: {
    direction: {
      row: {flexDirection: 'row'},
      column: {flexDirection: 'column'}
    },
    align: {
      start: {justifyContent: 'flex-start'},
      center: {justifyContent: 'center'},
      end: {justifyContent: 'flex-end'},
    }
  }
});

export const LoginButton = style({
  minHeight: '5.2rem',
  padding: '1.2rem 1rem',
  borderRadius: '1.2rem',
  fontSize: vars.fontSize.medium,
  background: vars.colors.white,
  borderColor: vars.colors.white,
  selectors: {
    '&:hover': {
      background: vars.colors.white,
      color: vars.colors.black,
      borderColor: vars.colors.white,
    }
  }
});
globalStyle(`${LoginButton}.black`, {
  background: vars.colors.black,
  color: vars.colors.white,
  borderColor: vars.colors.black,
});
globalStyle(`${LoginButton} svg`, {marginRight: '.4rem'});

export const Bars = style({
  width: '3rem',
  height: '3rem',
  cursor: 'pointer'
});
export const BarsIcon = style([
  position('absolute', {top: '50%', left: '50%'}),
  radius('50px'),
  transition('all', '.35s'),
  {
    transform: 'translate(-50%, -50%) rotate(0deg)',
    width: '100%',
    height: '.4rem',
    background: vars.colors.white,
    selectors: {
      '&::before, &::after':{
        content: '',
        position: 'absolute',
        height: '100%',
        width: '50%',
        background: vars.colors.white,
        borderRadius: '50px',
        margin: 'auto',
        transition: 'all ease .35s'
      },
      '&::before': {
        top: '-10px',
        left: 0,
        transformOrigin: 'left'
      },
      '&::after': {
        bottom: '-10px',
        right: 0,
        transformOrigin: 'right'
      }
    }
  }
]);
globalStyle(`${Bars}.on`, {transform: 'rotate(135deg)'});
globalStyle(`${Bars}.on ${BarsIcon}::before`, {
  top: 0,
  transform: 'translateX(100%) rotate(-90deg)'
});
globalStyle(`${Bars}.on ${BarsIcon}::after`, {
  bottom: 0,
  transform: 'translateX(-100%) rotate(-90deg)'
});