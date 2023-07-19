import { useOverlay } from "@toss/use-overlay";
import { useMemo } from "react";
import Modal from "../components/Modal/Modal";

export const useModal = () => {
  const overlay = useOverlay();

  return useMemo(
    () => ({
      open: ({ title, description, content = <></> }) =>
        overlay.open(({ isOpen, close }) => {
          return (
            <Modal open={isOpen} onOpenChange={close}>
              <Modal.Content>
                {title && <Modal.Title>{title}</Modal.Title>}
                {description && <Modal.Description></Modal.Description>}
                {content}
                <Modal.Close>𝗫</Modal.Close>
              </Modal.Content>
            </Modal>
          );
        }),
      close: overlay.close,
    }),
    [overlay]
  );
};
