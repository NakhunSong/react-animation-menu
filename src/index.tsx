import * as React from 'react';

interface IProps {
  text: string;
}

const Hello = (props: IProps) => {
  const { text } = props;
  return <div>Hello {text}</div>
}

export default Hello;