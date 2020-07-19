# react-animation-menu

## Install
```
npm i react-animation-menu
```
```
yarn add react-animation-menu
```

## Usage
```jsx
import React, { useState, useCallback } from 'react'
import Menu, { MenuList } from 'react-animation-menu'
import { Group, Item } = MenuList

const elements = (
  <Group>
    <Item onClick={() => console.log('Hello')}>Hello</Item>
    <Item>Menu2</Item>
    <Item>Menu3</Item>
  </Group>
)

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Menu
      color="green"
      elements={elements}
      duration={400}
      width={70}
      xOffset={40}
      onClick={handleClick}
    />
  )
}
```

## Props

#### color : string | default "black"
```jsx
<Menu color="green" />
```

#### duration : Number | default 500
```jsx
<Menu duration={500} />
```
> The value of 500 is transformed to 0.5s by being divided by 1000

#### width : Number | default 50
```jsx
<Menu width="100" />
```
> This will affect the Menu Icon Wrapper size.

#### height: Number | default 6
```jsx
<Menu height="10" />
```

#### elements: children | default null
```jsx
<Menu
  elements={(
    <Group>
      <Item>Menu Item1</Item>
    </Group>
  )}
/>
```

#### xOffset: Number | default 15
- This prop affects x-offset of the text list wrapper on the menu.
```jsx
<Menu xOffset="30" />
```

#### yOffset: Number | default 15
- This prop affects y-offset of the text list wrapper on the menu.
```jsx
<Menu yOffset="30" />
```

#### onClick : function | default undefined
```jsx
<Menu onClick={handleClick} />
```