import { useState } from 'react';
import { TextInput, View } from 'react-native';

const StyledOnFocus = {};

StyledOnFocus.Input = ({
  children,
  onFocusStyle,
  inputRightElement,
  containerStyle,
  rightStyle,
  rightFocusStyle,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={{ flexDirection: 'row', ...containerStyle }}>
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
