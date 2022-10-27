import { Button, View, Text } from "native-base";
import { Alert } from "react-native";

export default function BlueButton({ label }) {
  return (
    <View justifyContent="center" w={"100%"}>
      <Button
        bg="#576F89"
        onPress={() => Alert.alert("Simple Button pressed")}
        paddingY="8px"
      >
        <Text color="white" textAlign="center">
          {label}
        </Text>
      </Button>
    </View>
  );
}
