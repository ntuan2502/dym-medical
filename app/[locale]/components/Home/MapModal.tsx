"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpenChange(): void;
  modalTitle: string;
  mapSrc: string;
  mapUrl: string;
};

export default function MapModal({
  isOpen,
  onOpenChange,
  modalTitle,
  mapSrc,
  mapUrl,
}: Props) {
  return (
    <>
      <Modal
        size="5xl"
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                <iframe
                  src={mapSrc}
                  className="w-full h-[50vh]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button
                  color="primary"
                  onPress={() => window.open(mapUrl, "_blank")}
                >
                  Mở trên Google Map
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
