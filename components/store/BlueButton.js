import { Pressable, View, Text, Alert } from 'react-native';

export default function BlueButton({
  label,
  onPressEvent,
  disabled,
  disabledStyle,
  containerStyle,
  ...props
}) {
  return (
    <View
      style={{ justifyContent: 'center', width: '100%', ...containerStyle }}
    >
      <Pressable
        {...props}
        onPress={onPressEvent ? onPressEvent : null}
        style={
          disabled
            ? {
                backgroundColor: 'grey',
                paddingVertical: 8,
                borderRadius: 4,
                ...props.style,
                ...disabledStyle,
              }
            : {
                backgroundColor: '#576F89',
                paddingVertical: 8,
                borderRadius: 4,
                ...props.style,
              }
        }
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
      </Pressable>
    </View>
  );
}
