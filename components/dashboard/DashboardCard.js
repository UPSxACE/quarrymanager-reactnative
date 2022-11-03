import { View, Text } from "native-base";
import { StyleSheet } from "react-native";

export default function DashboardCard({ pedidos, label }) {
    return (
        <div>
            <View>
                <Text>
                    {pedidos}
                </Text>
            </View>
            <View>
                <Text>
                    {label}
                </Text>
            </View>
        </div>
    );
}
