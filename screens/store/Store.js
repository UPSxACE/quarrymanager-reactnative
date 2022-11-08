import { View, Text, StyleSheet } from "react-native";
import ScrollableTabs from "../../components/store/ScrollableTabs";
import { FlatList, Image, VStack } from "native-base";
import PagerView from "react-native-pager-view";
import HorizontalCategory from "../../components/store/HorizontalCategory";

const DATA = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/14c4/5882/aed55b49f27b4a3c97ceac7557310f4b?Expires=1668988800&Signature=a~438OG8M-BCXYqRFzEILAd2X0jf1ZvFJIb6bxblJjOLcoJf2BYRVrmekORWmyKmCOM5af70dRRjt2CGx7P6ZFjFfdJZZvOnoXHjvV3AbsKNTbxl~SOSguikvfL0xqWzeDABeeNmIC~Z9jxTJRa1WNjRhz2UmU2cy9PKBX8g9qntqXTP~R6MBzAHrPfR5ZIVlen3qrsSs1uP3-vkb9Igz~TWfUSeQEI1wYWHZUOySgIiGZt66PUOS1ZPYbsgrS8aoh750zrMjyD~l8~SQ545Lbmk7rwvtYwlFFRgwC1oFD-fTf7C1rI0qw1gsCudenfVfSRXV-DV8CLgXwizZnsP3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    key: "1",
  },
];

function Item({ id, imageUrl, keyy }) {
  return (
    <View key={keyy}>
      <Image
        alt="Main Picture"
        style={page_styles.mainPicture}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
}

function renderItem({ item, index }) {
  return <Item id={item.id} imageUrl={item.imageUrl} keyy={index} />;
}

export default function Store() {
  const TABS_DATA = [
    "Mármores",
    "Granitos",
    "Esmeraldas",
    "Diamantes",
    "Porcelana",
    "Pedras",
    "Rochas",
    "Favoritos",
  ];

  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <PagerView style={{ flex: 1 }} initialPage={0}>
        <View key={"1"} width={"100%"}>
          <Image
            alt="Main Picture"
            style={page_styles.mainPicture}
            source={{
              uri: DATA[0].imageUrl,
            }}
          />
        </View>
      </PagerView>

      <HorizontalCategory />
    </View>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index + 1}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    padding: 12,
  },

  mainPicture: {
    width: 360,
    height: 260,
    borderRadius: 100,
  },
});
