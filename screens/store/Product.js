import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import api from "../../api";
import apiconfig from "../../api-config";
import Characteristics from "../../components/store/Characteristics";
import Description from "../../components/store/Description";
import HorizontalCategory from "../../components/store/HorizontalCategory";

function padWithZero(num, targetLength) {
  return String(num).padStart(targetLength, "0");
}

function ProductPage({ route }) {
  const params = route.params;
  const [CATEGORY_DATA1, setCategoryData1] = useState([]);
  const [informacoes_produto, setInformacoesProduto] = useState({});

  // VEJA TAMBÉM:
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

  // INFORMAÇÕES DO PRODUTO:
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.produto_detalhe(params.id), {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });
      setInformacoesProduto(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={Productpage_styles.backgroundPage}>
      <View style={Productpage_styles.imageShadow}>
        <Image
          alt="Product Picture"
          style={Productpage_styles.imageSize}
          source={{ uri: params.imageUrl }}
        />
      </View>
      <View style={{ marginBottom: 12 }}>
        <Description
          preco={params.price}
          descricao={informacoes_produto.descricaoProduto}
          title={params.title}
          refr={String(params.id).padStart(8, "0")}
          imageUrl={params.imageUrl}
        />
      </View>
      <View style={{ marginBottom: 12 }}>
        <Characteristics
          resCom={informacoes_produto.Res_Compressao}
          resFlex={informacoes_produto.Res_Flexao}
          mva={informacoes_produto.Massa_Vol_Aparente}
          maa={informacoes_produto.Absorcao_Agua}
        />
      </View>
      <View style={Productpage_styles.backgroundComp}>
        <HorizontalCategory
          categoryTitle={"Veja também"}
          data={CATEGORY_DATA1}
        />
      </View>
    </View>
  );
}

export default function Product(props) {
  return <FlatList ListHeaderComponent={<ProductPage {...props} />}></FlatList>;
}

const Productpage_styles = StyleSheet.create({
  imageShadow: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 15,
    zIndex: 1,
  },
  imageSize: {
    width: 448,
    height: 293,
  },
  backgroundPage: {
    backgroundColor: "#D9D9D9",
  },
  backgroundComp: {
    backgroundColor: "white",
  },
});
