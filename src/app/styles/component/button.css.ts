import { vars } from "@/app/styles/globals.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { recipe } from "@vanilla-extract/recipes";
import { border, radius, transition } from '@/app/styles/utils.css';

const blank = {
  'space-1': '.8rem 1.2rem',
};
const size = {
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
    borderColor: vars.colors.mainColor,
    selectors: {
      "&:hover": { 
        backgroundColor: vars.colors.mainColor, 
        color: vars.colors.white, 
      },
    },
  },
  secondary: {
    backgroundColor: vars.colors.mainColor,
    color: vars.colors.white,
    borderColor: vars.colors.mainColor,
    selectors: {
      "&:hover": { 
        backgroundColor: vars.colors.mainActive, 
        borderColor: vars.colors.mainActive,
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
      color: vars.colors.mainColor,
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
      start: {alignItems: 'flex-start'},
      center: {alignItems: 'center'},
      end: {alignItems: 'flex-end'},
    }
  }
});