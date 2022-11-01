import React from 'react';
import { Input, Pressable, Icon } from 'native-base';
import Feather from '@expo/vector-icons/Feather';

export default function BlueInput({ label, secret, ...props }) {
  const [show, setShow] = React.useState(!secret);
  return (
    <Input
      height='40px'
      width={'100%'}
      placeholder={"texto"}
      type={show ? 'text' : 'password'}
      InputRightElement={
        secret && (
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Feather name={show ? 'eye' : 'eye-off'} />} mr='2' />
          </Pressable>
        )
      }
      rounded='0'
      bg='#576F89'
      borderWidth='0'
      borderBottomWidth='1'
      borderBottomColor='#576F89'
      placeholderTextColor='#6C6B6B'
      color='greyComponentText'
      {...props}
    />
  );
}