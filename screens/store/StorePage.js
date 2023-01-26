import { View, Text, StyleSheet } from "react-native";
import ScrollableTabs from "../../components/store/ScrollableTabs";
import { FlatList, Image, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";
import HorizontalCategory from "../../components/store/HorizontalCategory";
import { useState } from "react";
import StoreCategory from "../../components/store/StoreCategory";
import { useEffect } from "react";
import axios from "axios";
import api from "../../api";
import apiconfig from "../../api-config";

const DATA = [
  {
    id: 1,
    imageUrl: require("../../assets/Samples/loja.png"),
    key: "1",
  },
];

function Item({ id, imageUrl, keyy }) {
  return (
    <View key={keyy}>
      <Image
        alt="Main Picture"
        style={page_styles.mainPicture}
        source={imageUrl}
      />
    </View>
  );
}

function renderItem({ item, index }) {
  return <Item id={item.id} imageUrl={item.imageUrl} keyy={index} />;
}

export default function StorePage({ searchState }) {
  const { state } = searchState;
  const { setState } = searchState;
  const [CATEGORY_DATA1, setCategoryData1] = useState([]);
  const [CATEGORY_DATA2, setCategoryData2] = useState([]);
  const [CATEGORY_DATA3, setCategoryData3] = useState([]);
  const [CATEGORY_DATA4, setCategoryData4] = useState([]);

  // LISTAR MÁRMORES:
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_marmores, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setCategoryData1(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR GRANITOS:
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_granitos, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setCategoryData2(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR CERÂMICAS:
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_ceramicas, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setCategoryData3(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR PORCELANAS:
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_porcelanas, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setCategoryData4(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  const TABS_DATA = [
    "Mármore",
    "Granito",
    "Cerâmica",
    "Porcelana",
    "Favoritos",
  ];

  const CATEGORY_DATA0 = [
    {
      id: 1,
      title: "Mármore Preto",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/marmore-preto.png"),
    },
    {
      id: 2,
      title: "Mármore Branco",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/marmore-branco.png"),
    },
    {
      id: 3,
      title: "Mármore Cinza",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/granito-cinza.png"),
    },
    {
      id: 4,
      title: "Granito Cinza",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/granito-cinza.png"),
    },
    {
      id: 5,
      title: "Granito Cinza A...",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/granito-cinza-laranja.png"),
    },
    {
      id: 6,
      title: "Granito Laranja",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/granito-laranja-cinza.png"),
    },
    {
      id: 7,
      title: "Granito Branco",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/granito-branco.png"),
    },
    {
      id: 8,
      title: "Cerâmica Preta",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/ceramica-preta.png"),
    },
    {
      id: 9,
      title: "Cerâmica Verde",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/ceramica-verde.png"),
    },
    {
      id: 10,
      title: "Cerâmica Branca",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/ceramica-branca.png"),
    },
    {
      id: 11,
      title: "Cerâmica Bege",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/ceramica-bege.png"),
    },
    {
      id: 12,
      title: "Porcelana Branca R...",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/porcelana-branca-rustica.png"),
    },
    {
      id: 13,
      title: "Porcelana Cinza C...",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/porcelana-cinza-claro.png"),
    },
    {
      id: 14,
      title: "Porcelana Azul",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/porcelana-azul.png"),
    },
    {
      id: 15,
      title: "Porcelana Laranja",
      price: "10.99",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require("../../assets/Samples/porcelana-alaranjada.png"),
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <>
            {!state ? (
              <>
                <ScrollableTabs
                  tabs={TABS_DATA}
                  style={{ backgroundColor: "white", elevation: 15, zIndex: 1 }}
                  setSearch={setState}
                />

                <View
                  key={"1"}
                  style={{ width: "100%", backgroundColor: "white" }}
                >
                  <Image
                    alt="Main Picture"
                    style={page_styles.mainPicture}
                    source={DATA[0].imageUrl}
                  />
                </View>

                <View style={{ backgroundColor: "#CDD3D3" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "white",
                      marginBottom: 4,
                    }}
                  >
                    <HorizontalCategory
                      categoryTitle={"Mármores"}
                      data={CATEGORY_DATA1}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "white",
                      marginBottom: 4,
                    }}
                  >
                    <HorizontalCategory
                      categoryTitle={"Granitos"}
                      data={CATEGORY_DATA2}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "white",
                      marginBottom: 4,
                    }}
                  >
                    <HorizontalCategory
                      categoryTitle={"Cerâmicas"}
                      data={CATEGORY_DATA3}
                    />
                  </View>
                  <View
                    style={{ flexDirection: "row", backgroundColor: "white" }}
                  >
                    <HorizontalCategory
                      categoryTitle={"Porcelana"}
                      data={CATEGORY_DATA4}
                    />
                  </View>
                </View>
              </>
            ) : (
              <>
                <StoreCategory
                  data={CATEGORY_DATA0.filter((item) =>
                    item.title
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .includes(
                        state
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                      )
                  )}
                  categoryResults={"Resultados"}
                />
              </>
            )}
          </>
        );
      }}
    />
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
    width: "100%",
    height: 260,
  },
});
