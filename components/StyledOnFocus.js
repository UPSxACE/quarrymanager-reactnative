import { useState } from 'react';
import { TextInput, View } from 'react-native';

const StyledOnFocus = {};

StyledOnFocus.Input = ({
  children,
  onFocusStyle,
  inputRightElement,
  containerStyle,
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
      {inputRightElement && inputRightElement}
    </View>
  );
};

export default StyledOnFocus;
