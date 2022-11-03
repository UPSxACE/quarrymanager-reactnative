import { View } from "native-base";
import BasicList from "../../components/store/BasicList";
import HorizontalCategory from "../../components/store/HorizontalCategory";
import ScrollableTabs from "../../components/store/ScrollableTabs";

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

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />

      <BasicList />

      <HorizontalCategory imageUrl="https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg" />
    </View>
  );
}
