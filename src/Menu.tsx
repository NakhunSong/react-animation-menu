import * as React from 'react';
import styled from 'styled-components';

const GroupWrapper = styled.div`
  position: absolute;
  top: 80px;
  background-color: white;
  border: 1px solid #e9e9e9;
  padding: 10px;
`;

const ItemWrapper = styled.div`
  color: green;
  & + & {
    margin-top: 10px;
  }
`;

export const MenuList = () => {}

interface ItemProps {
  children: React.ReactNode;
  style?: object;
  onClick?: any;
}

interface GroupProps {
  children: React.ReactNode;
  style?: object;
}

const Item = (props: ItemProps): React.ReactNode => {
  const { children, style, onClick } = props;

  if (style) {
    return (
      <div
        style={style}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <ItemWrapper
      onClick={onClick}
    >
      {children}
    </ItemWrapper>
  )
}

const Group = (props: GroupProps): React.ReactNode => {
  const { children, style } = props;

  if (style) {
    return (
      <div style={style}>
        {children}
      </div>
    )
  }

  return (
    <GroupWrapper>
      {children}
    </GroupWrapper>
  )
}

MenuList.Item = Item;
MenuList.Group = Group;