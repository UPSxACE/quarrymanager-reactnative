import { StyleSheet, View, Text, FlatList } from "react-native";
import PagerView from "react-native-pager-view";

export default function DashboardLotes() {
  const data = [
    {
      text: "aso",
    },
    {
      text: "123",
    },
    {
      text: "a1s2d4",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        {data.map((obj, index) => {
          return (
            <View style={styles.page} key={index + 1}>
              <Text>{obj.text}</Text>
            </View>
          );
        })}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
