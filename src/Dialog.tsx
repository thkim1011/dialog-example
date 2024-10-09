import React from 'react';
import styled from 'styled-components';

interface DialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Dialog = ({ onClose, isOpen }: DialogProps) => {
  if (!isOpen) {
    return <></>;
  }

  const [variant, setVariant] = React.useState<'dark' | 'light'>('dark');

  return (
    <Backdrop $variant={variant} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        Hello world!
        <button onClick={onClose}>Close</button>
        <button onClick={() => setVariant(variant === 'dark' ? 'light' : 'dark')}>Toggle</button>
      </Container>
    </Backdrop>
  );
};

const Backdrop = styled.div<{ $variant: 'dark' | 'light' }>`
  position: fixed;
  left: 0px;
  top: 0px;
  background: ${(props) => (props.$variant === 'dark' ? 'rgb(0, 0, 0, 0.7)' : 'rgb(0, 0, 0, 0.3)')};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  color: black;
  width: 70%;
  height: 400px;
  border-radius: 20px;
  padding: 20px;
`;
