import * as React from 'react';
import styled from 'styled-components';

interface StickWrapperProps {
  duration: string;
  width: number;
}

interface StickProps {
  open: boolean;
  color?: string;
  duration: string;
  width: number;
  height: number;
  onClick?: any;
};

const StickOuterWrapper = styled.div<StickWrapperProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width
    ? props.width + 30
    : 50}px;
  height: ${props => props.width
    ? props.width + 30
    : 6}px;
  cursor: pointer;
  transition: all ${props => props.duration}s ease-in-out;
  z-index: 1000;
`;

const StickWrapper = styled.div<StickProps>`
  width: ${props => props.width || 50}px;
  height: ${props => props.height || 6}px;
  background: ${props => props.color || 'white'};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  transition: all ${props => props.duration}s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${props => props.width || 50}px;
    height: ${props => props.height || 6}px;
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
  const {
    open,
    color,
    duration,
    width,
    height,
    onClick,
  } = props;

  return (
    <StickOuterWrapper
      duration={duration}
      width={width}
      onClick={onClick}
    >
      <StickWrapper
        open={open}
        color={color || undefined}
        duration={duration}
        width={width}
        height={height}
      />
    </StickOuterWrapper>
  );
}

export default Stick;
