import { useState } from 'react';
import { TextInput } from 'react-native';

const StyledOnFocus = {};

StyledOnFocus.Input = ({ children, onFocusStyle, ...props }) => {
  const [focus, setFocus] = useState(false);

  return (
    <TextInput
      {...props}
      style={
        focus
          ? props.onFocusStyle
            ? { ...props.style, ...props.onFocusStyle }
            : { ...props.style }
          : { ...props.style }
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
  );
};

export default StyledOnFocus;
