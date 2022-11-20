import { ScrollView } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import StoreCategory from '../../components/store/StoreCategory';

export default function StoreCategories(props) {
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
  const CATEGORY_DATA = [
    {
      id: 1,
      title: 'Mármore Preto',
      description:
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      price: '99,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Branco',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '20,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-branco.png'),
    },
    {
      id: 3,
      title: 'Mármore Laranja',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '304,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-laranja.png'),
    },
    {
      id: 4,
      title: 'Mármore Castanho',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '1.345,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza-laranja.png'),
    },
    {
      id: 5,
      title: 'Mármore Cinza',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl: require('../../assets/Samples/granito-cinza.png'),
    },
    {
      id: 6,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 7,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 8,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
  ];

  return (
    <ScrollView>
      <ScrollableTabs
        tabs={TABS_DATA}
        style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
      />
      <StoreCategory data={CATEGORY_DATA} categoryResults={'Resultados'} />
    </ScrollView>
  );
}
