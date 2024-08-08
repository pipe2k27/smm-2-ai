import type { ModalType } from '../shared.types';

export type ModalStoreType = {
  isOpen: boolean;
  title: string;
  text: string;
  fistButtonLabel: string;
  onSubmitFirstButton: () => void;
  variant: ModalType;
};
