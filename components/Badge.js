import { View, StyleSheet, Text } from 'react-native';

export default function Badge({
  children,
  label,
  textStyle,
  color,
  textColor,
  ...props
}) {
  return (
    <View
      {...props}
      style={{
        borderColor: color ? color : 'white',
        ...badge_styles.container,
        ...props.style,
      }}
    >
      <Text
        style={{
          color: textColor ? textColor : color ? color : 'white',
          ...textStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

const badge_styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 2,
    padding: 2,
    paddingHorizontal: 8,
  },
});
