import * as React from 'react';
import styled from 'styled-components';
import Stick from './Stick';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all .5s ease-in-out;
`;

interface IProps {
  color?: string;
  onClick: () => void
}

interface IState {
  open: boolean;
  color: string;
}

class AnimationMenu extends React.PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      color: props.color || 'black',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props
    this.setState(prevState => {
      return {
        ...prevState,
        open: !prevState.open
      };
    });
    onClick();
  }
  
  render() {
    const { open, color } = this.state
    return (
      <Wrapper onClick={this.handleClick}>
        <Stick open={open} color={color} />
      </Wrapper>
    )
  }
}
  
export default AnimationMenu;