import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';
import { ModalProps } from './types';
import useClickOutside from '~/hooks/useClickOutside';

const Modal: React.FC<ModalProps> = ({
  children,
  handleCloseModal,
  visible,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, handleCloseModal);

  return visible ? (
    <Container>
      <div
        ref={modalRef}
        className="relative pt-11 bg-primary-dark p-2 py-4 rounded-lg flex items-center justify-center mx-2"
      >
        <div className="absolute right-5 top-3">
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            className="text-neutral-medium"
            onClick={() => handleCloseModal()}
          />
        </div>
        {children}
      </div>
    </Container>
  ) : null;
};

export default Modal;
