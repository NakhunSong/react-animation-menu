import * as React from 'react';
import styled from 'styled-components';
import Stick from './Stick';
import { MenuList } from './Menu';

export { MenuList };

interface IProps {
  color?: string;
  elements?: any;
  duration?: number;
  width?: number;
  height?: number;
  xOffset?: number;
  yOffset?: number;
  right?: any;
  onClick?: () => void
}

interface IState {
  open: boolean;
  color: string;
  duration: string;
  width: number;
  height: number;
  xOffset: number;
  yOffset: number;
  right: boolean;
}

interface AnimationMenuWrapperProps {
  open: boolean;
}

interface OuterProps {
  open: boolean;
}

interface OuterRightProps {
  open: boolean;
}

interface InnerProps {
  width: number;
  xOffset: number;
  yOffset: number;
};

const AnimationMenuWrapper = styled.div<AnimationMenuWrapperProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Outer = styled.div<OuterProps>`
  position: absolute;
  transition: all .4s ease-in-out;
  width: 300px;
  height: 100vh;
  left: ${props => props.open
    ? '0'
    : '-300px'};
  opacity: ${props => props.open
    ? `100`
    : '0'};
  background: white;
  border-right: 1px solid #e9e9e9;
`;

const OuterRight = styled.div<OuterRightProps>`
  position: absolute;
  transition: all .4s ease-out;
  width: 300px;
  height: 100vh;
  background: white;
  right: 0px;
  opacity: ${props => props.open
    ? `100`
    : '0'};
  right: ${props => props.open
    ? '0px'
    : '-300px'};
  border-right: 1px solid #e9e9e9;
`;

const Inner = styled.div<InnerProps>`
  position: absolute;
  top: ${props => props.width + props.yOffset}px;
  left: ${props => props.xOffset}px;
`;

class AnimationMenu extends React.PureComponent<IProps, IState> {
  private menuRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      color: props.color || 'black',
      duration: ((props.duration || 500) / 1000).toFixed(2),
      width: props.width || 50,
      height: props.height || 6,
      xOffset: props.xOffset || 15,
      yOffset: props.yOffset || 15,
      right: props.right ? true : false,
    };
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
    if (onClick) {
      onClick();
    }
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
    const {
      open,
      color,
      duration,
      width,
      height,
      xOffset,
      yOffset,
      right,
    } = this.state;
    const {
      elements,
    } = this.props;

    return (
      <AnimationMenuWrapper
        ref={this.menuRef}
        open={open}
      >
        <Stick
          open={open}
          color={color}
          duration={duration}
          width={width}
          height={height}
          right={right}
          onClick={this.handleClick}
        />
        {right
          ? (
            <OuterRight open={open}>
              <Inner
                width={width}
                xOffset={xOffset}
                yOffset={yOffset}
              >
                {elements}
              </Inner>
            </OuterRight>
          ) : (
            <Outer open={open}>
              <Inner
                width={width}
                xOffset={xOffset}
                yOffset={yOffset}
              >
                {elements}
              </Inner>
            </Outer>
          )}
      </AnimationMenuWrapper>
    )
  }
}
  
export default AnimationMenu;