import { Text, View } from "react-native";
import BasicList from "../../components/store/BasicList";
import ScrollableTabs from "../../components/store/ScrollableTabs";

export default function Orders(props) {
  const TABS_DATA = ["Todos", "Ativos", "Finalizados", "Favoritos"];

  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <BasicList />
    </View>
  );
}
