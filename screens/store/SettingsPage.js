import * as React from "react";
import ArrowButton from "../../components/store/ArrowButton";
import NavBar from "../../components/store/NavBar";
import { Center, HStack } from "native-base";

export default function SettingsPage() {
  return (
    <Center>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Dashboard" />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Definições da Conta" />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Pedidos" />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Notificações" />
      </HStack>
      <HStack pl={"12px"} pr={"12px"} pb={"12px"}>
        <ArrowButton label="Terminar Sessão" />
      </HStack>

      <NavBar />
    </Center>
  );
}
