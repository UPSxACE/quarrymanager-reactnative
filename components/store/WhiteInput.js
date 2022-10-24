import React from 'react';
import { Input, Pressable, Icon } from 'native-base';
import Feather from '@expo/vector-icons/Feather';

export default function WhiteInput({ label, secret, ...props }) {
  const [show, setShow] = React.useState(false);
  return (
    <Input
      height="40px"
      width={'100%'}
      {...props}
      placeholder={label}
      type={show ? 'text' : 'password'}
      InputRightElement={
        secret && (
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Feather name={show ? 'eye' : 'eye-off'} />} mr="2" />
          </Pressable>
        )
      }
    />
  );
}
