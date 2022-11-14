import { Text, View, StyleSheet } from 'react-native';

export default function DashboardCard({
  pedidos,
  label,
  cardColor,
  width,
  ...props
}) {
  return (
    <View
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: cardColor ? cardColor : 'white',
          width: width ? width : '100%',
          ...props.style,
        },
      ]}
    >
      <View style={styles.pedidosWrapper}>
        <Text style={styles.pedidosText}>{pedidos}</Text>
      </View>
      <View>
        <Text style={styles.labelText}>{label.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 6,
    paddingTop: 4,
    borderRadius: 4,
  },

  pedidosWrapper: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: 'white',
  },

  pedidosText: {
    fontSize: 32,
    color: 'white',
  },

  labelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    height: 24,
    lineHeight: 24,
    letterSpacing: 0.1,
    //letterSpacing: 'sm',
  },
});
