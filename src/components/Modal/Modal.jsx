/** @jsxImportSource @emotion/react */
import * as Dialog from "@radix-ui/react-dialog";
import {
  dialogCloseButtonCss,
  dialogContentCss,
  dialogDescriptionCss,
  dialogOpenButtonCss,
  dialogOverlayCss,
  dialogTitleCss,
} from "./styles";

export default function Modal({ children, ...modalProps }) {
  return <Dialog.Root {...modalProps}>{children}</Dialog.Root>;
}

export const ModalTrigger = ({ children, ...triggerProps }) => {
  return (
    <Dialog.Trigger asChild css={dialogOpenButtonCss} {...triggerProps}>
      {children}
    </Dialog.Trigger>
  );
};

export const ModalContent = ({ children, ...modalContentProps }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay css={dialogOverlayCss} />
      <Dialog.Content css={dialogContentCss} {...modalContentProps}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const ModalTitle = ({ children, ...modalTitleProps }) => {
  return (
    <Dialog.Title css={dialogTitleCss} {...modalTitleProps}>
      {children}
    </Dialog.Title>
  );
};

export const ModalDescription = ({ children, ...modalDescriptionProps }) => {
  return (
    <Dialog.Description css={dialogDescriptionCss} {...modalDescriptionProps}>
      {children}
    </Dialog.Description>
  );
};

export const ModalClose = ({ children, ...modalCloseProps }) => {
  return (
    <Dialog.Close asChild>
      <button css={dialogCloseButtonCss} aria-label='Close' {...modalCloseProps}>
        {children}
      </button>
    </Dialog.Close>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Close = ModalClose;
