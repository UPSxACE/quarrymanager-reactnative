import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import { FlatList, Image, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import HorizontalCategory from '../../components/store/HorizontalCategory';

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

export default function Store() {
  const TABS_DATA = [
    'Mármores',
    'Granitos',
    'Esmeraldas',
    'Diamantes',
    'Porcelana',
    'Pedras',
    'Rochas',
    'Favoritos',
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
  return (
    <ScrollView>
      <ScrollableTabs
        tabs={TABS_DATA}
        style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
      />

      <View key={'1'} style={{ width: '100%', backgroundColor: 'white' }}>
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
        <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
          <HorizontalCategory
            categoryTitle={'Esmeraldas'}
            data={CATEGORY_DATA3}
          />
        </View>
      </View>
    </ScrollView>
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
