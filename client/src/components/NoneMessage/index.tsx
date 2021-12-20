import React from 'react';
import { Text } from './styles';

interface IText {
  text: string;
}

function NoneMessage({ text }: IText): JSX.Element {
  return <Text>{text}</Text>;
}

export default NoneMessage;
