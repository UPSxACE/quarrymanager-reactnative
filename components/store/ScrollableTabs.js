import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, FlatList, View } from 'react-native';

const ScrollableTabs = ({ destiny, tabs, setSearch, ...props }) => {
  const item = ({ item, index }) => {
    return (
      <Text onPress={() => setSearch(item)} style={styles.itemText}>
        {item.toUpperCase()}
      </Text>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.flatlist}
        horizontal={true}
        data={tabs}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: 'white',
    elevation: 15,
    zIndex: 1,
  },

  itemText: {
    fontWeight: 'medium',
    fontSize: 16,
    padding: 12,
  },
});

export default ScrollableTabs;
