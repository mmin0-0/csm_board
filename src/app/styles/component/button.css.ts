import { vars } from "@/app/styles/globals.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { border, radius, transition } from '@/app/styles/utils.css';
import { globalStyle, style } from "@vanilla-extract/css";

const blank = {
  'space-1': '.8rem 1.2rem',
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
  disabled: {
    backgroundColor: vars.colors.gray01,
    color: vars.colors.gray02,
    borderColor: vars.colors.gray01,
    selectors: {
      "&:hover": { 
        cursor: 'no-drop'
      },
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
      padding: 'space-1',
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
    }
  }, 
  defaultVariants: {color: 'primary', size: 'small'}
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
  height: '5.2rem',
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