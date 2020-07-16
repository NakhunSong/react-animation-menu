import * as React from 'react';
import styled from 'styled-components';

interface StickWrapperProps {
  duration: string;
}

interface StickProps {
  open: boolean;
  color?: string;
  duration: string;
  onClick?: any;
};

const StickOuterWrapper = styled.div<StickWrapperProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all ${props => props.duration}s ease-in-out;
`;

const StickWrapper = styled.div<StickProps>`
  width: 50px;
  height: 6px;
  background: ${props => props.color || 'white'};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  transition: all ${props => props.duration}s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 6px;
    background: ${props => props.color || 'white'};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    transition: all ${props => props.duration}s ease-in-out;
  }

  &::before {
    transform: translateY(-16px);
  }

  &::after {
    transform: translateY(16px);
  }

  ${props => props.open && `
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  `}

  ${props => props.open && `
    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
  `}

  ${props => props.open && `
    &::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  `}
`;

const Stick = (props: any) => {
  const { open, color, duration, onClick } = props;

  return (
    <StickOuterWrapper
      duration={duration}
      onClick={onClick}
    >
      <StickWrapper
        open={open}
        color={color || undefined}
        duration={duration}
      />
    </StickOuterWrapper>
  );
}

export default Stick;
