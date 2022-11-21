import { useState } from 'react';
import { TextInput, View } from 'react-native';

const StyledOnFocus = {};

StyledOnFocus.Input = ({
  children,
  onFocusStyle,
  inputRightElement,
  inputLeftElement,
  containerStyle,
  containerFocusStyle,
  rightStyle,
  rightFocusStyle,
  leftStyle,
  leftFocusStyle,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={
        focus
          ? containerStyle
            ? containerFocusStyle
              ? {
                  flexDirection: 'row',
                  overflow: 'hidden',
                  ...containerStyle,
                  ...containerFocusStyle,
                }
              : { flexDirection: 'row', overflow: 'hidden', ...containerStyle }
            : containerFocusStyle
            ? {
                flexDirection: 'row',
                overflow: 'hidden',
                ...containerFocusStyle,
              }
            : { flexDirection: 'row', overflow: 'hidden' }
          : containerStyle
          ? {
              flexDirection: 'row',
              overflow: 'hidden',
              ...containerStyle,
            }
          : {
              flexDirection: 'row',
              overflow: 'hidden',
            }
      }
      //style={{ flexDirection: 'row', overflow: 'hidden', ...containerStyle }}
    >
      {inputLeftElement && (
        <View
          style={
            focus
              ? leftStyle
                ? leftFocusStyle
                  ? { width: 40, ...leftStyle, ...leftFocusStyle }
                  : { width: 40, ...leftStyle }
                : leftFocusStyle
                ? { width: 40, ...leftFocusStyle }
                : { width: 40 }
              : leftStyle
              ? {
                  width: 40,
                  ...leftStyle,
                }
              : {
                  width: 40,
                }
          }
        >
          {inputLeftElement}
        </View>
      )}

      <TextInput
        {...props}
        style={
          focus
            ? onFocusStyle
              ? {
                  flex: 1,
                  ...props.style,
                  ...onFocusStyle,
                }
              : { flex: 1, ...props.style }
            : { flex: 1, ...props.style }
        }
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      >
        {children}
      </TextInput>

      {inputRightElement && (
        <View
          style={
            focus
              ? rightStyle
                ? rightFocusStyle
                  ? { width: 40, ...rightStyle, ...rightFocusStyle }
                  : { width: 40, ...rightStyle }
                : rightFocusStyle
                ? { width: 40, ...rightFocusStyle }
                : { width: 40 }
              : rightStyle
              ? {
                  width: 40,
                  ...rightStyle,
                }
              : {
                  width: 40,
                }
          }
        >
          {inputRightElement}
        </View>
      )}
    </View>
  );
};

export default StyledOnFocus;
