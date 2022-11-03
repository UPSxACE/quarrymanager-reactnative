import * as React from "react";
import ArrowButton from "../../components/store/ArrowButton";
import NavBar from "../../components/store/NavBar";
import { Center, HStack, VStack, View, Menu } from "native-base";

export default function SettingsPage() {
  return (
    <View h={"100%"}>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"} pt={"12px"}>
        <ArrowButton label="Dashboard" destiny={["BtHome", "Home"]} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Definições da Conta" destiny={["BtHome", "Home"]} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Pedidos" destiny={["BtHome", "Home"]} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Notificações" destiny={["BtHome", "Home"]} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Terminar Sessão" destiny={["BtHome", "Home"]} />
      </HStack>
    </View>
  );
}
