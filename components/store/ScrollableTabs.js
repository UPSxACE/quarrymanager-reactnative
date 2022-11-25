import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, FlatList } from 'react-native';

const ScrollableTabs = ({ destiny, tabs, setSearch, ...props }) => {
  const item = ({ item, index }) => {
    return (
      <Text onPress={() => setSearch(item)} style={styles.itemText}>
        {item.toUpperCase()}
      </Text>
    );
  };

  return (
    <FlatList
      style={styles.flatlist}
      horizontal={true}
      data={tabs}
      renderItem={item}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: 'white',
  },

  itemText: {
    fontWeight: 'medium',
    fontSize: 16,
    padding: 12,
  },
});

export default ScrollableTabs;
