/* THE MODAL IS AT "index.js" */

import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../Generics/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AppLogo from '../../Generics/AppLogo';
import SectionSelector, { ISection } from '../../Generics/SectionSelector';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const AuthModalContainer = styled.div`
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  border-radius: var(--default-br);

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--default-pdn);
  display: flex;
  flex-direction: column;
`;

const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AuthModal = () => {
  const [showModal, setShowModal] = useState(false);

  const sections: ISection[] = [
    { id: 'login', label: 'Entrar', content: <LoginForm />, color: 'var(--color-primary)' },
    { id: 'register', label: 'Registrar', content: <RegisterForm />, color: 'var(--color-blue)' },
  ];

  return (
    <div>
      <PrimaryButton
        label={'Entrar'}
        attributes={{
          onClick: () => setShowModal && setShowModal(true),
        }}
      />

      <Modal setShowModal={setShowModal} showModal={showModal}>
        <AuthModalContainer>
          <ModalContent>
            <ModalHeaderContainer>
              <AppLogo />

              <SectionSelector sections={sections} />
            </ModalHeaderContainer>
          </ModalContent>
        </AuthModalContainer>
      </Modal>
    </div>
  );
};

export default AuthModal;
