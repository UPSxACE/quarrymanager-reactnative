import { useState } from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';

const StyledOnPress = {};

StyledOnPress.Button = ({
  children,
  onPressStyle,
  inputRightElement,
  containerStyle,
  onPressColor,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}
    >
      <TouchableHighlight
        {...props}
        onShowUnderlay={() => {
          setPressed(true);
        }}
        onHideUnderlay={() => {
          setPressed(false);
        }}
        onPress={props.onPress ? props.onPress : () => {}}
        activeOpacity={1} // this changes the opacity of the children
        underlayColor={onPressColor}
        style={
          pressed
            ? onPressStyle
              ? {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...props.style,
                  ...onPressStyle,
                }
              : {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...props.style,
                }
            : {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                ...props.style,
              }
        }
      >
        {children}
      </TouchableHighlight>
    </View>
  );
};

export default StyledOnPress;
