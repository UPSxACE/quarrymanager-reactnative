import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { themeColors } from "../../Theme";
import { useState } from "react";

export default function NotificationToggle({
  label,
  iconName,
  notificationName,
}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
        <Feather size={28} color={"black"} name={iconName}></Feather>
      </View>
      <View style={{ textAlign: "center", flex: 1, justifyContent: "center" }}>
        <Text>{label}</Text>
        <Text style={{ color: themeColors.main.secondaryTextColor }}>
          {isSwitchOn ? "Ativado" : "Desativado"}
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
        <Switch
          color="#82A2CC"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        >
          {notificationName}
        </Switch>
      </View>
    </View>
  );
}
