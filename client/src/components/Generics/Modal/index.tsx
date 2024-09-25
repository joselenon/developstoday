import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Reveal from '../Reveal';

interface IModalContainerProps {
  $show: 'true' | 'false';
}

const ModalBackground = styled.div<{ $showModal: boolean }>`
  z-index: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $showModal }) => ($showModal ? 1 : 0)};
  transition: opacity 0.5s;
`;

const ModalContainer = styled(motion.div)<IModalContainerProps>`
  width: 100vw;
  height: 100vh;
  width: 100%;
  display: ${({ $show }) => ($show === 'true' ? 'flex' : 'none')};
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  right: 0;
  padding: 6px;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface IModalProps {
  children: JSX.Element;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  contentMaxWidth?: number;
}

export default function Modal({ children, setShowModal, showModal, contentMaxWidth = 550 }: IModalProps) {
  const toggleModal = () => {
    if (setShowModal) {
      setShowModal((prev) => !prev);

      if (!showModal) setShowModal(true);
      if (showModal) setShowModal(false);
    }
  };

  return (
    <ModalContainer key="modal" exit={{ opacity: 0 }} $show={showModal ? 'true' : 'false'}>
      <ModalBackground $showModal={showModal} onClick={() => toggleModal()} />

      <div style={{ maxWidth: contentMaxWidth, width: '100%', display: 'flex' }}>
        <Reveal width="100%">
          <ModalBody>{children}</ModalBody>
        </Reveal>
      </div>
    </ModalContainer>
  );
}
