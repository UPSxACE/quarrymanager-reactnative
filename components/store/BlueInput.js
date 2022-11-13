import React from 'react';
import { Input, Pressable, Icon, Text } from 'native-base';
import { TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { themeColors } from '../../Theme';
import StyledOnFocus from '../StyledOnFocus';

export default function BlueInput({ label, secret, ...props }) {
  const [show, setShow] = React.useState(!secret);
  return (
    <StyledOnFocus.Input
      {...props}
      style={{
        height: 40,
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#576F89',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#576F89',
        color: 'white',
        paddingLeft: 12,
        paddingRight: 12,
        ...props.style,
      }}
      placeholder={'texto'}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={!show}
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
