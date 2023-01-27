import { InfoIcon } from "native-base";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { themeColors } from "../../Theme";

export default function HorizontalList({
  title,
  data,
  mainText,
  subText,
  date,
  tag,
  mainTextPedido,
  subTextPedido,
  tagPedido,
}) {
  function Item({ tag, mainText, subText, date }) {
    return (
      <View style={styles.item}>
        <View style={styles.blueBar} />
        <View style={styles.itemContent}>
          {subText ? (
            <View style={styles.itemContentInner1}>
              <Text style={styles.tag1}>{tag}</Text>
              <Text style={styles.mainText1}>{mainText}</Text>
              <Text style={styles.subText}>{subText}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          ) : (
            <View style={styles.itemContentInner2}>
              <Text style={styles.tag2}>{tag}</Text>
              <Text style={styles.mainText2}>{mainText}</Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  function renderItem({ item, index }) {
    return (
      <Item
        mainText={
          typeof mainText !== "undefined"
            ? mainTextPedido
              ? item.idPedido0.idUser0.profile.full_name
              : item[mainText]
            : ""
        }
        tag={
          typeof tag !== "undefined"
            ? tagPedido
              ? item.idPedido0.idProduto0.tituloArtigo
              : item[tag]
            : "#" + (index + 1)
        }
        date={typeof date !== "undefined" ? item[date] : ""}
        subText={
          typeof subText !== "undefined"
            ? subTextPedido
              ? item.idPedido0.idUser0.profile.morada
              : item[subText]
            : ""
        }
      />
    );
  }

  return (
    <View>
      <Text style={styles.categoryTitle}>{title.toUpperCase()}</Text>
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 4,
  },

  item: {
    flexDirection: "row",
    width: 240,
    backgroundColor: "white",
    marginRight: 12,
  },

  blueBar: {
    backgroundColor: themeColors.main.dashboardComponentColor1,
    height: "100%",
    width: 4,
  },

  itemContent: {
    width: 236,
  },

  itemContentInner1: {
    padding: 12,
    paddingBottom: 4,
    paddingTop: 4,
  },

  itemContentInner2: {
    padding: 12,
    paddingBottom: 4,
    paddingTop: 16,
  },

  tag1: {
    height: 24,
    lineHeight: 24,
    fontSize: 14,
    color: themeColors.main.dashboardComponentColor1,
  },

  tag2: {
    height: 24,
    lineHeight: 24,
    fontSize: 24,
    color: themeColors.main.dashboardComponentColor1,
  },

  mainText1: {
    height: 26,
    lineHeight: 26,
    fontSize: 24,
    color: themeColors.main.mainTextColor,
  },

  mainText2: {
    height: 40,
    lineHeight: 40,
    fontSize: 21,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.16)",
    color: themeColors.main.mainTextColor,
  },

  subText: {
    height: 26,
    lineHeight: 26,
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.16)",
    color: themeColors.main.mainTextColor,
  },

  date: {
    height: 28,
    lineHeight: 28,
    fontSize: 10,
    color: themeColors.main.weakGrey,
  },
});
