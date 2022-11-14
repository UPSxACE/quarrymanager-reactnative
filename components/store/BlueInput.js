import React from 'react';
import { Pressable, View } from 'react-native';
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
      placeholder={label}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={!show}
      inputRightElement={
        secret && (
          <View>
            <Pressable
              style={{
                backgroundColor: '#576F89',
                height: 40,
                justifyContent: 'center',
                paddingHorizontal: 12,
              }}
              onPress={() => setShow(!show)}
            >
              <Feather
                size={16}
                color={'white'}
                name={show ? 'eye' : 'eye-off'}
              />
            </Pressable>
          </View>
        )
      }
    />
  );
}
