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
import { useTheme } from "../../hooks/theme";

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
  const [theme] = useTheme();

  return (
    <Dialog.Portal>
      <Dialog.Overlay css={dialogOverlayCss} />
      <Dialog.Content css={dialogContentCss({ theme })} {...modalContentProps}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const ModalTitle = ({ children, ...modalTitleProps }) => {
  const [theme] = useTheme();

  return (
    <Dialog.Title css={dialogTitleCss({ theme })} {...modalTitleProps}>
      {children}
    </Dialog.Title>
  );
};

export const ModalDescription = ({ children, ...modalDescriptionProps }) => {
  const [theme] = useTheme();

  return (
    <Dialog.Description css={dialogDescriptionCss({ theme })} {...modalDescriptionProps}>
      {children}
    </Dialog.Description>
  );
};

export const ModalClose = ({ children, ...modalCloseProps }) => {
  const [theme] = useTheme();

  return (
    <Dialog.Close asChild>
      <button css={dialogCloseButtonCss({ theme })} aria-label='Close' {...modalCloseProps}>
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
