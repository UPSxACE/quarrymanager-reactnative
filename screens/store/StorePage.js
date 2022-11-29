import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import { FlatList, Image, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import HorizontalCategory from '../../components/store/HorizontalCategory';
import { useState } from 'react';
import StoreCategory from '../../components/store/StoreCategory';

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
        alt='Main Picture'
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

  const TABS_DATA = [
    'Mármore',
    'Granito',
    'Cerâmica',
    'Porcelana',
    'Favoritos',
  ];

  const CATEGORY_DATA0 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
    {
      id: 4,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 5,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 6,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
    {
      id: 7,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 8,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
  ];

  const CATEGORY_DATA1 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
  ];

  const CATEGORY_DATA2 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
  ];

  const CATEGORY_DATA3 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
  ];

  const CATEGORY_DATA4 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
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
                  style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
                  setSearch={setState}
                />

                <View
                  key={'1'}
                  style={{ width: '100%', backgroundColor: 'white' }}
                >
                  <Image
                    alt='Main Picture'
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
                    style={{ flexDirection: 'row', backgroundColor: 'white' }}
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
                      data={CATEGORY_DATA3}
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
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .includes(
                        state
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
