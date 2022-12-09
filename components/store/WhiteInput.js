import React from 'react';
import { Pressable, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import StyledOnFocus from '../StyledOnFocus';
import { themeColors } from '../../Theme';

export default function WhiteInput({ label, secret, ...props }) {
  const [show, setShow] = React.useState(!secret);
  return (
    <StyledOnFocus.Input
      {...props}
      style={{
        height: 40,
        borderRadius: 0,
        backgroundColor: themeColors.main.greyComponentBg,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: themeColors.main.B,
        color: themeColors.greyComponentText,
        paddingLeft: 12,
        paddingRight: 12,
        ...props.style,
      }}
      onFocusStyle={{ backgroundColor: '#e4e4e7' }}
      placeholder={label}
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : '#6C6B6B'
      }
      secretTextEntry={!show}
      rightStyle={{ backgroundColor: themeColors.main.greyComponentBg }}
      rightFocusStyle={{ backgroundColor: '#e4e4e7' }}
      inputRightElement={
        secret && (
          <Pressable
            style={{
              borderBottomWidth: 1,
              borderBottomColor: themeColors.main.B,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
            onPress={() => setShow(!show)}
          >
            <Feather
              size={16}
              color={'#6C6B6B'}
              name={show ? 'eye' : 'eye-off'}
            />
          </Pressable>
        )
      }
    />
  );
}
