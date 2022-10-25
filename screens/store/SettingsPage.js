import * as React from "react";
import ArrowButton from "../../components/store/ArrowButton";
import NavBar from "../../components/store/NavBar";
import { Center, HStack, VStack, View } from "native-base";

export default function SettingsPage() {
  return (
    <View>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"} pt={"12px"}>
        <ArrowButton label="Dashboard" destiny={"Home"} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Definições da Conta" destiny={"Home"} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Pedidos" destiny={"Home"} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Notificações" destiny={"Home"} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Terminar Sessão" destiny={"Home"} />
      </HStack>

      <NavBar />
    </View>
  );
}
