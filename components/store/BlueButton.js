import { Button, View, Text } from 'native-base';
import { Alert } from 'react-native';

export default function BlueButton({ label }) {
    return (
        <View justifyContent='center'>
            <Button bg="#576F89"
                marginX={"16px"}
                onPress={() => Alert.alert('Simple Button pressed')}
                paddingY="8px"
            >
                <Text color="white" textAlign="center">
                    {label}
                </Text>
            </Button>
        </View>
    );
}