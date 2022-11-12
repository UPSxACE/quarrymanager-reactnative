import React from 'react';
import { Input, Pressable, Icon } from 'native-base';
import { TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { themeColors } from '../../Theme';

export default function BlueInput({ label, secret, ...props }) {
  const [show, setShow] = React.useState(!secret);
  return (
    <Input
      style={{
        height: 40,
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#576F89',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#576F89',
        color: themeColors.greyComponentText,
      }}
      placeholder={'texto'}
      placeholderTextColor="#BDBDBD"
      type={show ? 'text' : 'password'}
      InputRightElement={
        secret && (
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Feather name={show ? 'eye' : 'eye-off'} />} mr="2" />
          </Pressable>
        )
      }
      {...props}
    />
  );
}
