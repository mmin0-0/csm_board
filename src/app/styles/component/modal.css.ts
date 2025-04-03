import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, size, spacing } from '@/app/styles/utils.css';

export const ModalWrap = style([
  size({width: '100vw', height: '100vh'}),
  position('fixed', {top: '0', left: '0'}),
  {
    zIndex: 10,
    background: `rgba(${vars.colors.blackRGB}, .65)`
  }
]);
export const ModalContainer = style([
  size({width: 'calc(100% - 4rem)'}),
  position('absolute', {top: '50%', left: '50%'}),
  blank.p('2rem'),
  {
    maxWidth: '60rem',
    maxHeight: 'calc(100vh - 6rem)',
    overflowY: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem',
    background: vars.colors.white,
  }
]);
export const ModalTitle = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between'
  }),
  spacing.mb(2),
]);
export const ModalContent = style({});
export const ModalBottom = style([
  spacing.mt(2)
]);