import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import { FlatList, Image, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import HorizontalCategory from '../../components/store/HorizontalCategory';
import { useCallback, useState } from 'react';
import StoreCategory from '../../components/store/StoreCategory';
import { useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import apiconfig from '../../api-config';
import { SearchBarHeader } from '../../Theme';

const DATA = [
  {
    id: 1,
    imageUrl: require('../../assets/Samples/loja.png'),
    key: '1',
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

export default function StorePage() {
  const [CATEGORY_DATA0, setCategoryData0] = useState([]);
  const [CATEGORY_DATA1, setCategoryData1] = useState([]);
  const [CATEGORY_DATA2, setCategoryData2] = useState([]);
  const [CATEGORY_DATA3, setCategoryData3] = useState([]);
  const [CATEGORY_DATA4, setCategoryData4] = useState([]);

  // OBTER PRODUTOS DA LOJA
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.obter_produtos_loja, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setCategoryData0(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

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
      console.log(error.response.data);
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

  const TABS_DATA = ['Mármore', 'Granito', 'Cerâmica', 'Porcelana'];

  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBarHeader state={search} setState={setSearch} />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              {!search ? (
                <>
                  <ScrollableTabs
                    tabs={TABS_DATA}
                    style={{
                      backgroundColor: 'white',
                      elevation: 15,
                      zIndex: 1,
                    }}
                    setSearch={setSearch}
                  />

                  <View
                    key={'1'}
                    style={{ width: '100%', backgroundColor: 'white' }}
                  >
                    <Image
                      alt="Main Picture"
                      style={page_styles.mainPicture}
                      source={DATA[0].imageUrl}
                    />
                  </View>

                  <View style={{ backgroundColor: '#CDD3D3' }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginBottom: 4,
                      }}
                    >
                      <HorizontalCategory
                        categoryTitle={'Mármores'}
                        data={CATEGORY_DATA1}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginBottom: 4,
                      }}
                    >
                      <HorizontalCategory
                        categoryTitle={'Granitos'}
                        data={CATEGORY_DATA2}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        marginBottom: 4,
                      }}
                    >
                      <HorizontalCategory
                        categoryTitle={'Cerâmicas'}
                        data={CATEGORY_DATA3}
                      />
                    </View>
                    <View
                      style={{ flexDirection: 'row', backgroundColor: 'white' }}
                    >
                      <HorizontalCategory
                        categoryTitle={'Porcelana'}
                        data={CATEGORY_DATA4}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <StoreCategory
                    data={CATEGORY_DATA0.filter((item) =>
                      item.tituloArtigo
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .includes(
                          search
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                        )
                    )}
                    categoryResults={'Resultados'}
                  />
                </>
              )}
            </>
          );
        }}
      />
    </>
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

    backgroundColor: '#fff',
    padding: 12,
  },

  mainPicture: {
    width: '100%',
    height: 260,
  },
});
