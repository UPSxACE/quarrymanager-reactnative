import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { themeColors } from "../../Theme";

export default function NotificationToggle({
  label,
  iconName,
  notificationName,
}) {
  return (
    <View style={{ flexDirection: "row", width: "100%", borderBottomWidth: 1 }}>
      <View
        style={{
          height: 52,
          width: 52,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather size={28} color={"#6C6B6B"} name={"bell-off"}>
          {iconName}
        </Feather>
      </View>
      <View style={{ textAlign: "center", flex: 1, justifyContent: "center" }}>
        <Text>Ativar Notificações de Telemóvel</Text>
        <Text style={{ color: themeColors.main.secondaryTextColor }}>
          {label}
        </Text>
      </View>
      <View
        style={{
          height: 52,
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 12,
        }}
      >
        <Switch>{notificationName}</Switch>
      </View>
    </View>
  );
}
