import { View } from 'native-base';
import ScrollableTabs from '../../components/store/ScrollableTabs';

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

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
    </View>
  );
}
