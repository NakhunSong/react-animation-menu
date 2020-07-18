# react-animation-menu

## Install
```
npm i react-animation-menu
```
```
yarn add react-animation-menu
```

# Props

## Icon

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

#### elements: children
```jsx
<Menu
  elements={(
    <Group>
      <Item>Menu Item1</Item>
    </Group>
  )}
/>
```

#### onClick : function | default undefined
```jsx
<Menu onClick={handleClick} />
```
## Menu

#### xOffset: Number | default 15
```jsx
<Menu xOffset="30" />
```