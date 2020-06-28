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
  private menuRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      color: props.color || 'black',
    }
    this.menuRef = React.createRef();
    this.closeMenu = this.closeMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyPressEscape = this.handleKeyPressEscape.bind(this);
  }

  componentDidMount() {
    document.addEventListener(
      'click',
      this.handleClickOutside,
      true,
    );
    document.addEventListener(
      'keydown',
      this.handleKeyPressEscape,
      true,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'click',
      this.handleClickOutside,
      true,
    );
    document.removeEventListener(
      'keydown',
      this.handleKeyPressEscape,
      true,
    );
  }

  closeMenu() {
    this.setState(prevState => {
      return {
        ...prevState,
        open: false,
      }
    });
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

  handleClickOutside(e: any) {
    if (this.menuRef.current
      && !this.menuRef.current.contains(e.target)) {
        this.closeMenu();
      }
  }

  handleKeyPressEscape(e: any) {
    if (e.key === 'Escape') this.closeMenu();
  }
  
  render() {
    const { open, color } = this.state
    return (
      <Wrapper
        ref={this.menuRef}
        onClick={this.handleClick}
      >
        <Stick open={open} color={color} />
      </Wrapper>
    )
  }
}
  
export default AnimationMenu;