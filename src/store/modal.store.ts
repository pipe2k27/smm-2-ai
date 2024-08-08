import { atom } from 'jotai';
import type { ModalStoreType } from '@/utils/types';

export const ModalAtom = atom<ModalStoreType>({
  isOpen: false,
  title: 'Error',
  text: 'An error occurred',
  fistButtonLabel: 'OK',
  onSubmitFirstButton: () => {},
  variant: 'error',
});
